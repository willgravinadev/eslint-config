import {
  turboPlugin
} from "./chunk-EVFEIXMB.js";

// src/configs/turbo.ts
var turbo = [
  {
    name: "willgravinadev:turbo",
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      ...turboPlugin.configs.recommended.rules
    }
  }
];

export {
  turbo
};
