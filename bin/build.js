import path from 'path';
import os from 'os';
import { promises as fs } from 'fs';
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
  '4x4-cell': 'cell-4x4',
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
  'iconoir-react': 'packages/iconoir-react',
  'iconoir-react-native': 'packages/iconoir-react-native',
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
      title: 'Fetching icon files',
      task: async (ctx) => {
        try {
          ctx.iconoirIconsFiles = await fs.readdir(iconoirIconsDir);
        } catch (err) {
          ctx.skip = true;
          throw new Error(err.message);
        }
      },
    },
    {
      title: 'Generating meta-data.json file',
      skip: (ctx) => ctx.skip,
      task: async (ctx) => {
          await fs.writeFile(
            path.join(rootDir, 'meta-data.json'),
            JSON.stringify({ icons: ctx.iconoirIconsFiles })
          );
      },
    },
    {
      title: 'Creating temporary directory',
      skip: (ctx) => ctx.skip,
      task: async (ctx) => {
        try {
          ctx.tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'iconoir-'));
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
            const srcFilePath = path.join(iconoirIconsDir, file);
            const iconName = file.split('.')[0];
            const dstFileName =
              iconName in incompatibleNames
                ? incompatibleNames[iconName]
                : iconName;
            const dstFilePath = path.join(ctx.tmpDir, `${dstFileName}.svg`);

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
      title: 'Generating icons',
      skip: (ctx) => ctx.skip,
      task: (_, task) => {
        const tasks = Object.entries(targets)
          .filter(
            ([targetName]) =>
              cliTargets.length === 0 || cliTargets.includes(targetName)
          )
          .map(([targetName, targetDir]) => {
            const builtIconsDir = path.join(rootDir, targetDir, 'src');
            return {
              title: targetName,
              task: (_, task) =>
                task.newListr(
                  [
                    {
                      title: 'Cleaning target directory',
                      task: async (ctx) => {
                        try {
                          const files = await fs.readdir(builtIconsDir);
                          const promises = files.map((file) => {
                            return fs.unlink(path.join(builtIconsDir, file));
                          });
                          return Promise.all(promises).catch((err) => {
                            ctx[targetName] = { skip: true };
                            throw new Error(err.message);
                          });
                        } catch (err) {
                          ctx[targetName] = { skip: true };
                          throw new Error(err.message);
                        }
                      },
                    },
                    {
                      title: 'Generating icons',
                      skip: (ctx) => ctx[targetName] && ctx[targetName].skip,
                      task: async (ctx) => {
                        try {
                          await execa(
                            'svgr',
                            [
                              '--config-file',
                              path.join(targetDir, '.svgrrc.json'),
                              '--prettier-config',
                              path.join(rootDir, '.prettierrc.json'),
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
        try {
          await fs.rm(ctx.tmpDir, { recursive: true });
        } catch (err) {
          throw new Error(err.message);
        }
      },
    },
  ],
  {
    concurrent: false,
    exitOnError: false,
    rendererOptions: { collapseErrors: false },
  }
);

await tasks.run();
