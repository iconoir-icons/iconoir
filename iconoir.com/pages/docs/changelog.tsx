import type { ChangelogEntryProps } from '../../components/ChangelogEntry';
import type { DocumentationNavigationProps } from '../../components/DocumentationNavigation';
import type { HeaderProps } from '../../components/Header';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
// @ts-expect-error untyped
import remarkPrism from 'remark-prism';
import {
  ChangelogEntry,

} from '../../components/ChangelogEntry';
import {
  DocumentationNavigation,

} from '../../components/DocumentationNavigation';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { ReadOnGitHub } from '../../components/ReadOnGitHub';
import { SEO } from '../../components/SEO';
import { Body, Eyebrow, H1 } from '../../components/Typography';
import { GITHUB_LINK, REPO } from '../../lib/constants';
import { getHeaderProps } from '../../lib/getHeaderProps';
import { octokit } from '../../lib/octokit';
import { withFallback } from '../../lib/stats';
import {
  Container,
  ContentContainer,
  getDocumentationStructure,
  InnerContentContainer,
  NavigationContainer,
} from './[...slug]';

const RELEASES_LINK = `${GITHUB_LINK}/releases`;

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
    <Layout>
      <SEO title="Changelog" />
      <Header {...headerProps} />
      <Container>
        <NavigationContainer>
          <DocumentationNavigation {...documentationProps} />
        </NavigationContainer>
        <ContentContainer>
          <InnerContentContainer>
            <Eyebrow>Releases</Eyebrow>
            <H1>Changelog</H1>
            {entries.length
              ? entries.map((entry) => (
                  <ChangelogEntry key={entry.name} {...entry} />
                ))
              : (
                  <Body>
                    The release notes couldn&apos;t be loaded right now. You can
                    read them on
                    {' '}
                    <a href={RELEASES_LINK} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    .
                  </Body>
                )}
            <ReadOnGitHub path="../../releases" resource="the releases" />
          </InnerContentContainer>
        </ContentContainer>
      </Container>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  // An empty list (with a pointer to GitHub) beats a failed build when the
  // API is down or rate limited.
  const releases = await withFallback(
    octokit.rest.repos.listReleases({ ...REPO }).then(({ data }) => data),
    [],
    'GitHub releases',
  );

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
      ...(await getHeaderProps()),
      documentationProps: { documentationItems: items },
    },
  };
}
