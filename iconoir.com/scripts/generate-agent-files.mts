/**
 * Writes the machine-readable entry points for AI agents and crawlers into
 * public/: llms.txt (overview), llms-full.txt (all docs plus the icon index)
 * and icons.json (every icon with its names per package and an SVG URL).
 * Runs before `next dev` and `next build`; the outputs are git-ignored.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import csv from 'csvtojson';
import { pascalCase } from 'scule';
import { documentationHref, getDocumentationStructure, stripGitHubExtras } from '../lib/docs.ts';

const SITE = 'https://iconoir.com';
const GITHUB = 'https://github.com/iconoir-icons/iconoir';

const siteRoot = process.cwd();
const repoRoot = path.join(siteRoot, '..');
const publicDir = path.join(siteRoot, 'public');

const { version } = JSON.parse(
  fs.readFileSync(path.join(repoRoot, 'package.json'), 'utf8'),
);

const cdn = `https://cdn.jsdelivr.net/npm/iconoir@${version}/icons`;

interface IconEntry {
  name: string;
  variant: 'regular' | 'solid';
  category: string;
  tags: string[];
  component: string;
  svg: string;
}

function parseTags(raw: string | undefined): string[] {
  return (raw ?? '')
    .split(/[|,]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

async function getIcons(): Promise<IconEntry[]> {
  const rows: { filename: string; category: string; tags: string }[]
    = await csv().fromFile(path.join(siteRoot, 'icons.csv'));

  const icons: IconEntry[] = [];

  for (const row of rows) {
    for (const variant of ['regular', 'solid'] as const) {
      if (!fs.existsSync(path.join(repoRoot, 'icons', variant, `${row.filename}.svg`)))
        continue;

      const name = variant === 'solid' ? `${row.filename}-solid` : row.filename;

      icons.push({
        name,
        variant,
        category: row.category,
        tags: parseTags(row.tags),
        component: pascalCase(name),
        svg: `${cdn}/${variant}/${row.filename}.svg`,
      });
    }
  }

  return icons;
}

/** Docs pages in sidebar order, skipping the ones the site hides (changelog). */
function getDocs() {
  return getDocumentationStructure().flatMap((section) =>
    (section.children ?? [])
      .filter((item) => item.filepath && !item.skip)
      .map((item) => ({
        title: item.title,
        url: `${SITE}${documentationHref(section.path, item.path)}`,
        filepath: item.filepath!,
      })),
  );
}

function llmsTxt(numIcons: number, numBase: number, docs: ReturnType<typeof getDocs>) {
  return `# Iconoir

> Iconoir is a free, open source (MIT) SVG icon library with ${numIcons} icons (${numBase} unique icons, many with a solid variant), designed on a 24x24 grid with a 1.5px stroke. Free for personal and commercial use, no attribution required, no premium tier and no sign-up. Available as plain SVG, CSS, React, React Native, Vue, Solid, Flutter, Figma and Framer.

Current version: ${version}. Browse and search all icons at ${SITE}. The official website is ${SITE} and the official repository is https://github.com/iconoir-icons/iconoir; other domains using the Iconoir name are not affiliated with the project.

## Using Iconoir

- Icon names are kebab-case (\`arrow-right\`). Solid variants append \`-solid\` (\`arrow-right-solid\`).
- Components (React, React Native, Vue, Solid, Flutter) use the PascalCase name: \`arrow-right\` → \`ArrowRight\`, \`arrow-right-solid\` → \`ArrowRightSolid\`.
- CSS classes are \`iconoir-\` + the icon name: \`<i class="iconoir-arrow-right"></i>\`.
- Before using an icon name, check that it exists in [icons.json](${SITE}/icons.json).

| Platform | Install | Usage |
| --- | --- | --- |
| React | \`npm i iconoir-react\` | \`import { ArrowRight } from 'iconoir-react'\` |
| React Native | \`npm i iconoir-react-native\` | \`import { ArrowRight } from 'iconoir-react-native'\` |
| Vue | \`npm i @iconoir/vue\` | \`import { ArrowRight } from '@iconoir/vue'\` |
| Solid | \`npm i iconoir-solid-js\` | \`import { ArrowRight } from 'iconoir-solid-js'\` |
| Flutter | \`flutter pub add iconoir_flutter\` | \`const ArrowRight()\` from \`package:iconoir_flutter/iconoir_flutter.dart\` |
| CSS | \`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css">\` | \`<i class="iconoir-arrow-right"></i>\` |
| SVG (npm) | \`npm i iconoir\` | \`import arrowRight from 'iconoir/icons/arrow-right.svg'\` |
| SVG (CDN) | none | \`${cdn}/regular/arrow-right.svg\` |

Components accept standard SVG props (\`color\`, \`width\`, \`height\`, \`strokeWidth\`); defaults are \`currentColor\`, \`1.5em\` and a 1.5 stroke. \`IconoirProvider\` sets defaults for every icon inside it.

## Machine-readable data

- [icons.json](${SITE}/icons.json): every icon with its category, tags, component name and SVG URL
- [llms-full.txt](${SITE}/llms-full.txt): all of the documentation below plus the full icon index, in one file

## Docs

${docs.map((doc) => `- [${doc.title}](${doc.url})`).join('\n')}
- [Changelog](${SITE}/docs/changelog)

## Project

- [GitHub repository](${GITHUB})
- [License (MIT)](${GITHUB}/blob/main/LICENSE)
- [Figma community file](https://www.figma.com/community/file/983248991460488027/Iconoir-Pack)
- [Support Iconoir on Open Collective](https://opencollective.com/iconoir)
`;
}

function llmsFullTxt(intro: string, icons: IconEntry[], docs: ReturnType<typeof getDocs>) {
  const docSections = docs.map((doc) => {
    const source = stripGitHubExtras(
      fs.readFileSync(path.join(repoRoot, doc.filepath), 'utf8'),
    ).trim();

    return `<!-- ${doc.title}: ${doc.url} -->\n\n${source}`;
  });

  const iconLines = icons.map((icon) =>
    `- ${icon.name} (${icon.category})${icon.tags.length ? `: ${icon.tags.join(', ')}` : ''}`,
  );

  return [
    intro,
    '---\n\n# Documentation',
    ...docSections,
    `---\n\n# Icon index\n\nAll ${icons.length} icons as \`name (category): tags\`. Component name is the PascalCase name; SVG URL is \`${cdn}/{regular|solid}/{name without -solid}.svg\`.\n\n${iconLines.join('\n')}`,
  ].join('\n\n');
}

const icons = await getIcons();
const docs = getDocs();
const numBase = icons.filter((icon) => icon.variant === 'regular').length;
const intro = llmsTxt(icons.length, numBase, docs);

fs.writeFileSync(path.join(publicDir, 'llms.txt'), intro);
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), `${llmsFullTxt(intro, icons, docs)}\n`);

fs.writeFileSync(
  path.join(publicDir, 'icons.json'),
  `${JSON.stringify({
    name: 'Iconoir',
    version,
    license: 'MIT',
    homepage: SITE,
    repository: GITHUB,
    count: icons.length,
    naming: {
      component: 'PascalCase of name (React, React Native, Vue, Solid, Flutter)',
      css: 'iconoir-{name}',
      npmSvg: 'iconoir/icons/{name}.svg',
    },
    icons,
  })}\n`,
);

console.log(`Wrote llms.txt, llms-full.txt and icons.json (${icons.length} icons).`);
