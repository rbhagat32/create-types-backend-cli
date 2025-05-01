import fs from "fs";
import { errorHandlerContent, tryCatchContent } from "@/content/error-handler.js";

export const createErrorHandler = () => {
  fs.writeFileSync("src/middlewares/error-handler.ts", errorHandlerContent);
  fs.writeFileSync("src/utils/try-catch.ts", tryCatchContent);
};
