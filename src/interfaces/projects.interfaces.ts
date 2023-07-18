import { z } from "zod";
import {
  projectSchema,
  projectSchemaRequest,
  projectSchemaUpdate,
} from "../schemas/project.schemas";

type TProject = z.infer<typeof projectSchema>;

type TProjectRequest = z.infer<typeof projectSchemaRequest>;

type TProjectUpdate = z.infer<typeof projectSchemaUpdate>;

export { TProject, TProjectRequest, TProjectUpdate };
