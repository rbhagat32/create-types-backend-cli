import chalk from "chalk";
import fs from "fs";
import { appContent } from "@/content/app.js";

export const createApp = (answers: Answers) => {
  console.log(chalk.green("✅ Creating app.ts..."));
  fs.writeFileSync("src/app.ts", appContent(answers));
};
