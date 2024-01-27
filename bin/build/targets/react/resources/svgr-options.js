/** @type {import('@svgr/core').Config} */
export const svgrOptions = {
  plugins: ['@svgr/plugin-jsx'],
  icon: true,
  ref: true,
  typescript: true,
  svgProps: {
    width: '1.5em',
    height: '1.5em',
    color: 'currentColor',
  },
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['path'],
            attributes: ['strokeWidth'],
          },
          'remove-stroke-width',
        ],
      ],
    },
  },
};

/** @type {import('@svgr/core').Config} */
export const nativeSvgrOptions = {
  ...svgrOptions,
  native: true,
  jsx: {
    babelConfig: {
      plugins: [
        ...svgrOptions.jsx.babelConfig.plugins,
        [
          '@svgr/babel-plugin-remove-jsx-attribute',
          {
            elements: ['Svg'],
            attributes: ['xmlns'],
          },
        ],
      ],
    },
  },
};
