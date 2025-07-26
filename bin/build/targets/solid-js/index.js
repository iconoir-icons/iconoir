import fs from 'node:fs/promises';
import path from 'node:path';
import { build, defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solidPlugin from 'vite-plugin-solid';
import { generateExport } from '../../lib/import-export.js';
import contextTemplate from './resources/context-template.js';
import iconTemplate from './resources/icon-template.js';

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'src');
  const distDir = path.join(target.path, 'dist');

  await fs.rm(outDir, { recursive: true });
  await fs.rm(distDir, { recursive: true });

  await fs.mkdir(outDir, { recursive: true });

  await fs.writeFile(
    path.join(outDir, 'IconoirContext.tsx'),
    contextTemplate(),
  );

  const mainIndexContent = [
    generateExport('useIconoir', './IconoirContext.tsx'),
    generateExport('IconoirProvider', './IconoirContext.tsx'),
  ];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantOutDir = path.join(outDir, variant);
    await fs.mkdir(variantOutDir, { recursive: true });

    const variantIndexContent = [
      generateExport('useIconoir', '../IconoirContext.tsx'),
      generateExport('IconoirProvider', '../IconoirContext.tsx'),
    ];

    const generateIconFile = async (src, iconName, solidFileName) => {
      const iconContent = await fs.readFile(src, 'utf8');

      const componentContent = iconTemplate(
        '../IconoirContext.tsx',
        iconName,
        iconContent,
      );

      const vuePath = path.join(variantOutDir, solidFileName);

      return fs.writeFile(vuePath, componentContent);
    };

    for (const icon of icons) {
      const solidFileName = `${icon.pascalName}.tsx`;

      promises.push(
        generateIconFile(icon.path, icon.pascalName, solidFileName),
      );

      const mainIndexComponentName
        = variant === ctx.global.defaultVariant
          ? icon.pascalName
          : [icon.pascalName, 'as', icon.pascalNameVariant].join(' ');

      mainIndexContent.push(
        generateExport(
          `${mainIndexComponentName}`,
          `./${variant}/${solidFileName}`,
        ),
      );

      variantIndexContent.push(
        generateExport(`${icon.pascalName}`, `./${solidFileName}`),
      );
    }

    promises.push(
      fs.writeFile(path.join(variantOutDir, 'index.ts'), variantIndexContent),
    );
  }

  promises.push(fs.writeFile(path.join(outDir, 'index.ts'), mainIndexContent));

  await Promise.all(promises);

  const config = {
    root: target.path,
    logLevel: 'silent',
    build: {
      outDir: 'dist',
      lib: {
        entry: path.join('src', 'index.ts'),
        fileName: (format, entryName) => {
          return format === 'cjs' ? `${entryName}.js` : `esm/${entryName}.mjs`;
        },
        formats: ['cjs', 'es'],
      },
      rollupOptions: {
        external: ['solid-js'],
      },
      emptyOutDir: false,
    },
    plugins: [
      solidPlugin(),
      dts({
        include: ['src'],
      }),
    ],
  };

  await build(defineConfig(config));

  for (const variant of Object.keys(ctx.icons)) {
    config.build.outDir = path.join('dist', variant);
    config.build.lib.entry = path.join('src', variant, 'index.ts');

    await build(config);
  }
};
