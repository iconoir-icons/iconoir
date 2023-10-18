const template = (variables, { tpl }) => {
  variables.props[0].name = 'passedProps';

  return tpl`
${variables.imports};
import { IconoirContext } from '../IconoirContext';

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {
  const context = React.useContext(IconoirContext);
  const props = { ...context, ...passedProps };
  return ${variables.jsx};
};

${variables.exports};
`;
};

export default template;
