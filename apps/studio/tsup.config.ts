import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
  outExtension({ format }) {
    if (format === 'cjs') return { js: '.min.js' };
    return { js: '.mjs' };
  },
  minify: true,
  sourcemap: true,
  target: 'es2020',
  bundle: true,
  splitting: false,
  treeshake: true,
  clean: true,
});
