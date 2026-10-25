import type { NextPage } from 'next';
import type { Icon } from '../components/IconList';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Explore } from '../components/Explore';
import { Footer } from '../components/Footer';
import { Header, NAV_HEIGHT } from '../components/Header';
import { Actions, Hero } from '../components/Hero';
import { HeroIcons } from '../components/HeroIcons';
import { Layout, Wrap } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Stat, StatsContainer } from '../components/Stats';
import { AUTHOR_LINKS, GITHUB_LINK, LIBRARY_LINKS, SUPPORT_LINK } from '../lib/constants';
import { getHeaderProps } from '../lib/getHeaderProps';
import { getAllIcons } from '../lib/getIcons';
import { media } from '../lib/responsive';

const IconsSection = styled.section`
  margin-top: 72px;
  scroll-margin-top: ${NAV_HEIGHT}px;
  ${media.sm} {
    margin-top: 112px;
  }
`;

interface HomeProps {
  allIcons: Icon[];
  currentVersion: string;
  numStars: number;
  numDownloads: number;
}

function jsonLd(numIcons: number, version: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://iconoir.com/#organization',
        'name': 'Iconoir',
        'url': 'https://iconoir.com',
        'logo': 'https://iconoir.com/favicon.png',
        'founder': { '@type': 'Person', 'name': 'Luca Burgio', 'url': AUTHOR_LINKS.Luca },
        'sameAs': [
          GITHUB_LINK,
          'https://www.wikidata.org/wiki/Q110503368',
          'https://www.npmjs.com/package/iconoir',
          'https://www.npmjs.com/package/iconoir-react',
          'https://www.npmjs.com/package/iconoir-react-native',
          'https://www.npmjs.com/package/@iconoir/vue',
          'https://www.npmjs.com/package/iconoir-solid-js',
          'https://pub.dev/packages/iconoir_flutter',
          LIBRARY_LINKS.Figma,
          'https://opencollective.com/iconoir',
        ],
      },
      {
        '@type': 'WebSite',
        'name': 'Iconoir',
        'url': 'https://iconoir.com',
        'publisher': { '@id': 'https://iconoir.com/#organization' },
      },
      {
        '@type': 'SoftwareSourceCode',
        'name': 'Iconoir',
        'description': `Free, open source (MIT) SVG icon library with ${numIcons} icons for React, React Native, Vue, Solid, Flutter, CSS, Figma and Framer.`,
        'url': 'https://iconoir.com',
        'codeRepository': GITHUB_LINK,
        'license': 'https://opensource.org/licenses/MIT',
        'version': version.replace(/^v/, ''),
        'programmingLanguage': ['SVG', 'TypeScript', 'Dart', 'CSS'],
        'keywords': 'free icons, open source icons, svg icons, react icons, vue icons, flutter icons, icon library',
        'isAccessibleForFree': true,
        'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
        'publisher': { '@id': 'https://iconoir.com/#organization' },
        'author': [
          { '@type': 'Person', 'name': 'Luca Burgio', 'url': AUTHOR_LINKS.Luca },
        ],
      },
    ],
  };
}

const Home: NextPage<HomeProps> = ({
  allIcons,
  currentVersion,
  numStars,
  numDownloads,
}) => {
  const formatNumber = new Intl.NumberFormat('en-US').format;
  const numIcons = formatNumber(allIcons.length);
  const numUniqueIcons = formatNumber(new Set(allIcons.map((icon) => icon.name)).size);

  return (
    <Layout>
      <SEO
        fullTitle={`Iconoir: ${numIcons} Free Icons – Open Source SVG Icon Library`}
        description={`${numUniqueIcons} free, open source SVG icons (${numIcons} with solid variants). MIT licensed, no sign-up or attribution. For React, Vue, React Native, Flutter, CSS and Figma.`}
        jsonLd={jsonLd(allIcons.length, currentVersion)}
      />
      <Header
        currentVersion={currentVersion}
        numIcons={allIcons.length}
        numDownloads={numDownloads}
        numStars={numStars}
      />
      <Hero
        visual={<HeroIcons />}
        eyebrow="Free · Open source · MIT"
        title="Say hello to your new free icon library"
        lede={(
          <>
            A high-quality selection of free icons. Your new alternative to
            Noun Project, Flaticon, and all Figma resources. Available in SVG,
            Font, React, React Native, Flutter, Figma and Framer.
          </>
        )}
      >
        <Actions>
          <Button as="a" href="#icons">
            Browse
            {' '}
            {numIcons}
            {' '}
            icons
          </Button>
          <Button
            as="a"
            href={SUPPORT_LINK}
            target="_blank"
            rel="noreferrer"
            $variant="secondary"
          >
            Donate
          </Button>
          <Link href="/docs/introduction" passHref legacyBehavior>
            <Button as="a" $variant="secondary">
              Read the docs
            </Button>
          </Link>
        </Actions>
      </Hero>
      <Wrap>
        <StatsContainer>
          <Stat
            value={numIcons}
            description="icons available in this very moment, and they’re growing fast."
          />
          <Stat
            value="100%"
            description="free icons. Iconoir is open source and we’re ready for your help."
          />
          <Stat
            value={new Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(numDownloads)}
            description="downloads a month on React alone. Also on React Native, Flutter and CSS."
          />
          <Stat
            value={new Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(numStars)}
            description="people starred the project on GitHub. Show your support and be one of them."
          />
        </StatsContainer>
      </Wrap>
      <IconsSection id="icons">
        <Explore allIcons={allIcons} />
      </IconsSection>
      <Footer />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      ...(await getHeaderProps()),
      allIcons: await getAllIcons(),
    },
  };
}
