import fs from "fs";
import { dbContent } from "@/content/db.js";

export const createDB = () => {
  fs.writeFileSync("src/config/db.ts", dbContent);
};
