import chalk from "chalk";
import fs from "fs";
import { dbContent } from "@/content/db.js";

export const createDB = () => {
  console.log(chalk.green("📗 Setting up MongoDB..."));
  fs.writeFileSync("src/config/db.ts", dbContent);
};
