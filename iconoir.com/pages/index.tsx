import { PeaceHand } from 'iconoir-react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { AvailableFor } from '../components/AvailableFor';
import { LargeButton } from '../components/Button';
import { GUMROAD } from '../components/constants';
import { Explore } from '../components/Explore';
import { Header } from '../components/Header';
import { HeaderBackground } from '../components/HeaderBackground';
import { Icon } from '../components/IconList';
import { SEO } from '../components/SEO';
import { Stat, StatsContainer } from '../components/Stats';
import { Text18 } from '../components/Typography';
import { getAllIcons } from '../lib/getIcons';

interface HomeProps {
  allIcons: Icon[];
}
const Home: NextPage<HomeProps> = ({ allIcons }) => {
  return (
    <div>
      <SEO />
      <HeaderBackground />
      <Header />
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
          value={'8.2k'}
          description={
            'downloads/week on React only. Iconoir supports also React Native, Flutter and CSS.'
          }
        />
        <Stat
          value={'2.7k'}
          description={
            'people who starred the project on Github. Show your support and be one of them.'
          }
        />
      </StatsContainer>
      <AvailableFor />
      <SupportContainer>
        <LargeButton
          as={'a'}
          href={GUMROAD}
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
      <Explore allIcons={allIcons} />
    </div>
  );
};

const HeroText = styled.h1`
  font-size: 90px;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1;
  text-align: center;
  margin: 200px auto 80px auto;
`;
const HeroDescription = styled(Text18)`
  display: block;
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
`;
const SupportContainer = styled.div`
  text-align: center;
  margin-bottom: 250px;
  > * {
    margin: 0 auto;
    max-width: 750px;
  }
  > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

export default Home;

export async function getStaticProps() {
  return {
    props: {
      allIcons: await getAllIcons(),
    },
  };
}
