import React from 'react';
import styled from 'styled-components';
import { GA } from './GA';

/** Full-width page column with the same 16px margin as the nav and icon grid. */
export const Wrap = styled.div`
  padding: 0 16px;
`;

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <GA />
      {children}
    </>
  );
}
