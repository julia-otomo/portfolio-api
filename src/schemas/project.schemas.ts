import { z } from "zod";
import { languageSchema } from "./language.schemas";

const projectSchema = z.object({
  id: z.string(),
  title: z.string().max(50),
  description: z.string().nullish(),
  year: z.number().int(),
  image: z.string().nullish(),
  githubPage: z.string(),
  vercelPage: z.string().nullish(),
  languages: languageSchema.array(),
});

const projectSchemaRequest = projectSchema
  .omit({ id: true, languages: true })
  .extend({ languages: z.string() });

export { projectSchema, projectSchemaRequest };
