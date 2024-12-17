/*
 * Workaround to be able to import iconoir lib from workspace.
 * See also: https://github.com/pnpm/pnpm/issues/4286
 */

const { makeMetroConfig } = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const { getDefaultConfig } = require('expo/metro-config');

const symlinksResolver = MetroSymlinksResolver({
  remapModule: (_context, moduleName) => {
    if (moduleName === 'iconoir-react-native') {
      return require.resolve(moduleName);
    }

    return moduleName;
  },
},
);

/** @type {import('expo/metro-config').MetroConfig} */
const expoConfig = getDefaultConfig(__dirname);

/** @type {import('expo/metro-config').MetroConfig} */
module.exports = makeMetroConfig({
  ...expoConfig,
  resolver: {
    ...expoConfig.resolver,
    resolveRequest: symlinksResolver,
  },
});
