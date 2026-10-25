/** The documentation tree, shared by the docs pages, sidebar and nav menu. */

export interface DocumentationItemProps {
  suggestLibrary?: boolean;
  noReadOnGitHub?: boolean;
}

export interface DocumentationItem extends DocumentationItemProps {
  path: string;
  filepath?: string;
  childrenProps?: DocumentationItemProps;
  children?: DocumentationItem[];
  title: string;
  /** Full `<title>` for search results; `{count}` becomes the number of icons. */
  seoTitle?: string;
  /** Meta description for search results; `{count}` as in `seoTitle`. */
  seoDescription?: string;
  label?: string;
  skip?: boolean;
  /** `## Question` headings with answers below; adds FAQPage structured data. */
  faq?: boolean;
}

export function getDocumentationStructure(): DocumentationItem[] {
  return [
    {
      path: '',
      title: 'To Start',
      children: [
        {
          path: 'introduction',
          filepath: 'README.md',
          title: 'Introduction',
          seoTitle: 'Iconoir Docs: {count} Free, Open Source SVG Icons',
          seoDescription:
            'Get started with Iconoir: {count} free, open source (MIT) SVG icons for React, React Native, Vue, Flutter, CSS, Figma and Framer. No sign-up, no attribution.',
        },
        {
          path: 'faq',
          filepath: 'docs/faq.md',
          title: 'FAQ',
          seoTitle: 'Iconoir FAQ: Icon Count, License, Frameworks, Install',
          seoDescription:
            'How many icons Iconoir has, who made it, whether it is free for commercial use, which frameworks it supports and how to install it. Answers from the official project.',
          faq: true,
        },
        {
          path: 'contributing',
          filepath: 'CONTRIBUTING.md',
          title: 'How to contribute',
          seoTitle: 'Contribute to Iconoir, the Open Source Icon Library',
          seoDescription:
            'How to contribute to Iconoir: request new icons in a GitHub issue, report bugs, and open pull requests for features and fixes in the packages and the site.',
        },
        {
          path: 'naming-convention',
          filepath: 'NAMING_CONVENTION.md',
          title: 'Naming Convention',
          seoTitle: 'Icon Naming Convention | Iconoir Docs',
          seoDescription:
            'How Iconoir names its icons: [Object]-[Modifier]-[Container], as in user-minus or minus-square, so you can guess an icon name before searching for it.',
        },
      ],
    },
    {
      path: 'packages',
      title: 'Libraries',
      childrenProps: { suggestLibrary: true, noReadOnGitHub: true },
      children: [
        {
          path: 'iconoir-react',
          filepath: 'packages/iconoir-react/README.md',
          title: 'React',
          seoTitle: 'React Icons: {count} Free SVG Icon Components | Iconoir',
          seoDescription:
            'Install iconoir-react and use {count} free, open source (MIT) icons as React components. Set size, color and stroke width per icon or for all with IconoirProvider.',
        },
        {
          path: 'iconoir-react-native',
          filepath: 'packages/iconoir-react-native/README.md',
          title: 'React Native',
          seoTitle: 'React Native Icons: {count} Free SVG Icons | Iconoir',
          seoDescription:
            'Install iconoir-react-native with react-native-svg and use {count} free, open source (MIT) icons as React Native components. Set defaults with IconoirProvider.',
        },
        {
          path: 'iconoir-vue',
          filepath: 'packages/iconoir-vue/README.md',
          title: 'Vue',
          seoTitle: 'Vue Icons: {count} Free SVG Icon Components | Iconoir',
          seoDescription:
            'Install @iconoir/vue and use {count} free, open source (MIT) icons as Vue components. Set size, color and stroke width per icon or for all with IconoirProvider.',
        },
        {
          path: 'iconoir-flutter',
          filepath: 'packages/iconoir-flutter/README.md',
          title: 'Flutter',
          seoTitle: 'Flutter Icons: {count} Free SVG Icon Widgets | Iconoir',
          seoDescription:
            'Add iconoir_flutter with flutter pub add and use {count} free, open source (MIT) icons as Flutter widgets, built on flutter_svg.',
        },
        {
          path: 'framer',
          filepath: 'docs/framer.md',
          title: 'Framer',
          seoTitle: 'Free Icons in Framer: Iconoir Is Built In | Iconoir',
          seoDescription:
            'Iconoir is built into Framer: Insert > Graphics > Iconoir, then switch icons from the right sidebar. Free, open source icons, no plugin needed.',
        },
        {
          path: 'css',
          filepath: 'css/README.md',
          title: 'CSS',
          seoTitle: 'CSS Icons: {count} Free Icons via CDN, No Install | Iconoir',
          seoDescription:
            'Add one stylesheet from the jsDelivr CDN and use {count} free, open source icons with a class: <i class="iconoir-check"></i>. No build step, no npm install.',
        },
      ],
    },
    {
      path: '',
      title: 'Releases',
      children: [
        {
          path: 'changelog',
          filepath: 'CHANGELOG.md',
          title: 'Changelog',
          seoTitle: 'Iconoir Changelog: Releases and New Icons',
          seoDescription:
            'Every Iconoir release: new icons, renamed and fixed icons, and package updates for React, React Native, Vue, Flutter and CSS.',
          skip: true,
        },
      ],
    },
  ];
}

/** Site path of a leaf item, given the path of the section it sits in. */
export function documentationHref(sectionPath: string, itemPath: string) {
  return `/docs/${[sectionPath, itemPath].filter(Boolean).join('/')}`;
}

/**
 * README extras that suit GitHub but not the site: shields.io badges and the
 * Open Collective backers wall (with the line introducing it).
 */
const GITHUB_ONLY_PATTERNS = [
  /^\[!\[[^\]]*\]\(https:\/\/img\.shields\.io\/[^)]*\)\]\([^)]*\)[ \t]*\n?/gm,
  /^Thanks to everyone who supports the project!\s*\n/gm,
  /^<a [^>]*><img [^>]*src="https:\/\/opencollective\.com\/[^"]*"[^>]*><\/a>[ \t]*\n?/gm,
];

/** Question and plain-text answer pairs from a FAQ page's `## Question` sections. */
export function parseFaq(source: string): { question: string; answer: string }[] {
  return source
    .split(/^## /m)
    .slice(1)
    .map((section) => {
      const [question, ...body] = section.split('\n');

      const answer = body
        .join('\n')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/`/g, '')
        .replace(/^- /gm, '')
        .replace(/\s+/g, ' ')
        .trim();

      return { question: question.trim(), answer };
    });
}

export function stripGitHubExtras(source: string): string {
  return GITHUB_ONLY_PATTERNS.reduce((s, pattern) => s.replace(pattern, ''), source);
}
