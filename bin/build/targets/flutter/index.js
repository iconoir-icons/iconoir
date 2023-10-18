import fs from 'node:fs/promises';
import path from 'node:path';
import iconTemplate from './template.js';

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'lib');

  const entryContent = ['library iconoir_flutter;'];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantOutDir = path.join(outDir, variant);
    await fs.mkdir(variantOutDir, { recursive: true });

    for (const icon of icons) {
      const dartFileName = `${icon.snakeName}.dart`;
      const dartPath = path.join(variant, dartFileName);

      promises.push(
        generateIconFile(
          icon.path,
          path.join(outDir, dartPath),
          icon.pascalNameVariant,
        ),
      );

      entryContent.push(`export './${dartPath}';`);
    }
  }

  promises.push(
    fs.writeFile(path.join(outDir, 'iconoir_flutter.dart'), entryContent),
  );

  return Promise.all(promises);
};

async function generateIconFile(src, dest, iconName) {
  const iconContent = await fs.readFile(src, 'utf8');

  const dartContent = iconTemplate(iconName, iconContent);

  return fs.writeFile(dest, dartContent);
}
