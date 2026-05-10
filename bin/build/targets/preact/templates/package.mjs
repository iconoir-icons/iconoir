export function packageJson(version) {
  return JSON.stringify({
    name: 'iconoir-preact',
    version,
    description: 'Preact library for Iconoir.',
    license: 'MIT',

    keywords: [
      'icons',
      'svg',
      'preact',
      'iconoir',
    ],

    sideEffects: false,

    exports: {
      '.': {
        types: './dist/index.d.ts',
        import: './dist/esm/index.mjs',
        require: './dist/cjs/index.js',
      },

      './regular': {
        types: './dist/regular/index.d.ts',
        import: './dist/esm/regular/index.mjs',
        require: './dist/cjs/regular/index.js',
      },

      './solid': {
        types: './dist/solid/index.d.ts',
        import: './dist/esm/solid/index.mjs',
        require: './dist/cjs/solid/index.js',
      },
    },

    main: './dist/cjs/index.js',
    module: './dist/esm/index.mjs',
    types: './dist/index.d.ts',
    files: ['dist'],

    peerDependencies: {
      preact: '^10.0.0',
    },
  }, null, 2);
}
