import { Repository } from "typeorm";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";

const deleteProjectService = async (title: string): Promise<void> => {
  const projectRepository: Repository<Project> =
    AppDataSource.getRepository(Project);

  const project: Project | null = await projectRepository.findOne({
    where: {
      title: String(title),
    },
  });

  await projectRepository.remove(project!);
};

export { deleteProjectService };
