export const controllerContent = (answers: Answers) =>
  answers.useErrorHandler
    ? `import type { Request, Response } from "express";
import { tryCatch } from "@/utils/try-catch.js";
import { ErrorHandler } from "@/middlewares/error-handler.js";

const getUser = tryCatch(async (_req: Request, res: Response) => {
  const user = {
    id: 1,
    name: "user",
    email: "user@gmail.com",
  };

  if (!user) throw new ErrorHandler(404, "User not found !");

  return res.status(200).json(user);
});

export { getUser };
`
    : `import type { Request, Response } from "express";

const getUser = (_req: Request, res: Response) => {
  const user = {
    id: 1,
    name: "example user",
    email: "example@gmail.com",
  };

  if (!user) return res.status(404).json({ message: "User does not exist !" });

  return res.status(200).json(user);
};

export { getUser };
`;
