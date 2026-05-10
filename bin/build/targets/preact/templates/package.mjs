export const packageJson = version => JSON.stringify({
  name: "iconoir-preact",
  version: version,
  description: "Preact library for Iconoir.",
  license: "MIT",

  sideEffects: false,

  main: "./dist/cjs/index.js",
  module: "./dist/esm/index.mjs",
  types: "./dist/index.d.ts",

  exports: {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/esm/index.mjs",
      require: "./dist/cjs/index.js"
    },

    "./regular": {
      types: "./dist/regular/index.d.ts",
      import: "./dist/esm/regular/index.mjs",
      require: "./dist/cjs/regular/index.js"
    },

    "./solid": {
      types: "./dist/solid/index.d.ts",
      import: "./dist/esm/solid/index.mjs",
      require: "./dist/cjs/solid/index.js"
    }
  },

  files: ["dist"],

  peerDependencies: {
    preact: "^10.0.0"
  },

  keywords: [
    "icons",
    "svg",
    "preact",
    "iconoir"
  ]
}, null, 2);

