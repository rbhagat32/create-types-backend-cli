export const generateTokenContent = `import type { Response } from "express";
import jwt from "jsonwebtoken";
import { CookieOptions } from "@/constants/cookie-options.js";

interface User {
  _id: string;
}

const generateToken = (res: Response, user: User) => {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "15d",
  });

  res.cookie("token", token, CookieOptions);
};

export { generateToken };`;

export const cookieOptionsContent = `interface CookieOptionsTypes {
  httpOnly: boolean;
  secure: boolean;
  sameSite: "none" | "strict";
  expires: Date;
}

export const CookieOptions: CookieOptionsTypes = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 15),
};`;
