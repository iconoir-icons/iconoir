import ts from 'typescript';

/**
 *
 * @param {string} path
 * @param {string} content
 * @param {object} options
 */
export function getDts(path, content, options) {
  options = ts.convertCompilerOptionsFromJson(options, '').options;

  let output;

  const host = ts.createCompilerHost(options);

  const _readFile = host.readFile;

  host.readFile = (filename) => {
    if (filename === path)
      return content;

    return _readFile(filename);
  };

  const dtsFilename = path.replace(/\.(m|c)?(ts|js)x?$/, '.d.$1ts');

  host.writeFile = (filename, contents) => {
    if (filename === dtsFilename)
      output = contents;
  };

  const program = ts.createProgram([path], options, host);
  const emitResult = program.emit();

  const allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics);

  const results = allDiagnostics.map((diagnostic) => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start,
      );

      const message = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        '\n',
      );

      return `${diagnostic.file.fileName} (${line + 1},${
        character + 1
      }): ${message}`;
    } else {
      return ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    }
  });

  if (results.length > 0) {
    throw new Error(results);
  }

  return output;
}
