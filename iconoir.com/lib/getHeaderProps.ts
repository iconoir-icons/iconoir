import fs from 'fs';

export function getHeaderProps() {
  const packageJson = JSON.parse(fs.readFileSync('../package.json').toString());

  return {
    currentVersion: `v${packageJson.version}`,
  };
}
