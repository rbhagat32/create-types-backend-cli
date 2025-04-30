export const tsConfigContent = `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "rootDir": "src",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "baseUrl": "./",
    "paths": {
        "@/*": ["src/*"]
    },
    "typeRoots": ["./src/types", "./node_modules/@types"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts"],
  "exclude": ["node_modules", "dist"]
}
`;
