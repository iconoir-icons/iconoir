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
  label?: string;
  skip?: boolean;
}

export function getDocumentationStructure(): DocumentationItem[] {
  return [
    {
      path: '',
      title: 'To Start',
      children: [
        { path: 'introduction', filepath: 'README.md', title: 'Introduction' },
        {
          path: 'contributing',
          filepath: 'CONTRIBUTING.md',
          title: 'How to contribute',
        },
        {
          path: 'naming-convention',
          filepath: 'NAMING_CONVENTION.md',
          title: 'Naming Convention',
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
        },
        {
          path: 'iconoir-react-native',
          filepath: 'packages/iconoir-react-native/README.md',
          title: 'React Native',
        },
        {
          path: 'iconoir-vue',
          filepath: 'packages/iconoir-vue/README.md',
          title: 'Vue',
        },
        {
          path: 'iconoir-flutter',
          filepath: 'packages/iconoir-flutter/README.md',
          title: 'Flutter',
        },
        {
          path: 'framer',
          filepath: 'docs/framer.md',
          title: 'Framer',
        },
        {
          path: 'css',
          filepath: 'css/README.md',
          title: 'CSS',
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

export function stripGitHubExtras(source: string): string {
  return GITHUB_ONLY_PATTERNS.reduce((s, pattern) => s.replace(pattern, ''), source);
}
