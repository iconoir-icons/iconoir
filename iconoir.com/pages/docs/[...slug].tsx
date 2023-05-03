import fs from 'fs';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import { ParsedUrlQuery } from 'querystring';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';
import {
  DocumentationNavigation,
  DocumentationNavigationProps,
} from '../../components/DocumentationNavigation';
import { Footer } from '../../components/Footer';
import { Header, HeaderProps } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { MDXRemote } from '../../components/MDXRemote';
import { ReadOnGitHub } from '../../components/ReadOnGitHub';
import { media } from '../../lib/responsive';
import { SEO } from '../../components/SEO';
import { getHeaderProps } from '../../lib/getHeaderProps';

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
      <SEO title={title} />
      <Header {...headerProps} />
      <Container>
        <NavigationContainer>
          <DocumentationNavigation {...navigationProps} />
        </NavigationContainer>
        <ContentContainer>
          <InnerContentContainer>
            <MDXRemote {...source} />
            {navigationItem.noReadOnGitHub ||
            !navigationItem.filepath ? null : (
              <ReadOnGitHub path={navigationItem.filepath} />
            )}
          </InnerContentContainer>
        </ContentContainer>
      </Container>
      <Footer />
    </Layout>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin: 30px -30px 0 -30px;
  ${media.lg} {
    flex-direction: row;
    margin: 30px 0 0 -50px;
  }
`;
export const NavigationContainer = styled.div`
  ${media.lg} {
    width: 250px;
    margin-right: 30px;
    border-right: solid 1px var(--g6);
  }
`;
export const ContentContainer = styled.div`
  flex: 1;
`;
export const InnerContentContainer = styled.div`
  margin: 0 30px;
  max-width: 800px;
  ${media.lg} {
    margin: 0 auto;
  }
  img {
    max-width: 100%;
  }
  > div {
    margin: 24px 0;
    > a img {
      margin: 0 5px;
    }
  }
`;

export interface DocumentationItem {
  path: string;
  filepath?: string;
  children?: DocumentationItem[];
  title: string;
  label?: string;
  noReadOnGitHub?: boolean;
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
      ],
    },
    {
      path: 'packages',
      title: 'Libraries',
      children: [
        {
          path: 'iconoir-react',
          filepath: 'packages/iconoir-react/README.md',
          title: 'React',
          noReadOnGitHub: true,
        },
        {
          path: 'iconoir-react-native',
          filepath: 'packages/iconoir-react-native/README.md',
          title: 'React Native',
          noReadOnGitHub: true,
        },
        {
          path: 'iconoir-vue',
          filepath: 'packages/iconoir-vue/README.md',
          title: 'Vue',
          noReadOnGitHub: true,
        },
        {
          path: 'iconoir-flutter',
          filepath: 'packages/iconoir-flutter/README.md',
          title: 'Flutter',
          label: 'New',
          noReadOnGitHub: true,
        },
        {
          path: 'framer',
          filepath: 'docs/framer.md',
          title: 'Framer',
          noReadOnGitHub: true,
        },
        {
          path: 'css',
          filepath: 'css/README.md',
          title: 'CSS',
          noReadOnGitHub: true,
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
  slugPrefix?: string[]
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
          [...(slugPrefix || []), item.path].filter(Boolean)
        )
      );
    }
  }

  return result;
}

function flattenItems(
  items: DocumentationItem[],
  prefix?: string[]
): DocumentationItem[] {
  return items.reduce<DocumentationItem[]>((acc, item) => {
    return [
      ...acc,
      ...(item.filepath
        ? [
            {
              ...item,
              path: [...(prefix || []), item.path].filter(Boolean).join('/'),
            },
          ]
        : []),
      ...(item.children?.length
        ? flattenItems(
            item.children,
            [...(prefix || []), item.path].filter(Boolean)
          )
        : []),
    ];
  }, []);
}

function itemFromSlug(
  items: DocumentationItem[],
  slug: string[]
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
      remarkPlugins: [require('remark-prism'), remarkGfm],
    },
  });
  return {
    props: {
      source: mdxSource,
      ...getHeaderProps(),
      title: context.params!.title?.toString() || null,
      navigationItem,
      navigationProps: { documentationItems: items },
    },
  };
}
