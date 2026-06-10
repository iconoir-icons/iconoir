# Iconoir - solid-js

[![NPM Version](https://img.shields.io/npm/v/iconoir-solid-js?style=flat-square)](https://www.npmjs.com/package/iconoir-solid-js)
[![NPM Monthly Downloads](https://img.shields.io/npm/dm/iconoir-solid-js?style=flat-square)](https://www.npmjs.com/package/iconoir-solid-js)
[![NPM License](https://img.shields.io/npm/l/iconoir-solid-js?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/packages/iconoir-solid-js/LICENSE)

[Iconoir](https://iconoir.com/) is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

`iconoir-solid-js` is an open source package that exports these icons as solid-js components that can be used in all of your solid-js projects.

## Installation

| npm                      | Yarn                        | pnpm                        |
| ------------------------ | --------------------------- | --------------------------- |
| `npm i iconoir-solid-js` | `yarn add iconoir-solid-js` | `pnpm add iconoir-solid-js` |

## Usage

```javascript
import { Iconoir } from 'iconoir-solid-js';

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

| Prop name    | Default value  |
| ------------ | -------------- |
| color        | "currentColor" |
| width        | "1.5em"        |
| height       | "1.5em"        |
| stroke-width | 1.5            |

### IconoirProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use IconoirProvider to set the default icon props for everything inside IconoirProvider. You can set any prop that an svg tag may have, more specifically any prop from `JSX.SvgSVGAttributes<SVGSVGElement>`. These props will be used then as defaults and can be overriden on any specific icon.

```tsx
import { Check, IconoirProvider } from 'iconoir-solid-js';

return (
  <IconoirProvider color="#AAAAAA" stroke-width="1" width="1em" height="1em">
    <SomeOtherContainer>
      <Check />
      <Check color="#BBBBBB" />
    </SomeOtherContainer>
  </IconoirProvider>
);
```

## Icon names

The SolidJs components are named as PascalCase variations of their reference names (i.e. `airplane-helix-45deg` becomes `AirplaneHelix45deg`).

When using variants the `regular` variant is the default one, so if we want to use a `solid` icon we should add the variant name at the end (i.e. `UndoCircle` is regular and `UndoCircleSolid` is solid).

If we want we can use the name without the variant and import from the variant entry point in order to always use that type of variant.

- `iconoir-solid-js/regular`
- `iconoir-solid-js/solid`

```tsx
import { UndoCircle } from 'iconoir-solid-js/regular';

// This is a regular icon
return <UndoCircle></UndoCircle>;
```

```tsx
import { UndoCircle } from 'iconoir-solid-js/solid';

// This is a solid icon
return <UndoCircle></UndoCircle>;
```

```tsx
import { UndoCircle, UndoCircleSolid } from 'iconoir-solid-js';

// These are regular and solid icons
return (
  <>
    <UndoCircle></UndoCircle>
    <UndoCircleSolid></UndoCircleSolid>
  </>
);
```
