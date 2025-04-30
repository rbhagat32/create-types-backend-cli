export const packageJsonContent = (projectName: string) => `{
  "name": "${projectName === "." ? "backend" : projectName}",
  "version": "1.0.0",
  "description": "This app was created using npx create-types-backend@latest",
  "main": "dist/app.js",
  "type": "module",
  "scripts": {
    "start": "node dist/app.js",
    "build": "tsc && tsc-alias",
    "dev": "tsx watch src/app.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;
