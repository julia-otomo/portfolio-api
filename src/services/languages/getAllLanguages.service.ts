import { Repository } from "typeorm";
import { TLanguage } from "../../interfaces/languages.interfaces";
import { Language } from "../../entities";
import { AppDataSource } from "../../data-source";

const getAllLanguages = async (): Promise<TLanguage[]> => {
  const languageRepository: Repository<Language> =
    AppDataSource.getRepository(Language);

  const languages: TLanguage[] = await languageRepository.find();

  return languages;
};

export { getAllLanguages };
