export const errorHandlerContent = `import type { Request, Response, NextFunction } from "express";

export class ErrorHandler extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const ErrorHandlerMiddleware = (
  err: ErrorHandler,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  err.statusCode ||= 500;
  err.message ||= "Internal Server Error";

  console.log(err);
  return res.status(err.statusCode).json({ message: err.message });
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
