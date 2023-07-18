import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Project } from "../entities";
import { AppDataSource } from "../data-source";
import { TProject } from "../interfaces/projects.interfaces";
import AppError from "../error";

const projectAlreadyExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const title: string = String(request.body.title);

  if (title) {
    const projectRepository: Repository<Project> =
      AppDataSource.getRepository(Project);

    const findProject: TProject | null = await projectRepository.findOne({
      where: { title: title },
    });

    if (findProject) {
      throw new AppError("Project already exists", 409);
    }
  }

  next();
};

export { projectAlreadyExists };
