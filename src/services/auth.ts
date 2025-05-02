import fs from "fs";
import { generateTokenContent, cookieOptionsContent } from "@/content/auth.js";

export const createAuth = () => {
  fs.writeFileSync("src/utils/generate-token.ts", generateTokenContent);
  fs.writeFileSync("src/constants/cookie-options.ts", cookieOptionsContent);
};
