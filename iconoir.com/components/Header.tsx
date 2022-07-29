import React from 'react';
import styled from 'styled-components';
import { AUTHOR_LINKS, GITHUB, SUPPORT_LINK } from './constants';
import { Text15 } from './Typography';
import { Cancel, Heart, Menu } from 'iconoir-react';
import { CurrentVersion } from './CurrentVersion';
import { media } from './responsive';
import { ResetButton } from './Button';
import { AnimatedSvg } from './AnimatedSvg';

export interface HeaderProps {
  currentVersion: string;
}
export function Header({ currentVersion }: HeaderProps) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <Container>
      <LogoContainer>
        <LogoIcon>
          <AnimatedSvg />
        </LogoIcon>
        <Logo src={'/iconoir-logo.svg'} alt={'Iconoir Logo'} />
      </LogoContainer>
      <CurrentVersion version={currentVersion} />
      <MobileMenuContainer visible={menuVisible}>
        <NavigationItem
          as={'a'}
          href={SUPPORT_LINK}
          target={'_blank'}
          rel={'noreferrer'}
          style={{ marginLeft: 'auto' }}
        >
          Support the Project
        </NavigationItem>
        <NavigationItem
          as={'a'}
          href={GITHUB}
          target={'_blank'}
          rel="noreferrer"
        >
          GitHub
        </NavigationItem>
        <BuiltWith>
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
      <MobileMenuButton onClick={() => setMenuVisible((v) => !v)}>
        {menuVisible ? <Cancel /> : <Menu />}
      </MobileMenuButton>
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
    margin-left: auto;
    background: none;
    padding-top: 0;
    box-shadow: none;
    display: inline-flex;
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
`;
export const NavigationItem = styled(Text15)`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-decoration: none;
  padding: 25px;
  color: var(--black);
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  &:not(:last-child) {
    border-bottom: solid 1px var(--light-gray);
  }
  ${media.lg} {
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    padding: 0;
    color: var(--black-60);
    width: auto;
    border-bottom: none;
  }
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
const BuiltWith = styled(NavigationItem)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black-60);
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
