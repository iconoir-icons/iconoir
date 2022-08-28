import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Text13 } from './Typography';

export interface CurrentVersionProps {
  version: string;
  color?: string;
}
export function CurrentVersion({ version, color }: CurrentVersionProps) {
  return (
    <Link href={'/docs/changelog'} passHref>
      <Container as={'a'} style={color ? { background: color } : undefined}>
        {version}
      </Container>
    </Link>
  );
}

const Container = styled(Text13)`
  color: var(--black);
  font-weight: 700;
  background: var(--pink);
  line-height: 1;
  padding: 7px 16px;
  border-radius: 200px;
  display: block;
  text-decoration: none !important;
`;
