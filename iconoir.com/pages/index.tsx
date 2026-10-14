import type { NextPage } from 'next';
import type { Icon } from '../components/IconList';
import { downloads as npmDownloads } from '@nodesecure/npm-registry-sdk';
import Link from 'next/link';
import styled from 'styled-components';
import { AvailableFor } from '../components/AvailableFor';
import { Button } from '../components/Button';
import { Explore } from '../components/Explore';
import { Footer } from '../components/Footer';
import { Header, NAV_HEIGHT } from '../components/Header';
import { Actions, Hero } from '../components/Hero';
import { Layout, Wrap } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Stat, StatsContainer } from '../components/Stats';
import { REPO } from '../lib/constants';
import { getHeaderProps } from '../lib/getHeaderProps';
import { getAllIcons } from '../lib/getIcons';
import { octokit } from '../lib/octokit';
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

const Home: NextPage<HomeProps> = ({
  allIcons,
  currentVersion,
  numStars,
  numDownloads,
}) => {
  const numIcons = new Intl.NumberFormat('en-US').format(allIcons.length);

  return (
    <Layout>
      <SEO
        description="Iconoir is the biggest open source icon library that provides a massive selection of high-quality icons, available for free download. No premium options or email sign-up required, free for real. Icons available in SVG, Font, React, React Nativ, and Flutter libraries, Figma and Framer."
      />
      <Header currentVersion={currentVersion} />
      <Hero
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
        <AvailableFor />
      </Wrap>
      <IconsSection id="icons">
        <Explore allIcons={allIcons} />
      </IconsSection>
      <Footer />
    </Layout>
  );
};

export default Home;

// Last known values, used when the GitHub or npm API is too slow or fails,
// so a flaky API never blocks a deploy.
const FALLBACK_NUM_STARS = 4580;
const FALLBACK_NUM_DOWNLOADS = 691733;
const FETCH_TIMEOUT_MS = 10_000;

async function withFallback(
  promise: Promise<number | undefined>,
  fallback: number,
  label: string,
): Promise<number> {
  let timer: Parameters<typeof clearTimeout>[0];

  const timeout = new Promise<undefined>((resolve) => {
    timer = setTimeout(resolve, FETCH_TIMEOUT_MS);
  });

  try {
    const value = await Promise.race([promise, timeout]);
    if (value)
      return value;
    console.warn(`Could not fetch ${label} in time, using fallback`);
  } catch (error) {
    console.warn(`Could not fetch ${label}, using fallback`, error);
  } finally {
    clearTimeout(timer);
  }

  return fallback;
}

export async function getStaticProps() {
  const headerProps = getHeaderProps();

  const numStars = await withFallback(
    octokit.rest.repos
      .get({ ...REPO })
      .then(({ data }) => data.stargazers_count),
    FALLBACK_NUM_STARS,
    'GitHub stars',
  );

  const numDownloads = await withFallback(
    npmDownloads('iconoir-react', 'last-month').then(
      ({ downloads }) => downloads,
    ),
    FALLBACK_NUM_DOWNLOADS,
    'NPM downloads',
  );

  return {
    props: {
      ...headerProps,
      allIcons: await getAllIcons(),
      numStars,
      numDownloads,
    },
  };
}
