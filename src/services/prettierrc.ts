import chalk from "chalk";
import fs from "fs";
import { prettierrcContent } from "@/content/prettierrc.js";

export const createPrettierrc = () => {
  console.log(chalk.green("📗 Initializing .prettierrc..."));
  fs.writeFileSync(".prettierrc", prettierrcContent);
};
