import { generateImport } from '../../../lib/import-export.js';

const injectProps = (svg) => {
  return svg.replace(/<svg([^>]*)>/, `<svg$1 {...rest} ref={props.ref}>`);
};

export function getTemplate(iconoirContextPath, componentName, svgContent) {
  const useIconoirImport = generateImport(['useIconoir'], iconoirContextPath);

  return `
  import { splitProps, mergeProps, type JSX } from "solid-js";
  ${useIconoirImport};
  
  export const ${componentName} = (props: Partial<JSX.SvgSVGAttributes<SVGSVGElement>>) => {
    const context = useIconoir();
    const allProps = mergeProps(context || {}, props);
    const  [_, rest] = splitProps(allProps, ["ref"]);
    return ${injectProps(svgContent)};
  };
  
  export default ${componentName};
  `;
}

export default getTemplate;
