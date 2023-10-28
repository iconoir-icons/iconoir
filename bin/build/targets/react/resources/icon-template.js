import { generateImport } from '../../../lib/import-export.js';

export function getTemplate(native, ext) {
  return (variables, { tpl }) => {
    variables.props[0].name = 'passedProps';

    // Workaround to fix ref type for React Native
    if (native) {
      variables.props[1].typeAnnotation.typeAnnotation.typeParameters.params[0].typeName.name =
        'Svg';
    }

    const useClientDirective = native ? '' : '"use client";';
    const iconoirContextImport = generateImport(
      ['IconoirContext'],
      `../IconoirContext.${ext}`,
    );

    return tpl`
  ${useClientDirective}
  ${variables.imports};
  ${iconoirContextImport};
 
  ${variables.interfaces};
  
  const ${variables.componentName} = (${variables.props}) => {
    const context = React.useContext(IconoirContext);
    const props = { ...context, ...passedProps };
    return ${variables.jsx};
  };
  
  ${variables.exports};
  `;
  };
}
