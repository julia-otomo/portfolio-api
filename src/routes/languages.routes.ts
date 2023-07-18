import { Router } from "express";
import {
  createLanguageController,
  getAllLanguagesController,
} from "../controllers/language.controllers";
import { verifyLanguageExists } from "../middlewares/verifyIfLanguageExists.middleware";
import validateRequestBody from "../middlewares/validateBody.middleware";
import { languageRequestSchema } from "../schemas/language.schemas";

const languageRouter: Router = Router();

languageRouter.post(
  "",
  validateRequestBody(languageRequestSchema),
  verifyLanguageExists,
  createLanguageController
);

languageRouter.get("", getAllLanguagesController);

export { languageRouter };
