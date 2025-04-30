import fs from "fs";
import { tsConfigContent } from "@/content/ts-config.js";

export const createTsConfig = () => {
  fs.writeFileSync("tsconfig.json", tsConfigContent);
};
