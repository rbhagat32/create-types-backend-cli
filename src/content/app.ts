import { type Answers } from "../types/answers.js";

export const appContent = (
  answers: Answers
) => `import express, { type Request, type Response } from "express";
import dotenv from "dotenv";
${answers.useCors && 'import cors from "cors";'}
${answers.useAuth && 'import cookieParser from "cookie-parser";'}
${answers.useMongo && 'import { connectDB } from "./config/db.js";'}

const app = express();

// setup
dotenv.config({ path: ".env" });
connectDB();
${
  answers.useCors &&
  `app.use(
  cors({
    origin: [
      \`${process.env.FRONTEND_URL_DEV}\`,
      \`${process.env.FRONTEND_URL_PROD}\`,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);`
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
${answers.useAuth && "app.use(cookieParser());"}

// routes
app.get("/", (_req: Request, res: Response) => {
  res.send("This app was created using npx create-types-backend@latest !");
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});
`;
