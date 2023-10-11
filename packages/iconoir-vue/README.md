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

```vue
<script setup>
import { Iconoir } from '@iconoir/vue';
</script>

<template>
  <Iconoir />
</template>
```

### Vue 2

```vue
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

```vue
<script setup>
import { IconoirProvider, Check } from '@iconoir/vue';
</script>

<template>
  <IconoirProvider
    :icon-props="{
      color: '#AAAAAA',
      'stroke-width': 1,
      width: '1em',
      height: '1em',
    }"
  >
    <SomeOtherContainer>
      <Check />
    </SomeOtherContainer>
  </IconoirProvider>
</template>
```

## Icon names

For the most part, the Vue components are named as PascalCase variations of their reference names (i.e. `add-circle-outline` becomes `AddCircleOutline`). However, some names have been altered slightly either because they start with numerical digits, which would lead to invalid Vue component names, or because they are organisations which use PascalCase in their brand names, such as `GitHub`. The altered names are as follows:

| Iconoir Name     | Vue Component   |
| ---------------- | --------------- |
| `1st-medal`      | `Medal1St`      |
| `4k-display`     | `Display4K`     |
| `4x4-cell`       | `Cell4X4`       |
| `360-view`       | `View360`       |
| `github`         | `GitHub`        |
| `github-outline` | `GitHubOutline` |
| `gitlab-full`    | `GitLabFull`    |
| `linkedin`       | `LinkedIn`      |
| `tiktok`         | `TikTok`        |
| `youtube`        | `YouTube`       |

<SuggestLibrary />
