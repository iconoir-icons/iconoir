import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';
import fs from 'fs';

export default () => {
  const filenames = fs.readdirSync(path.resolve(process.cwd(), 'src'));
  const cwd = process.cwd();

  return defineConfig({
    build: {
      outDir: 'dist',
      minify: 'terser',
      lib: {
        entry: filenames.map((name) => path.resolve(cwd, `src/${name}`)),
        fileName: (format, name) =>
          format === 'cjs' ? `${name}.js` : `esm/${name}.mjs`,
        formats: ['cjs', 'es'],
      },
      rollupOptions: {
        external: ['vue'],
      },
    },
    plugins: [
      vue({
        isProduction: true,
      }),
      dts(),
    ],
  });
};
