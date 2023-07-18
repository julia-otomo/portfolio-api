import { Router } from "express";
import validateRequestBody from "../middlewares/validateBody.middleware";
import {
  projectSchemaRequest,
  projectSchemaUpdate,
} from "../schemas/project.schemas";
import { projectAlreadyExists } from "../middlewares/projectAlreadtExists.middleware";
import {
  createProjectController,
  deleteProjectController,
  getAllProjectsController,
  updateProjectController,
} from "../controllers/project.controllers";
import { projectNotExists } from "../middlewares/projectNotExists.middleware";

const projectRouter: Router = Router();

projectRouter.post(
  "",
  validateRequestBody(projectSchemaRequest),
  projectAlreadyExists,
  createProjectController
);

projectRouter.get("", getAllProjectsController);

projectRouter.patch(
  "/:title",
  validateRequestBody(projectSchemaUpdate.partial()),
  projectNotExists,
  projectAlreadyExists,
  updateProjectController
);

projectRouter.delete("/:title", projectNotExists, deleteProjectController);

export { projectRouter };
