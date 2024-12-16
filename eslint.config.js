// @ts-check
import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default antfu({
  typescript: true,
  formatters: true,
  stylistic: {
    semi: true,
    overrides: {
      'style/arrow-parens': 'error',
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
    },
  },
  javascript: {
    overrides: {
      'antfu/no-top-level-await': 'off',
    },
  },
  ignores: [
    'css/*.css',
    'examples/react-native/',
    'iconoir.com/out/',
    'packages/iconoir-flutter/.dart_tool/',
    'packages/iconoir-flutter/build/',
    'packages/iconoir-flutter/example/',

  ],
  rules: {
    'style/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: [
          'block',
          'block-like',
          'cjs-export',
          'class',
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
        next: [
          'block',
          'block-like',
          'cjs-export',
          'class',
        ],
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
    ],
  },
}, {
  files: ['iconoir.com/**'],
  plugins: {
    '@next/next': nextPlugin,
    'react': reactPlugin,
    'react-hooks': hooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
  },
  settings: {
    next: {
      rootDir: 'iconoir.com/',
    },
    react: {
      version: 'detect',
    },

  },
  // @ts-ignore
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,
    ...reactPlugin.configs.recommended.rules,
    ...hooksPlugin.configs.recommended.rules,
    'import/no-anonymous-default-export': 'warn',
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'react/jsx-no-target-blank': 'off',
  },
});
