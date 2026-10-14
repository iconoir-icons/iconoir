import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ParsedUrlQuery } from 'node:querystring';
import type { DocumentationNavigationProps } from '../../components/DocumentationNavigation';
import type { HeaderProps } from '../../components/Header';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
// @ts-expect-error untyped
import remarkPrism from 'remark-prism';
import styled from 'styled-components';
import { SuggestLibrary } from '@/components/SuggestLibrary';
import {
  DocumentationNavigation,
} from '../../components/DocumentationNavigation';
import { Footer } from '../../components/Footer';
import { Header, NAV_HEIGHT } from '../../components/Header';
import { Layout, Wrap } from '../../components/Layout';
import { MDXRemote } from '../../components/MDXRemote';
import { ReadOnGitHub } from '../../components/ReadOnGitHub';
import { SEO } from '../../components/SEO';
import { getHeaderProps } from '../../lib/getHeaderProps';
import { media } from '../../lib/responsive';

export const Container = styled(Wrap)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: 24px;
  ${media.lg} {
    flex-direction: row;
    align-items: flex-start;
    padding-top: 48px;
  }
`;
export const NavigationContainer = styled.nav`
  margin-bottom: 32px;
  padding: 16px 12px;
  border-radius: 20px;
  background: var(--side);
  border: 1px solid var(--line);
  ${media.lg} {
    position: sticky;
    top: ${NAV_HEIGHT + 24}px;
    flex: none;
    width: 240px;
    margin: 0 64px 0 0;
    max-height: calc(100vh - ${NAV_HEIGHT + 48}px);
    overflow-y: auto;
  }
`;
export const ContentContainer = styled.div`
  flex: 1;
  min-width: 0;
  padding-bottom: 72px;
  ${media.sm} {
    padding-bottom: 112px;
  }
`;
export const InnerContentContainer = styled.article`
  max-width: 760px;
  img {
    max-width: 100%;
  }
  > div {
    margin: 24px 0;
    > a img {
      margin: 0 5px;
    }
  }
  > h1:first-child,
  > h2:first-child {
    margin-top: 0;
  }
`;

interface DocumentationPageProps extends HeaderProps {
  source: MDXRemoteSerializeResult;
  title: string;
  navigationItem: DocumentationItem;
  navigationProps: DocumentationNavigationProps;
}

export default function DocumentationPage({
  source,
  title,
  navigationItem,
  navigationProps,
  ...headerProps
}: DocumentationPageProps) {
  return (
    <Layout>
      <SEO
        title={title}
        description="Our documentation to start using our free icons on React, React Native, Vue, Figma, and more."
      />
      <Header {...headerProps} />
      <Container>
        <NavigationContainer>
          <DocumentationNavigation {...navigationProps} />
        </NavigationContainer>
        <ContentContainer>
          <InnerContentContainer>
            <MDXRemote {...source} />
            {!navigationItem.noReadOnGitHub && navigationItem.filepath && (
              <ReadOnGitHub path={navigationItem.filepath} />
            )}
            {navigationItem.suggestLibrary && <SuggestLibrary />}
          </InnerContentContainer>
        </ContentContainer>
      </Container>
      <Footer />
    </Layout>
  );
}

interface DocumentationItemProps {
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

function structureItemsToPaths(
  items: DocumentationItem[],
  slugPrefix?: string[],
): ParsedUrlQuery[] {
  const result: ParsedUrlQuery[] = [];
  const filteredItems = items.filter((item) => !item.skip);

  for (const item of filteredItems) {
    if (item.filepath && item.path) {
      result.push({ slug: [...(slugPrefix || []), item.path].filter(Boolean) });
    }

    if (item.children?.length) {
      result.push(
        ...structureItemsToPaths(
          item.children,
          [...(slugPrefix || []), item.path].filter(Boolean),
        ),
      );
    }
  }

  return result;
}

function flattenItems(
  items: DocumentationItem[],
  prefix?: string[],
  childrenProps?: DocumentationItemProps,
): DocumentationItem[] {
  return items.reduce<DocumentationItem[]>((acc, item) => {
    return [
      ...acc,
      ...(item.filepath
        ? [
            {
              ...childrenProps,
              ...item,
              path: [...(prefix || []), item.path].filter(Boolean).join('/'),
            },
          ]
        : []),
      ...(item.children?.length
        ? flattenItems(
            item.children,
            [...(prefix || []), item.path].filter(Boolean),
            item.childrenProps,
          )
        : []),
    ];
  }, []);
}

function itemFromSlug(
  items: DocumentationItem[],
  slug: string[],
): DocumentationItem {
  const flatItems = flattenItems(items);

  const joinedSlug = slug.filter(Boolean).join('/');
  const item = flatItems.find((flatItem) => flatItem.path === joinedSlug);
  if (!item)
    throw new Error(`Cannot find item matching slug '${slug.join('/')}'`);

  return item;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const structure = getDocumentationStructure();

  return {
    paths: structureItemsToPaths(structure).map((p) => ({ params: p })),
    fallback: false,
  };
}

function cleanSource(source: string): string {
  return source
    .replace(/src="/g, 'src="/')
    .replace(/src="\/http/g, 'src="http');
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const items = getDocumentationStructure();

  const navigationItem = itemFromSlug(items, context.params!.slug as string[]);
  const repositoryRoot = path.join(process.cwd(), '..');
  const filepath = path.join(repositoryRoot, navigationItem.filepath!);
  const source = cleanSource(fs.readFileSync(filepath).toString());

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkPrism, remarkGfm],
    },
  });

  return {
    props: {
      source: mdxSource,
      ...(await getHeaderProps()),
      title: context.params!.title?.toString() || null,
      navigationItem,
      navigationProps: { documentationItems: items },
    },
  };
}
