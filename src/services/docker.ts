import {
  dockerIgnoreContent,
  dockercomposeDevContent,
  dockercomposeProdContent,
  dockerfileDevContent,
  dockerfileProdContent,
} from "@/content/docker.js";
import fs from "fs";

export const createDocker = (answers: Answers) => {
  fs.writeFileSync(".dockerignore", dockerIgnoreContent);
  fs.writeFileSync("Dockerfile.dev", dockerfileDevContent(answers));
  fs.writeFileSync("Dockerfile", dockerfileProdContent(answers));
  fs.writeFileSync("compose.dev.yaml", dockercomposeDevContent(answers));
  fs.writeFileSync("compose.prod.yaml", dockercomposeProdContent(answers));
};
