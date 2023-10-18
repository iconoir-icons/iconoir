export function generateExport(name, from) {
  const ex = `export {${name.toString()}}`;

  return from ? `${ex} from "${from}";` : `${ex};`;
}
