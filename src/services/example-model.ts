import fs from "fs";
import { modelContent } from "@/content/example-model.js";

export const createModel = (answers: Answers) => {
  const userTypesContent = `interface UserTypes {
  _id: Types.ObjectId;
  name: string;
  username: string;
  password: string;
  ${answers.useAuth ? "matchPassword(enteredPassword: string): Promise<boolean>;" : ""}
  createdAt: Date;
  updatedAt: Date;
}`;

  fs.writeFileSync("src/types/user.d.ts", userTypesContent);
  fs.writeFileSync("src/models/user.ts", modelContent(answers));
};
