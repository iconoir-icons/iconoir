import { fromHtml } from 'hast-util-from-html';
import { toHtml } from 'hast-util-to-html';
import fs from 'node:fs/promises';
import path from 'node:path';
import iconTemplate from './template.js';

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'src');

  const mainIndexContent = [
    genExport(`default as IconoirProvider`, `./IconoirProvider.vue`),
  ];
  const mainIndexDtsContent = [
    genExport(`default as IconoirProvider`, `./IconoirProvider.vue`),
  ];
  const mainIndexDtsExports = [];

  for (const [variant, icons] of Object.entries(ctx.icons)) {
    const variantOutDir = path.join(outDir, variant);
    await fs.mkdir(variantOutDir, { recursive: true });

    const variantIndexContent = [
      genExport(`default as IconoirProvider`, `../IconoirProvider.vue`),
    ];
    const variantIndexDtsContent = [
      genExport(`default as IconoirProvider`, `../IconoirProvider.vue`),
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

      promises.push(generateIconFile(icon.path, icon.pascalName, vueFileName));

      const mainIndexComponentName =
        variant === ctx.global.defaultVariant
          ? icon.pascalName
          : icon.pascalNameVariant;

      mainIndexContent.push(
        genExport(
          `default as ${mainIndexComponentName}`,
          `./${variant}/${vueFileName}`,
        ),
      );

      mainIndexDtsContent.push(
        `declare const ${mainIndexComponentName}: IconComponent;`,
      );

      mainIndexDtsExports.push(mainIndexComponentName);

      variantIndexContent.push(
        genExport(`default as ${icon.pascalName}`, `./${vueFileName}`),
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
