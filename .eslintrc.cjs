module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'class',
          'export',
          'import',
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: ['block', 'block-like', 'class', 'export', 'import'],
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-block-like',
          'multiline-const',
          'multiline-expression',
          'multiline-let',
          'multiline-var',
        ],
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
    ],

    'prettier/prettier': ['error'],
  },
};
