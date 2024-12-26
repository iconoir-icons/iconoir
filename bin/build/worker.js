export default async ({ targetName, config, targetConfig }) => {
  const { default: task } = await import(
    `./targets/${targetConfig.target || targetName}/index.js`
  );

  return task(config, targetConfig);
};
