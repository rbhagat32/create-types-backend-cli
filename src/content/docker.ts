export const dockerIgnoreContent = `node_modules
dist
.env
.env.example
.gitignore
.git
.vscode`;

export const dockerfileContent = (answers: Answers) => `FROM node
WORKDIR /app
COPY package* .
RUN npm install
COPY . .
RUN npm run build
EXPOSE ${answers.portNumber}
CMD ["npm", "start"]`;

export const dockerfileDevContent = (answers: Answers) => `FROM node
WORKDIR /app
COPY package* .
RUN npm install
COPY . .
EXPOSE ${answers.portNumber}
CMD ["npm", "run", "dev"]`;

export const dockercomposeContent = (projectName: string, answers: Answers) => `services:
  ${projectName !== "." ? projectName : "backend"}-image:
    container_name: ${projectName !== "." ? projectName : "backend"}-container
    build:
      context: ./
      dockerfile: Dockerfile.dev
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
          path: package*.json
`;
