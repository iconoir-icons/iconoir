import { PeaceHand } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { LICENSE_LINK } from './constants';
import { Logo, LogoContainer, LogoIcon, NavigationItem } from './Header';

export function Footer() {
  return (
    <Container>
      <LogoContainer>
        <LogoIcon>
          <PeaceHand />
        </LogoIcon>
        <Logo src={'/iconoir-logo.svg'} alt={'Iconoir Logo'} />
      </LogoContainer>
      <FooterNavigationItem
        as={'a'}
        href={LICENSE_LINK}
        target={'_blank'}
        rel={'noreferrer'}
      >
        License
      </FooterNavigationItem>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 100px;
  padding-top: 30px;
  border-top: solid 2px var(--light-gray);
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 50px;
  }
`;

const FooterNavigationItem = styled(NavigationItem)`
  color: var(--black);
`;
