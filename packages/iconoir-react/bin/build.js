const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { exec } = require('child_process');
const ora = require('ora');

const rootDir = path.join(__dirname, '..');
const iconoirRootDir = path.join(rootDir, '../..');
const iconoirIconsDir = path.join(iconoirRootDir, 'icons');
const tmpIconsDir = path.join(rootDir, 'tmp');
const builtIconsDir = path.join(rootDir, 'src');

const incompatibleNames = {
  '1st-medal': 'medal-1st',
  '4k-display': 'display-4k',
  '4x4-cell': 'cell-4x4',
  github: 'gitHub',
  'github-outline': 'gitHubOutline',
  'gitlab-full': 'gitLabFull',
  linkedin: 'linkedIn',
  tiktok: 'tikTok',
  youtube: 'youTube',
};

const spinner = ora();

fs.readdir(iconoirIconsDir, (err, files) => {
  if (err) {
    throw new Error('Unable to find root icons directory');
  }

  if (!fs.existsSync(tmpIconsDir)) {
    fs.mkdirSync(tmpIconsDir);
  }

  spinner.start(
    'Copying icons to tmp dir, while renaming files with incompatible names'
  );
  const promises = [];
  files.forEach((file) => {
    const srcFilePath = path.join(iconoirIconsDir, file);
    const iconName = file.split('.')[0];
    const dstFileName =
      iconName in incompatibleNames ? incompatibleNames[iconName] : iconName;
    const dstFilePath = path.join(tmpIconsDir, `${dstFileName}.svg`);

    promises.push(fsPromises.copyFile(srcFilePath, dstFilePath));
  });

  function rmTmpDir() {
    fs.rm(tmpIconsDir, { recursive: true }, (err) => {
      if (err) {
        console.error('Could not remove tmp dir');
      }
    });
  }

  Promise.all(promises)
    .then(() => {
      spinner.succeed();

      spinner.start('Generating icons');
      exec(
        `npx @svgr/cli --silent --out-dir ${builtIconsDir} ${tmpIconsDir}`,
        (err, stdout, stderr) => {
          if (err) {
            spinner.stop();
            rmTmpDir();
            throw new Error('Could not run command to generate icons');
          }

          spinner.succeed();

          if (stdout) {
            console.log(stdout);
          }
          if (stderr) {
            console.error(`Error while generating icons:\n${stderr}`);
          }

          rmTmpDir();
        }
      );
    })
    .catch(() => {
      spinner.stop();
      rmTmpDir();
      throw new Error('Error while copying icons');
    });
});
