const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};
import { IconoirContext } from './IconoirContext'

${variables.interfaces};

function ${variables.componentName}(${variables.props}) {
  const context = React.useContext(IconoirContext);
  const realProps = { ...context, ...props };
  return (
    ${variables.jsx.replace(/props/g, 'realProps')}
  );
}

${variables.exports};
  `;
};

module.exports = template;
