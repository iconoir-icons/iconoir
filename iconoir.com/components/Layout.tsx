import React from 'react';
import styled from 'styled-components';
import { GA } from './GA';

/** Full-width page column with the shared side margin. */
export const Wrap = styled.div`
  padding: 0 var(--gutter);
`;

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <GA />
      {children}
    </>
  );
}
