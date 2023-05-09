const path = require('path');

function template(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${exportName} } from './${basename}'`;
  });
  exportEntries.push(
    "export { IconoirProvider, IconoirContext, IconoirContextValue } from './IconoirContext'"
  );
  exportEntries.push(
    "export { Icon } from './Icon'"
  );
  return exportEntries.join('\n');
}

module.exports = template;
