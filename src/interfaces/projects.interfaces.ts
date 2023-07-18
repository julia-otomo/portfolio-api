import { z } from "zod";
import {
  projectSchema,
  projectSchemaRequest,
} from "../schemas/project.schemas";

type TProject = z.infer<typeof projectSchema>;

type TProjectRequest = z.infer<typeof projectSchemaRequest>;

export { TProject, TProjectRequest };
