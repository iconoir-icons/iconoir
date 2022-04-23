import path from 'path';
import os from 'os';
import { promises as fs, readFileSync } from 'fs';
import execa from 'execa';
import { Listr } from 'listr2';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Paths
const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const iconoirIconsDir = path.join(rootDir, 'icons');

// Icon files with incompatible names
const incompatibleNames = {
  '1st-medal': 'medal-1st',
  '4k-display': 'display-4k',
  '2x2-cell': 'cell-2x2',
  '360-view': 'view360',
  github: 'gitHub',
  'github-outline': 'gitHubOutline',
  'gitlab-full': 'gitLabFull',
  linkedin: 'linkedIn',
  tiktok: 'tikTok',
  youtube: 'youTube',
};

// Targets for building icons
const targets = {
  'meta-data': { path: 'meta-data.json' },
  css: { path: 'css/iconoir.css' },
  'iconoir-react': { react: true, path: 'packages/iconoir-react' },
  'iconoir-react-native': {
    react: true,
    path: 'packages/iconoir-react-native',
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
                    .replace(/\n/g, '');
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
                                            '--prettier-config',
                                            path.join(
                                              rootDir,
                                              '.prettierrc.json'
                                            ),
                                            '--out-dir',
                                            builtIconsDir,
                                            ctx.tmpDir,
                                          ],
                                          { preferLocal: true }
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
                    {
                      title: 'Removing temporary directory',
                      skip: (ctx) => !ctx.tmpDir,
                      task: async (ctx) => {
                        await fs.rm(ctx.tmpDir, { recursive: true });
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
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: { collapse: false, collapseErrors: false },
  }
);

await tasks.run();
