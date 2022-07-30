import React from 'react';
import styled from 'styled-components';
import { GITHUB } from './constants';
import { Text13 } from './Typography';

export interface CurrentVersionProps {
  version: string;
}
export function CurrentVersion({ version }: CurrentVersionProps) {
  return (
    <Container as={'a'} href={GITHUB} target={'_blank'} rel={'noreferrer'}>
      {version}
    </Container>
  );
}

const Container = styled(Text13)`
  color: var(--black);
  font-weight: 700;
  background: var(--white-80);
  line-height: 1;
  padding: 7px 16px;
  border-radius: 200px;
  display: block;
  text-decoration: none !important;
`;
