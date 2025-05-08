import {
  sonarjsPlugin
} from "./chunk-EVFEIXMB.js";

// src/configs/sonarjs.ts
var sonarjs = [
  {
    name: "willgravinadev:sonarjs",
    plugins: {
      sonarjs: sonarjsPlugin
    },
    rules: {
      ...sonarjsPlugin.configs.recommended.rules,
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-nested-functions": "off",
      "sonarjs/pseudo-random": "off"
    }
  }
];

export {
  sonarjs
};
