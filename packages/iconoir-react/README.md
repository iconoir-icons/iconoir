# Iconoir - React

[![NPM Version](https://img.shields.io/npm/v/iconoir-react?style=flat-square)](https://www.npmjs.com/package/iconoir-react)
[![NPM Monthly Downloads](https://img.shields.io/npm/dm/iconoir-react?style=flat-square)](https://www.npmjs.com/package/iconoir-react)
[![NPM License](https://img.shields.io/npm/l/iconoir-react?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/packages/iconoir-react/LICENSE)

[Iconoir](https://iconoir.com/) is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

`iconoir-react` is an open source package that exports these icons as React.js components that can be used in all of your React projects.

## Installation

| npm                   | Yarn                     | pnpm                     |
| --------------------- | ------------------------ | ------------------------ |
| `npm i iconoir-react` | `yarn add iconoir-react` | `pnpm add iconoir-react` |

## Usage

```javascript
import { Iconoir } from 'iconoir-react';
import React from 'react';

function App() {
  return <Iconoir />;
}

export default App;
```

Icons can take any standard SVG properties as optional props, e.g.

```javascript
<Iconoir color="red" height={36} width={36} />;
```

Default values for the most common props are given below:

| Prop name   | Default value  |
| ----------- | -------------- |
| color       | "currentColor" |
| width       | "1.5em"        |
| height      | "1.5em"        |
| strokeWidth | 1.5            |

### IconoirProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use IconoirProvider to set the default icon props for everything inside IconoirProvider.

```tsx
import { Check, IconoirProvider } from 'iconoir-react';

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
```

## Icon Names

The React components are named as PascalCase variations of their reference names (i.e. `airplane-helix-45deg` becomes `AirplaneHelix45deg`).
