import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Language } from "../entities";
import { AppDataSource } from "../data-source";
import AppError from "../error";
import { TLanguage } from "../interfaces/languages.interfaces";

const verifyLanguageExists = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const name: string = String(request.body.name);

  if (name) {
    const languageRepository: Repository<Language> =
      AppDataSource.getRepository(Language);

    const findLanguage: TLanguage | null = await languageRepository.findOne({
      where: { name: name },
    });

    if (findLanguage) {
      throw new AppError("Language already exists", 409);
    }
  }

  next();
};

export { verifyLanguageExists };
