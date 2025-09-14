#!/usr/bin/env node

import chalk from "chalk";
import { validateDirname } from "@/utils/validateDirname.js";
import { questions } from "@/constants/questions.js";
import { createRootDirectory } from "@/services/root-directory.js";
import { createPackageJson } from "@/services/package-json.js";
import { createTsConfig } from "@/services/ts-config.js";
import { createGitIgnore } from "@/services/git-ignore.js";
import { createDotenv } from "@/services/dotenv.js";
import { createPrettierrc } from "@/services/prettierrc.js";
import { createNodemon } from "@/services/nodemon.js";
import { createFolderStructure } from "@/services/folder-structure.js";
import { createRouter } from "@/services/example-router.js";
import { createController } from "@/services/example-controller.js";
import { createAuth } from "@/services/auth.js";
import { createErrorHandler } from "@/services/error-handler.js";
import { createDB } from "@/services/db.js";
import { createModel } from "@/services/example-model.js";
import { createMulter } from "@/services/multer.js";
import { createCloudinary } from "@/services/cloudinary.js";
import { createESLint } from "@/services/eslint.js";
import { createDocker } from "@/services/docker.js";
import { createApp } from "@/services/app.js";
import { installDependencies, installDevDependencies } from "@/services/install-deps.js";
import { execSync } from "child_process";

async function main() {
  console.log(chalk.bold.blue("🚀 Welcome to TypeScript-Express Backend CLI !\n"));

  // Get the project name from command-line argument
  let projectNameArg = process.argv[2] !== "-y" ? process.argv[2] : process.argv[3];

  projectNameArg = validateDirname(projectNameArg);

  // Check for -y flag (auto mode)
  const autoMode = process.argv.includes("-y");

  let answers: Answers;

  if (autoMode) {
    console.log(chalk.yellow("⚡ Running in auto mode with all preferences set to YES..."));

    answers = {
      projectName: projectNameArg === "" ? "backend" : projectNameArg,
      portNumber: 4000,
      useCors: true,
      useMongo: true,
      useAuth: true,
      useErrorHandler: true,
      useMulter: true,
      useCloudinary: true,
      useESLint: true,
      useDocker: true,
      useGit: false,
    };
  } else {
    // Get user input if not in auto mode
    answers = await questions(projectNameArg);
  }

  const projectName = projectNameArg || validateDirname(answers.projectName);

  createRootDirectory(projectName);
  createPackageJson(projectName, answers);
  createTsConfig();
  createGitIgnore();
  createDotenv(answers);
  createPrettierrc();
  createNodemon();
  createFolderStructure();
  createRouter();
  createController(answers);
  if (answers.useAuth) createAuth();
  if (answers.useErrorHandler) createErrorHandler();
  if (answers.useMongo) {
    createDB();
    createModel(answers);
  }
  if (answers.useMulter) createMulter();
  if (answers.useCloudinary) createCloudinary();
  if (answers.useESLint) createESLint();
  if (answers.useDocker) createDocker(answers);
  createApp(answers);
  installDependencies(answers);
  installDevDependencies(answers);
  if (answers.useGit) {
    execSync("git init", { stdio: "ignore" });
    execSync("git add .", { stdio: "ignore" });
    execSync('git commit -m "init: create-types-backend"', { stdio: "ignore" });
    console.log(chalk.green("Initialized a new git repository"));
  }

  console.log(chalk.green(`🎉 You are good to go ! 🚀\n`));
  console.log(chalk.blue(`➡️  To start the development server, follow these steps:`));
  console.log(chalk.blue(`=> cd ${projectName}`));
  answers.useMongo && console.log(chalk.blue(`=> add your MONGODB_URI in .env file`));
  console.log(chalk.blue(`=> npm run dev\n`));
}

main().catch((error) => console.error(chalk.red("❌ ", error)));
