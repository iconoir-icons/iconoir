import ts from 'typescript';
import * as pathlib from 'path';

export function getDts(path, content, options) {
  let output;

  const host = ts.createCompilerHost(options);

  const _readFile = host.readFile;

  host.readFile = (filename) => {
    const normalizedFilename = pathlib.normalize(filename).replace(/\\/g, '/');
    const normalizedPath = pathlib.normalize(path).replace(/\\/g, '/');

    if (normalizedFilename === normalizedPath) return content;

    return _readFile(filename);
  };

  const dtsFilename = path.replace(/\.(m|c)?(ts|js)x?$/, '.d.$1ts');

  host.writeFile = (filename, contents) => {
    const normalizedFilename = pathlib.normalize(filename).replace(/\\/g, '/');
    const normalizedDtsFilename = pathlib
      .normalize(dtsFilename)
      .replace(/\\/g, '/');
    if (normalizedFilename === normalizedDtsFilename) output = contents;
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
