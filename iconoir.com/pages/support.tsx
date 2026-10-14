import type { NextPage } from 'next';
import type { HeaderProps } from '../components/Header';
import { ArrowUpRight, DesignNib, Discord, Flash, Globe } from 'iconoir-react';
import styled from 'styled-components';
import { Button } from '../components/Button';
import { Callout } from '../components/Callout';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Actions, Hero } from '../components/Hero';
import { Layout, Wrap } from '../components/Layout';
import { Praise } from '../components/Praise';
import { SEO } from '../components/SEO';
import {
  CardTitle,
  Eyebrow,
  Lede,
  SectionTitle,
  Text15,
} from '../components/Typography';
import { DISCORD_LINK, SUPPORT_LINK } from '../lib/constants';
import { getHeaderProps } from '../lib/getHeaderProps';
import { media } from '../lib/responsive';

const Band = styled.section`
  padding: 72px 0;
  background: var(--band);
  text-align: center;
  ${media.sm} {
    padding: 112px 0;
  }
  ${Lede} {
    max-width: 620px;
    margin: 16px auto 0;
  }
`;

const Pillars = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 40px;
  text-align: left;
  ${media.md} {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 56px;
  }
`;

const Pillar = styled.div`
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

const PillarIcon = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin-bottom: 28px;
  border-radius: 14px;
  background: var(--black);
  color: var(--white);
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Section = styled.section`
  padding: 72px 0;
  text-align: center;
  ${media.sm} {
    padding: 112px 0;
  }
`;

const Dark = styled.div`
  padding: 64px 20px;
  border-radius: 20px;
  background: var(--dark);
  color: var(--white);
  text-align: center;
  ${media.sm} {
    padding: 100px 40px;
    border-radius: 24px;
  }
  ${SectionTitle} {
    color: var(--white);
  }
  ${Lede} {
    max-width: 620px;
    margin: 16px auto 0;
    color: var(--dark-text);
  }
`;

const PILLARS = [
  {
    icon: <Flash />,
    title: 'Free',
    description:
      'We want to give developers and designers high-quality free icons. Hassle-free.',
  },
  {
    icon: <DesignNib />,
    title: 'Complete',
    description: 'We’re aiming at having as many unique icons as possible.',
  },
  {
    icon: <Globe />,
    title: 'Ambitious',
    description: 'We want to help and be part of as many projects as possible.',
  },
];

interface SupportProps extends HeaderProps {}

const Support: NextPage<SupportProps> = ({ ...headerProps }) => {
  return (
    <Layout>
      <SEO
        title="Donate - Our Mission"
        description="Our mission: A free, complete, and open icon library. Iconoir wants to give to developers and users high-quality free icons."
      />
      <Header {...headerProps} />
      <Hero
        eyebrow="Our mission"
        title="A free, complete, and open icon library"
        lede="Iconoir is built in the open by a small team and its contributors, and kept free by the people who use it."
      >
        <Actions>
          <Button as="a" href={SUPPORT_LINK} target="_blank" rel="noreferrer">
            Donate
          </Button>
          <Button
            as="a"
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer"
            $variant="secondary"
          >
            Join the Discord
          </Button>
        </Actions>
      </Hero>
      <Band>
        <Wrap>
          <Eyebrow>What we stand for</Eyebrow>
          <SectionTitle>Three goals, one library</SectionTitle>
          <Pillars>
            {PILLARS.map((pillar, index) => (
              <Pillar key={pillar.title}>
                <PillarIcon>{pillar.icon}</PillarIcon>
                <Eyebrow>
                  {String(index + 1).padStart(2, '0')}
                  {' · '}
                  {pillar.title}
                </Eyebrow>
                <CardTitle>{pillar.title}</CardTitle>
                <Text15>{pillar.description}</Text15>
              </Pillar>
            ))}
          </Pillars>
        </Wrap>
      </Band>
      <Section>
        <Wrap>
          <Eyebrow>Kind words</Eyebrow>
          <SectionTitle>What our friends say</SectionTitle>
          <Praise />
        </Wrap>
      </Section>
      <Wrap>
        <Dark>
          <Eyebrow $dark>Support</Eyebrow>
          <SectionTitle>Become part of the project</SectionTitle>
          <Lede>
            If Iconoir is valuable for you and your projects, a one-time or
            recurring donation helps us cover costs and development time.
          </Lede>
          <Actions>
            <Button
              as="a"
              href={SUPPORT_LINK}
              target="_blank"
              rel="noreferrer"
              $variant="inverted"
            >
              Donate on Open Collective
              <ArrowUpRight />
            </Button>
          </Actions>
        </Dark>
        <Callout
          title="Join us on Discord"
          action={(
            <Button
              as="a"
              href={DISCORD_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <Discord />
              Join
            </Button>
          )}
        >
          Join the community and help us with your suggestions and feedback.
        </Callout>
      </Wrap>
      <div style={{ height: 112 }} />
      <Footer />
    </Layout>
  );
};

export default Support;

export async function getStaticProps() {
  return {
    props: getHeaderProps(),
  };
}
