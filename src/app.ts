import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handleError from "./middlewares/handleErrors.middleware";
import cors from "cors";
import { projectRouter } from "./routes/projects.routes";
import { languageRouter } from "./routes/languages.routes";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-julia-otomo.vercel.app/",
    ],
  })
);

app.use("/projects", projectRouter);
app.use("/languages", languageRouter);

app.use(handleError);

export default app;
