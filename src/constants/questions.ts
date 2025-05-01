import inquirer from "inquirer";

export const questions = async (projectNameArg: string): Promise<Answers> =>
  inquirer.prompt<Answers>([
    {
      name: "projectName",
      message: "Enter project name:",
      when: !projectNameArg,
      type: "input",
      default: "backend",
    },
    {
      name: "portNumber",
      message: "Enter port number:",
      type: "number",
      default: 4000,
    },
    {
      name: "useErrorHandler",
      message: "Setup Custom Error Handlers?",
      type: "confirm",
      default: true,
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
      message: "Setup authentication packages (cookie-parser, jsonwebtoken, bcrypt)?",
      type: "confirm",
      default: true,
    },
    {
      name: "useMulter",
      message: "Setup Multer for file uploads?",
      type: "confirm",
      default: false,
    },
    {
      name: "useCloudinary",
      message: "Configure Cloudinary for storing images on cloud?",
      type: "confirm",
      default: false,
    },
    {
      name: "useESLint",
      message: "Setup ES-Lint for code linting?",
      type: "confirm",
      default: true,
    },
    {
      name: "useDocker",
      message: "Setup Docker for containerization?",
      type: "confirm",
      default: false,
    },
  ]);
