import { Repository } from "typeorm";
import { TProject, TProjectUpdate } from "../../interfaces/projects.interfaces";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";
import { projectSchema } from "../../schemas/project.schemas";

const updateProjectService = async (
  requestBody: TProjectUpdate,
  title: string
): Promise<TProject> => {
  const projectRepository: Repository<Project> =
    AppDataSource.getRepository(Project);

  let project: TProject | null = await projectRepository.findOne({
    where: {
      title: String(title),
    },
  });

  project = {
    ...project!,
    ...requestBody,
  };

  const validateProject: TProject = projectSchema.parse(project);

  await projectRepository.save(validateProject);

  return validateProject;
};

export { updateProjectService };
