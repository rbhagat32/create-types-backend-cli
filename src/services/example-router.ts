import fs from "fs";
import { routerContent } from "@/content/example-router.js";

export const createRouter = () => {
  fs.writeFileSync("src/routes/user.ts", routerContent);
};
