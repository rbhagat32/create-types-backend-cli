import fs from "fs";
import { controllerContent } from "@/content/example-controller.js";

export const createController = (answers: Answers) => {
  fs.writeFileSync("src/controllers/user.ts", controllerContent(answers));
};
