import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { media } from './responsive';
import { Text15 } from './Typography';

export interface NavigationItemProps {
  href: string;
  children: React.ReactElement | string;
  style?: any;
}
export function NavigationItem({ href, children, style }: NavigationItemProps) {
  const router = useRouter();
  return (
    <Link href={href} passHref>
      <NavigationItemContainer
        as={'a'}
        isActive={
          href.slice(1)
            ? router.asPath.slice(1).startsWith(href.slice(1))
            : router.asPath === href
        }
        style={style}
      >
        {children}
      </NavigationItemContainer>
    </Link>
  );
}

export const NavigationItemContainer = styled(Text15)<{ isActive?: boolean }>`
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
    color: var(--black-60);
    width: auto;
    border-bottom: none !important;
    &::before {
      position: absolute;
      z-index: -1;
      content: '';
      display: block;
      top: -18px;
      bottom: -18px;
      left: -24px;
      right: -24px;
      transition: background 0.1s linear;
    }
    ${(props) => (props.isActive ? '&' : '&.noop')} {
      color: var(--white);
      &::before {
        background: var(--black);
      }
    }
    &:hover::before {
      background: var(--light-gray);
    }
  }
`;
