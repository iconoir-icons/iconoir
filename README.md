<div align="center">
  <img src="assets/cover.png" alt="Iconoir" />
</div>

<div align="center">
  Iconoir is an open-source library with 1000+ unique SVG icons, designed on a 24x24 pixels grid. No premium icons, no email sign-up, no newsletters.
</div>

<div align="center">
  <a href="https://iconoir.com"><strong>Browse at iconoir.com &rarr;</strong></a>
</div>

<div align="center">
  <a href="https://github.com/lucaburgio/iconoir/releases">
    <img src="https://img.shields.io/github/v/release/lucaburgio/iconoir?style=flat-square" alt="Version" />
  </a>
  <a href="https://github.com/lucaburgio/iconoir">
    <img src="https://img.shields.io/github/stars/lucaburgio/iconoir?style=flat-square" alt="Project Stars" />
  </a>
  <a href="https://www.npmjs.com/package/iconoir-react">
    <img src="https://img.shields.io/npm/dm/iconoir-react?color=98E8F3&label=react&style=flat-square" alt="React Library" />
  </a>
  <a href="https://github.com/lucaburgio/iconoir/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/lucaburgio/iconoir?style=flat-square" alt="License" />
  </a>
  <a href="https://discord.gg/txXcKCAmKW">
    <img src="https://img.shields.io/discord/998909400234348615?color=5865f2&label=Discord&style=flat-square" alt="Discord" />
  </a>
</div>


## Basic Usage

You can download any icon of the pack directly from https://iconoir.com or get them from this repository.

Additionally, the icons are available via the `iconoir` NPM package:
```bash
yarn add iconoir
# or
npm i iconoir
```

Example usage:
```js
import Iconoir from 'iconoir/icons/iconoir.svg'
```

## React

A React library is available to install under the name `iconoir-react`. For more details, see the package [README](./packages/iconoir-react).

## React Native

A React Native library is available to install under the name `iconoir-react-native`. For more details, see the package [README](./packages/iconoir-react-native).

## Flutter

A Flutter library is available to install under the name `iconoir_flutter`. For more details, see the package [README](./packages/iconoir-flutter).

## Framer

Iconoir is happily part of [Framer](https://framer.com) now. To start using the icons: On the top menu, `Insert` > `Graphics` > `Iconoir`.
You can switch between icons from the right sidebar in the editor.

## CSS

Import the CSS File:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css">
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

## License

MIT License
