module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react", "prettier", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",

    "no-console": ["warn", { allow: ["tron"] }],
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "warn",

    // TypeScript
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-expressions": "error",

    // React
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "react/prop-types": "off",

    // React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
