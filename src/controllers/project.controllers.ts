import { Request, Response } from "express";
import { TProjectRequest } from "../interfaces/projects.interfaces";

const createProjectController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TProjectRequest = request.body;

  return response.status(201).json();
};

const getAllProjectsController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json();
};

const updateProjectController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TProjectRequest = request.body;
  const projectTitle: string = request.params.title;

  return response.json();
};

const deleteProjectController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const projectTitle: string = request.params.title;

  return response.status(204).send();
};

export {
  createProjectController,
  getAllProjectsController,
  updateProjectController,
  deleteProjectController,
};
