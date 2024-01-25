import { NextFunction, Request, RequestHandler, Response } from "express";

import NODE_ENVS from "../utils/enums/nodeEnvs.enum";
import { NODE_ENV } from "../config";

import ValidationError from "../utils/classes/validationError.class";
import ResponseError from "./interfaces/responseError.interface";
import HTTPError from "../utils/classes/httpError.class";

/**
 * Middleware that handles errors in asynchronous requests.
 *
 * @param {CallableFunction} fn - The asynchronous request handler function.
 * @returns {RequestHandler} - Express middleware function.
 */
export const requestErrorHandler = (fn: CallableFunction): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

/**
 * Middleware that handles and format errors in the response.
 *
 * @param {Error | HTTPError | ValidationError} error - The error object.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {NextFunction} _next - Express next function.
 * @returns {void}
 */
export const responseErrorHandler = (
  error: Error | HTTPError | ValidationError,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode: number = (error as HTTPError).statusCode || 500;
  const message: string = error.message || "Internal server error";
  const errors: Record<string, string[]> =
    (error as ValidationError).errors || {};

  const responseError: ResponseError = {
    message,
    errors,
  };

  if (Object.keys(errors).length === 0) {
    responseError.errors = undefined;
  }

  if (NODE_ENV === NODE_ENVS.DEVELOPMENT) {
    console.error(
      `[${req.method} ${req.path} ${statusCode}] ${error.stack || error}`,
    );
  }

  if (NODE_ENV === NODE_ENVS.PRODUCTION && statusCode === 500) {
    responseError.message = "Internal server error";
  }

  res.status(statusCode);
  res.json(responseError);
};
