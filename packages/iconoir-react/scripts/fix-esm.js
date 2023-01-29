const path = require('path');
const fs = require('fs');

function processDirectory(relative) {
  const OUTPUT = path.resolve(__dirname, '../dist', relative);
  const files = fs.readdirSync(OUTPUT);

  for (const file of files) {
    if (fs.statSync(path.resolve(OUTPUT, file)).isFile() === false) continue;
    const renamed = file.replace(/\.js$/, '.mjs');
    fs.renameSync(path.resolve(OUTPUT, file), path.resolve(OUTPUT, renamed));

    // Replace all imports without an extension to .mjs
    const contents = fs.readFileSync(path.resolve(OUTPUT, renamed), 'utf8');
    fs.writeFileSync(
      path.resolve(OUTPUT, renamed),
      contents.replace(/(\bfrom\s+["']\..*)(["'])/g, '$1.mjs$2')
    );
  }
}

processDirectory('esm');
processDirectory('esm/server');
