import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Text14 } from './Typography';

const StatText = styled.div`
  font-size: 40px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: var(--black);
  margin-bottom: 12px;
  ${media.md} {
    font-size: 52px;
  }
`;

const StatContainer = styled.div`
  padding: 24px 20px;
  border: 1px solid var(--line);
  border-radius: 20px;
  ${media.md} {
    padding: 32px 28px;
    border-radius: 24px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  ${media.md} {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`;

export interface StatProps {
  value: string;
  description: string;
}

export function Stat({ value, description }: StatProps) {
  return (
    <StatContainer>
      <StatText>{value}</StatText>
      <Text14>{description}</Text14>
    </StatContainer>
  );
}
