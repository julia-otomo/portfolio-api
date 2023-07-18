import { Repository } from "typeorm";
import { TProject } from "../../interfaces/projects.interfaces";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";

const getAllProjectsService = async (): Promise<TProject[]> => {
  const projectRepository: Repository<Project> =
    AppDataSource.getRepository(Project);

  const projects: TProject[] = await projectRepository.find({
    relations: {
      languages: true,
    },
  });

  return projects;
};

export { getAllProjectsService };
