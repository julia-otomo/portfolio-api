import { Repository } from "typeorm";
import {
  TProject,
  TProjectRequest,
} from "../../interfaces/projects.interfaces";
import { Language, Project } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TLanguage } from "../../interfaces/languages.interfaces";
import { projectSchema } from "../../schemas/project.schemas";

const createProjectService = async (
  requestBody: TProjectRequest
): Promise<TProject> => {
  const { languages, ...rest } = requestBody;

  const projectRepository: Repository<Project> =
    AppDataSource.getRepository(Project);

  const languageRepository: Repository<Language> =
    AppDataSource.getRepository(Language);

  const languagesStr: string = languages;

  const languagesArr: string[] = languagesStr.split(", ");

  const languagePromises: Promise<TLanguage | null>[] = languagesArr.map(
    (language) =>
      languageRepository.findOne({
        where: {
          name: language,
        },
      })
  );

  const foundLanguages: (TLanguage | null)[] = await Promise.all(
    languagePromises
  );
  const languagesReq: TLanguage[] = foundLanguages.filter(
    (language) => language !== null
  ) as TLanguage[];

  const newProject: TProject = projectRepository.create({
    ...rest,
    languages: languagesReq,
  });

  await projectRepository.save(newProject);

  const validateProject: TProject = projectSchema.parse(newProject);

  return validateProject;
};

export { createProjectService };
