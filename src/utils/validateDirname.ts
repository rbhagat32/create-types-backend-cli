import chalk from "chalk";

export const validateDirname = (name: string): string => {
  if (!name) return "";
  if (name === ".") return name;

  let trimmed = name.trim();

  // Replace all whitespace with hyphens
  trimmed = trimmed.replace(" ", "-");

  // Basic file system checks (Windows/macOS/Linux)
  if (/[. ]$/.test(trimmed)) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }
  const invalidChars = /[<>:"/\\|?*\x00-\x1F]/;
  if (invalidChars.test(trimmed)) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }

  // Reserved Windows filenames
  const reserved = [
    "CON",
    "PRN",
    "AUX",
    "NUL",
    "COM1",
    "COM2",
    "COM3",
    "COM4",
    "COM5",
    "COM6",
    "COM7",
    "COM8",
    "COM9",
    "LPT1",
    "LPT2",
    "LPT3",
    "LPT4",
    "LPT5",
    "LPT6",
    "LPT7",
    "LPT8",
    "LPT9",
  ];
  if (reserved.includes(trimmed.toUpperCase())) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }

  // NPM package.json "name" restrictions
  if (trimmed.length > 214) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }
  if (trimmed.startsWith(".") || trimmed.startsWith("_")) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }
  if (/\s/.test(trimmed)) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }
  if (!/^[a-z0-9\-~][a-z0-9\-._~]*$/.test(trimmed)) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }

  // Disallow scoped names if used as folder (e.g., @myorg/package)
  if (trimmed.startsWith("@")) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }

  // Core Node.js modules (optional stricter check)
  const coreModules = [
    "fs",
    "http",
    "https",
    "url",
    "util",
    "path",
    "os",
    "crypto",
    "stream",
    "buffer",
    "zlib",
    "events",
    "assert",
    "dns",
    "net",
    "tls",
    "child_process",
  ];
  if (coreModules.includes(trimmed)) {
    console.log(
      chalk.red(
        "❌ Invalid project name: proceeding with default name => backend"
      )
    );
    return "backend";
  }

  return trimmed;
};
