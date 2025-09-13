import fs from "fs";
import { nodemonContent } from "@/content/nodemon.js";

export const createNodemon = () => {
  fs.writeFileSync("nodemon.json", nodemonContent);
};
