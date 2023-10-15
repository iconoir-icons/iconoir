import { execa } from 'execa';
import { generateTemplateFilesBatch } from 'generate-template-files';
import { Listr } from 'listr2';
import fs from 'node:fs/promises';
import os from 'node:os';
import path, { basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { flutterIncompatibleNames, incompatibleNames } from '../constants.js';
import { buildVueIcons } from './buildVue.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Paths
const rootDir = path.join(__dirname, '..');
const iconsDir = path.join(rootDir, 'icons');

const iconsVariants = ['regular', 'solid'];
const defaultVariant = 'regular';

// Targets for building icons
const targets = {
  css: { path: 'css' },
  'iconoir-flutter': { path: 'packages/iconoir-flutter' },
  'iconoir-react': { react: true, path: 'packages/iconoir-react' },
  'iconoir-react-native': {
    react: true,
    path: 'packages/iconoir-react-native',
  },
  'iconoir-vue': { path: 'packages/iconoir-vue' },
};

// Build tasks
const tasks = new Listr(
  [
    {
      title: 'Fetching icons',
      task: async (ctx) => {
        ctx.icons = {};

        for (const variant of iconsVariants) {
          const iconsVariantDir = path.join(iconsDir, variant);
          const files = await fs.readdir(iconsVariantDir);

          const iconFiles = files
            .filter((file) => file.endsWith('.svg'))
            .map((file) => path.join(iconsVariantDir, file));

          ctx.icons[variant] = iconFiles;
        }
      },
    },
    {
      title: 'Building targets',
      task: (_, task) =>
        task.newListr(
          [
            {
              title: 'Building CSS files',
              enabled: () => isTargetEnabled('css'),
              task: async (ctx) => {
                const headerFile = await fs.readFile(
                  path.join(__dirname, 'header.css'),
                  'utf8',
                );

                const header = headerFile.replace(
                  '[YEAR]',
                  new Date().getFullYear(),
                );

                const mainCssContent = [header];

                for (const [variant, files] of Object.entries(ctx.icons)) {
                  const variantCssContent = [header];

                  for (const file of files) {
                    const fileContent = await fs.readFile(file, 'utf8');

                    const transformedContent = fileContent
                      .replace(/\n/g, '')
                      .replace(/(width|height)="[0-9]+px"/g, '')
                      .replace(/[ ]+/g, ' ');

                    const cssContent = `{mask-image:url('data:image/svg+xml;charset=utf-8,${transformedContent}');-webkit-mask-image:url('data:image/svg+xml;charset=utf-8,${transformedContent}');}`;
                    const baseIconName = path.parse(file).name;

                    const cssTarget = (iconName, suffixed) => {
                      if (suffixed) {
                        iconName =
                          variant === defaultVariant
                            ? iconName
                            : `${iconName}-${variant}`;
                      }

                      return `.iconoir-${iconName}::before`;
                    };

                    mainCssContent.push(
                      `${cssTarget(baseIconName)}${cssContent}`,
                    );

                    variantCssContent.push(
                      `${cssTarget(baseIconName, true)}${cssContent}`,
                    );
                  }

                  await fs.writeFile(
                    path.join(
                      rootDir,
                      targets.css.path,
                      `iconoir-${variant}.css`,
                    ),
                    variantCssContent,
                  );
                }

                await fs.writeFile(
                  path.join(rootDir, targets.css.path, 'iconoir.css'),
                  mainCssContent,
                );
              },
            },

            {
              title: 'Building React libraries',
              enabled: () =>
                cliTargets.length === 0 ||
                cliTargets.filter((cliTarget) => targets[cliTarget]?.react)
                  .length > 0,
              task: (_, task) =>
                task.newListr(
                  [
                    {
                      title: 'Creating temporary directory',
                      task: async (ctx) => {
                        try {
                          ctx.tmpDir = await fs.mkdtemp(
                            path.join(os.tmpdir(), 'iconoir-'),
                          );
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      title:
                        'Copying icon files to temporary directory, while renaming icons with incompatible names',
                      skip: (ctx) => ctx.skip,
                      task: async (ctx) => {
                        try {
                          const promises = ctx.iconoirIconsFiles.map((file) => {
                            const srcFilePath = path.join(iconsDir, file);

                            const iconName = file.split('.')[0];

                            const dstFileName =
                              iconName in incompatibleNames
                                ? incompatibleNames[iconName]
                                : iconName;

                            const dstFilePath = path.join(
                              ctx.tmpDir,
                              `${dstFileName}.svg`,
                            );

                            return fs.copyFile(srcFilePath, dstFilePath);
                          });

                          return Promise.all(promises).catch((err) => {
                            ctx.skip = true;
                            throw new Error(err.message);
                          });
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      skip: (ctx) => ctx.skip,
                      task: (_, task) => {
                        const targetsToBuild =
                          cliTargets.length > 0
                            ? cliTargets.filter(
                                (cliTarget) => targets[cliTarget]?.react,
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].react,
                              );

                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            'src',
                          );

                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: 'Building icon files',
                                    skip: (ctx) => ctx[target]?.skip,
                                    task: async (ctx) => {
                                      try {
                                        await execa(
                                          'svgr',
                                          [
                                            '--config-file',
                                            path.join(
                                              targets[target].path,
                                              '.svgrrc.json',
                                            ),
                                            '--out-dir',
                                            builtIconsDir,
                                            '--template',
                                            'bin/templates/icon-template.cjs',
                                            '--index-template',
                                            'bin/templates/index-template.cjs',
                                            '--',
                                            ctx.tmpDir,
                                          ],
                                          { preferLocal: true },
                                        );
                                      } catch (err) {
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                  ...(target === 'iconoir-react'
                                    ? [
                                        {
                                          title:
                                            'Building icon files (server components)',
                                          skip: (ctx) => ctx[target]?.skip,
                                          task: async (ctx) => {
                                            try {
                                              await execa(
                                                'svgr',
                                                [
                                                  '--config-file',
                                                  path.join(
                                                    targets[target].path,
                                                    '.svgrrc.json',
                                                  ),
                                                  '--out-dir',
                                                  path.join(
                                                    builtIconsDir,
                                                    'server',
                                                  ),
                                                  '--template',
                                                  'bin/templates/icon-template-server-component.cjs',
                                                  '--index-template',
                                                  'bin/templates/index-template.cjs',
                                                  '--',
                                                  ctx.tmpDir,
                                                ],
                                                { preferLocal: true },
                                              );
                                            } catch (err) {
                                              throw new Error(err.message);
                                            }
                                          },
                                        },
                                      ]
                                    : []),
                                ],
                                { concurrent: false, exitOnError: false },
                              ),
                          };
                        });

                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapseSubtasks: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false },
                ),
            },
            {
              title: 'Building Vue library',
              enabled: () =>
                cliTargets.length === 0 ||
                cliTargets.filter((cliTarget) => targets[cliTarget]?.vue)
                  .length > 0,
              task: (_, task) =>
                task.newListr(
                  [
                    {
                      title: 'Creating temporary directory',
                      task: async (ctx) => {
                        try {
                          ctx.tmpDir = await fs.mkdtemp(
                            path.join(os.tmpdir(), 'iconoir-'),
                          );
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      title:
                        'Copying icon files to temporary directory, while renaming icons with incompatible names',
                      skip: (ctx) => ctx.skip,
                      task: async (ctx) => {
                        try {
                          const promises = ctx.iconoirIconsFiles.map((file) => {
                            const srcFilePath = path.join(iconsDir, file);

                            const iconName = file.split('.')[0];

                            const dstFileName =
                              iconName in incompatibleNames
                                ? incompatibleNames[iconName]
                                : iconName;

                            const dstFilePath = path.join(
                              ctx.tmpDir,
                              `${dstFileName}.svg`,
                            );

                            return fs.copyFile(srcFilePath, dstFilePath);
                          });

                          return Promise.all(promises).catch((err) => {
                            ctx.skip = true;
                            throw new Error(err.message);
                          });
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      skip: (ctx) => ctx.skip,
                      task: (_, task) => {
                        const targetsToBuild =
                          cliTargets.length > 0
                            ? cliTargets.filter(
                                (cliTarget) => targets[cliTarget]?.vue,
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].vue,
                              );

                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            'src',
                          );

                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: 'Create target directory',
                                    task: async (ctx) => {
                                      try {
                                        await fs.mkdir(builtIconsDir, {
                                          recursive: true,
                                        });
                                      } catch (err) {
                                        ctx[target] = { skip: true };
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                  {
                                    title: 'Building icon files',
                                    skip: (ctx) => ctx[target]?.skip,
                                    task: async (ctx) => {
                                      try {
                                        await buildVueIcons(ctx.tmpDir, {
                                          outDir: builtIconsDir,
                                        });
                                      } catch (err) {
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                ],
                                { concurrent: false, exitOnError: false },
                              ),
                          };
                        });

                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapseSubtasks: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false },
                ),
            },
            {
              title: 'Building Flutter libraries',
              enabled: () =>
                cliTargets.length === 0 ||
                cliTargets.filter((cliTarget) => targets[cliTarget]?.flutter)
                  .length > 0,
              task: (_, task) =>
                task.newListr(
                  [
                    {
                      title: 'Creating temporary directory',
                      task: async (ctx) => {
                        try {
                          ctx.flutterTmpDir = await fs.mkdtemp(
                            path.join(os.tmpdir(), 'iconoir-'),
                          );
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      title:
                        'Copying icon files to temporary directory, while renaming icons with incompatible names',
                      skip: (ctx) => ctx.skip,
                      task: async (ctx) => {
                        try {
                          const promises = ctx.iconoirIconsFiles.map((file) => {
                            const srcFilePath = path.join(iconsDir, file);

                            const iconName = file.split('.')[0];

                            const dstFileName =
                              iconName in flutterIncompatibleNames
                                ? flutterIncompatibleNames[iconName]
                                : iconName;

                            const dstFilePath = path.join(
                              ctx.flutterTmpDir,
                              `${dstFileName}.svg`,
                            );

                            ctx.dstFilePaths = [
                              ...(ctx.dstFilePaths ?? []),
                              dstFilePath,
                            ];

                            return fs.copyFile(srcFilePath, dstFilePath);
                          });

                          return Promise.all(promises).catch((err) => {
                            ctx.skip = true;
                            throw new Error(err.message);
                          });
                        } catch (err) {
                          ctx.skip = true;
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      skip: (ctx) => ctx.skip,
                      task: (_, task) => {
                        const targetsToBuild =
                          cliTargets.length > 0
                            ? cliTargets.filter(
                                (cliTarget) => targets[cliTarget]?.flutter,
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].flutter,
                              );

                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            'lib',
                          );

                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: 'Create target directory',
                                    task: async (ctx) => {
                                      try {
                                        await fs.mkdir(builtIconsDir, {
                                          recursive: true,
                                        });
                                      } catch (err) {
                                        ctx[target] = { skip: true };
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                  {
                                    title: 'Create entry file',
                                    task: async () => {
                                      await fs.writeFile(
                                        path.join(
                                          builtIconsDir,
                                          'iconoir_flutter.dart',
                                        ),
                                        'library iconoir_flutter;\n\n',
                                      );
                                    },
                                  },
                                  {
                                    title: 'Building icon files',
                                    skip: (ctx) => ctx[target]?.skip,
                                    task: async (ctx) => {
                                      const finalFileNames = [];

                                      try {
                                        await Promise.all(
                                          ctx.dstFilePaths.map(async (file) => {
                                            const svgfilename =
                                              path.parse(file).name;

                                            // Prefix with Svg if icon name starts with a number
                                            const iconname = `${
                                              /^\d/.test(svgfilename)
                                                ? 'Svg'
                                                : ''
                                            }${svgfilename}`;

                                            const svgfilecontent = (
                                              await fs.readFile(file)
                                            ).toString();

                                            await generateTemplateFilesBatch([
                                              {
                                                option:
                                                  'Create Icon Flutter Widget',
                                                entry: {
                                                  folderPath:
                                                    './bin/templates/__svgfilename__.dart',
                                                },
                                                dynamicReplacers: [
                                                  {
                                                    slot: '__icon__',
                                                    slotValue: iconname,
                                                  },
                                                  {
                                                    slot: '__svgfilecontent__',
                                                    slotValue: svgfilecontent,
                                                  },
                                                  {
                                                    slot: '__svgfilename__',
                                                    slotValue: svgfilename,
                                                  },
                                                ],
                                                output: {
                                                  path: './packages/iconoir-flutter/lib/__svgfilename__(snakeCase).dart',
                                                  pathAndFileNameDefaultCase:
                                                    '(snakeCase)',
                                                },
                                                onComplete(results) {
                                                  finalFileNames.push(
                                                    results.output.path,
                                                  );
                                                },
                                              },
                                            ]);
                                          }),
                                        );

                                        finalFileNames.sort();

                                        await fs.appendFile(
                                          path.join(
                                            builtIconsDir,
                                            'iconoir_flutter.dart',
                                          ),
                                          finalFileNames
                                            .map(
                                              (fileName) =>
                                                `export './${basename(
                                                  fileName,
                                                )}';`,
                                            )
                                            .join('\n'),
                                        );
                                      } catch (err) {
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                ],
                                { concurrent: false, exitOnError: false },
                              ),
                          };
                        });

                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: {
                            collapseSubtasks: false,
                          },
                        });
                      },
                    },
                  ],
                  { concurrent: false },
                ),
            },
          ],
          { concurrent: true },
        ),
    },
    {
      title: 'Removing React temporary directory',
      skip: (ctx) => !ctx.tmpDir,
      task: async (ctx) => {
        await fs.rm(ctx.tmpDir, { recursive: true });
      },
    },
    {
      title: 'Removing Flutter temporary directory',
      skip: (ctx) => !ctx.flutterTmpDir,
      task: async (ctx) => {
        await fs.rm(ctx.flutterTmpDir, { recursive: true });
      },
    },
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: {
      collapseSubtasks: false,
      collapseErrors: false,
    },
  },
);

// Get targets from command line arguments
// (build all targets if no arguments)
const args = process.argv.slice(2);
const cliTargets = [];

args.forEach((target) => {
  if (target in targets) {
    cliTargets.push(target);
  } else {
    console.error(`Target '${target}' doesn't exist!\n\nPossible targets are:`);

    for (const [targetName] of Object.entries(targets)) {
      console.error(`- ${targetName}`);
    }

    process.exit(1);
  }
});

function isTargetEnabled(target) {
  return cliTargets.length === 0 || cliTargets.includes(target);
}

await tasks.run();
