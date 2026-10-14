import fs from 'node:fs';
import { getNumStars } from './stats';

export async function getHeaderProps() {
  const packageJson = JSON.parse(fs.readFileSync('../package.json').toString());

  return {
    currentVersion: `v${packageJson.version}`,
    numStars: await getNumStars(),
  };
}
