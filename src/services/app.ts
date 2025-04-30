import fs from "fs";
import { appContent } from "@/content/app.js";

export const createApp = (answers: Answers) => {
  fs.writeFileSync("src/app.ts", appContent(answers));
};
