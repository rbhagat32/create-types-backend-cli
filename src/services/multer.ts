import chalk from "chalk";
import fs from "fs";
import { multerContent } from "@/content/multer.js";

export const createMulter = () => {
  console.log(chalk.green("📘 Configuring multer..."));
  fs.writeFileSync("src/config/multer.ts", multerContent);
};
