import chalk from "chalk";
import fs from "fs";
import { tsConfigContent } from "../content/ts-config.js";

export const createTsConfig = () => {
  console.log(chalk.green("📘 Setting up tsconfig.json..."));
  fs.writeFileSync("tsconfig.json", tsConfigContent, "utf-8");
};
