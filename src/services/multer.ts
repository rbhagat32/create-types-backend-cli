import fs from "fs";
import { multerContent } from "@/content/multer.js";

export const createMulter = () => {
  fs.writeFileSync("src/config/multer.ts", multerContent);
};
