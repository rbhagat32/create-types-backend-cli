import fs from "fs";
import { dotenvContent, dotenvExampleContent } from "@/content/dotenv.js";

export const createDotenv = (answers: Answers) => {
  if (answers.useMongo) {
    dotenvContent.push("MONGODB_URI=");
    dotenvExampleContent.push("MONGODB_URI=");
  }

  if (answers.useAuth) {
    dotenvContent.push("JWT_SECRET_KEY=");
    dotenvExampleContent.push("JWT_SECRET_KEY=");
  }

  if (answers.useCloudinary) {
    dotenvContent.push("CLOUDINARY_CLOUD_NAME=", "CLOUDINARY_API_KEY=", "CLOUDINARY_API_SECRET=");
    dotenvExampleContent.push(
      "CLOUDINARY_CLOUD_NAME=",
      "CLOUDINARY_API_KEY=",
      "CLOUDINARY_API_SECRET="
    );
  }

  fs.writeFileSync(".env", dotenvContent.join("\n"));

  fs.writeFileSync(".env.example", dotenvExampleContent.join("\n"));
};
