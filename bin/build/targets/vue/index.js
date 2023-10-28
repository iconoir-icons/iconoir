import { fromHtml } from 'hast-util-from-html';
import { toHtml } from 'hast-util-to-html';
import fs from 'node:fs/promises';
import path from 'node:path';
import { generateExport } from '../../lib/import-export.js';
import iconTemplate from './template.js';

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'src');

  const mainIndexContent = [
    generateExport(`default as IconoirProvider`, `./IconoirProvider.vue`),
  ];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantOutDir = path.join(outDir, variant);
    await fs.mkdir(variantOutDir, { recursive: true });

    const variantIndexContent = [
      generateExport(`default as IconoirProvider`, `../IconoirProvider.vue`),
    ];

    const generateIconFile = async (src, vueFileName) => {
      const iconContent = await fs.readFile(src, 'utf8');

      const iconAst = fromHtml(iconContent, { fragment: true });
      // Bind iconProps of the provider to the svg root
      iconAst.children[0].properties['v-bind'] = 'context';
      const transformedIcon = toHtml(iconAst);
      const componentContent = iconTemplate(transformedIcon);

      const vuePath = path.join(variantOutDir, vueFileName);

      return fs.writeFile(vuePath, componentContent);
    };

    for (const icon of icons) {
      const vueFileName = `${icon.pascalName}.vue`;

      promises.push(generateIconFile(icon.path, vueFileName));

      const mainIndexComponentName =
        variant === ctx.global.defaultVariant
          ? icon.pascalName
          : icon.pascalNameVariant;

      mainIndexContent.push(
        generateExport(
          `default as ${mainIndexComponentName}`,
          `./${variant}/${vueFileName}`,
        ),
      );

      variantIndexContent.push(
        generateExport(
          `default as ${mainIndexComponentName}`,
          `./${vueFileName}`,
        ),
      );
    }

    promises.push(
      fs.writeFile(path.join(variantOutDir, 'index.ts'), variantIndexContent),
    );
  }

  promises.push(fs.writeFile(path.join(outDir, 'index.ts'), mainIndexContent));

  return Promise.all(promises);
};
