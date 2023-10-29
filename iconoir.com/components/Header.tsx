import { Menu, Xmark } from 'iconoir-react';
import { Heart } from 'iconoir-react/solid';
import Link from 'next/link';
import React from 'react';
import styled, { css } from 'styled-components';
import { SHARE_LINK } from '../lib/constants';
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
            <a href={SHARE_LINK} target={'_blank'} rel={'noreferrer'}>
              Share with <Heart width={'1em'} height={'1em'} /> on{' '}
              <span>X (Twitter)</span>
            </a>
          </Share>
        </MobileMenuContainer>
      </HeaderCenter>
      <HeaderRight>
        <Share>
          <a href={SHARE_LINK} target={'_blank'} rel={'noreferrer'}>
            Share with <Heart width={'1em'} height={'1em'} /> on{' '}
            <span>X (Twitter)</span>
          </a>
        </Share>
        <MobileMenuButton onClick={() => setMenuVisible((v) => !v)}>
          {menuVisible ? <Xmark /> : <Menu />}
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
  transition: 0.1s;
  &:hover {
    scale: 1.1;
    transition: 0.2s;
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
    white-space: pre-wrap;
    a {
      display: inline-flex;
      align-items: center;
      color: unset;
      text-decoration: unset;
    }
    svg,
    span {
      color: var(--g0);
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;
