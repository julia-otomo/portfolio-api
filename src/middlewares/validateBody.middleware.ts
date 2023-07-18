import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const validateRequestBody =
  (schema: ZodTypeAny) =>
  (request: Request, response_: Response, next: NextFunction): void => {
    const validateBody = schema.parse(request.body);
    request.body = validateBody;

    return next();
  };

export default validateRequestBody;
