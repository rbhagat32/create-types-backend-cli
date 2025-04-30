import fs from "fs";
import { cloudinaryContent } from "@/content/cloudinary.js";

export const createCloudinary = () => {
  const filePropsContent = `interface FileProps {
  mimetype: string;
  buffer: Buffer;
}
`;
  fs.writeFileSync("src/types/file.d.ts", filePropsContent);
  fs.writeFileSync("src/utils/cloudinary.ts", cloudinaryContent);
};
