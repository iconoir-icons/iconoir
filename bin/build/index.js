import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { Listr } from 'listr2';
import { pascalCase, snakeCase } from 'scule';
import Tinypool from 'tinypool';

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
  'solid-js': {
    title: 'SolidJS library',
    path: 'packages/iconoir-solid-js',
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
        ctx.tasks = { global: { defaultVariant }, icons: {} };

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

          ctx.tasks.icons[variant] = icons;
        }
      },
    },
    {
      title: 'Building targets',
      task: (ctx, task) =>
        task.newListr(
          Object.entries(targets).map(([targetName, targetConfig]) => ({
            title: targetConfig.title,
            enabled: () => ctx.cliTargets.length === 0 || ctx.cliTargets.includes(targetName),
            task: (ctx) => {
              targetConfig.path = path.join(
                rootDir,
                ...targetConfig.path.split(path.posix.sep),
              );

              return ctx.pool.run({ targetName, config: ctx.tasks, targetConfig });
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

const pool = new Tinypool({
  filename: new URL('./worker.js', import.meta.url).href,
  minThreads: 0,
  resourceLimits: {
    // Vue target (Vite/Rollup) takes up a lot of memory
    maxOldGenerationSizeMb: 8192,
  },
});

await tasks.run({ cliTargets, pool });

await pool.destroy();
