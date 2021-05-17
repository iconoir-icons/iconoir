const path = require('path');
const fs = require('fs');
const upperCamelCase = require('uppercamelcase');
const format = require('prettier-eslint');

const rootDir = path.join(__dirname, '..');
const iconoirRootDir = path.join(rootDir, '../..');
const iconoirIconsDir = path.join(iconoirRootDir, 'icons');

const builtIconsDir = path.join(rootDir, 'src/icons');

const initialTypeDefinitions = `/// <reference types="react" />
import { FC } from 'react';

export interface IconProps {
  color?: string;
  size?: string | number;
};

export type Icon = FC<IconProps>;

`;

if (!fs.existsSync(builtIconsDir)) {
  fs.mkdirSync(builtIconsDir);
};

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

const incompatibleNames = {
  '1st-medal': 'Medal1st',
  '4k-display': 'Display4k',
  '4x4-cell': 'Cell4x4',
  'github': 'GitHub',
  'github-outline': 'GitHubOutline',
  'gitlab-full': 'GitLabFull',
  'linkedin': 'LinkedIn',
  'tiktok': 'TikTok',
  'youtube': 'YouTube',
};

fs.readdir(iconoirIconsDir, (err, files) => {
  if (err) {
    return console.error('Unable to find root icons directory');
  };
  files.forEach((file) => {
    const iconName = file.split('.')[0];

    const location = path.join(builtIconsDir, `${iconName}.jsx`);

    const componentName = (iconName in incompatibleNames) ? incompatibleNames[iconName] : upperCamelCase(iconName);

    const fileData = fs.readFileSync(path.join(iconoirIconsDir, file));
    
    const element = `import React, { forwardRef } from 'react';
    import PropTypes from 'prop-types';

    export const ${componentName} = forwardRef(({color = 'currentColor', size = 24}, ref) => {
      return (
        <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" color={color} xmlns="http://www.w3.org/2000/svg">
        ${fileData}
        </svg>
      );
    });

    ${componentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    };

    ${componentName}.displayName = '${componentName}';

    export default ${componentName};
    `;

    const component = format({
      text: element,
      prettierOptions: {
        singleQuote: true,
        parser: 'babel',
      },
    });

    fs.writeFileSync(location, component, 'utf-8');

    console.log('Built', componentName);

    const exportString = `export { default as ${componentName} } from './icons/${iconName}';\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.js'),
      exportString,
      'utf-8',
    );

    const typeString = `export const ${componentName}: Icon;\n`;
    fs.appendFileSync(
      path.join(rootDir, 'src', 'index.d.ts'),
      typeString,
      'utf-8',
    );
  });
});
