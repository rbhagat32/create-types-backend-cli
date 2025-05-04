export const modelContent = (answers: Answers) =>
  `import mongoose from "mongoose";
${answers.useAuth ? 'import bcrypt from "bcrypt";' : ""}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { timestamps: true }
);

${
  answers.useAuth
    ? `userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};`
    : ""
}

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
export { UserModel };
`;
