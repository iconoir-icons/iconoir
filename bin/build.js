import execa from 'execa';
import { promises as fs, readFileSync, existsSync } from 'fs';
import { generateTemplateFilesBatch } from 'generate-template-files';
import { Listr } from 'listr2';
import os from 'os';
import path, { basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { incompatibleNames, flutterIncompatibleNames } from '../constants.js';
import { buildVueIcons } from './buildVue.js';

// Paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const iconoirIconsDir = path.join(rootDir, 'icons');
const ignoreCleanFilenames = ['IconoirContext.tsx', 'server'];

// Targets for building icons
const targets = {
  'meta-data': { path: 'meta-data.json' },
  css: { path: 'css/iconoir.css' },
  'iconoir-flutter': { flutter: true, path: 'packages/iconoir-flutter' },
  'iconoir-react': { react: true, path: 'packages/iconoir-react' },
  'iconoir-react-native': {
    react: true,
    path: 'packages/iconoir-react-native',
  },
  'iconoir-vue': {
    vue: true,
    path: 'packages/iconoir-vue',
  },
};

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
      console.log(`- ${targetName}`);
    }
    process.exit(1);
  }
});

// Build tasks
const tasks = new Listr(
  [
    {
      title: 'Fetching icons',
      task: async (ctx) => {
        ctx.iconoirIconsFiles = await fs.readdir(iconoirIconsDir);
      },
    },
    {
      title: 'Building targets',
      skip: (ctx) => !ctx.iconoirIconsFiles,
      task: (_, task) =>
        task.newListr(
          [
            {
              title: 'Building meta-data file',
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes('meta-data'),
              task: async (ctx) => {
                await fs.writeFile(
                  path.join(rootDir, targets['meta-data'].path),
                  JSON.stringify({ icons: ctx.iconoirIconsFiles })
                );
              },
            },
            {
              title: 'Building CSS file',
              enabled: () =>
                cliTargets.length === 0 || cliTargets.includes('css'),
              task: async (ctx) => {
                const content = [
                  (
                    await fs.readFile(
                      path.join(__dirname, 'header.css'),
                      'utf8'
                    )
                  ).replace('[YEAR]', new Date().getFullYear()),
                ];
                ctx.iconoirIconsFiles.forEach((file) => {
                  const fileContents = readFileSync(
                    path.join(__dirname, '../icons/', file)
                  )
                    .toString()
                    .replace(/\n/g, '')
                    .replace(/(width|height)="[0-9]+"/g, '')
                    .replace(/[ ]+/g, ' ');
                  content.push(
                    `.iconoir-${
                      path.parse(file).name
                    }::before{mask-image:url('data:image/svg+xml;charset=utf-8,${fileContents}');-webkit-mask-image:url('data:image/svg+xml;charset=utf-8,${fileContents}');}`
                  );
                });
                await fs.writeFile(
                  path.join(rootDir, targets.css.path),
                  content
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
                            path.join(os.tmpdir(), 'iconoir-')
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
                            const srcFilePath = path.join(
                              iconoirIconsDir,
                              file
                            );
                            const iconName = file.split('.')[0];
                            const dstFileName =
                              iconName in incompatibleNames
                                ? incompatibleNames[iconName]
                                : iconName;
                            const dstFilePath = path.join(
                              ctx.tmpDir,
                              `${dstFileName}.svg`
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
                                (cliTarget) => targets[cliTarget]?.react
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].react
                              );
                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            'src'
                          );
                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: 'Cleaning target directory',
                                    task: async (ctx) => {
                                      try {
                                        const files = await fs.readdir(
                                          builtIconsDir
                                        );
                                        const serverFiles = existsSync(
                                          path.join(builtIconsDir, 'server')
                                        )
                                          ? (
                                              await fs.readdir(
                                                path.join(
                                                  builtIconsDir,
                                                  'server'
                                                )
                                              )
                                            ).map((file) => `server/${file}`)
                                          : [];
                                        const promises = [
                                          ...files,
                                          ...serverFiles,
                                        ]
                                          .filter(
                                            (file) =>
                                              !ignoreCleanFilenames.includes(
                                                path.basename(file)
                                              )
                                          )
                                          .map((file) => {
                                            return fs.unlink(
                                              path.join(builtIconsDir, file)
                                            );
                                          });
                                        return Promise.all(promises).catch(
                                          (err) => {
                                            ctx[target] = { skip: true };
                                            throw new Error(err.message);
                                          }
                                        );
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
                                        await execa(
                                          'svgr',
                                          [
                                            '--config-file',
                                            path.join(
                                              targets[target].path,
                                              '.svgrrc.json'
                                            ),
                                            '--out-dir',
                                            builtIconsDir,
                                            '--template',
                                            'bin/templates/icon-template.cjs',
                                            '--index-template',
                                            'bin/templates/index-template.cjs',
                                            ctx.tmpDir,
                                          ],
                                          { preferLocal: true }
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
                                                    '.svgrrc.json'
                                                  ),
                                                  '--out-dir',
                                                  path.join(
                                                    builtIconsDir,
                                                    'server'
                                                  ),
                                                  '--template',
                                                  'bin/templates/icon-template-server-component.cjs',
                                                  '--index-template',
                                                  'bin/templates/index-template.cjs',
                                                  ctx.tmpDir,
                                                ],
                                                { preferLocal: true }
                                              );
                                            } catch (err) {
                                              throw new Error(err.message);
                                            }
                                          },
                                        },
                                      ]
                                    : []),
                                ],
                                { concurrent: false, exitOnError: false }
                              ),
                          };
                        });
                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapse: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false }
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
                            path.join(os.tmpdir(), 'iconoir-')
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
                            const srcFilePath = path.join(
                              iconoirIconsDir,
                              file
                            );
                            const iconName = file.split('.')[0];
                            const dstFileName =
                              iconName in incompatibleNames
                                ? incompatibleNames[iconName]
                                : iconName;
                            const dstFilePath = path.join(
                              ctx.tmpDir,
                              `${dstFileName}.svg`
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
                                (cliTarget) => targets[cliTarget]?.vue
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].vue
                              );
                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            'src'
                          );
                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: 'Cleaning target directory',
                                    task: async (ctx) => {
                                      try {
                                        const files = await fs.readdir(
                                          builtIconsDir
                                        );
                                        files
                                          .filter(
                                            (file) =>
                                              !ignoreCleanFilenames.includes(
                                                path.basename(file)
                                              )
                                          )
                                          .map((file) => {
                                            return fs.unlink(
                                              path.join(builtIconsDir, file)
                                            );
                                          });
                                        return Promise.all(files).catch(
                                          (err) => {
                                            ctx[target] = { skip: true };
                                            throw new Error(err.message);
                                          }
                                        );
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
                                { concurrent: false, exitOnError: false }
                              ),
                          };
                        });
                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapse: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false }
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
                            path.join(os.tmpdir(), 'iconoir-')
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
                            const srcFilePath = path.join(
                              iconoirIconsDir,
                              file
                            );
                            const iconName = file.split('.')[0];
                            const dstFileName =
                              iconName in flutterIncompatibleNames
                                ? flutterIncompatibleNames[iconName]
                                : iconName;
                            const dstFilePath = path.join(
                              ctx.flutterTmpDir,
                              `${dstFileName}.svg`
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
                                (cliTarget) => targets[cliTarget]?.flutter
                              )
                            : Object.keys(targets).filter(
                                (target) => targets[target].flutter
                              );
                        const tasks = targetsToBuild.map((target) => {
                          const builtIconsDir = path.join(
                            rootDir,
                            targets[target].path,
                            'lib'
                          );
                          return {
                            title: `Building ${target}`,
                            task: (_, task) =>
                              task.newListr(
                                [
                                  {
                                    title: 'Cleaning target directory',
                                    task: async (ctx) => {
                                      try {
                                        const files = await fs.readdir(
                                          builtIconsDir
                                        );
                                        const promises = files.map((file) => {
                                          return fs.unlink(
                                            path.join(builtIconsDir, file)
                                          );
                                        });
                                        return Promise.all(promises).catch(
                                          (err) => {
                                            ctx[target] = { skip: true };
                                            throw new Error(err.message);
                                          }
                                        );
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
                                          'iconoir_flutter.dart'
                                        ),
                                        'library iconoir_flutter;\n\n'
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
                                                async onComplete(results) {
                                                  finalFileNames.push(
                                                    results.output.path
                                                  );
                                                },
                                              },
                                            ]);
                                          })
                                        );

                                        finalFileNames.sort();
                                        await fs.appendFile(
                                          path.join(
                                            builtIconsDir,
                                            'iconoir_flutter.dart'
                                          ),
                                          finalFileNames
                                            .map(
                                              (fileName) =>
                                                `export './${basename(
                                                  fileName
                                                )}';`
                                            )
                                            .join('\n')
                                        );
                                      } catch (err) {
                                        throw new Error(err.message);
                                      }
                                    },
                                  },
                                ],
                                { concurrent: false, exitOnError: false }
                              ),
                          };
                        });
                        return task.newListr(tasks, {
                          concurrent: true,
                          rendererOptions: { collapse: false },
                        });
                      },
                    },
                  ],
                  { concurrent: false }
                ),
            },
          ],
          { concurrent: true }
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
    rendererOptions: { collapse: false, collapseErrors: false },
  }
);

await tasks.run();
