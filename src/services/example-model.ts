import fs from "fs";
import { modelContent } from "@/content/example-model.js";

export const createModel = () => {
  fs.writeFileSync("src/models/user.ts", modelContent);
};
