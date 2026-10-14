import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';

const NavigationItemContainer = styled.a<{ $isActive?: boolean }>`
  display: block;
  padding: 16px 0;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
  color: var(--black);
  border-bottom: 1px solid var(--line);
  transition: opacity 0.15s;

  ${media.lg} {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.01em;
    border-bottom: none;
    color: ${(props) => (props.$isActive ? 'var(--black)' : 'var(--text)')};
    &:hover {
      color: var(--black);
    }
  }
`;

export interface NavigationItemProps {
  href: string;
  activeMatch?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavigationItem({
  href,
  activeMatch,
  children,
  onClick,
}: NavigationItemProps) {
  const router = useRouter();

  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationItemContainer
        onClick={onClick}
        $isActive={
          activeMatch
            ? router.asPath.startsWith(activeMatch)
            : href.slice(1)
              ? router.asPath.slice(1).startsWith(href.slice(1))
              : router.asPath === href || router.asPath.startsWith('/#')
        }
      >
        {children}
      </NavigationItemContainer>
    </Link>
  );
}
