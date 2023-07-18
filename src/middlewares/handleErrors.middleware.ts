import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import { ZodError } from "zod";

const handleError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({ message: error.flatten().fieldErrors });
  }

  console.log(error);

  return response.status(500).json({
    message: "Internal Server Error",
  });
};

export default handleError;
