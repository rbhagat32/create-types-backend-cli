import fs from "fs";
import {
  dockerIgnoreContent,
  dockerfileProdContent,
  dockerfileDevContent,
  dockercomposeDevContent,
  dockercomposeProdContent,
} from "@/content/docker.js";

export const createDocker = (answers: Answers) => {
  fs.writeFileSync(".dockerignore", dockerIgnoreContent);
  fs.writeFileSync("Dockerfile.dev", dockerfileDevContent(answers));
  fs.writeFileSync("Dockerfile.prod", dockerfileProdContent(answers));
  fs.writeFileSync("compose.dev.yaml", dockercomposeDevContent(answers));
  fs.writeFileSync("compose.prod.yaml", dockercomposeProdContent(answers));
};
