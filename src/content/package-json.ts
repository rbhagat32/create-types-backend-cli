export const packageJsonContent = (projectName: string) => `{
  "name": ${projectName},
  "version": "1.0.0",
  "description": "This app was created using npx create-types-backend@latest",
  "main": "dist/app.js",
  "type": "module",
  "scripts": {
    "start": "node dist/app.js",
    "build": "tsc",
    "dev": "concurrently \\"tsc -w\\" \\"npx nodemon dist/app.js\\""
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}`;
