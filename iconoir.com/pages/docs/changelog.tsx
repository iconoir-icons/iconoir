import axios from 'axios';
import React from 'react';
import {
  ChangelogEntry,
  ChangelogEntryProps,
} from '../../components/ChangelogEntry';
import { REPO } from '../../components/constants';
import {
  DocumentationNavigation,
  DocumentationNavigationProps,
} from '../../components/DocumentationNavigation';
import { Footer } from '../../components/Footer';
import { Header, HeaderProps } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { SEO } from '../../components/SEO';
import { H1 } from '../../components/Typography';
import remarkGfm from 'remark-gfm';
import { getHeaderProps } from '../../lib/getHeaderProps';
import {
  Container,
  ContentContainer,
  getDocumentationStructure,
  InnerContentContainer,
  NavigationContainer,
} from './[...slug]';
import { serialize } from 'next-mdx-remote/serialize';
import { ReadOnGitHub } from '../../components/ReadOnGitHub';

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
      <SEO title={'Changelog'} />
      <Header {...headerProps} currentVersionColor={'var(--green)'} />
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
            <ReadOnGitHub path={'../../releases'} />
          </InnerContentContainer>
        </ContentContainer>
      </Container>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const apiResult = await axios.get(
    `https://api.github.com/repos/${REPO}/releases`
  );
  const entryData = apiResult.data || [];
  const entries: ChangelogEntryProps[] = [];
  for (const entry of entryData) {
    entries.push({
      ...entry,
      body: await serialize(entry.body, {
        mdxOptions: {
          remarkPlugins: [require('remark-prism'), remarkGfm],
        },
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
