export const dockerIgnoreContent = `# Dependency directories
node_modules
dist

# Environment files
.env
.env.*

# Git & IDE
.git
.gitignore
.vscode

# Docker configs
Dockerfile*
compose.*.yaml
docker-compose*.yaml

# Misc
*.log`;

export const dockerfileProdContent = (answers: Answers) => `# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --loglevel=error

COPY . ./
RUN npm run build

RUN npm prune --omit=dev


# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE ${answers.portNumber}
CMD ["npm", "start"]`;

export const dockerfileDevContent = (answers: Answers) => `FROM node:20-alpine
WORKDIR /app

COPY package* ./
RUN npm install --loglevel=error

COPY . ./

EXPOSE ${answers.portNumber}
CMD ["npm", "run", "dev"]`;

export const dockercomposeProdContent = (projectName: string, answers: Answers) => `services:
  ${projectName !== "." ? projectName : "backend"}-image-prod:
    container_name: ${projectName !== "." ? projectName : "backend"}-container-prod
    build:
      context: ./
      dockerfile: Dockerfile.prod
    ports:
      - ${answers.portNumber}:${answers.portNumber}
    env_file:
      - .env
`;

export const dockercomposeDevContent = (projectName: string, answers: Answers) => `services:
  ${projectName !== "." ? projectName : "backend"}-image-dev:
    container_name: ${projectName !== "." ? projectName : "backend"}-container-dev
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
          ignore:
            - node_modules/
        - action: rebuild
          path: package.json
`;
