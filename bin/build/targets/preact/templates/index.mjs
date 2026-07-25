export const indexDTS = `import { FunctionalComponent, JSX } from 'preact';\n`;

export function esmExport(module, name) {
  return `export { default as ${name} } from "${module}";\n`;
}

export function cjsExport(module, name) {
  return `exports.${name} = require("${module}").default;\n`;
}

export function dtsExport(module, name) {
  const typeName = `FunctionalComponent<JSX.SVGAttributes<SVGSVGElement>>`;
  return `export const ${name}: ${typeName};\n`;
}
