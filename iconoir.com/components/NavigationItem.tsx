import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Text15 } from './Typography';

export interface NavigationItemProps {
  href: string;
  activeMatch?: string;
  children: React.ReactElement | string;
  style?: any;
}

export function NavigationItem({
  href,
  activeMatch,
  children,
  style,
}: NavigationItemProps) {
  const router = useRouter();

  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationItemContainer
        as="a"
        style={style}
        $text={children.toString()}
        $isActive={
          activeMatch
            ? router.asPath.startsWith(activeMatch)
            : href.slice(1)
              ? router.asPath.slice(1).startsWith(href.slice(1))
              : router.asPath === href
        }
      >
        {children}
      </NavigationItemContainer>
    </Link>
  );
}

export const NavigationItemContainer = styled(Text15)<{
  $text: string;
  $isActive?: boolean;
}>`
  &&& {
    font-weight: ${(props) => (props.$isActive ? '700' : '500')};
    font-size: 18px;
    line-height: 28px;
    text-decoration: none;
    white-space: nowrap;
    padding: 24px;
    color: var(--black);
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    transition: background 0.1s linear;

    &:not(:last-child) {
      border-bottom: solid 1px var(--light-gray);
    }

    ${media.lg} {
      font-size: 15px;
      line-height: 20px;
      font-weight: ${(props) => (props.$isActive ? '600' : '500')};
      padding: 0;
      color: var(--g0);
      width: auto;
      border-bottom: none !important;
      transition: 0.2s;

      /* Prevent layout shift */
      display: inline-flex;
      flex-direction: column;
      &::after {
        content: '${(props) => props.$text}';
        height: 0;
        visibility: hidden;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        font-weight: 600;
      }

      &::before {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        top: -12px;
        bottom: -12px;
        left: -16px;
        right: -16px;
        border-radius: 10px;
        transition: background 0.1s linear;
      }

      &:hover::before {
        background: var(--g6);
        transition: 0.2s;
        top: -16px;
        bottom: -16px;
        left: -20px;
        right: -20px;
      }
    }
  }
`;
