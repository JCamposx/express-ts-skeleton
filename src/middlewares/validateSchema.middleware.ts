import { NextFunction, Request, Response } from "express";
import { ZodError, ZodIssue, ZodSchema } from "zod";

import ValidationError from "../utils/classes/validationError.class";
import HTTPError from "../utils/classes/httpError.class";

/**
 * Middleware that validates request data using a Zod schema.
 *
 * @param schema - The Zod schema used to validate request data.
 * @throws {ValidationError} If the data does not conform to the Zod schema.
 * @throws {HTTPError} If there is an error unrelated to Zod validation.
 */
const validateSchema =
  (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);

      next();
    } catch (error) {
      if (!(error instanceof ZodError)) {
        throw new HTTPError();
      }

      if (!error.errors) {
        throw new HTTPError(error.message);
      }

      const validationErrors: Record<string, string[]> = error.errors.reduce(
        (acc: Record<string, string[]>, err: ZodIssue) => {
          const fieldName: string = err.path[0].toString();
          const errorMessage: string = err.message;

          acc[fieldName] = acc[fieldName] || [];
          acc[fieldName].push(errorMessage);

          return acc;
        },
        {},
      );

      throw new ValidationError(validationErrors);
    }
  };

export default validateSchema;
