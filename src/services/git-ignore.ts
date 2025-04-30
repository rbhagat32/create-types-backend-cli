import chalk from "chalk";
import fs from "fs";

export const createGitIgnore = () => {
  console.log(chalk.green("📙 Creating .gitignore..."));

  const gitIgnoreContent = ["node_modules", "dist", ".env"];

  fs.writeFileSync(".gitignore", gitIgnoreContent.join("\n"));
};
