import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Wrap } from './Layout';
import { Display, Eyebrow, Lede } from './Typography';

const Section = styled.section<{ $hasVisual?: boolean }>`
  padding: 56px 0 64px;
  text-align: center;
  ${media.sm} {
    padding: 96px 0;
  }
  /* The artwork brings its own breathing room, so start 60px higher. */
  ${(props) =>
    props.$hasVisual
    && `
      padding-top: 16px;
      ${media.sm} {
        padding-top: 36px;
      }
    `}
  ${Display} {
    max-width: 860px;
    margin: 0 auto;
  }
  ${Lede} {
    max-width: 620px;
    margin: 24px auto 0;
    font-size: 16px;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 32px;
  > * {
    flex: 1 1 100%;
    ${media.xs} {
      flex: 0 0 auto;
    }
  }
`;

export interface HeroProps {
  /** Optional artwork shown above the eyebrow. */
  visual?: React.ReactNode;
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  children?: React.ReactNode;
}

export function Hero({ visual, eyebrow, title, lede, children }: HeroProps) {
  return (
    <Section $hasVisual={!!visual}>
      <Wrap>
        {visual}
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display>{title}</Display>
        {lede && <Lede>{lede}</Lede>}
        {children}
      </Wrap>
    </Section>
  );
}
