export const appContent = (
  answers: Answers
) => `import express, { type Request, type Response } from "express";
import { configDotenv } from "dotenv";
${answers.useCors ? 'import cors from "cors";' : ""}
${answers.useAuth ? 'import cookieParser from "cookie-parser";' : ""}
${answers.useMongo ? 'import { connectDB } from "@/config/db.js";' : ""}
${answers.useCloudinary ? 'import { v2 as cloudinary } from "cloudinary";' : ""}
import { UserRouter } from "@/routes/user.js";
${
  answers.useErrorHandler
    ? 'import { ErrorHandlerMiddleware } from "@/middlewares/error-handler.js";'
    : ""
}

const app = express();

// setup
configDotenv({ path: ".env", quiet: true });
${answers.useMongo ? "connectDB();" : ""}
${
  answers.useCors
    ? `app.use(
  cors({
    origin: [\`\${process.env.FRONTEND_URL_DEV}\`, \`\${process.env.FRONTEND_URL_PROD}\`],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);`
    : ""
}
${
  answers.useCloudinary
    ? `cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});`
    : ""
}

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
${answers.useAuth ? "app.use(cookieParser());" : ""}

// routes
app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("This app was created using \`npx create-types-backend\`");
});

// => ADD YOUR ROUTES HERE <=
app.use("/api/user", UserRouter);

${
  answers.useErrorHandler
    ? `// custom error handler
app.use(ErrorHandlerMiddleware);`
    : ""
}

const PORT = Number(process.env.PORT) || ${answers.portNumber};
app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});
`;
