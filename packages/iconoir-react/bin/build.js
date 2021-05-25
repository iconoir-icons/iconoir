const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { exec } = require('child_process');

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

if (!fs.existsSync(tmpIconsDir)) {
  fs.mkdirSync(tmpIconsDir);
}

fs.readdir(iconoirIconsDir, (err, files) => {
  if (err) {
    return console.error('Unable to find root icons directory');
  }

  const promises = [];

  files.forEach((file) => {
    const srcFilePath = path.join(iconoirIconsDir, file);
    const iconName = file.split('.')[0];
    const dstFileName =
      iconName in incompatibleNames ? incompatibleNames[iconName] : iconName;
    const dstFilePath = path.join(tmpIconsDir, `${dstFileName}.svg`);

    promises.push(fsPromises.copyFile(srcFilePath, dstFilePath));
  });

  Promise.all(promises).then(() => {
    exec(
      `npx @svgr/cli -d ${builtIconsDir} ${tmpIconsDir}`,
      (error, stdout, stderr) => {
        if (err) {
          return console.error('Could not run command to generate icons');
        }
        if (stdout) {
          console.log(stdout);
        }
        if (stderr) {
          console.error(`Error while generating icons:\n${stderr}`);
        }
        fs.rm(tmpIconsDir, { recursive: true }, (err) => {
          if (err) {
            console.error('Could not remove tmp dir');
          }
        });
      }
    );
  });
});
