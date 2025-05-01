export const packageJsonContent = (projectName: string, answers: Answers) => `{
  "name": "${projectName === "." ? "backend" : projectName}",
  "version": "1.0.0",
  "description": "This app was created using npx create-types-backend@latest",
  "main": "dist/app.js",
  "type": "module",
  "scripts": {
    "start": "node dist/app.js",
    "build": "${answers.useESLint ? "npm run lint && " : ""}tsc && tsc-alias",
    "dev": "tsx watch src/app.ts"${!answers.useESLint && !answers.useDocker ? "" : ","}
    ${answers.useESLint ? `"lint": "eslint src"${answers.useDocker ? "," : ""}` : ""}
    ${answers.useDocker ? '"docker:dev": "docker-compose up --watch",' : ""}
    ${answers.useDocker ? '"docker:stop": "docker-compose down"' : ""}
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;
