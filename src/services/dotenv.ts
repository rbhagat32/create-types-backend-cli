import fs from "fs";
import chalk from "chalk";
import { type Answers } from "../types/answers.js";
import { dotenvContent, dotenvExampleContent } from "../content/dotenv.js";

export const createDotenv = (answers: Answers) => {
  console.log(chalk.green("📕 Creating .env..."));

  if (answers.useMongo) {
    dotenvContent.push("MONGODB_URI=<your_mongodb_uri>");
    dotenvExampleContent.push("MONGODB_URI=");
  }

  fs.writeFileSync(".env", dotenvContent.join("\n"));

  fs.writeFileSync(".env.example", dotenvExampleContent.join("\n"));
};
