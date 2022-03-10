import semver from 'semver';
import path from 'path';
import fs from 'fs';

const PACKAGE_BASE = '';

function publishPackage(name) {
  console.info('Publishing %s', name);

  const newVersion = semver.valid(semver.coerce(process.env.TAG_NAME));
  console.info('New version is %s', newVersion);
  if (!newVersion) {
    throw new Error(`Tag name ${process.env.TAG_NAME} is not valid.`);
  }

  const packageJsonPath = path.join('packages', name, 'package.json');
  const contents = JSON.parse(fs.readFileSync(packageJsonPath).toString());
  contents.version = newVersion;
  if (PACKAGE_BASE) {
    contents.name = `${PACKAGE_BASE}/${name}`;
  }
  fs.writeFileSync(packageJsonPath, JSON.stringify(contents, undefined, 2));
  console.info('package.json updated');
}

publishPackage('iconoir-react');
publishPackage('iconoir-react-native');
