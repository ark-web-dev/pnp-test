module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "@hh.ru/eslint-config", 
    "prettier",
  ],
  ignorePatterns: [
    "dist", 
    ".eslintrc.cjs", 
    "custom.d.ts", 
    "*.config.ts",
  ],
  overrides: [
    {
      files: "./src*.{ts,tsx}",
      extends: "@hh.ru/eslint-config/typescript",
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  plugins: [],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/react-in-jsx-scope": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
