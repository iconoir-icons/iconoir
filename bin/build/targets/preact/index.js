import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { transform as transformSVG } from '@svgr/core';
import { transform as transformJSX } from 'esbuild';
import {
  dtsContext,
  esmContext,
} from './templates/context.mjs';
import {
  cjsExport,
  dtsExport,
  esmExport,
  indexDTS,
} from './templates/index.mjs';
import { license } from './templates/license.mjs';
import { packageJson } from './templates/package.mjs';
import { readme } from './templates/readme.mjs';

async function setupDist(distPath) {
  await rm(distPath, { recursive: true, force: true });

  const distDir = join(distPath, 'dist');
  await mkdir(distDir, { recursive: true });

  const cjsDist = join(distDir, 'cjs');
  const esmDist = join(distDir, 'esm');

  await mkdir(cjsDist, { recursive: true });
  await mkdir(esmDist, { recursive: true });
}

async function addRootFiles(distPath) {
  const distDir = distPath;

  const readmePath = join(distDir, 'README.md');
  const licensePath = join(distDir, 'LICENSE');
  const packagePath = join(distDir, 'package.json');

  const packageFile = await readFile('package.json');
  const packageMeta = JSON.parse(packageFile);
  const packageJsonContent = packageJson(packageMeta.version);

  await writeFile(readmePath, readme);
  await writeFile(licensePath, license);
  await writeFile(packagePath, packageJsonContent);
}

async function buildIcons(distPath, icons) {
  const variants = Object.keys(icons);

  const distDir = join(distPath, 'dist');
  const esmDist = join(distDir, 'esm');
  const cjsDist = join(distDir, 'cjs');

  let esmIndex = '';
  let cjsIndex = '';
  let dtsIndex = indexDTS;

  for (const variant of variants) {
    const esmPath = join(esmDist, variant);
    const cjsPath = join(cjsDist, variant);

    let variantEsmIndex = '';
    let variantCjsIndex = '';
    let variantDtsIndex = indexDTS;

    await mkdir(esmPath, { recursive: true });
    await mkdir(cjsPath, { recursive: true });

    for (const icon of icons[variant]) {
      const svgContent = await readFile(icon.path);

      const jsxContent = await transformSVG(svgContent, {
        plugins: ['@svgr/plugin-jsx'],
        icon: true,
        jsxRuntime: 'automatic',
        importSource: 'preact',
      }, { componentName: icon.pascalNameVariant });

      const esmContent = (await transformJSX(jsxContent, {
        loader: 'jsx',
        format: 'esm',
        target: 'es2020',
      })).code;

      const cjsContent = (await transformJSX(jsxContent, {
        loader: 'jsx',
        format: 'cjs',
        target: 'es2020',
      })).code;

      const esmFilePath = join(esmPath, `${icon.pascalName}.mjs`);
      const cjsFilePath = join(cjsPath, `${icon.pascalName}.js`);

      await writeFile(esmFilePath, esmContent);
      await writeFile(cjsFilePath, cjsContent);

      esmIndex += esmExport(
        `./${variant}/${icon.pascalName}.mjs`,
        icon.pascalNameVariant,
      );

      cjsIndex += cjsExport(
        `./${variant}/${icon.pascalName}.js`,
        icon.pascalNameVariant,
      );

      dtsIndex += dtsExport(
        `./${variant}/${icon.pascalName}`,
        icon.pascalNameVariant,
      );

      variantEsmIndex += esmExport(
        `./${icon.pascalName}.mjs`,
        icon.pascalNameVariant,
      );

      variantCjsIndex += cjsExport(
        `./${icon.pascalName}.js`,
        icon.pascalNameVariant,
      );

      variantDtsIndex += dtsExport(
        `./${icon.pascalName}`,
        icon.pascalNameVariant,
      );
    }

    await writeFile(join(esmPath, 'index.mjs'), variantEsmIndex);
    await writeFile(join(cjsPath, 'index.js'), variantCjsIndex);

    const variantDtsPath = join(distDir, variant);
    await mkdir(variantDtsPath, { recursive: true });

    const variantDtsFilePath = join(variantDtsPath, 'index.d.ts');
    await writeFile(variantDtsFilePath, variantDtsIndex);
  }

  await writeFile(join(esmDist, 'index.mjs'), esmIndex);
  await writeFile(join(cjsDist, 'index.js'), cjsIndex);
  await writeFile(join(distDir, 'index.d.ts'), dtsIndex);
}

async function addDefaultVariants(distPath, icons, defaultVariant) {
  const distDir = join(distPath, 'dist');
  const esmDist = join(distDir, 'esm');
  const cjsDist = join(distDir, 'cjs');

  const esmIndexPath = join(esmDist, 'index.mjs');
  const cjsIndexPath = join(cjsDist, 'index.js');
  const dtsIndexPath = join(distDir, 'index.d.ts');

  let esmIndex = await readFile(esmIndexPath, 'utf-8');
  let cjsIndex = await readFile(cjsIndexPath, 'utf-8');
  let dtsIndex = await readFile(dtsIndexPath, 'utf-8');

  for (const icon of icons[defaultVariant]) {
    esmIndex += esmExport(
      `./${defaultVariant}/${icon.pascalName}.mjs`,
      icon.pascalName,
    );

    cjsIndex += cjsExport(
      `./${defaultVariant}/${icon.pascalName}.js`,
      icon.pascalName,
    );

    dtsIndex += dtsExport(
      `./${defaultVariant}/${icon.pascalName}`,
      icon.pascalName,
    );
  }

  await writeFile(esmIndexPath, esmIndex);
  await writeFile(cjsIndexPath, cjsIndex);
  await writeFile(dtsIndexPath, dtsIndex);
}

async function addContexts(distPath) {
  const distDir = join(distPath, 'dist');
  const esmDist = join(distDir, 'esm');
  const cjsDist = join(distDir, 'cjs');

  const esmContextPath = join(esmDist, 'context.mjs');
  const cjsContextPath = join(cjsDist, 'context.js');
  const dtsContextPath = join(distDir, 'context.d.ts');

  const jsxContext = esmContext();

  const esmContextContent = (await transformJSX(jsxContext, {
    loader: 'jsx',
    format: 'esm',
    target: 'es2020',
  })).code;

  const cjsContextContent = (await transformJSX(jsxContext, {
    loader: 'jsx',
    format: 'cjs',
    target: 'es2020',
  })).code;

  await writeFile(esmContextPath, esmContextContent);
  await writeFile(cjsContextPath, cjsContextContent);
  await writeFile(dtsContextPath, dtsContext());

  const esmIndexPath = join(esmDist, 'index.mjs');
  const cjsIndexPath = join(cjsDist, 'index.js');
  const dtsIndexPath = join(distDir, 'index.d.ts');

  let esmIndex = await readFile(esmIndexPath, 'utf-8');
  let cjsIndex = await readFile(cjsIndexPath, 'utf-8');
  let dtsIndex = await readFile(dtsIndexPath, 'utf-8');

  esmIndex += '\nexport * from "./context.mjs";\n';
  cjsIndex += '\nObject.assign(exports, require("./context.js"));\n';
  dtsIndex += '\nexport * from "./context";\n';

  await writeFile(esmIndexPath, esmIndex);
  await writeFile(cjsIndexPath, cjsIndex);
  await writeFile(dtsIndexPath, dtsIndex);
}

export default async function build(...args) {
  const [
    { icons, global: { defaultVariant } },
    { path: distPath },
  ] = args;

  await setupDist(distPath);
  await addRootFiles(distPath);
  await buildIcons(distPath, icons);
  await addDefaultVariants(distPath, icons, defaultVariant);
  await addContexts(distPath);
}
