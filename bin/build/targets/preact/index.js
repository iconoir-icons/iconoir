import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { packageJson } from "./templates/package.mjs";
import { readme } from "./templates/readme.mjs";
import { license } from "./templates/license.mjs";
import { transform as transformESM } from "@svgr/core";
import { transform as transformCJS } from "esbuild";
import {
  indexDTS,
  dtsExport,
  cjsExport,
  esmExport,
} from "./templates/index.mjs";

async function setupDist(distPath) {
  await rm(distPath, { recursive: true, force: true });

  const distDir = join(distPath, "dist");
  await mkdir(distDir, { recursive: true });

  const cjsDist = join(distDir, "cjs");
  const esmDist = join(distDir, "esm");

  await mkdir(cjsDist, { recursive: true });
  await mkdir(esmDist, { recursive: true });
}

async function addRootFiles(distPath) {
  const distDir = distPath;
  
  const readmePath = join(distDir, "README.md");
  const licensePath = join(distDir, "LICENSE");
  const packagePath = join(distDir, "package.json");

  const packageFile = await readFile("package.json");
  const packageMeta = JSON.parse(packageFile);
  const packageJsonContent = packageJson(packageMeta.version);
  
  await writeFile(readmePath, readme);
  await writeFile(licensePath, license);
  await writeFile(packagePath, packageJsonContent);
}

async function buildIcons(distPath, icons) {
  const variants = Object.keys(icons);

  const distDir = join(distPath, "dist");
  const esmDist = join(distDir, "esm");
  const cjsDist = join(distDir, "cjs");

  let esmIndex = "";
  let cjsIndex = "";
  let dtsIndex = indexDTS;
  
  for (const variant of variants) {
    const esmPath = join(esmDist, variant);
    const cjsPath = join(cjsDist, variant);

    let variantEsmIndex = "";
    let variantCjsIndex = "";
    let variantDtsIndex = indexDTS;
    
    await mkdir(esmPath, { recursive: true });
    await mkdir(cjsPath, { recursive: true });
    
    for (const icon of icons[variant]) {
      const svgContent = await readFile(icon.path);

      const esmContent = await transformESM(svgContent, {
        plugins: ['@svgr/plugin-jsx'],
        icon: true,
        jsxRuntime: "automatic",
        importSource: "preact",
      }, { componentName: icon.pascalNameVariant });

      const cjsContent = (await transformCJS(esmContent, {
        loader: "jsx",
        format: "cjs",
        target: "es2020",
      })).code;

      const esmFilePath = join(esmPath, `${icon.pascalName}.mjs`);
      const cjsFilePath = join(cjsPath, `${icon.pascalName}.js`);

      await writeFile(esmFilePath, esmContent);
      await writeFile(cjsFilePath, cjsContent);

      esmIndex += esmExport(
        `./${variant}/${icon.pascalName}.mjs`,
        icon.pascalName
      );
      
      cjsIndex += cjsExport(
        `./${variant}/${icon.pascalName}.js`,
        icon.pascalName
      );

      dtsIndex += dtsExport(
        `./${variant}/${icon.pascalName}`,
        icon.pascalName
      );

      variantEsmIndex += esmExport(
        `./${icon.pascalName}.mjs`,
        icon.pascalName
      );
      
      variantCjsIndex += cjsExport(
        `./${icon.pascalName}.js`,
        icon.pascalName
      );

      variantDtsIndex += dtsExport(
        `./${icon.pascalName}`,
        icon.pascalName
      );
    }
    
    await writeFile(join(esmPath, "index.mjs"), variantEsmIndex);
    await writeFile(join(cjsPath, "index.js"), variantCjsIndex);

    const variantDtsPath = join(distDir, variant);
    await mkdir(variantDtsPath, { recursive: true });
    
    const variantDtsFilePath = join(variantDtsPath, "index.d.ts");
    await writeFile(variantDtsFilePath, variantDtsIndex);
  }
  
  await writeFile(join(esmDist, "index.mjs"), esmIndex);
  await writeFile(join(cjsDist, "index.js"), cjsIndex);
  await writeFile(join(distDir, "index.d.ts"), dtsIndex);
}

export default async function build(...args) {
  const [{ icons }, { path: distPath }] = args;

  await setupDist(distPath);
  await addRootFiles(distPath);
  await buildIcons(distPath, icons);
}

