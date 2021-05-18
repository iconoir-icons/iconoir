import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

export default {
  external: ['react', 'prop-types'],
  input: 'src/index.js',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'dist/es',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/react'],
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.d.ts', '.tsx'],
    }),
    copy({
      targets: [
        { src: 'src/index.d.ts', dest: 'dist' },
      ],
    }),
  ],
};
