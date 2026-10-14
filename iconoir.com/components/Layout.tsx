import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { GA } from './GA';

export const PAGE_MAX_WIDTH = 1200;

/** Centered page column, matching `.wrap` on pro.iconoir.com. */
export const Wrap = styled.div`
  max-width: ${PAGE_MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 16px;
  ${media.sm} {
    padding: 0 40px;
  }
`;

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <GA />
      {children}
    </>
  );
}
