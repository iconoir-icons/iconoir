import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Mono, Text15 } from './Typography';

const Container = styled.figure`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: calc(100vw - 48px);
  margin: 0;
  padding: 28px;
  border-radius: 24px;
  background: var(--band);
  text-align: left;
  scroll-snap-align: center;
  ${media.xs} {
    width: 380px;
  }
  ${media.xl} {
    width: auto;
    flex: 1;
  }
`;

const Quote = styled.blockquote`
  flex: 1;
  margin: 0 0 28px;
  font-size: 18px;
  line-height: 1.45;
  letter-spacing: -0.015em;
  color: var(--black);
`;

const Author = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: var(--black);
`;

const Logo = styled.img`
  height: 20px;
  margin-left: auto;
  opacity: 0.8;
`;

export interface PraiseItemProps {
  name: string;
  position: string;
  description: string | React.ReactElement;
  logoUrl: string;
  logoLink: string;
  logoAlt: string;
  imageUrl: string;
}

export function PraiseItem({
  name,
  position,
  description,
  logoUrl,
  logoLink,
  logoAlt,
  imageUrl,
}: PraiseItemProps) {
  return (
    <Container>
      <Quote>
        <Text15 as="span" style={{ fontSize: 'inherit', color: 'inherit' }}>
          “
          {description}
          ”
        </Text15>
      </Quote>
      <Author>
        <AuthorImage src={imageUrl} alt={`Picture of ${name}`} />
        <div>
          <Name>{name}</Name>
          <Mono>{position}</Mono>
        </div>
        <a href={logoLink} target="_blank" rel="noreferrer">
          <Logo src={logoUrl} alt={logoAlt} />
        </a>
      </Author>
    </Container>
  );
}
