import React from 'react';
import styled from 'styled-components';
import { GITHUB, GUMROAD } from './constants';
import { Text15 } from './Typography';
import { Heart, PeaceHand } from 'iconoir-react';

export function Header() {
  return (
    <Container>
      <LogoIcon />
      <Logo src={'/iconoir-logo.svg'} alt={'Iconoir Logo'} />
      <a
        href={GUMROAD}
        target={'_blank'}
        rel={'noreferrer'}
        style={{ marginLeft: 'auto' }}
      >
        <NavigationItem>Support the Project</NavigationItem>
      </a>
      <a href={GITHUB} target={'_blank'} rel="noreferrer">
        <NavigationItem>GitHub</NavigationItem>
      </a>
      <BuiltWith>
        Designed and built with <Heart width={'1em'} height={'1em'} /> by{' '}
        <a href={''}>Luca</a> &amp; <a href={''}>Sam</a>
      </BuiltWith>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 60px;
  }
`;
const NavigationItem = styled(Text15)`
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  color: var(--black-60);
`;
const Logo = styled.img`
  height: 20px;
  color: var(--black);
`;
const LogoIcon = styled(PeaceHand)`
  width: 36px;
  height: 36px;
  color: var(--black);
  margin-right: 4px !important;
`;
const BuiltWith = styled(NavigationItem)`
  display: flex;
  align-items: center;
  svg {
    fill: var(--black);
    margin: 0 0.22em;
  }
  > * {
    margin: 0 0.22em;
  }
  > :last-child {
    margin-right: 0;
  }
`;
