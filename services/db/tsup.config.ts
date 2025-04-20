import { defineConfig } from 'tsup';

export default defineConfig(() => ({
  external: ['bun'],
  clean: true,
  dts: true,
  format: 'esm',
  sourcemap: true,
  entry: {
    index: 'src/index.ts',
  },
}));
