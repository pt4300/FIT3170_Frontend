module.exports = {
  env: { browser: true, es6: true },
  extends: ["react-app", "prettier"],
  globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  settings: { react: { version: "detect" } },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "react-app",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module",
      },
      plugins: ["react", "@typescript-eslint"],
    },
  ],
};
