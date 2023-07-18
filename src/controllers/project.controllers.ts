import { Request, Response } from "express";
import { TProject, TProjectRequest } from "../interfaces/projects.interfaces";
import { createProjectService } from "../services/projects/createProject.service";
import { getAllProjectsService } from "../services/projects/getAllProjects.service";
import { updateProjectService } from "../services/projects/updateProject.service";
import { deleteProjectService } from "../services/projects/deleteProject.service";

const createProjectController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TProjectRequest = request.body;

  const newProject: TProject = await createProjectService(requestBody);

  return response.status(201).json(newProject);
};

const getAllProjectsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const projects: TProject[] = await getAllProjectsService();
  return response.json(projects);
};

const updateProjectController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TProjectRequest = request.body;
  const projectTitle: string = request.params.title;

  const projectUpdated: TProject = await updateProjectService(
    requestBody,
    projectTitle
  );

  return response.json(projectUpdated);
};

const deleteProjectController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const projectTitle: string = request.params.title;

  await deleteProjectService(projectTitle);

  return response.status(204).send();
};

export {
  createProjectController,
  getAllProjectsController,
  updateProjectController,
  deleteProjectController,
};
