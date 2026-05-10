export const readme = `# Iconoir - Preact

[![NPM Version](https://img.shields.io/npm/v/iconoir-preact?style=flat-square)](https://www.npmjs.com/package/iconoir-preact)
[![NPM Monthly Downloads](https://img.shields.io/npm/dm/iconoir-preact?style=flat-square)](https://www.npmjs.com/package/iconoir-preact)
[![NPM License](https://img.shields.io/npm/l/iconoir-preact?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/packages/iconoir-preact/LICENSE)

[Iconoir](https://iconoir.com/) is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

\`iconoir-preact\` is an open source package that exports these icons as Preact components that can be used in all of your Preact projects.

## Installation

| npm                   | Yarn                     | pnpm                     |
| --------------------- | ------------------------ | ------------------------ |
| \`npm i iconoir-preact\` | \`yarn add iconoir-preact\` | \`pnpm add iconoir-preact\` |

## Usage

\`\`\`javascript
import { Iconoir } from 'iconoir-preact';

export default function App() {
  return <Iconoir />;
}
\`\`\`

Icons can take any standard SVG properties as optional props, e.g.

\`\`\`javascript
<Iconoir color="red" height={36} width={36} />;
\`\`\`

Default values for the most common props are given below:

| Prop name   | Default value  |
| ----------- | -------------- |
| color       | "currentColor" |
| width       | "1.5em"        |
| height      | "1.5em"        |
| strokeWidth | 1.5            |

### IconoirProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use IconoirProvider to set the default icon props for everything inside IconoirProvider.

\`\`\`tsx
import { Check, IconoirProvider } from 'iconoir-preact';

return (
  <IconoirProvider
    iconProps={{
      color: '#AAAAAA',
      strokeWidth: 1,
      width: '1em',
      height: '1em',
    }}
  >
    <SomeOtherContainer>
      <Check />
    </SomeOtherContainer>
  </IconoirProvider>
);
\`\`\`

## Icon Names

The React components are named as PascalCase variations of their reference names (i.e. \`airplane-helix-45deg\` becomes \`AirplaneHelix45deg\`).
`;
