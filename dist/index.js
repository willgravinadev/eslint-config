import {
  unicorn
} from "./chunk-ULFFTF3O.js";
import {
  next
} from "./chunk-5PBZYFGM.js";
import {
  playwright
} from "./chunk-XEVR5DVR.js";
import {
  prettier
} from "./chunk-2MV6FOLZ.js";
import {
  react
} from "./chunk-PXYSHNNJ.js";
import {
  sonarjs
} from "./chunk-XGHCLZ7X.js";
import {
  testingLibrary
} from "./chunk-26EYXMZN.js";
import {
  turbo
} from "./chunk-I27GNKPB.js";
import {
  typescript
} from "./chunk-5LF2MZ6M.js";
import {
  comments
} from "./chunk-Z3LBQDDY.js";
import {
  ignores
} from "./chunk-QOJ3KGUY.js";
import {
  GLOB_E2E,
  GLOB_EXCLUDE,
  GLOB_JS,
  GLOB_JSX,
  GLOB_TEST,
  GLOB_TS,
  GLOB_TSX
} from "./chunk-KLT7SCSF.js";
import {
  importSort
} from "./chunk-FFU7SRFQ.js";
import {
  imports
} from "./chunk-53Y6PG22.js";
import {
  javascript
} from "./chunk-GAQPMXQK.js";
import "./chunk-EVFEIXMB.js";

// src/index.ts
import { isPackageExists } from "local-pkg";
var hasTypeScript = isPackageExists("typescript");
var willgravinadev = async (options = {}, ...userConfigs) => {
  const {
    typescript: enableTypeScript = hasTypeScript,
    react: enableReact = false,
    turbo: enableTurbo = false,
    next: enableNext = false,
    playwright: enablePlaywright = false,
    testingLibrary: enableTestingLibrary = false,
    gitignore: enableGitignore = true
  } = options;
  const configs = [];
  if (enableGitignore) {
    configs.push((await import("eslint-config-flat-gitignore")).default());
  }
  configs.push(
    ...ignores,
    ...javascript,
    ...unicorn,
    ...comments,
    ...importSort,
    ...sonarjs,
    ...imports,
    ...prettier
  );
  if (enableTypeScript) {
    configs.push(...typescript(options));
  }
  if (enableReact) {
    configs.push(...react(options));
  }
  if (enableTurbo) {
    configs.push(...turbo);
  }
  if (enableNext) {
    configs.push(...next);
  }
  if (enablePlaywright) {
    configs.push(...playwright);
  }
  if (enableTestingLibrary) {
    configs.push(...testingLibrary);
  }
  configs.push(...userConfigs);
  return configs;
};
var index_default = willgravinadev;
export {
  GLOB_E2E,
  GLOB_EXCLUDE,
  GLOB_JS,
  GLOB_JSX,
  GLOB_TEST,
  GLOB_TS,
  GLOB_TSX,
  index_default as default
};
