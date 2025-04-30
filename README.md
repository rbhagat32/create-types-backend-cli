# 🚀 TypeScript-Express Backend Generator CLI

A CLI tool to quickly generate an **Express.js backend** in **TypeScript**, using essential configurations and user's preferences.

## ⚡ Installation

You can directly run the CLI (using **npx**) or install globally (using **npm install -g**) :

```sh
# Run directly using npx
npx create-types-backend@latest

# OR Install globally (optional)
npm install -g create-types-backend@latest
```

## 📦 Features

✅ **Generates a well-structured Express-TypeScript backend**  
✅ **Supports automatic setup using `-y` flag**  
✅ **Includes Express.js, Typescript, DotEnv and essential configurations**  
✅ **Sets up tsx for hot-reloading while development**  
✅ **Resolves import alias to @**

## ⚙️ Optional support for:

    - Custom Error Handlers
    - CORS
    - MongoDB
    - JWT, bcrypt, cookie-parser
    - Multer
    - Cloudinary
    - ES-Lint
    - Docker

## 🚀 Usage

1️⃣ Create a new project

```sh
npx create-types-backend@latest
```

2️⃣ Run in Auto Mode (`-y`)

```sh
npx create-types-backend@latest -y
```

3️⃣ Enter project name through CLI

```sh
npx create-types-backend@latest myapp
```

4️⃣ Starting the Development Server

```sh
Just follow these 3 steps:
-   cd into the newly created backend directory
-   add your MONGODB_URI in .env file (if using MongoDB)
-   npm run dev
```

## 🛠️ Project Structure

```sh
myapp/
│── src/
│   ├── config/         # Configuration files (e.g., database)
       	├──db.ts		# MongoDB connection setup
│   ├── constants/      # Constant values
│   ├── controllers/    # Route handlers
│   ├── helpers/        # Helper functions
│   ├── middlewares/    # Express middlewares
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── types/          # TypeScript types
│   ├── utils/          # Reusable utilities
│   ├── app.ts          # Main server file
│── .gitignore          # Ignore node_modules and environment files
│── tsconfig.json       # TypeScript configuration
│── package.json        # Project metadata & dependencies
│── .env                # Environment variables (if dotenv is included)

```

## 🤝 Contributing

Want to improve this CLI? Feel free to **fork** the project, make changes, and submit a **pull request (PR)**.

### Steps to Contribute:

1.  Fork this repository.
2.  Clone your fork locally.
3.  Create a new branch for your feature/fix.
4.  Commit your changes and push them.
5.  Submit a pull request for review.

## 📜 License

This project is **open-source** and available under the **ISC License**.

## 👨‍💻 Author

**Raghav Bhagat**  
🔗 GitHub: _[https://github.com/rbhagat32]_  
🔗 NPM: _[https://www.npmjs.com/~raghavbhagat32]_  
🔗 LinkedIn: _[https://www.linkedin.com/in/rbhagat32]_
