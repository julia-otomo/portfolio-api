import { Repository } from "typeorm";
import {
  TLanguage,
  TLanguageRequest,
} from "../../interfaces/languages.interfaces";
import { Language } from "../../entities";
import { AppDataSource } from "../../data-source";
import { languageSchema } from "../../schemas/language.schemas";

const createLanguage = async (
  requestBody: TLanguageRequest
): Promise<TLanguage> => {
  const languageRepository: Repository<Language> =
    AppDataSource.getRepository(Language);

  const newLanguage: TLanguage = languageRepository.create(requestBody);

  await languageRepository.save(newLanguage);

  const validateLanguage: TLanguage = languageSchema.parse(newLanguage);

  return validateLanguage;
};

export { createLanguage };
