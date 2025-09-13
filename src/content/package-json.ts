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
    ${answers.useDocker ? '"up": "docker compose up -d --build && docker compose watch",' : ""}
    ${answers.useDocker ? '"down": "docker compose down"' : ""}
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;
