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
import fs from 'fs';
import axios from 'axios';
import numbro from 'numbro';
// @ts-ignore no types
import * as downloadStats from 'download-stats';
import { media } from '../components/responsive';
import { Praise } from '../components/Praise';
import { Footer } from '../components/Footer';
import { GA } from '../components/GA';

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
    <div>
      <SEO />
      <GA />
      <HeaderBackground />
      <Header currentVersion={currentVersion} />
      <HeroText>Your new default library.</HeroText>
      <HeroDescription>
        Iconoir is one of the biggest open source icons libraries. No premium
        icons, no email sign-up, no newsletters. Icons available in SVG format,
        Font, React and React Native libraries, Figma and Framer.
      </HeroDescription>
      <StatsContainer>
        <Stat
          value={allIcons.length.toString()}
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
          value={numbro(numDownloads).format({
            average: true,
            mantissa: 1,
          })}
          description={
            'downloads/week on React only. Iconoir also supports React Native, Flutter and CSS.'
          }
        />
        <Stat
          value={numbro(numStars).format({
            average: true,
            mantissa: 1,
          })}
          description={
            'people who starred the project on Github. Show your support and be one of them.'
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
          Iconoir is one of the biggest open source icons libraries. No premium
          icons, no email sign-up, no newsletters. Icons available in SVG
          format, Font, React and React Native libraries, Figma and Framer.
        </Text18>
      </SupportContainer>
      <PraiseContainer>
        <Praise />
      </PraiseContainer>
      <Explore allIcons={allIcons} />
      <Footer />
    </div>
  );
};

const HeroText = styled.h1`
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
const HeroDescription = styled(Text18)`
  display: block;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
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
  const packageJson = JSON.parse(fs.readFileSync('../package.json').toString());
  const apiResult = await axios.get(`https://api.github.com/repos/${REPO}`);
  const stars = apiResult.data?.stargazers_count;
  if (!stars) throw new Error('Could not find GitHub stars');
  const numDownloads = await new Promise<number>((resolve, reject) => {
    downloadStats.get.lastWeek('iconoir-react', (err: any, results: any) => {
      if (err) return reject(err);
      resolve(results.downloads);
    });
  });
  if (!numDownloads) throw new Error('Could not find NPM downloads');
  return {
    props: {
      allIcons: await getAllIcons(),
      currentVersion: `v${packageJson.version}`,
      numStars: stars,
      numDownloads,
    },
  };
}
