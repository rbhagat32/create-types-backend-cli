import fs from "fs";
import {
  dockerIgnoreContent,
  dockerfileContent,
  dockerfileDevContent,
  dockercomposeContent,
} from "@/content/docker.js";

export const createDocker = (projectName: string, answers: Answers) => {
  fs.writeFileSync(".dockerignore", dockerIgnoreContent);
  fs.writeFileSync("Dockerfile", dockerfileContent(answers));
  fs.writeFileSync("Dockerfile.dev", dockerfileDevContent(answers));
  fs.writeFileSync("docker-compose.yml", dockercomposeContent(projectName, answers));
};
