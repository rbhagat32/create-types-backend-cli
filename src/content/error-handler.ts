export const errorHandlerContent = `import type { Request, Response, NextFunction } from "express";

export default class ErrorHandler extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: ErrorHandler,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  err.statusCode ||= 500;
  err.message ||= "Internal Server Error";

  const response: { message: string } = { message: err.message };

  return res.status(err.statusCode).json(response);
};
`;

export const tryCatchContent = `import type { Request, Response, NextFunction } from "express";

type ControllerTypes = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<unknown, Record<string, unknown>>>;

export const tryCatch = (controller: ControllerTypes) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};`;
