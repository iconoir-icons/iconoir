/* eslint-disable no-console */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { updateYamlKey } from '@atomist/yaml-updater';
import semver from 'semver';

const newVersion = semver.valid(semver.coerce(process.env.TAG_NAME));
console.info('New version is %s', newVersion);

if (!newVersion) {
  throw new Error(`Tag name ${process.env.TAG_NAME} is not valid.`);
}

publishNpmPackage('iconoir');
publishNpmPackage('iconoir-react');
publishNpmPackage('iconoir-react-native');
publishNpmPackage('iconoir-vue');
publishPubPackage('iconoir-flutter');

function publishNpmPackage(name) {
  console.info('Publishing %s', name);

  const packageJsonPath = name === 'iconoir'
    ? 'package.json'
    : path.join('packages', name, 'package.json');

  const contents = JSON.parse(fs.readFileSync(packageJsonPath).toString());
  contents.version = newVersion;

  fs.writeFileSync(packageJsonPath, JSON.stringify(contents, undefined, 2));
  console.info('package.json updated');
}

function publishPubPackage(name) {
  const pubspecFilepath = path.join('packages', name, 'pubspec.yaml');
  const pubspecContents = fs.readFileSync(pubspecFilepath).toString();

  fs.writeFileSync(
    pubspecFilepath,
    updateYamlKey('version', newVersion, pubspecContents),
  );

  console.info('pubspec.yaml updated');
}
