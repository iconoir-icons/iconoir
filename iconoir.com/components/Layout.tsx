import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { GA } from './GA';

export interface LayoutProps {}
export function Layout({ children }: React.PropsWithChildren<LayoutProps>) {
  return (
    <Container>
      <GA />
      {children}
    </Container>
  );
}

const Container = styled.div`
  padding: 50px 30px;
  ${media.lg} {
    padding: 30px 50px 50px 50px;
  }
`;
