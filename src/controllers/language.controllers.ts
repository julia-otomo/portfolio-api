import { Request, Response } from "express";
import { TLanguageRequest } from "../interfaces/languages.interfaces";

const createLanguageController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const requestBody: TLanguageRequest = request.body;

  return response.status(201).json();
};

export { createLanguageController };
