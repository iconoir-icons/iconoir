## React Iconoir Icons

Iconoir is an open source library with 900+ SVG Icons. No premium icons, no email sign-up, no newsletters. You can browse the full suite of icons at [iconoir.com](https://iconoir.com/).

`iconoir-react` is an open source package that exports these icons as React.js components that can be used in all of your React projects.

**Based on Iconoir Icons ```v4.2.2```**

### Installation

```
yarn add iconoir-react
```
or
```
npm i iconoir-react
```

### Usage

```javascript
import React from 'react';
import { Iconoir } from 'iconoir-react';

const App = () => {
  return <Iconoir />
};

export default App;
```

Icons can take the optional props `color: string` and `size: string | number`, e.g.
```javascript
<Iconoir color="red" size={36} />
```
The default color is `"currentColor"` and the default size is `24`.

### Icon names

For the most part, the React components are named as PascalCase variations of their reference names (i.e. `add-circle-outline` becomes `AddCircleOutline`). However, some names have been altered slightly either because they start with numerical digits, which would lead to invalid React component names, or because they are organisations which use PascalCase in their brand names, such as `GitHub`. The altered names are as follows:

| Iconoir Name     | React Component |
|------------------|-----------------|
| `1st-medal`      | `Medal1st`      |
| `4k-display`     | `Display4k`     |
| `4x4-cell`       | `Cell4x4`       |
| `github`         | `GitHub`        |
| `github-outline` | `GitHubOutline` |
| `gitlab-full`    | `GitLabFull`    |
| `linkedin`       | `LinkedIn`      |
| `tiktok`         | `TikTok`        |
| `youtube`        | `YouTube`       |

### TypeScript

The types `Icon` and `IconProps` are provided by default within the package. If you are using TypeScript, you can just import them from the `iconoir-react` package.

```typescript
import React from 'react';
import { Iconoir, IconProps } from 'iconoir-react';

const App: React.FC<{}> = () => {
  const props: IconProps = {
    color: 'green',
    size: 12,
  };

  return <Iconoir {...props} />
};

export default App;
```
