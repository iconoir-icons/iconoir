import React from 'react';
import styled from 'styled-components';
import { AUTHOR_LINKS } from './constants';
import { Cancel, Heart, Menu } from 'iconoir-react';
import { CurrentVersion } from './CurrentVersion';
import { media } from './responsive';
import { ResetButton } from './Button';
import { AnimatedSvg } from './AnimatedSvg';
import { NavigationItem, NavigationItemContainer } from './NavigationItem';
import Link from 'next/link';

export interface HeaderProps {
  currentVersion: string;
  currentVersionColor?: string;
}
export function Header({ currentVersion, currentVersionColor }: HeaderProps) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <Container>
      <HeaderLeft>
        <Link href={'/'}>
          <a>
            <LogoContainer>
              <LogoIcon>
                <AnimatedSvg />
              </LogoIcon>
              <Logo src={'/iconoir-logo.svg'} alt={'Iconoir Logo'} />
            </LogoContainer>
          </a>
        </Link>
        <CurrentVersion version={currentVersion} color={currentVersionColor} />
      </HeaderLeft>
      <HeaderCenter>
        <MobileMenuContainer visible={menuVisible}>
          <NavigationItem href={'/'}>Icons</NavigationItem>
          <NavigationItem href={'/docs'}>Documentation</NavigationItem>
          <NavigationItem href={'/support'} style={{ marginRight: 0 }}>
            Donate &mdash; Our Mission
          </NavigationItem>
          <BuiltWith isMobile>
            Made with <Heart width={'1em'} height={'1em'} /> by{' '}
            <a href={AUTHOR_LINKS.Luca} target={'_blank'} rel={'noreferrer'}>
              Luca
            </a>{' '}
            &amp;{' '}
            <a href={AUTHOR_LINKS.Sam} target={'_blank'} rel={'noreferrer'}>
              Sam
            </a>
          </BuiltWith>
        </MobileMenuContainer>
      </HeaderCenter>
      <HeaderRight>
        <BuiltWith>
          Designed and built with <Heart width={'1em'} height={'1em'} /> by{' '}
          <a href={AUTHOR_LINKS.Luca} target={'_blank'} rel={'noreferrer'}>
            Luca
          </a>{' '}
          &amp;{' '}
          <a href={AUTHOR_LINKS.Sam} target={'_blank'} rel={'noreferrer'}>
            Sam
          </a>
        </BuiltWith>
        <MobileMenuButton onClick={() => setMenuVisible((v) => !v)}>
          {menuVisible ? <Cancel /> : <Menu />}
        </MobileMenuButton>
      </HeaderRight>
    </Container>
  );
}

export const LogoContainer = styled.div`
  position: relative;
  z-index: 101;
  display: inline-flex;
  align-items: center;
`;
const MobileMenuButton = styled(ResetButton)`
  z-index: 101;
  color: var(--black);
  background: transparent;
  display: inline-block;
  margin-left: auto !important;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  ${media.lg} {
    display: none;
  }
`;
const MobileMenuContainer = styled.div<{ visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
  padding-top: 100px;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s linear;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  pointer-events: none;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${(props) => (props.visible ? '&' : '&.noop')} {
    pointer-events: all;
    transform: translateY(0);
    opacity: 1;
  }
  ${media.lg} {
    background: none;
    padding-top: 0;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    transform: none;
    pointer-events: all;
    opacity: 1;
    > :not(:last-child) {
      margin-right: 60px;
    }
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderItem = styled.div`
  flex: 1;
  width: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeaderCenter = styled(HeaderItem)`
  padding: 0 16px;
  > :not(:last-child) {
    margin-right: 16px;
  }
`;
const HeaderLeft = styled(HeaderItem)`
  justify-content: flex-start;
`;
const HeaderRight = styled(HeaderItem)`
  justify-content: flex-end;
`;
export const Logo = styled.img`
  height: 24px;
  color: var(--black);
  margin-right: 16px !important;
  z-index: 101;
`;
export const LogoIcon = styled.div`
  color: var(--black);
  margin-right: 4px !important;
  svg {
    width: 36px;
    height: 36px;
  }
`;
const BuiltWith = styled(NavigationItemContainer)<{ isMobile?: boolean }>`
  display: ${(props) => (props.isMobile ? 'flex' : 'none')};
  ${media.lg} {
    display: ${(props) => (props.isMobile ? 'none' : 'flex')};
  }
  align-items: center;
  justify-content: center;
  color: var(--black-60);
  border-bottom: none !important;
  svg {
    fill: var(--black);
    margin: 0 0.22em;
  }
  > * {
    margin: 0 0.22em;
  }
  a {
    color: var(--black);
    font-weight: 700;
  }
  > :last-child {
    margin-right: 0;
  }
  ${media.lg} {
    justify-content: flex-start;
    a {
      font-weight: normal;
    }
  }
`;
