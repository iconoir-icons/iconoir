import { transform } from '@svgr/core';
import iconTemplate from './template.js';
import path from 'node:path';
import fs from 'node:fs/promises';

const svgrOptions = {
  plugins: ['@svgr/plugin-jsx'],
  icon: true,
  ref: true,
  template: iconTemplate,
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

const nativeSvgrOptions = {
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

const iconDts = [
  'import { Ref, forwardRef, SVGProps } from "react";',
  'type IconComponent = forwardRef<Ref<SVGSVGElement>, SVGProps<SVGSVGElement>>;',
];

const nativeIconDts = [
  'import { Ref, forwardRef } from "react";',
  'import Svg, { SvgProps } from "react-native-svg";',
  'type IconComponent = forwardRef<Ref<Svg>, SvgProps>;',
];

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'src');

  const mainIndexContent = [`"use client";`, genIconoirContextExport()];
  const mainIndexDtsContent = [
    ...(target.native ? nativeIconDts : iconDts),
    genIconoirContextExport(),
  ];
  const mainIndexDtsExports = [];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantOutDir = path.join(outDir, variant);
    await fs.mkdir(variantOutDir, { recursive: true });

    const variantIndexContent = [
      `"use client";`,
      genIconoirContextExport('..'),
    ];
    const variantIndexDtsContent = [
      ...(target.native ? nativeIconDts : iconDts),
      genIconoirContextExport('..'),
    ];

    const generateIconFile = async (src, componentName, jsxFileName) => {
      const iconContent = await fs.readFile(src, 'utf8');

      const componentContent = await transform(
        iconContent,
        target.native ? nativeSvgrOptions : svgrOptions,
        {
          componentName,
        },
      );

      const jsxPath = path.join(variantOutDir, jsxFileName);

      return fs.writeFile(jsxPath, componentContent);
    };

    for (const icon of icons) {
      const jsxFileName = `${icon.pascalName}.jsx`;

      promises.push(generateIconFile(icon.path, icon.pascalName, jsxFileName));

      const mainIndexComponentName =
        variant === ctx.global.defaultVariant
          ? icon.pascalName
          : icon.pascalNameVariant;

      mainIndexContent.push(
        genExport(
          `default as ${mainIndexComponentName}`,
          `./${variant}/${jsxFileName}`,
        ),
      );

      mainIndexDtsContent.push(
        `declare const ${mainIndexComponentName}: IconComponent;`,
      );

      mainIndexDtsExports.push(mainIndexComponentName);

      variantIndexContent.push(
        genExport(`default as ${icon.pascalName}`, `./${jsxFileName}`),
      );

      variantIndexDtsContent.push(
        `declare const ${icon.pascalName}: IconComponent;`,
      );
    }

    variantIndexDtsContent.push(
      genExport(icons.map((icon) => icon.pascalName)),
    );

    promises.push(
      fs.writeFile(path.join(variantOutDir, 'index.js'), variantIndexContent),
      fs.writeFile(
        path.join(variantOutDir, 'index.d.ts'),
        variantIndexDtsContent,
      ),
    );
  }

  mainIndexDtsContent.push(genExport(mainIndexDtsExports));

  promises.push(
    fs.writeFile(path.join(outDir, 'index.js'), mainIndexContent),
    fs.writeFile(path.join(outDir, 'index.d.ts'), mainIndexDtsContent),
  );

  return Promise.all(promises);
};

function genExport(name, from) {
  const ex = `export {${name.toString()}}`;

  return from ? `${ex} from "${from}";` : `${ex};`;
}

function genIconoirContextExport(path = '.') {
  return genExport(
    ['IconoirProvider', 'IconoirContext', 'IconoirContextValue'],
    `${path}/IconoirContext`,
  );
}
