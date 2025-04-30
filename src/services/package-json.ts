import fs from "fs";
import { packageJsonContent } from "@/content/package-json.js";

export const createPackageJson = (projectName: string, answers: Answers) => {
  fs.writeFileSync("package.json", packageJsonContent(projectName, answers));
};
