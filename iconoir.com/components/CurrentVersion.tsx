import React from 'react';
import styled from 'styled-components';
import { Text13 } from './Typography';

export interface CurrentVersionProps {
  version: string;
}
export function CurrentVersion({ version }: CurrentVersionProps) {
  return <Container>{version}</Container>;
}

const Container = styled(Text13)`
  color: var(--black);
  font-weight: 700;
  background: var(--white-80);
  line-height: 1;
  padding: 7px 16px;
  border-radius: 200px;
`;
