# Iconoir - Vue

[![NPM Version](https://img.shields.io/npm/v/@iconoir/vue?style=flat-square)](https://www.npmjs.com/package/@iconoir/vue)
[![NPM Monthly Downloads](https://img.shields.io/npm/dm/@iconoir/vue?style=flat-square)](https://www.npmjs.com/package/@iconoir/vue)
[![NPM License](https://img.shields.io/npm/l/@iconoir/vue?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/packages/iconoir-vue/LICENSE)

[Iconoir](https://iconoir.com/) is an open-source library with 1300+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.

`@iconoir/vue` is an open source package that exports these icons as Vue.js components that can be used in all of your Vue projects. Thanks to `vue-demi`, both Vue 2 and Vue 3 are supported.

## Installation

| npm                  | Yarn                    | pnpm                    |
| -------------------- | ----------------------- | ----------------------- |
| `npm i @iconoir/vue` | `yarn add @iconoir/vue` | `pnpm add @iconoir/vue` |

## Usage

### Vue 3

```js
<script setup>
  import { Iconoir } from '@iconoir/vue';
</script>

<template>
  <Iconoir />
</template>
```

### Vue 2

```js
<script>
  import { Iconoir } from '@iconoir/vue';

  export default
      components: {
          Iconoir
      }
  }
</script>

<template>
  <Iconoir />
</template>
```

### Properties

Icons can take any standard SVG properties as optional props, e.g.

```jsx
<Iconoir color="red" height="36" width="36" />
```

Default values for the most common props are given below:

| Prop name    | Default value  |
| ------------ | -------------- |
| color        | "currentColor" |
| width        | "1.5em"        |
| height       | "1.5em"        |
| stroke-width | "1.5"          |

### IconoirProvider

Tired of specifying the same props for every single icon, every time you use them? So were we. Use IconoirProvider to set the default icon props for everything inside IconoirProvider.

```js
<script setup>
import { IconoirProvider, Check } from '@iconoir/vue';
</script>

<template>
  <IconoirProvider
    :icon-props="{
      'color': '#AAAAAA',
      'stroke-width': 1,
      'width': '1em',
      'height': '1em',
    }"
  >
    <SomeOtherContainer>
      <Check />
    </SomeOtherContainer>
  </IconoirProvider>
</template>
```

## Icon names

The Vue components are named as PascalCase variations of their reference names (i.e. `airplane-helix-45deg` becomes `AirplaneHelix45deg`).

<SuggestLibrary />
