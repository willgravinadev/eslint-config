import {
  default10 as default3,
  default6 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/prettier.ts
var prettier = [
  {
    name: "willgravinadev:prettier",
    plugins: {
      prettier: default3
    },
    rules: {
      // Avoid conflicts
      ...default2.rules,
      "prettier/prettier": [
        "error",
        {
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          semi: false,
          singleQuote: true,
          quoteProps: "as-needed",
          jsxSingleQuote: false,
          trailingComma: "es5",
          bracketSpacing: true,
          arrowParens: "always",
          endOfLine: "auto",
          bracketSameLine: false
        }
      ],
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off"
    }
  }
];

export {
  prettier
};
