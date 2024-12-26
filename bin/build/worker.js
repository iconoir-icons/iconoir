import path from 'node:path';

export default async ({ targetName, config, targetConfig }) => {
  const { default: task } = await import(
    `./targets/${targetConfig.target || targetName}/index.js`
  );

  targetConfig.path = path.join(
    config.global.rootDir,
    ...targetConfig.path.split(path.posix.sep),
  );

  return task(config, targetConfig);
};
