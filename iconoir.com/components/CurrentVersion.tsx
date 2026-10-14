import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.a`
  margin-left: 8px;
  padding: 3px 7px;
  border-radius: 6px;
  background: var(--gray-btn);
  color: var(--black);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition:
    color 0.15s,
    background 0.15s;
  &:hover {
    background: var(--black);
    color: var(--white);
  }
`;

export interface CurrentVersionProps {
  version: string;
}

export function CurrentVersion({ version }: CurrentVersionProps) {
  return (
    <Link href="/docs/changelog" passHref legacyBehavior>
      <Container title="Changelog">{version}</Container>
    </Link>
  );
}
