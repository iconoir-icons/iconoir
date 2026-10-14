import { Menu, PeaceHand, Xmark } from 'iconoir-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { DISCORD_LINK, SUPPORT_LINK } from '../lib/constants';
import { media } from '../lib/responsive';
import { Button } from './Button';
import { CurrentVersion } from './CurrentVersion';
import { PAGE_MAX_WIDTH } from './Layout';
import { NavigationItem, NavigationLink } from './NavigationItem';

/** Height of the sticky nav, so sticky content below can clear it. */
export const NAV_HEIGHT = 68;

const Nav = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const NavInner = styled.div`
  max-width: ${PAGE_MAX_WIDTH}px;
  height: ${NAV_HEIGHT}px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  ${media.sm} {
    padding: 0 40px;
    gap: 32px;
  }
`;

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
`;

const wave = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(-14deg); }
  40% { transform: rotate(10deg); }
  60% { transform: rotate(-8deg); }
  80% { transform: rotate(4deg); }
  100% { transform: rotate(0deg); }
`;

export const LogoContainer = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  /* The peace hand gives a little wave on hover. */
  @media (prefers-reduced-motion: no-preference) {
    &:hover svg {
      animation: ${wave} 0.7s cubic-bezier(0.36, 0, 0.2, 1);
    }
  }
`;

export const LogoIcon = styled.div`
  display: flex;
  color: var(--black);
  margin-right: 4px;
  svg {
    transform-origin: 50% 85%;
    width: 26px;
    height: 26px;
    ${media.sm} {
      width: 30px;
      height: 30px;
    }
  }
`;

export const Logo = styled.img`
  height: 17px;
  margin-top: -3px;
  ${media.sm} {
    height: 20px;
  }
`;

const Links = styled.nav<{ $visible?: boolean }>`
  position: absolute;
  top: ${NAV_HEIGHT}px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 8px 16px 24px;
  background: var(--white);
  box-shadow: 0 30px 40px -30px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.2s linear;
  transform: translateY(-8px);
  opacity: 0;
  pointer-events: none;
  ${(props) =>
    props.$visible
    && css`
      transform: none;
      opacity: 1;
      pointer-events: all;
    `}
  ${media.lg} {
    position: static;
    flex-direction: row;
    align-items: center;
    gap: 28px;
    margin-left: auto;
    padding: 0;
    background: none;
    box-shadow: none;
    transform: none;
    opacity: 1;
    pointer-events: all;
    /* Hovering a link fades the others back. */
    &:has(a:hover) a:not(:hover) {
      opacity: 0.4;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  ${media.lg} {
    margin-left: 0;
  }
`;

const MenuButton = styled(Button)`
  ${media.lg} {
    &&& {
      display: none;
    }
  }
`;

export interface HeaderProps {
  currentVersion: string;
}

export function Header({ currentVersion }: HeaderProps) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const closeMenu = () => setMenuVisible(false);
  const { asPath } = useRouter();

  React.useEffect(() => {
    setMenuVisible(false);
  }, [asPath]);

  return (
    <Nav>
      <NavInner>
        <Brand>
          <Link href="/" passHref legacyBehavior>
            <LogoContainer aria-label="Iconoir home">
              <LogoIcon>
                <PeaceHand />
              </LogoIcon>
              <Logo src="/iconoir-logo.svg" alt="Iconoir" />
            </LogoContainer>
          </Link>
          <CurrentVersion version={currentVersion} />
        </Brand>
        <Links $visible={menuVisible} aria-label="Main">
          <NavigationItem href="/" onClick={closeMenu}>
            Icons
          </NavigationItem>
          <NavigationItem
            href="/docs/introduction"
            activeMatch="/docs"
            onClick={closeMenu}
          >
            Documentation
          </NavigationItem>
          <NavigationItem href="/support" onClick={closeMenu}>
            Our mission
          </NavigationItem>
          <NavigationLink
            href={DISCORD_LINK}
            target="_blank"
            rel="nofollow noreferrer"
          >
            Discord
          </NavigationLink>
        </Links>
        <Actions>
          <Button
            as="a"
            href={SUPPORT_LINK}
            target="_blank"
            rel="noreferrer"
            $size="sm"
          >
            Donate
          </Button>
          <MenuButton
            $variant="secondary"
            $size="sm"
            $icon
            aria-label={menuVisible ? 'Close menu' : 'Open menu'}
            aria-expanded={menuVisible}
            onClick={() => setMenuVisible((v) => !v)}
          >
            {menuVisible ? <Xmark /> : <Menu />}
          </MenuButton>
        </Actions>
      </NavInner>
    </Nav>
  );
}
