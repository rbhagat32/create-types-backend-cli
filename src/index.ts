#!/usr/bin/env node
import chalk from "chalk";
import { questions } from "@/constants/questions.js";
import { createRootDirectory } from "@/services/root-directory.js";
import { createPackageJson } from "@/services/package-json.js";
import { createTsConfig } from "@/services/ts-config.js";
import { createGitIgnore } from "@/services/git-ignore.js";
import { installDependencies, installDevDependencies } from "@/services/install-deps.js";
import { validateDirname } from "@/utils/validateDirname.js";
import { createFolderStructure } from "@/services/folder-structure.js";
import { createDotenv } from "@/services/dotenv.js";
import { createPrettierrc } from "@/services/prettierrc.js";
import { createMulter } from "@/services/multer.js";
import { createDB } from "@/services/db.js";
import { createApp } from "@/services/app.js";
import { createCloudinary } from "./services/cloudinary.js";

async function main() {
  console.log(chalk.bold.blue("🚀 Welcome to TypeScript-Express Backend CLI !"));

  // Get the project name from command-line argument
  let projectNameArg = process.argv[2] !== "-y" ? process.argv[2] : process.argv[3];

  projectNameArg = validateDirname(projectNameArg);

  // Check for -y flag (auto mode)
  const autoMode = process.argv.includes("-y");

  let answers: Answers;

  if (autoMode) {
    console.log(chalk.yellow("⚡ Running in auto mode with default preferences..."));

    answers = {
      projectName: projectNameArg,
      useCors: true,
      useMongo: true,
      useAuth: true,
      useMulter: false,
      useCloudinary: false,
    };
  } else {
    // Get user input if not in auto mode
    answers = await questions(projectNameArg);
  }

  const projectName = projectNameArg || validateDirname(answers.projectName);

  createRootDirectory(projectName);
  createPackageJson(projectName);
  createTsConfig();
  createGitIgnore();
  createDotenv(answers);
  createPrettierrc();
  createFolderStructure();
  if (answers.useMongo) createDB();
  if (answers.useMulter) createMulter();
  if (answers.useCloudinary) createCloudinary();
  createApp(answers);
  installDependencies(answers);
  installDevDependencies(answers);

  console.log(chalk.green(`🎉 You are good to go ! 🚀\n`));
  console.log(chalk.blue(`➡️  To start the development server, follow these steps:`));
  console.log(chalk.blue(`=> cd ${projectName}`));
  answers.useMongo && console.log(chalk.blue(`=> add your MONGODB_URI in .env file`));
  console.log(chalk.blue(`=> npm run dev\n`));
}

main().catch((error) => console.error(chalk.red("❌ ", error)));
