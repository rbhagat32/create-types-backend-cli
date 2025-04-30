import chalk from "chalk";
import fs from "fs";
import { packageJsonContent } from "../content/package-json.js";

export const createPackageJson = (projectName: string) => {
  console.log(chalk.green("📗 Initializing package.json..."));
  fs.writeFileSync("package.json", packageJsonContent(projectName));
};
