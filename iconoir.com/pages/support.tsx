import { ArrowRight } from 'iconoir-react';
import { Discord } from 'iconoir-react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { HeroText } from '.';
import { HeroTextSecondary } from '.';
import { LargeButton } from '../components/Button';
import { DISCORD_LINK, SUPPORT_LINK } from '../lib/constants';
import { Footer } from '../components/Footer';
import { Header, HeaderProps } from '../components/Header';
import { HeaderSecondary } from '../components/HeaderSecondary';
import { Layout } from '../components/Layout';
import { media } from '../lib/responsive';
import { SEO } from '../components/SEO';
import { Code, Heading2, Text18 } from '../components/Typography';
import { getHeaderProps } from '../lib/getHeaderProps';
import { Praise } from '../components/Praise';

interface SupportProps extends HeaderProps {}
const Support: NextPage<SupportProps> = ({ ...headerProps }) => {
  return (
    <Layout>
      <SEO title={'Donate - Our Mission'} />
      <Header {...headerProps}/>
      <HeaderSecondary>
        <SupportHead>
          <HeroText>Our Goal</HeroText>
          <HeroTextSecondary>A free, complete, and open icons library.</HeroTextSecondary>
        </SupportHead>
      </HeaderSecondary>
      <PageContainer>
        <Text18>
          Iconoir is an open source project built with consistent passion and
          dedication. There are no pro subscriptions, forced sign-ups, free
          trials or limitations. <br />
          Building an open library is what makes us happy.
        </Text18>
        <Heading2>Our mission pillars</Heading2>
        <Code>
          <strong>Free.</strong> We want to give to developers and users
          high-quality free icons. Hassle-free.
        </Code>
        <Code>
          <strong>Complete.</strong> We’re aiming at having as much unique icons as possible.
        </Code>
        <Code>
          <strong>Ambitious.</strong> We want to help and be part of as many projects as possible.
        </Code>
        <WideSection>
          <Heading2>Become part of the project.</Heading2>
          <Text18>
            If you consider this library valuable for you and your projects,
            support Iconoir with a donation to help us sustain costs and
            development time.
          </Text18>
          <CallToAction as={'a'} href={SUPPORT_LINK} target={'_blank'}><span>Donate</span><ArrowRight /></CallToAction>
        </WideSection>
        <PraiseContainer>
        <PraiseTitle>What our friends say</PraiseTitle>
        <Praise />
      </PraiseContainer>
        <DonateContainer>
          <DonateLeft>
            <DonateHeader>Join us on Discord</DonateHeader>
            <Text18>
              Join the community and help us with your suggestions and feedback.
            </Text18>
          </DonateLeft>
          <DonateRight>
            <DonateButton
              as={'a'}
              href={DISCORD_LINK}
              target={'_blank'}
              rel={'noreferrer'}
            >
              <span>Join</span> <Discord />
            </DonateButton>
          </DonateRight>
        </DonateContainer>
      </PageContainer>
      <Footer />
    </Layout>
  );
};

export const SupportHead = styled.div`
  margin: 60px auto 40px auto;
  ${media.md} {
    margin: 100px auto 80px auto;
  }
`;

const PageContainer = styled.div`
  max-width: 1336px;
  margin: 75px auto 0 auto;
  ${media.lg} {
    margin: 150px auto 0 auto;
  }
`;
const WideSection = styled.div`
  width: 60%;
  background: var(--g7);
  border-radius: 12px;
  text-align: center;
  padding: 80px 20%;
`;
const PraiseTitle = styled(Heading2)`
  margin: 100px 0 80px 0;
  text-align: center;
`;
const DonateLeft = styled.div`
  max-width: 800px;
`;
export const DonateRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  > :not(:last-child) {
    margin-right: 30px !important;
  }
  ${media.md} {
    margin-top: 0;
    margin-left: 30px;
  }
`;
export const DonateButton = styled(LargeButton)`
  padding: 0 24px;
  height: 50px;
`;
const CallToAction = styled(LargeButton)`
  margin-top: 40px;
`;
export const DonateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid var(--g6);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 24px;
  ${media.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 40px 56px;
  }
`;
export const DonateHeader = styled.div`
  font-size: 18px;
  color: var(--g0);
  letter-spacing: -0.02em;
  font-weight: 700;
  margin-bottom: 4px;
  ${media.md} {
    font-size: 22px;
  }
`;
const PraiseContainer = styled.div`
  margin: 50px 0 64px 0;
  ${media.md} {
    margin: 140px 0 150px 0;
  }
  width: 100%;
`;

export default Support;

export async function getStaticProps() {
  return {
    props: getHeaderProps(),
  };
}
