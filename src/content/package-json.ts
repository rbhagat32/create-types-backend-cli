export const packageJsonContent = (projectName: string, answers: Answers) => `{
  "name": "${projectName === "." ? "backend" : projectName}",
  "version": "1.0.0",
  "private": true,
  "description": "This app was created using npx create-types-backend@latest",
  "type": "module",
  "main": "dist/app.js",
  "scripts": {
    "start": "node dist/app.js",
    "build": "${answers.useESLint ? "npm run lint && " : ""}tsc && tsc-alias",
    "dev": "nodemon"${!answers.useESLint && !answers.useDocker ? "" : ","}
    ${answers.useESLint ? `"lint": "eslint src"${answers.useDocker ? "," : ""}` : ""}
    ${
      answers.useDocker ? '"docker:prod": "docker compose -f compose.prod.yaml up -d --build",' : ""
    }
    ${
      answers.useDocker
        ? '"docker:dev": "docker compose -f compose.dev.yaml up -d --build && docker compose -f compose.dev.yaml watch",'
        : ""
    }
    ${answers.useDocker ? '"docker-down:prod": "docker compose -f compose.prod.yaml down",' : ""}
    ${answers.useDocker ? '"docker-down:dev": "docker compose -f compose.dev.yaml down",' : ""}
    ${answers.useDocker ? '"docker:logs": "docker compose logs -f"' : ""}
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;
