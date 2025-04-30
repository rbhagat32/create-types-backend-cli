import chalk from "chalk";
import fs from "fs";

export const createFolderStructure = () => {
  console.log(chalk.green("📂 Creating folder structure..."));

  const folders = [
    "src/config",
    "src/constants",
    "src/controllers",
    "src/helpers",
    "src/middlewares",
    "src/models",
    "src/routes",
    "src/types",
    "src/utils",
  ];

  folders.forEach((folder) => fs.mkdirSync(folder, { recursive: true }));
};
