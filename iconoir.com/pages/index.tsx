import type { NextPage } from 'next';
import type { Icon } from '../components/IconList';
import Link from 'next/link';
import styled from 'styled-components';
import { AvailableFor } from '../components/AvailableFor';
import { Button } from '../components/Button';
import { Explore } from '../components/Explore';
import { Footer } from '../components/Footer';
import { Header, NAV_HEIGHT } from '../components/Header';
import { Actions, Hero } from '../components/Hero';
import { HeroIcons } from '../components/HeroIcons';
import { Layout, Wrap } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Stat, StatsContainer } from '../components/Stats';
import { SUPPORT_LINK } from '../lib/constants';
import { getHeaderProps } from '../lib/getHeaderProps';
import { getAllIcons } from '../lib/getIcons';
import { media } from '../lib/responsive';
import { getNumDownloads } from '../lib/stats';

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
      <Header currentVersion={currentVersion} numStars={numStars} />
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

export async function getStaticProps() {
  return {
    props: {
      ...(await getHeaderProps()),
      allIcons: await getAllIcons(),
      numDownloads: await getNumDownloads(),
    },
  };
}
