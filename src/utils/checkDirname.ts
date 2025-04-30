export const checkDirname = (name: string): boolean => {
  const trimmed = name.trim();

  // Basic file system checks (Windows/macOS/Linux)
  if (!trimmed || /[. ]$/.test(trimmed)) return false;
  const invalidChars = /[<>:"/\\|?*\x00-\x1F]/;
  if (invalidChars.test(trimmed)) return false;

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
  if (reserved.includes(trimmed.toUpperCase())) return false;

  // NPM package.json "name" restrictions
  if (trimmed.length > 214) return false;
  if (trimmed.startsWith(".") || trimmed.startsWith("_")) return false;
  if (/\s/.test(trimmed)) return false;
  if (!/^[a-z0-9\-~][a-z0-9\-._~]*$/.test(trimmed)) return false;

  // Disallow scoped names if used as folder (e.g., @myorg/package)
  if (trimmed.startsWith("@")) return false;

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
  if (coreModules.includes(trimmed)) return false;

  return true;
};
