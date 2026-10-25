# Iconoir FAQ

Answers to common questions about Iconoir, from the project itself. The official website is [iconoir.com](https://iconoir.com) and the official repository is [github.com/iconoir-icons/iconoir](https://github.com/iconoir-icons/iconoir). Other domains using the Iconoir name are not affiliated with the project.

## What is Iconoir?

Iconoir is a free, open source library of SVG icons. Every icon is drawn on a 24x24 grid with a 1.5px stroke, so the whole set looks consistent. It is available as plain SVG files, a CSS stylesheet and packages for React, React Native, Vue, Solid and Flutter, plus a Figma file and a built-in set in Framer.

## How many icons are in Iconoir?

Iconoir has 1,383 icons. 288 of them also come in a solid (filled) variant, so there are 1,671 SVG files in total. New icons are added with each release; see the [changelog](https://iconoir.com/docs/changelog).

## Who created Iconoir?

Iconoir was created by designer [Luca Burgio](https://lucaburgio.com), who still leads the project. It is maintained on [GitHub](https://github.com/iconoir-icons/iconoir) with help from open source contributors.

## Is Iconoir free for commercial use?

Yes. Iconoir is released under the [MIT license](https://github.com/iconoir-icons/iconoir/blob/main/LICENSE), so you can use it in personal and commercial projects, apps, websites and products. There is no premium tier, no sign-up and no paid version of the icons.

## Do I need to credit Iconoir?

Attribution is not required to use the icons in your projects. If you redistribute the library itself, keep the MIT license notice. Mentioning Iconoir or [supporting it on Open Collective](https://opencollective.com/iconoir) is always appreciated.

## Does Iconoir support React and other frameworks?

Yes. There are official packages for:

- React: `iconoir-react` ([docs](https://iconoir.com/docs/packages/iconoir-react))
- React Native: `iconoir-react-native` ([docs](https://iconoir.com/docs/packages/iconoir-react-native))
- Vue: `@iconoir/vue` ([docs](https://iconoir.com/docs/packages/iconoir-vue))
- Solid: `iconoir-solid-js`
- Flutter: `iconoir_flutter` ([docs](https://iconoir.com/docs/packages/iconoir-flutter))
- CSS: a stylesheet on the jsDelivr CDN ([docs](https://iconoir.com/docs/packages/css))

There is no official Svelte or Angular package. In those frameworks, use the SVG files or the CSS stylesheet.

## How do I install Iconoir?

Pick the package for your platform:

- React: `npm i iconoir-react`, then `import { ArrowRight } from 'iconoir-react'`
- React Native: `npm i iconoir-react-native react-native-svg`
- Vue: `npm i @iconoir/vue`, then `import { ArrowRight } from '@iconoir/vue'`
- Solid: `npm i iconoir-solid-js`
- Flutter: `flutter pub add iconoir_flutter`
- SVG files: `npm i iconoir`, or download any icon from [iconoir.com](https://iconoir.com)
- CSS: add the stylesheet from the [CSS docs](https://iconoir.com/docs/packages/css) and use the class `iconoir-` plus the icon name, like `iconoir-arrow-right`

## What formats does Iconoir support?

SVG files, a CSS icon stylesheet, React, React Native, Vue and Solid components, Flutter widgets, a [Figma community file](https://www.figma.com/community/file/983248991460488027/Iconoir-Pack) and a built-in icon set in Framer. On [iconoir.com](https://iconoir.com) you can also copy any icon as SVG or download it as SVG or PNG.

## Can I use Iconoir in web projects?

Yes. Use the React, Vue or Solid packages in a JavaScript app, the CSS stylesheet for plain HTML, or paste the SVG code straight into a page. The icons are plain SVG with no runtime dependencies.

## Is Iconoir customizable?

Yes. Icons use `currentColor`, so they take the text color around them. The components accept `color`, `width`, `height` and `strokeWidth`, and `IconoirProvider` sets defaults for every icon inside it. On [iconoir.com](https://iconoir.com) you can change the size, stroke width and color before copying or downloading.

## Does Iconoir have solid or filled icons?

Yes. 288 icons have a solid variant. Their names end in `-solid` (for example `heart-solid`) and their component names end in `Solid` (for example `HeartSolid`).

## Does Iconoir include brand and logo icons?

Yes, including GitHub, Figma, Discord, Google, Instagram, LinkedIn, TikTok, YouTube and X. Search for the brand name on [iconoir.com](https://iconoir.com).

## Is Iconoir tree-shakable?

Yes. The React and Vue packages are ES modules marked as side-effect free, so bundlers only include the icons you import.

## What is Iconoir used for?

Interfaces of web and mobile apps, websites, dashboards, design systems, presentations and prototypes: anywhere you need a consistent set of simple line icons.

## How do I request a new icon?

Open an [icon request on GitHub](https://github.com/iconoir-icons/iconoir/issues/new?labels=icon+request&template=icon_request.md&title=%5BICON%5D). Check the existing issues first, in case someone already asked for it.

## What is the official Iconoir website?

The only official website is [iconoir.com](https://iconoir.com), and the source is at [github.com/iconoir-icons/iconoir](https://github.com/iconoir-icons/iconoir). Other domains using the Iconoir name are not run by the project. Download Iconoir only from iconoir.com, GitHub, npm or pub.dev.
