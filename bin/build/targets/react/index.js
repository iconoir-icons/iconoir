import fs from 'node:fs/promises';
import path from 'node:path';
import * as svgr from '@svgr/core';
import * as esbuild from 'esbuild';
import {
  generateExport,
  generateImport,
  toImportPath,
} from '../../lib/import-export.js';
import { getDts } from '../../lib/ts.js';
import iconoirContextTemplate, {
  exports as iconoirContextExports,
} from './resources/context-template.js';
import { getTemplate as getIconTemplate } from './resources/icon-template.js';
import { nativeSvgrOptions, svgrOptions } from './resources/svgr-options.js';

const outDir = 'dist';

const jsTargets = [
  {
    format: 'cjs',
    module: 'commonjs',
    dir: '.',
    ext: 'js',
    dtsExt: 'd.ts',
  },
  {
    format: 'esm',
    module: 'esnext',
    dir: 'esm',
    ext: 'mjs',
    dtsExt: 'd.mts',
  },
];

/** @type {import('esbuild').TransformOptions} */
const defaultEsbuildOptions = { target: 'es6', minify: true };

const defaultTsOptions = {
  declaration: true,
  emitDeclarationOnly: true,
  target: 'es6',
  strict: true,
  esModuleInterop: true,
  skipLibCheck: true,
};

export default async (ctx, target) => {
  const localJsTargets = jsTargets.map((jsTarget) => ({
    ...jsTarget,
  }));

  const promises = [];

  const outPath = path.join(target.path, outDir);

  // Preparation
  // (needs to run in a separate loop, otherwise leads to uncaught exceptions in case of errors in main loop)
  for (const jsTarget of localJsTargets) {
    jsTarget.path = path.join(outPath, jsTarget.dir);

    await fs.mkdir(jsTarget.path, { recursive: true });

    const iconoirContext = iconoirContextTemplate(target.native);

    jsTarget.iconoirContextPath = path.join(
      jsTarget.path,
      `IconoirContext.${jsTarget.ext}`,
    );

    await generateJs(
      jsTarget.iconoirContextPath,
      iconoirContext,
      jsTarget.format,
    );

    const iconoirContextTsxPath = path.join(
      jsTarget.path,
      'IconoirContext.tsx',
    );

    const iconoirContextDtsPath = path.join(
      jsTarget.path,
      `IconoirContext.${jsTarget.dtsExt}`,
    );

    await generateDts(
      iconoirContextTsxPath,
      iconoirContextDtsPath,
      iconoirContext,
      jsTarget.module,
      target.native,
    );

    for (const variant of Object.keys(ctx.icons)) {
      jsTarget.path = path.join(outPath, jsTarget.dir);

      await fs.mkdir(path.join(jsTarget.path, variant), { recursive: true });
    }
  }

  for (const jsTarget of localJsTargets) {
    const mainIndex = prepareIndex(jsTarget);

    for (const [variant, icons] of Object.entries(ctx.icons)) {
      const variantIndex = prepareIndex(jsTarget, variant);

      for (const icon of icons) {
        const mainIndexComponentName = variant === ctx.global.defaultVariant
          ? icon.pascalName
          : icon.pascalNameVariant;

        const jsPath = path.join(
          jsTarget.path,
          variant,
          `${icon.pascalName}.${jsTarget.ext}`,
        );

        mainIndex.add(mainIndexComponentName, jsPath);
        variantIndex.add(icon.pascalName, jsPath);

        if (!jsTarget.iconTemplate) {
          jsTarget.iconTemplate = getIconTemplate(
            target.native,
            toImportPath(
              path.relative(
                path.join(jsTarget.path, variant),
                jsTarget.iconoirContextPath,
              ),
            ),
          );
        }

        const reactComponent = getReactComponent(
          icon.path,
          target.native,
          jsTarget.iconTemplate,
        );

        // Only run for first icon, type is same and can be reused for all the others
        if (!jsTarget.iconDts) {
          jsTarget.iconDts = true;

          // Virtual input path
          const tsxPath = path.join(jsTarget.path, variant, 'icon.tsx');

          const dtsPath = path.join(jsTarget.path, `icon.${jsTarget.dtsExt}`);

          const iconDts = generateDts(
            tsxPath,
            dtsPath,
            reactComponent,
            jsTarget.module,
            target.native,
          );

          promises.push(iconDts);
        }

        const iconJs = generateJs(jsPath, reactComponent, jsTarget.format);

        promises.push(iconJs);
      }

      promises.push(variantIndex.generate());
    }

    promises.push(mainIndex.generate());
  }

  return Promise.all(promises);
};

async function getReactComponent(iconPath, native, template) {
  const iconContent = await fs.readFile(iconPath, 'utf8');

  const options = {
    ...(native ? nativeSvgrOptions : svgrOptions),
    template,
  };

  return svgr.transform(iconContent, options);
}

async function generateDts(inputPath, outputPath, input, module, native) {
  const dts = getDts(inputPath, await input, {
    ...defaultTsOptions,
    jsx: native ? 'react-native' : 'react',
    module,
    ...(module === 'esnext' && { moduleResolution: 'bundler' }),
  });

  return fs.writeFile(outputPath, dts);
}

async function generateJs(outputPath, input, format) {
  const { code } = await esbuild.transform(await input, {
    ...defaultEsbuildOptions,
    loader: 'tsx',
    format,
  });

  return fs.writeFile(outputPath, code);
}

function prepareIndex(jsTarget, variant) {
  const outputPath = path.join(jsTarget.path, variant ?? '');

  const iconoirContextPath = toImportPath(
    path.relative(outputPath, jsTarget.iconoirContextPath),
  );

  const iconoirContext = generateExport(
    iconoirContextExports,
    iconoirContextPath,
  );

  const content = [iconoirContext];

  const iconJsPath = toImportPath(
    path.relative(outputPath, path.join(jsTarget.path, `icon.${jsTarget.ext}`)),
  );

  const iconDtsImport = generateImport('Icon', iconJsPath);

  const dtsContent = [iconoirContext, iconDtsImport, 'type I = typeof Icon;'];

  function add(name, iconPath) {
    const iconImportPath = toImportPath(path.relative(outputPath, iconPath));

    content.push(generateExport(`default as ${name}`, iconImportPath));

    dtsContent.push(`export declare const ${name}: I;`);
  }

  function generate() {
    const indexJs = generateIndexJs(
      outputPath,
      content,
      jsTarget.format,
      jsTarget.ext,
    );

    const indexDts = generateIndexDts(outputPath, dtsContent, jsTarget.dtsExt);

    return Promise.all([indexJs, indexDts]);
  }

  return { add, generate };
}

async function generateIndexJs(outputDir, content, format, ext) {
  const { code } = await esbuild.transform(content.join(''), {
    minify: true,
    format,
  });

  return fs.writeFile(path.join(outputDir, `index.${ext}`), code);
}

async function generateIndexDts(outputDir, content, dtsExt) {
  return fs.writeFile(path.join(outputDir, `index.${dtsExt}`), content);
}
