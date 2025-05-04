# 🚀 TypeScript-Express Backend Setup CLI

A CLI tool to quickly setup an **Express.js backend** in **TypeScript**, using essential configurations and user's preferences.

## ⚡ Installation

You can directly run the CLI (using **npx**) or install globally (using **npm install -g**) :

```sh
# Run directly using npx
npx create-types-backend

# OR Install globally (optional)
npm install -g create-types-backend
```

## 📦 Features

✅ **Generates a well-structured Express-TypeScript backend**  
✅ **Supports automatic setup using `-y` flag**  
✅ **Includes Express.js, Typescript, DotEnv and essential configurations**  
✅ **Sets up tsx for hot-reloading while development**  
✅ **Resolves default import alias by mapping src -> @**

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

➡️ Creating a new project

```sh
npx create-types-backend  : Manual setup with flexibility to choose required configurations.

OR

npx create-types-backend  -y : Run in default mode with all preferences set to 'YES'

OR

npx create-types-backend  myapp : Enter project name through CLI argument
```

➡️ Starting the Development Server

```sh
Just follow these 3 steps:

-   cd into the newly created backend directory
-   add your MONGODB_URI in .env file (if using MongoDB)
-   npm run dev OR npm run docker:dev (if using docker)
```

## 🛠️ Project Structure

```sh
myapp/
│── src/
    ├── config/                     # Configuration files (e.g., database)
       	├──db.ts		    # MongoDB connection setup
       	├──multer.ts	            # Multer setup
    ├── constants/                  # Constant values
        ├──cookie-options.ts	    # Cookie options for JWT
    ├── controllers/                # Route handlers
       	├──user.ts	            # Example controller
    ├── helpers/                    # Helper functions
    ├── middlewares/                # Express middlewares
       	├──errorHandler.ts	    # Custom error handler
    ├── models/                     # Mongoose models
       	├──user.ts	            # Example mongoose model
    ├── routes/                     # API routes
       	├──user.ts	            # Example route
    ├── types/                      # TypeScript types
       	├──file.d.ts	            # FileTypes definition (reqd for cloudinary)
       	├──user.d.ts	            # UserTypes definition (acc to example mongoose schema)
    ├── utils/                      # Reusable utilities
       	├──cloudinary.ts	    # Cloudinary upload and delete controllers
        ├──generate-token.ts	    # Generate JWT token and set cookie
       	├──try-catch.ts	            # Try-Catch wrapper for async functions
    ├── app.ts                      # Main entry point of express app
│── .dockerignore                   # Docker ignore file
│── .env                            # Environment variables
│── .env.example                    # Example environment variables
│── .gitignore                      # Git ignore file
│── .prettierrc                     # Prettier configuration
│── docker-compose.yaml             # Docker-Compose file configured for development
│── Dockerfile                      # Dockerfile for production
│── Dockerfile.dev                  # Dockerfile for development
│── eslint.config.js                # ESLint configuration for code linting
│── package.json                    # Project metadata & dependencies
│── tsconfig.json                   # TypeScript configuration

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
