export const errorHandlerContent = `import type { NextFunction, Request, Response } from "express";

export class ErrorHandler extends Error {
  constructor(
    public statusCode: number,
    public message: string
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const ErrorHandlerMiddleware = (
  err: ErrorHandler,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.statusCode ||= 500;
  err.message ||= "Internal Server Error";

  console.log(err);

  return res.status(err.statusCode).json({
    status: err.statusCode,
    error: err.name,
    message: err.message,
    timestamp: new Date().toISOString(),
  });
};
`;

export const tryCatchContent = `import type { Request, Response, NextFunction } from "express";

type ControllerTypes = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<unknown, Record<string, unknown>>>;

export const TryCatch = (controller: ControllerTypes) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};`;
