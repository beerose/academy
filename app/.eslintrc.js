module.exports = {
  extends: "chop-chop/prettier",
  rules: {
    "sonarjs/no-duplicate-string": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "no-nested-ternary": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^React$|_",
      },
    ],
    // This rule is good, but requires editing
    // we don't want to worry about it
    // during live coding.
    "jsx-a11y/label-has-associated-control": "off",
    "eslint-disable-next-line jsx-a11y/anchor-is-valid": 0,
    // We preserve JSX
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    {
      files: ["pages/**/*.tsx", "pages/**/*.jsx"],
      rules: { "import/no-default-export": "off" },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
