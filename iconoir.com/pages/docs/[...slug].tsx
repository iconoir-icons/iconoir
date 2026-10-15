import type { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { ParsedUrlQuery } from 'node:querystring';
import type { DocumentationNavigationProps } from '../../components/DocumentationNavigation';
import type { HeaderProps } from '../../components/Header';
import type { DocumentationItem, DocumentationItemProps } from '../../lib/docs';
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
import { Eyebrow } from '../../components/Typography';
import { getDocumentationStructure, stripGitHubExtras } from '../../lib/docs';
import { getHeaderProps } from '../../lib/getHeaderProps';
import { media } from '../../lib/responsive';

/** Sidebar width; the right column mirrors it so the article sits centered. */
const SIDEBAR_WIDTH = 220;

export const Container = styled(Wrap)`
  padding-top: 24px;
  ${media.lg} {
    display: grid;
    grid-template-columns: ${SIDEBAR_WIDTH}px minmax(0, 1fr) ${SIDEBAR_WIDTH}px;
    column-gap: 48px;
    align-items: start;
    padding-top: 56px;
  }
`;
export const NavigationContainer = styled.nav`
  margin-bottom: 40px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--line);
  ${media.lg} {
    position: sticky;
    top: ${NAV_HEIGHT + 32}px;
    max-height: calc(100vh - ${NAV_HEIGHT + 64}px);
    overflow-y: auto;
    /* Pulls the item padding back so labels line up with the page gutter. */
    margin: 0 0 0 -10px;
    padding-bottom: 24px;
    border-bottom: none;
    scrollbar-width: none;
  }
`;
export const ContentContainer = styled.div`
  min-width: 0;
  padding-bottom: 72px;
  ${media.sm} {
    padding-bottom: 112px;
  }
`;
/** Section label above the page title; opts out of the article's div margins. */
export const DocsEyebrow = styled(Eyebrow)`
  && {
    margin: 0 0 16px;
  }
`;
export const InnerContentContainer = styled.article`
  max-width: 680px;
  margin: 0 auto;
  img {
    max-width: 100%;
  }
  > div {
    margin: 24px 0;
    > a img {
      margin: 0 5px;
    }
  }
  /* Tighter, reading-sized type than the marketing pages. */
  > h1 {
    margin: 0 0 24px;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: -0.035em;
    ${media.sm} {
      font-size: 44px;
    }
  }
  > h2 {
    margin: 56px 0 12px;
    font-size: 24px;
    letter-spacing: -0.02em;
  }
  > h3 {
    margin: 36px 0 8px;
    font-size: 18px;
  }
  > p,
  > ul li,
  > ol li {
    font-size: 16px;
    line-height: 1.7;
  }
  > ul,
  > ol {
    padding-left: 22px;
  }
  > h1:first-child,
  > h2:first-child {
    margin-top: 0;
  }
`;

interface DocumentationPageProps extends HeaderProps {
  source: MDXRemoteSerializeResult;
  title: string;
  sectionTitle: string | null;
  navigationItem: DocumentationItem;
  navigationProps: DocumentationNavigationProps;
}

export default function DocumentationPage({
  source,
  title,
  sectionTitle,
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
            {sectionTitle && <DocsEyebrow>{sectionTitle}</DocsEyebrow>}
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
  return stripGitHubExtras(source)
    .replace(/src="/g, 'src="/')
    .replace(/src="\/http/g, 'src="http');
}

function sectionTitleFromSlug(
  items: DocumentationItem[],
  slug: string[],
): string | null {
  const joinedSlug = slug.filter(Boolean).join('/');

  const section = items.find((item) =>
    item.children?.some(
      (child) => [item.path, child.path].filter(Boolean).join('/') === joinedSlug,
    ),
  );

  return section?.title ?? null;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const items = getDocumentationStructure();
  const slug = context.params!.slug as string[];

  const navigationItem = itemFromSlug(items, slug);
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
      sectionTitle: sectionTitleFromSlug(items, slug),
      navigationItem,
      navigationProps: { documentationItems: items },
    },
  };
}
