import { PeaceHand } from 'iconoir-react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { AvailableFor } from '../components/AvailableFor';
import { LargeButton } from '../components/Button';
import { REPO, SUPPORT_LINK } from '../components/constants';
import { Explore } from '../components/Explore';
import { Header } from '../components/Header';
import { HeaderBackground } from '../components/HeaderBackground';
import { Icon } from '../components/IconList';
import { SEO } from '../components/SEO';
import { Stat, StatsContainer } from '../components/Stats';
import { Text18 } from '../components/Typography';
import { getAllIcons } from '../lib/getIcons';
import { octokit } from '../lib/octokit';
// @ts-ignore no types
import * as downloadStats from 'download-stats';
import { media } from '../components/responsive';
import { Praise } from '../components/Praise';
import { Footer } from '../components/Footer';
import { getHeaderProps } from '../lib/getHeaderProps';
import { Layout } from '../components/Layout';

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
  return (
    <Layout>
      <SEO />
      <Header currentVersion={currentVersion} />
      <HeaderBackground src={'/home-background.svg'}>
        <HeroText>Your new default library.</HeroText>
      </HeaderBackground>
      <HeroDescription>
        Iconoir is one of the biggest open source icons libraries. No premium
        icons, no email sign-up, no newsletters. Icons available in SVG format,
        Font, React and React Native libraries, Figma and Framer.
      </HeroDescription>
      <StatsContainer>
        <Stat
          value={new Intl.NumberFormat('en-US').format(allIcons.length)}
          description={
            'icons available in this very moment, and they’re growing fast!'
          }
        />
        <Stat
          value={'100%'}
          description={
            'free icons. Iconoir is open source and we’re ready for your help.'
          }
        />
        <Stat
          value={new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
            numDownloads
          )}
          description={
            'downloads/month on React only. Iconoir also supports React Native, Flutter and CSS.'
          }
        />
        <Stat
          value={new Intl.NumberFormat('en-US', { notation: 'compact' }).format(
            numStars
          )}
          description={
            'people who starred the project on GitHub. Show your support and be one of them.'
          }
        />
      </StatsContainer>
      <AvailableFor />
      <SupportContainer>
        <LargeButton
          as={'a'}
          href={SUPPORT_LINK}
          target={'_blank'}
          rel={'noreferrer'}
        >
          <PeaceHand width={'1em'} height={'1em'} />
          <span>Support the project</span>
        </LargeButton>
        <Text18>
          Iconoir is an open source project built with consistent passion and
          dedication. If you consider this library valuable for you and your
          projects, support Iconoir with a donation to help us sustain costs and
          development time.
        </Text18>
      </SupportContainer>
      <PraiseContainer>
        <Praise />
      </PraiseContainer>
      <Explore allIcons={allIcons} />
      <Footer />
    </Layout>
  );
};

export const HeroText = styled.h1`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 52px;
  text-align: center;
  margin: 60px auto 40px auto;

  ${media.md} {
    font-size: 90px;
    line-height: 1;
    margin: 200px auto 80px auto;
  }
`;
export const HeroDescription = styled(Text18)<{ topMargin?: number }>`
  display: block;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
  ${media.lg} {
    margin-top: ${(props) => props.topMargin || 0}px;
  }
`;
const SupportContainer = styled.div`
  text-align: center;
  > * {
    margin: 0 auto;
    max-width: 750px;
  }
  > :not(:last-child) {
    margin-bottom: 30px;
  }
  margin-bottom: 50px;
  ${media.sm} {
    margin-bottom: 150px;
  }
`;
const PraiseContainer = styled.div`
  margin: 50px 0 64px 0;
  ${media.md} {
    margin: 140px 0 150px 0;
  }
  width: 100%;
`;

export default Home;

export async function getStaticProps() {
  const headerProps = getHeaderProps();
  const { data: repo } = await octokit.rest.repos.get({
    ...REPO,
  });
  const stars = repo.stargazers_count;
  if (!stars) throw new Error('Could not find GitHub stars');
  const numDownloads = await new Promise<number>((resolve, reject) => {
    downloadStats.get.lastMonth('iconoir-react', (err: any, results: any) => {
      if (err) return reject(err);
      resolve(results.downloads);
    });
  });
  if (!numDownloads) throw new Error('Could not find NPM downloads');
  return {
    props: {
      ...headerProps,
      allIcons: await getAllIcons(),
      numStars: stars,
      numDownloads,
    },
  };
}
