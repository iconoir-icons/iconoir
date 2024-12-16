import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async (ctx, target) => {
  const headerFile = await fs.readFile(
    path.join(__dirname, 'header.css'),
    'utf8',
  );

  const header = headerFile.replace('[YEAR]', new Date().getFullYear());

  const mainCssContent = [header];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantCssContent = [header];

    const cssTarget = (icon, suffixed) => {
      const iconName = suffixed && variant !== ctx.global.defaultVariant
        ? icon.nameVariant
        : icon.name;

      return `.iconoir-${iconName}::before`;
    };

    for (const icon of icons) {
      const fileContent = await fs.readFile(icon.path, 'utf8');

      const transformedContent = fileContent
        .replace(/\n/g, '')
        .replace(/(width|height)="\d+px"/g, '')
        .replace(/ +/g, ' ');

      const cssContent = `{mask-image:url('data:image/svg+xml;charset=utf-8,${transformedContent}');-webkit-mask-image:url('data:image/svg+xml;charset=utf-8,${transformedContent}');}`;

      mainCssContent.push(`${cssTarget(icon, true)}${cssContent}`);

      variantCssContent.push(`${cssTarget(icon)}${cssContent}`);
    }

    await fs.writeFile(
      path.join(target.path, `iconoir-${variant}.css`),
      variantCssContent,
    );
  }

  await fs.writeFile(path.join(target.path, 'iconoir.css'), mainCssContent);
};
