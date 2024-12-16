import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';
import {
  ChangelogEntry,
  type ChangelogEntryProps,
} from '../../components/ChangelogEntry';
import {
  DocumentationNavigation,
  type DocumentationNavigationProps,
} from '../../components/DocumentationNavigation';
import { Footer } from '../../components/Footer';
import { Header, type HeaderProps } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { ReadOnGitHub } from '../../components/ReadOnGitHub';
import { SEO } from '../../components/SEO';
import { H1 } from '../../components/Typography';
import { REPO } from '../../lib/constants';
import { getHeaderProps } from '../../lib/getHeaderProps';
import { octokit } from '../../lib/octokit';
import {
  Container,
  ContentContainer,
  getDocumentationStructure,
  InnerContentContainer,
  NavigationContainer,
} from './[...slug]';

export interface ChangelogProps extends HeaderProps {
  documentationProps: DocumentationNavigationProps;
  entries: ChangelogEntryProps[];
}

export default function Changelog({
  documentationProps,
  entries,
  ...headerProps
}: ChangelogProps) {
  return (
    <>
      <Layout>
        <SEO title="Changelog" />
        <Header {...headerProps} />
        <Container>
          <NavigationContainer>
            <DocumentationNavigation {...documentationProps} />
          </NavigationContainer>
          <ContentContainer>
            <InnerContentContainer>
              <H1 style={{ marginBottom: 72 }}>Changelog</H1>
              {entries.map((entry) => (
                <ChangelogEntry key={entry.name} {...entry} />
              ))}
              <ReadOnGitHub path="../../releases" resource="the releases" />
            </InnerContentContainer>
          </ContentContainer>
        </Container>
      </Layout>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data: releases } = await octokit.rest.repos.listReleases({
    ...REPO,
  });

  const entries: ChangelogEntryProps[] = [];

  for (const release of releases) {
    entries.push({
      name: release.name || release.tag_name,
      url: release.html_url,
      created_at: release.created_at,
      ...(release.body && {
        body: await serialize(release.body, {
          mdxOptions: {
            remarkPlugins: [remarkPrism, remarkGfm],
          },
        }),
      }),
    });
  }

  const items = getDocumentationStructure();

  return {
    props: {
      entries,
      ...getHeaderProps(),
      documentationProps: { documentationItems: items },
    },
  };
}
