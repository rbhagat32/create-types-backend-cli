export const dockerIgnoreContent = `node_modules
dist
.env
.env.example
.gitignore
.git
.vscode`;

export const dockerfileContent = `FROM node
WORKDIR /app
COPY package* .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`;

export const dockerfileDevContent = `FROM node
WORKDIR /app
COPY package* .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]`;

export const dockercomposeContent = (projectName: string, answers: Answers) => `services:
  ${projectName !== "." ? projectName : "backend"}-image:
    container_name: ${projectName !== "." ? projectName : "backend"}-container
    build: .
    ports:
      - ${answers.portNumber}:${answers.portNumber}
    env_file:
      - .env
    develop:
      watch:
        - action: sync
          path: .
          target: /app
          ignore: "node_modules"
        - action: rebuild
          path: package.json
`;
