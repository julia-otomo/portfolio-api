import { z } from "zod";

const languageSchema = z.object({
  id: z.string(),
  name: z.string().max(50),
});

const languageRequestSchema = languageSchema.omit({ id: true });

export { languageSchema, languageRequestSchema };
