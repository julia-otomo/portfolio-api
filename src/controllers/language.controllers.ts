import { Request, Response } from "express";
import {
  TLanguage,
  TLanguageRequest,
} from "../interfaces/languages.interfaces";
import { createLanguage } from "../services/languages/createLanguage.service";
import { getAllLanguages } from "../services/languages/getAllLanguages.service";

const createLanguageController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TLanguageRequest = request.body;

  const newLanguage: TLanguage = await createLanguage(requestBody);

  return response.status(201).json(newLanguage);
};

const getAllLanguagesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const languages: TLanguage[] = await getAllLanguages();
  return response.json(languages);
};

export { createLanguageController, getAllLanguagesController };
