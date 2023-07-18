import { z } from "zod";
import {
  languageRequestSchema,
  languageSchema,
} from "../schemas/language.schemas";

type TLanguage = z.infer<typeof languageSchema>;

type TLanguageRequest = z.infer<typeof languageRequestSchema>;

export { TLanguage, TLanguageRequest };
