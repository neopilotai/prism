import baseReactConfig from "@khulnasoft/standard/eslint/react.mjs";
import {defineConfig} from "eslint/config";

const config = defineConfig([
  ...baseReactConfig,
  {
    ignores: ["storybook-static/**", "storybook-static"],
  },
]);

export default config;
