import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { GA } from './GA';
import { ProModal } from './ProModal';

const Container = styled.div`
  padding: 50px 30px;
  ${media.lg} {
    padding: 30px 50px 50px 50px;
  }
`;

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <GA />
      {children}
      <ProModal />
    </Container>
  );
}
