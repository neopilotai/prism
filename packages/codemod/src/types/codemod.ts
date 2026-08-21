export const codemods = [
  'import-prismui',
  'package-json-package-name',
  'prismui-provider',
  'tailwindcss-prismui',
  'css-variables',
  'npmrc'
] as const;

export type Codemods = (typeof codemods)[number];
