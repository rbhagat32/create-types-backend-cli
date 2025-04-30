import fs from "fs";

export const createFolderStructure = () => {
  const folders = [
    "src/config",
    "src/constants",
    "src/controllers",
    "src/helpers",
    "src/middlewares",
    "src/models",
    "src/routes",
    "src/types",
    "src/utils",
  ];

  folders.forEach((folder) => fs.mkdirSync(folder, { recursive: true }));
};
