import baseReactConfig from "@khulnasoft/standard/eslint/react.mjs";
import {defineConfig} from "eslint/config";

const config = defineConfig([
  ...baseReactConfig,
  {
    rules: {
      "react-hooks/rules-of-hooks": "off",
    },
  },
]);

export default config;
