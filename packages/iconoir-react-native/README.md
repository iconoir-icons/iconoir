# Iconoir - React Native

[![NPM Version](https://img.shields.io/npm/v/iconoir-react?style=flat-square)](https://www.npmjs.com/package/iconoir-react-native)
[![NPM Monthly Downloads](https://img.shields.io/npm/dm/iconoir-react-native?style=flat-square)](https://www.npmjs.com/package/iconoir-react-native)
[![NPM License](https://img.shields.io/npm/l/iconoir-react-native?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/packages/iconoir-react-native/LICENSE)

[Iconoir](https://iconoir.com/) is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

`iconoir-react-native` is an open source package that exports these icons as React Native components (`react-native-svg`) that can be used in all of your React Native projects.

## Installation

| npm                                           | Yarn                                             |
| --------------------------------------------- | ------------------------------------------------ |
| `npm i iconoir-react-native react-native-svg` | `yarn add iconoir-react-native react-native-svg` |

## Usage

```javascript
import React from 'react';
import { View } from 'react-native';
import { Iconoir } from 'iconoir-react-native';

const App = () => {
  return (
    <View>
      <Iconoir />
    </View>
  );
};

export default App;
```

Icons can take any `react-native-svg` properties as optional props, e.g.

```javascript
<Iconoir color="red" height={36} width={36} />
```

Default values for the most common props are given below:

| Prop name   | Default value  |
| ----------- | -------------- |
| color       | "currentColor" |
| width       | "1.5em"        |
| height      | "1.5em"        |
| strokeWidth | 1.5            |
| fill        | "none"         |

## IconoirProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use IconoirProvider to set the default icon props for everything inside IconoirProvider.

```tsx
import { IconoirProvider, Check } from 'iconoir-react-native';

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

## Icon names

The React components are named as PascalCase variations of their reference names (i.e. `airplane-helix-45deg` becomes `AirplaneHelix45deg`).
