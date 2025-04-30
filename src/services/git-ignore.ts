import fs from "fs";

export const createGitIgnore = () => {
  const gitIgnoreContent = ["node_modules", "dist", ".env"];

  fs.writeFileSync(".gitignore", gitIgnoreContent.join("\n"));
};
