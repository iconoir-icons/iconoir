import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Text15 } from './Typography';

export interface NavigationItemProps {
  href: string;
  children: React.ReactElement | string;
  style?: any;
}
export function NavigationItem({ href, children, style }: NavigationItemProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationItemContainer as={'a'} style={style}>
        {children}
      </NavigationItemContainer>
    </Link>
  );
}

export const NavigationItemContainer = styled(Text15)`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-decoration: none;
  white-space: nowrap;
  padding: 25px;
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
    font-weight: 500;
    padding: 0;
    color: var(--g0);
    width: auto;
    border-bottom: none !important;

    transition: 0.2s;
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
`;
