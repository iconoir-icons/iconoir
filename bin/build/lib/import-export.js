import path from 'node:path';

export function generateImport(name, from) {
  if (Array.isArray(name))
    name = `{${name.toString()}}`;

  return `import ${name} from "${from}";`;
}

export function generateExport(name, from) {
  const base = `export {${name.toString()}}`;

  return from ? `${base} from "${from}";` : `${base};`;
}

export function toImportPath(input) {
  input = input.split(path.sep).join(path.posix.sep);

  return input.charAt(0) !== '.' ? `./${input}` : input;
}
