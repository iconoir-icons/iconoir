import { ArrowRight } from 'iconoir-react';
import { NextPage } from 'next';
import styled from 'styled-components';
import { HeroText } from '../.';
import { Ad } from '../../components/Ad';
import { HeroTextSecondary } from '../.';
import { LargeButton } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header, HeaderProps } from '../../components/Header';
import { HeaderSecondary } from '../../components/HeaderSecondary';
import { Layout } from '../../components/Layout';
import { media } from '../../lib/responsive';
import { SEO } from '../../components/SEO';
import { H2, H3, Text18 } from '../../components/Typography';
import { getHeaderProps } from '../../lib/getHeaderProps';

interface SupportProps extends HeaderProps {}

const Support: NextPage<SupportProps> = ({ ...headerProps }) => {
  return (
    <>
      <Layout>
        <SEO
          title={'React Icons'}
          description={
            'Free React Icons - Iconoir is a free open-source icons library.'
          }
        />
        <Header {...headerProps} />
        <HeaderSecondary>
          <SupportHead>
            <HeroText>Free React Icons</HeroText>
            <HeroTextSecondary>Iconoir has you covered.</HeroTextSecondary>
          </SupportHead>
        </HeaderSecondary>
        <PageContainer>
          <Ad />
          <Text18>
            Iconoir has a React library, where we blend creativity with
            functionality to elevate your React projects.
            <br></br>
            <br></br>
            Our library of free, open-source icons is designed to seamlessly
            integrate with your React applications, providing you with a vast
            array of options to enhance your UI/UX design.
          </Text18>
          <CallToAction as={'a'} href={'/'}>
            <span>Get the icons</span>
            <ArrowRight />
          </CallToAction>
          <Text18>
            Integrating Iconoir's React icons into your project is a breeze.
            <br></br>
            <br></br>
            Read the <a href="../docs/packages/iconoir-react">
              documentation
            </a>{' '}
            on how to implement Iconoir React icons, and enhance your
            application's aesthetics and user experience.
          </Text18>
          <H2>
            <br></br>
            <br></br>Why Choose Iconoir for Your React Icons?
          </H2>
          <Image src="/hq/building-iconoir.gif" alt="Building Iconoir" />
          <Text18>
            <H3>Open-Source and Free</H3>Dive into a world where quality meets
            accessibility. Iconoir offers a comprehensive set of icons, entirely
            free and open-source, making them a perfect fit for developers and
            designers alike.
            <br></br>
            <br></br>
            <H3>Designed for React</H3>Our icons are meticulously crafted to
            complement React's dynamic capabilities. Whether you're building a
            web app or a mobile application, our React icons are optimized for
            performance and scalability.
            <br></br>
            <br></br>
            <H3>Easy Integration</H3>With straightforward implementation, you
            can start using our icons in your React projects with minimal
            effort. Our documentation guides you through every step, ensuring a
            smooth integration process.
            <br></br>
            <br></br>
            <H3>Versatile and Customizable</H3>From minimalistic designs to more
            intricate illustrations, our icons cater to a wide range of styles.
            Plus, they're fully customizable, allowing you to tweak them to fit
            your specific design requirements.
            <br></br>
            <br></br>
            <H3>Community-Driven</H3>Being a part of the open-source community,
            Iconoir thrives on collaboration and feedback. We continuously
            update and expand our collection based on the needs and suggestions
            of our users.
          </Text18>
          <CallToAction as={'a'} href={'/'}>
            <span>Get the icons</span>
            <ArrowRight />
          </CallToAction>
        </PageContainer>
      </Layout>
      <Footer />
    </>
  );
};

export const SupportHead = styled.div`
  margin: 60px auto 40px auto;
  ${media.md} {
    margin: 100px auto 80px auto;
  }
`;

const PageContainer = styled.div`
  text-align: center;
  max-width: 736px;
  margin: 75px auto 0 auto;
  ${media.lg} {
    margin: 110px auto 0 auto;
  }
  // Apply margin to all child elements
  > *:not(:first-child) {
    margin-top: 30px;
  }
  > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 18px;
`;

export const DonateRight = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  > :not(:last-child) {
    margin-right: 30px;
  }
  ${media.md} {
    margin-top: 0;
    margin-left: 30px;
  }
`;

const CallToAction = styled(LargeButton)`
  &&& {
    margin-top: 40px;
    padding: 0 35px;
    ${media.xs} {
      padding: 0 70px;
    }
  }
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

export default Support;

export async function getStaticProps() {
  return {
    props: getHeaderProps(),
  };
}
