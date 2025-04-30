import chalk from "chalk";
import { execSync } from "child_process";

export const installDependencies = (answers: Answers) => {
  console.log(chalk.green("📥 Installing dependencies..."));

  let dependencies = ["express", "dotenv"];

  if (answers.useCors) dependencies.push("cors");
  if (answers.useMongo) dependencies.push("mongoose");
  if (answers.useAuth) dependencies.push("jsonwebtoken", "cookie-parser", "bcrypt");
  if (answers.useMulter) dependencies.push("multer");
  if (answers.useCloudinary) dependencies.push("cloudinary", "sharp", "streamifier", "uuid");

  execSync(`npm install ${dependencies.join(" ")}`, { stdio: "ignore" });
};

export const installDevDependencies = (answers: Answers) => {
  console.log(chalk.green("🛠️  Installing dev dependencies..."));

  let devDependencies = ["@types/node", "@types/express", "typescript", "tsc-alias", "tsx"];

  if (answers.useCors) devDependencies.push("@types/cors");
  if (answers.useMongo) devDependencies.push("@types/mongoose");
  if (answers.useAuth)
    devDependencies.push("@types/jsonwebtoken", "@types/cookie-parser", "@types/bcrypt");
  if (answers.useMulter) devDependencies.push("@types/multer");
  if (answers.useCloudinary) devDependencies.push("@types/streamifier", "@types/uuid");

  execSync(`npm install -D ${devDependencies.join(" ")}`);
};
