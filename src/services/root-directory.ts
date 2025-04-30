import path from "path";
import fs from "fs";
import chalk from "chalk";

export const createRootDirectory = (projectName: string) => {
  console.log("\n");
  console.log(chalk.green(`📂 Creating project: ${projectName}`));

  const projectPath = path.join(process.cwd(), projectName);
  fs.mkdirSync(projectPath, { recursive: true });

  // change the current working directory of the Node.js process.
  process.chdir(projectPath);
};
