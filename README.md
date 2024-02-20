# Iconoir

[![Version](https://img.shields.io/github/v/release/iconoir-icons/iconoir?style=flat-square)](https://github.com/iconoir-icons/iconoir/releases)
[![Project Stars](https://img.shields.io/github/stars/iconoir-icons/iconoir?style=flat-square)](https://github.com/iconoir-icons/iconoir)
[![React Library](https://img.shields.io/npm/dm/iconoir-react?color=98E8F3&label=react&style=flat-square)](https://www.npmjs.com/package/iconoir-react)
[![License](https://img.shields.io/github/license/iconoir-icons/iconoir?style=flat-square)](https://github.com/iconoir-icons/iconoir/blob/main/LICENSE)
[![Discord](https://img.shields.io/discord/998909400234348615?color=5865f2&label=Discord&style=flat-square)](https://discord.gg/txXcKCAmKW)

## What is Iconoir?

Iconoir is an open-source library with 1500+ unique SVG icons, designed on a 24x24 pixels grid.

<a href="https://iconoir.com"><strong>Browse at iconoir.com &rarr;</strong></a>

## Basic Usage

You can download any icon of the pack directly from https://iconoir.com or get them from this repository.

The icons are also available via the [`iconoir`](https://www.npmjs.com/package/iconoir) NPM package:

| npm             | Yarn               | pnpm               | Bun               |
| --------------- | ------------------ | ------------------ | ----------------- |
| `npm i iconoir` | `yarn add iconoir` | `pnpm add iconoir` | `bun add iconoir` |

Example usage:

```js
import Iconoir from 'iconoir/icons/iconoir.svg';
```

## React

A React library is available under the name `iconoir-react`.

For more details, see the package [README](./packages/iconoir-react).

## React Native

A React Native library is available under the name `iconoir-react-native`.

For more details, see the package [README](./packages/iconoir-react-native).

## Vue

A Vue library is available under the name `@iconoir/vue`.

For more details, see the package [README](./packages/iconoir-vue).

## Flutter

A Flutter library is available under the name `iconoir_flutter`.

For more details, see the package [README](./packages/iconoir-flutter).

## Framer

Iconoir is happily part of [Framer](https://framer.com).

To start using the icons: On the top menu, `Insert` > `Graphics` > `Iconoir`.

You can switch between icons from the right sidebar in the editor.

## CSS

Import the CSS file:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
/>
```

Here is an example in HTML:

```html
<i class="iconoir-hand-brake"></i>
```

The class must always be "iconoir-" and then the name of the icon. You can find the names of the icons [here](https://iconoir.com).

The icons are `display: inline-block` and default to the current font size. You can control this
by adjusting the `::before` styles of the element (which is where the icons are added as a mask).

## Figma

The library is available in the Figma community [here](https://www.figma.com/community/file/983248991460488027/Iconoir-Pack).

## Swift Package

To add `Iconoir-swift` to your Xcode project, follow these steps:

1. In Xcode, open your project and navigate to _File_ > _Swift Packages_ > _Add Package Dependency..._
2. Enter the repository URL: `https://github.com/iconoir-icons/iconoir-swift.git`
3. Choose the branch or version you want to add, and click _Next_.
4. Select the target where you want to use the package, then click _Finish_.

### UIKit

```swift
import UIKit
import Iconoir

let imageView = UIImageView(image: Iconoir.bell.asUIImage)
```

### SwiftUI

```swift
import SwiftUI
import Iconoir

struct ContentView: View {
    var body: some View {
        Iconoir.bell.asImage
            .foregroundColor(.blue)
            .font(.system(size: 24))
    }
}
```

## License

MIT License.
