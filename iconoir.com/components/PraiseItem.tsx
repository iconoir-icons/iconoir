import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Text14, Text18 } from './Typography';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  flex-shrink: 0;
  width: calc(100vw - 60px);
  scroll-snap-align: center;
  ${media.xs} {
    width: 428px;
  }
`;

const AuthorImage = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 28px;
`;

const Logo = styled.img`
  height: 23px;
  margin-top: 36px;
`;

const Header = styled(Text18)`
  &&& {
    font-weight: 700;
    color: var(--black);
  }
`;

const Body = styled(Text18)`
  margin-top: 8px;
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
      <AuthorImage src={imageUrl} alt={`Picture of ${name}`} />
      <div>
        <Header>{name}</Header>
        <Text14>{position}</Text14>
        <Body>{description}</Body>
        <a href={logoLink} target="_blank" rel="noreferrer">
          <Logo src={logoUrl} alt={logoAlt} />
        </a>
      </div>
    </Container>
  );
}
