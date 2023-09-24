import { toHtml } from 'hast-util-to-html';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'svg-parser';
import componentTemplate from './templates/vue/icon-template.cjs';
import indexTemplate from './templates/vue/index-template.cjs';
import providerKeyTemplate from './templates/vue/provider-key-template.cjs';
import providerTemplate from './templates/vue/provider-template.cjs';

export async function buildVueIcons(srcDir, { outDir = './out/' }) {
  const files = await fs.readdir(srcDir, 'utf8');

  const providerKeyFileName = 'providerKey';
  const providerKey = providerKeyTemplate();
  await fs.writeFile(
    path.join(outDir, providerKeyFileName + '.ts'),
    providerKey,
    'utf8'
  );

  const fileNames = [];
  for (const file of files) {
    const svgRaw = await fs.readFile(path.join(srcDir, file), 'utf8');

    const svgAst = parse(svgRaw);
    // Bind iconProps of the provider to the svg root
    svgAst.children[0].properties['v-bind'] = 'context';
    const svgString = toHtml(svgAst);

    const component = componentTemplate(svgString, providerKeyFileName);
    const pascalCaseFileName = file
      .replaceAll(/[\s-]([\w\d])/g, (_, cg1) => cg1.toUpperCase())
      .replace(/^\w/, (m) => m.toUpperCase())
      .replace('.svg', '.vue');
    await fs.writeFile(
      path.join(outDir, pascalCaseFileName),
      component,
      'utf8'
    );

    fileNames.push(pascalCaseFileName);
  }

  const providerFileName = 'IconoirProvider.vue';
  const provider = providerTemplate(providerKeyFileName);
  await fs.writeFile(path.join(outDir, providerFileName), provider, 'utf8');

  fileNames.push(providerFileName);

  const index = indexTemplate(fileNames);
  await fs.writeFile(path.join(outDir, 'index.ts'), index, 'utf8');
}
