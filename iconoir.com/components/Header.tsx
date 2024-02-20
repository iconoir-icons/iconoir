import { Menu, Xmark, Discord, Sparks } from 'iconoir-react';
import { Heart } from 'iconoir-react/solid';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import { DISCORD_LINK, SHARE_LINK } from '../lib/constants';
import { media } from '../lib/responsive';
import { AnimatedSvg } from './AnimatedSvg';
import { ResetButton } from './Button';
import { CurrentVersion } from './CurrentVersion';
import { NavigationItem } from './NavigationItem';
import { Text15 } from './Typography';

export interface HeaderProps {
  currentVersion: string;
}
export function Header({ currentVersion }: HeaderProps) {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <Container>
      <Banner>
        <Sparks></Sparks>
        <a
          href={
            'https://lucaburgio.com/join?utm_source=iconoir&utm_medium=join-head-banner'
          }
          target={'_blank'}
        >
          Access to the latest updates on new icons and ideas. Join the
          newsletter.
        </a>
      </Banner>
      <HeaderLeft>
        <Link href={'/'}>
          <LogoContainer>
            <LogoIcon>
              <AnimatedSvg />
            </LogoIcon>
            <Logo src={'/iconoir-logo.svg'} alt={'Iconoir Logo'} />
          </LogoContainer>
        </Link>
        <CurrentVersion version={currentVersion} />
      </HeaderLeft>
      <HeaderCenter>
        <MobileMenuContainer $visible={menuVisible}>
          <NavigationItem href={'/'}>Icons</NavigationItem>
          <NavigationItem href={'/docs/introduction'} activeMatch={'/docs'}>
            Documentation
          </NavigationItem>
          <NavigationItem href={'/support'} style={{ marginRight: 0 }}>
            Donate &mdash; Our Mission
          </NavigationItem>
          <Share $isMobile>
            <a href={SHARE_LINK} target={'_blank'} rel={'noreferrer nofollow'}>
              Share with <Heart width={'1em'} height={'1em'} /> on{' '}
              <span>X (Twitter)</span>
            </a>
          </Share>
        </MobileMenuContainer>
      </HeaderCenter>
      <HeaderRight>
        <Share>
          <a href={SHARE_LINK} target={'_blank'} rel={'noreferrer nofollow'}>
            Share with <Heart width={'1em'} height={'1em'} /> on{' '}
            <span>X (Twitter)</span>
          </a>
        </Share>
        <a href={DISCORD_LINK} rel={'nofollow noreferrer'}>
          <StyledDiscord $isMobile />
        </a>
        <MobileMenuButton onClick={() => setMenuVisible((v) => !v)}>
          {menuVisible ? <Xmark /> : <Menu />}
        </MobileMenuButton>
      </HeaderRight>
    </Container>
  );
}

const StyledDiscord = styled(Discord)<{ $isMobile?: boolean }>`
  display: none;
  ${media.lg} {
    display: flex;
    margin: 0 0 0 16px;
    &:hover {
      scale: 1.1;
      transition: 0.2s;
      color: #7289da;
    }
  }
`;

export const LogoContainer = styled.div`
  position: relative;
  z-index: 101;
  display: inline-flex;
  align-items: center;
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    transition: 0.2s;
  }
`;

export const Banner = styled(Text15)`
  display: none;
  ${media.lg} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    background: var(--g5);
    color: var(--g0);
    font-weight: 500;
    position: absolute;
    width: 100%;
    text-decoration: underline;
    top: 0;
  }
  > * {
    margin: 0 4px;
  }
`;

const MobileMenuButton = styled(ResetButton)`
  &&& {
    z-index: 101;
    color: var(--black);
    background: transparent;
    display: inline-block;
    margin-left: auto;
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
    }
    ${media.lg} {
      display: none;
    }
  }
`;
const MobileMenuContainer = styled.div<{ $visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
  padding-top: 100px;
  transition:
    transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.25s linear;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  pointer-events: none;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  ${(props) =>
    props.$visible &&
    css`
      pointer-events: all;
      transform: translateY(0);
      opacity: 1;
    `}
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
  ${media.lg} {
    margin-top: 40px;
  }
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
  &&& {
    justify-content: flex-start;
  }
`;
const HeaderRight = styled(HeaderItem)`
  &&& {
    justify-content: flex-end;
  }
`;

export const Logo = styled.img`
  height: 24px;
  margin-top: -4px;
  color: var(--black);
  margin-right: 16px;
  z-index: 101;
`;
export const LogoIcon = styled.div`
  color: var(--black);
  margin-right: 4px;
  svg {
    width: 36px;
    height: 36px;
  }
`;

const Share = styled(Text15)<{ $isMobile?: boolean }>`
  &&& {
    display: none;
    ${(props) =>
      props.$isMobile &&
      css`
        display: flex;
        justify-content: center;
        padding: 12px 0;
      `}
    ${media.lg} {
      display: ${(props) => (props.$isMobile ? 'none' : 'block')};
    }
    color: var(--black-60);
    white-space: pre-wrap;
    a {
      display: inline-flex;
      align-items: center;
      color: unset;
      text-decoration: unset;
    }
    svg,
    span {
      color: var(--black);
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;
