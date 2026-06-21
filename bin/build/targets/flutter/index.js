import fs from 'node:fs/promises';
import path from 'node:path';
import iconTemplate from './template.js';

/**
 * PascalCase icon names that match Dart or Flutter SDK types/widgets cause
 * ambiguous import errors (e.g. `Text` vs Flutter's `Text`).
 * @see https://github.com/iconoir-icons/iconoir/issues/559
 */
const FLUTTER_SDK_CLASS_CONFLICTS = new Set([
  // dart:core
  'List',
  'Map',
  'Type',
  // Flutter SDK (widgets, material, rendering, painting, gestures, …)
  'Drag',
  'Drawer',
  'Key',
  'Menu',
  'Navigator',
  'Page',
  'Position',
  'Radius',
  'Table',
  'Text',
]);

function flutterWidgetClassName(pascalName) {
  return FLUTTER_SDK_CLASS_CONFLICTS.has(pascalName)
    ? `${pascalName}Icon`
    : pascalName;
}

export default async (ctx, target) => {
  const promises = [];

  const outDir = path.join(target.path, 'lib');

  const entryContent = ['library;'];

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
          flutterWidgetClassName(
            variant !== ctx.global.defaultVariant
              ? icon.pascalNameVariant
              : icon.pascalName,
          ),
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
