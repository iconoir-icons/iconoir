import { downloads as npmDownloads } from '@nodesecure/npm-registry-sdk';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { AvailableFor } from '../components/AvailableFor';
import { LargeButton } from '../components/Button';
import { REPO, SUPPORT_LINK } from '../lib/constants';
import { Explore } from '../components/Explore';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeaderBackground } from '../components/HeaderBackground';
import { Icon } from '../components/IconList';
import { Layout } from '../components/Layout';
import { media } from '../lib/responsive';
import { SEO } from '../components/SEO';
import { Stat, StatsContainer } from '../components/Stats';
import { Text18, Text15 } from '../components/Typography';
import { getHeaderProps } from '../lib/getHeaderProps';
import { getAllIcons } from '../lib/getIcons';
import { octokit } from '../lib/octokit';

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
    <>
      <Layout>
        <SEO description={'Iconoir is the biggest open source icon library that provides a massive selection of high-quality icons, available for free download. No premium options or email sign-up required, free for real. Icons available in SVG, Font, React, React Nativ, and Flutter libraries, Figma and Framer.'} />
        <Header currentVersion={currentVersion} />
        <HeaderBackground>
          <HeroHead>
            <HeroText>Say hello</HeroText>
            <HeroTextSecondary>to your new icon library.</HeroTextSecondary>
          </HeroHead>
        </HeaderBackground>
        <HeroDescription>
          A high-quality selection of free icons. No premium options or
          sign-ups. Your new alternative to Noun Project, Flaticon, and all
          Figma resources. Available in SVG, Font, React, React Native, Flutter,
          Figma and Framer.
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
            value={new Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(numDownloads)}
            description={
              'downloads/month on React only. Iconoir also supports React Native, Flutter and CSS.'
            }
          />
          <Stat
            value={new Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(numStars)}
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
            <span>Donate</span>
          </LargeButton>
          <Supporters>
            <Supporter
              data-tooltip="Pierre Olivier Marec"
              as={'a'}
              href={'https://github.com/pomarec'}
              src={'https://avatars.githubusercontent.com/u/802933?v=4'}
            />
            <Supporter
              data-tooltip="Tuan Hiep"
              as={'a'}
              href={'https://opencollective.com/iconoir/contribute'}
              src={
                'https://images.opencollective.com/tuan-hiep/17b1ef2/avatar.png?height=80'
              }
            />
            <Supporter
              data-tooltip="Justin Kendrick"
              as={'a'}
              href={'https://opencollective.com/iconoir/contribute'}
              src={
                'https://images.opencollective.com/guest-39c79745/avatar.png?height=80'
              }
            />
            <Supporter
              data-tooltip="Anon"
              as={'a'}
              href={'https://opencollective.com/iconoir/contribute'}
              src={
                'https://opencollective.com/static/images/default-guest-logo.svg'
              }
            />
            <Supporter
              data-tooltip="Luca Burgio"
              as={'a'}
              href={'https://twitter.com/burgioluca'}
              src={'https://lucaburgio.com/images/profile2.png'}
            />
          </Supporters>
          <Text15>
            Join here our monthly supporters and help us continue developing
            Iconoir.
          </Text15>
        </SupportContainer>
        <Explore allIcons={allIcons} />
      </Layout>
      <Footer />
    </>
  );
};

export const HeroHead = styled.div`
  margin: 60px auto 40px auto;
  ${media.md} {
    margin: 160px auto 80px auto;
  }
`;
export const HeroText = styled.h1`
  font-size: 50px;
  font-weight: 700;
  color: var(--g0);
  margin: 0 auto;
  letter-spacing: -0.035em;
  line-height: 1;
  text-align: center;
  transition: 0.3s;
  ${media.md} {
    font-size: 90px;
    padding: 0 20px;
    letter-spacing: -0.045em;
    -webkit-text-stroke: 2.5px;
  }
  &:hover {
    transform: scale(1.04);
    transition: 0.3s;
  }
`;
export const HeroTextSecondary = styled(HeroText)`
  color: var(--g4);
  max-width: 1000px;
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

const Supporters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px !important;
`;
const Supporter = styled.div<{ src?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #000;
  margin: 0 10px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid white;
  margin: 0 -4px;
  transition: 0.2s;
  &:hover {
    scale: 1.1;
    transition: 0.2s;
    &:before {
      content: attr(data-tooltip);
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: black;
      color: white;
      padding: 5px;
      border-radius: 3px;
      white-space: nowrap;
      font-size: 12px;
    }
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
    margin-bottom: 110px;
  }
`;

export default Home;

export async function getStaticProps() {
  const headerProps = getHeaderProps();

  const {
    data: { stargazers_count: numStars },
  } = await octokit.rest.repos.get({
    ...REPO,
  });
  if (!numStars) throw new Error('Could not find GitHub stars');

  const { downloads: numDownloads } = await npmDownloads(
    'iconoir-react',
    'last-month',
  );
  if (!numDownloads) throw new Error('Could not find NPM downloads');

  return {
    props: {
      ...headerProps,
      allIcons: await getAllIcons(),
      numStars,
      numDownloads,
    },
  };
}
