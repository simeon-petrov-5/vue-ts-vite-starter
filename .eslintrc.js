module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    'plugin:prettier-vue/recommended',
    // "@vue/typescript/recommended",
    // "prettier",
    // 'prettier/vue',
    // "prettier/@typescript-eslint",
    // "./.eslintrc-auto-import.json",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'prettier-vue/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'es5',
      },
    ],
  },
};
