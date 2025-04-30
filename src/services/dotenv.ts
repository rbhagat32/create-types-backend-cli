import fs from "fs";
import { dotenvContent, dotenvExampleContent } from "@/content/dotenv.js";

export const createDotenv = (answers: Answers) => {
  if (answers.useMongo) {
    dotenvContent.push("MONGODB_URI=");
    dotenvExampleContent.push("MONGODB_URI=");
  }

  fs.writeFileSync(".env", dotenvContent.join("\n"));

  fs.writeFileSync(".env.example", dotenvExampleContent.join("\n"));
};
