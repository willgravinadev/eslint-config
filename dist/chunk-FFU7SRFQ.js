import {
  default12 as default2
} from "./chunk-EVFEIXMB.js";

// src/configs/import-sort.ts
var importSort = [
  {
    name: "willgravinadev:import-sort",
    plugins: {
      "simple-import-sort": default2
    },
    rules: {
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            // Type imports
            [
              "^.*\\u0000$",
              "^node:.*\\u0000$",
              "^@?\\w.*\\u0000$",
              "^\\.\\..*\\u0000$",
              "^\\..*\\u0000$"
            ],
            // Side effect imports (e.g., `import 'some-module'`)
            ["^\\u0000"],
            // Node.js builtins prefixed with `node:`
            ["^node:"],
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter
            ["^@?\\w"],
            // Absolute imports (e.g., `import something from 'src/utils'`)
            ["^[^.]"],
            // Parent directory relative imports (e.g., `import something from '../utils'`)
            ["^\\.\\."],
            // Current directory relative imports (e.g., `import something from './utils'`)
            ["^\\."]
          ]
        }
      ],
      "simple-import-sort/exports": "error"
    }
  }
];

export {
  importSort
};
