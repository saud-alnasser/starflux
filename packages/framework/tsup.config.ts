import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  target: 'es2022',
  tsconfig: 'tsconfig.json',
  clean: true,
  dts: true,
  sourcemap: true,
  treeshake: true,
  minify: false,
  bundle: true,
  skipNodeModulesBundle: true,
});
