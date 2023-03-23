import Link from 'next/link';
import styled from 'styled-components';
import { Text13 } from './Typography';

export interface CurrentVersionProps {
  version: string;
}
export function CurrentVersion({ version }: CurrentVersionProps) {
  return (
    <Link href={'/docs/changelog'} passHref legacyBehavior>
      <Container as={'a'}>
        {version}
      </Container>
    </Link>
  );
}

const Container = styled(Text13)`
  color: var(--g1);
  font-weight: 700;
  background: var(--g5);
  line-height: 1;
  padding: 7px 16px;
  border-radius: 200px;
  display: block;
  text-decoration: none !important;
  transition: color 0.1s linear, background 0.1s linear;
  &:hover {
    background: var(--black) !important;
    color: var(--white);
  }
`;
