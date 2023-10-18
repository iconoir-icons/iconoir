import { Listr } from 'listr2';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pascalCase, snakeCase } from 'change-case';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootDir = path.join(__dirname, '..', '..');
const iconsDir = path.join(rootDir, 'icons');

const iconsVariants = ['regular', 'solid'];
const defaultVariant = iconsVariants[0];

const targets = {
  'css': {
    title: 'CSS files',
    path: 'css',
  },
  'flutter': {
    title: 'Flutter library',
    path: 'packages/iconoir-flutter',
  },
  'react': {
    title: 'React library',
    path: 'packages/iconoir-react',
  },
  'react-native': {
    title: 'React Native library',
    target: 'react',
    native: true,
    path: 'packages/iconoir-react-native',
  },
  'vue': {
    title: 'Vue library',
    path: 'packages/iconoir-vue',
  },
};

const tasks = new Listr(
  [
    {
      title: 'Fetching icons',
      task: async (ctx) => {
        ctx.icons = {};

        const iconsVariantsDirs = Object.fromEntries(
          iconsVariants.map((variant) => [
            variant,
            path.join(iconsDir, variant),
          ]),
        );

        for (const [variant, dir] of Object.entries(iconsVariantsDirs)) {
          const files = await fs.readdir(dir);

          const icons = files
            .filter((file) => file.endsWith('.svg'))
            .map((file) => {
              const name = path.parse(file).name;
              const nameVariant = `${name}-${variant}`;

              return {
                name,
                nameVariant,
                pascalName: pascalCase(name),
                pascalNameVariant: pascalCase(nameVariant),
                snakeName: snakeCase(name),
                snakeNameVariant: snakeCase(nameVariant),
                path: path.join(dir, file),
              };
            });

          ctx.icons[variant] = icons;
        }

        ctx.global = { defaultVariant };
      },
    },
    {
      title: 'Building targets',
      task: (_, task) =>
        task.newListr(
          Object.entries(targets).map(([targetName, targetConfig]) => ({
            title: targetConfig.title,
            enabled: () =>
              cliTargets.length === 0 || cliTargets.includes(targetName),
            task: async (ctx) => {
              const { default: task } = await import(
                `./targets/${targetConfig.target || targetName}/index.js`
              );

              targetConfig.path = path.join(
                rootDir,
                ...targetConfig.path.split(path.posix.sep),
              );

              return task(ctx, targetConfig);
            },
          })),
          { concurrent: true, exitOnError: false },
        ),
    },
  ],
  {
    rendererOptions: {
      collapseSubtasks: false,
      collapseErrors: false,
    },
  },
);

const cliTargets = [];

// Get targets from command line arguments
// (build all targets if no arguments given)
for (const arg of process.argv.slice(2)) {
  if (arg in targets) {
    cliTargets.push(arg);
  } else {
    console.error(
      `Target '${arg}' doesn't exist!\n\nPossible targets are:\n${Object.keys(
        targets,
      )
        .map((name) => `- ${name}`)
        .join('\n')}`,
    );

    process.exit(1);
  }
}

await tasks.run();
