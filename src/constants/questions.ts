import inquirer from "inquirer";
import { type Answers } from "../types/answers";

export const questions = async (projectNameArg: string): Promise<Answers> =>
  inquirer.prompt<Answers>([
    {
      name: "projectName",
      message: "Enter project name:",
      when: !projectNameArg,
      type: "input",
    },
    {
      name: "useCors",
      message: "Include CORS?",
      type: "confirm",
      default: true,
    },
    {
      name: "useMongo",
      message: "Use MongoDB as database?",
      type: "confirm",
      default: true,
    },
    {
      name: "useAuth",
      message:
        "Setup authentication packages (cookie-parser, jsonwebtoken, bcrypt)?",
      type: "confirm",
      default: true,
    },
  ]);
