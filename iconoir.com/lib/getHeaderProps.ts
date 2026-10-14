import fs from 'node:fs';
import { getNumIcons } from './getIcons';
import { getNumDownloads, getNumStars } from './stats';

export async function getHeaderProps() {
  const packageJson = JSON.parse(fs.readFileSync('../package.json').toString());

  return {
    currentVersion: `v${packageJson.version}`,
    numIcons: await getNumIcons(),
    numDownloads: await getNumDownloads(),
    numStars: await getNumStars(),
  };
}
