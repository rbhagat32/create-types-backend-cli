import fs from "fs";
import { eslintContent } from "@/content/eslint.js";

export const createESLint = () => {
  fs.writeFileSync("eslint.config.js", eslintContent);
};
