import type { NextPage } from 'next';
import type { HeaderProps } from '../../components/Header';
import { ArrowRight } from 'iconoir-react';
import Link from 'next/link';
import styled from 'styled-components';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Actions, Hero } from '../../components/Hero';
import { Layout, Wrap } from '../../components/Layout';
import { SEO } from '../../components/SEO';
import {
  CardTitle,
  Eyebrow,
  Lede,
  SectionTitle,
  Text15,
} from '../../components/Typography';
import { getHeaderProps } from '../../lib/getHeaderProps';
import { media } from '../../lib/responsive';

const Band = styled.section`
  margin-bottom: 72px;
  padding: 72px 0;
  background: var(--band);
  ${media.sm} {
    margin-bottom: 112px;
    padding: 112px 0;
  }
`;

const Intro = styled.div`
  display: grid;
  gap: 32px;
  align-items: center;
  ${media.md} {
    grid-template-columns: 1fr 1.1fr;
    gap: 64px;
  }
  ${Lede} + ${Lede} {
    margin-top: 16px;
  }
  a {
    color: var(--black);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 24px;
  background: var(--card);
`;

const FeaturesTitle = styled(SectionTitle)`
  max-width: 760px;
  margin: 72px auto 0;
  text-align: center;
  ${media.sm} {
    margin-top: 112px;
  }
`;

const Features = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 40px;
  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 56px;
  }
`;

const Feature = styled.div`
  padding: 24px 20px;
  border-radius: 24px;
  background: var(--card);
  ${media.md} {
    padding: 36px;
  }
  ${CardTitle} {
    margin-bottom: 10px;
  }
`;

const FEATURES = [
  {
    title: 'Open-source and free',
    description:
      'Dive into a world where quality meets accessibility. Iconoir offers a comprehensive set of icons, entirely free and open-source, making them a perfect fit for developers and designers alike.',
  },
  {
    title: 'Designed for React',
    description:
      'Our icons are crafted to complement React’s dynamic capabilities. Whether you’re building a web app or a mobile application, our React icons are optimized for performance and scalability.',
  },
  {
    title: 'Easy integration',
    description:
      'With straightforward implementation, you can start using our icons in your React projects with minimal effort. Our documentation guides you through every step.',
  },
  {
    title: 'Versatile and customizable',
    description:
      'From minimalistic designs to more intricate illustrations, our icons cater to a wide range of styles, and they’re fully customizable to fit your design requirements.',
  },
  {
    title: 'Community-driven',
    description:
      'Being a part of the open-source community, Iconoir thrives on collaboration and feedback. We continuously update and expand our collection based on the needs of our users.',
  },
];

interface ReactIconsProps extends HeaderProps {}

const ReactIcons: NextPage<ReactIconsProps> = ({ ...headerProps }) => {
  return (
    <Layout>
      <SEO
        title="React Icons"
        description="Free React Icons - Iconoir is a free open-source icons library."
      />
      <Header {...headerProps} />
      <Hero
        eyebrow="iconoir-react"
        title="Free React icons. Iconoir has you covered."
        lede="Iconoir has a React library, where we blend creativity with functionality to elevate your React projects."
      >
        <Actions>
          <Link href="/" passHref legacyBehavior>
            <Button as="a">
              Get the icons
              <ArrowRight />
            </Button>
          </Link>
          <Link href="/docs/packages/iconoir-react" passHref legacyBehavior>
            <Button as="a" $variant="secondary">
              Read the docs
            </Button>
          </Link>
        </Actions>
      </Hero>
      <Band>
        <Wrap>
          <Intro>
            <div>
              <Eyebrow>Built for your UI</Eyebrow>
              <Lede>
                Our library of free, open-source icons is designed to integrate
                seamlessly with your React applications, giving you a vast array
                of options to enhance your UI/UX design.
              </Lede>
              <Lede>
                Integrating Iconoir&apos;s React icons into your project is a
                breeze. Read the
                {' '}
                <Link href="/docs/packages/iconoir-react">documentation</Link>
                {' '}
                on how to implement Iconoir React icons.
              </Lede>
            </div>
            <Image src="/building-iconoir.gif" alt="Building Iconoir" />
          </Intro>
          <FeaturesTitle>Why choose Iconoir for your React icons?</FeaturesTitle>
          <Features>
            {FEATURES.map((feature, index) => (
              <Feature key={feature.title}>
                <Eyebrow>{String(index + 1).padStart(2, '0')}</Eyebrow>
                <CardTitle>{feature.title}</CardTitle>
                <Text15>{feature.description}</Text15>
              </Feature>
            ))}
          </Features>
        </Wrap>
      </Band>
      <Footer />
    </Layout>
  );
};

export default ReactIcons;

export async function getStaticProps() {
  return {
    props: getHeaderProps(),
  };
}
