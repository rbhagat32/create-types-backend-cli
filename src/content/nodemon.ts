export const nodemonContent = `{
  "watch": ["src"],
  "ext": "ts,js,json",
  "ignore": ["dist"],
  "exec": "tsx watch src/app.ts",
  "legacyWatch": true
}`;
