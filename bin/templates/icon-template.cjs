const template = (variables, { tpl }) => {
  variables.props[0].name = 'passedProps';

  // Workaround to fix ref type for React Native
  const isNative = variables.imports.some(
    (i) => i.source?.value === 'react-native-svg',
  );

  if (isNative) {
    variables.props[1].typeAnnotation.typeAnnotation.typeParameters.params[0].typeName.name =
      'Svg';
  }

  return tpl`
${variables.imports};
import { IconoirContext } from './IconoirContext';

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return ${variables.jsx};
};

${variables.exports};
`;
};

module.exports = template;
