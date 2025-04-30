import fs from "fs";
import { prettierrcContent } from "@/content/prettierrc.js";

export const createPrettierrc = () => {
  fs.writeFileSync(".prettierrc", prettierrcContent);
};
