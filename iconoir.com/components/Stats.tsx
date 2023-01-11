import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Text15 } from './Typography';

export interface StatProps {
  value: string;
  description: string;
}
export function Stat({ value, description }: StatProps) {
  return (
    <StatContainer>
      <StatText>{value}</StatText>
      <Text15>{description}</Text15>
    </StatContainer>
  );
}

const StatText = styled.div`
  font-size: 38px;
  font-weight: 700;
  line-height: 62px;
  color: var(--black);
  ${media.md} {
    font-size: 50px;
    line-height: 82px;
  }
`;
const StatContainer = styled.div`
  text-align: center;
  width: 45%;
  margin-bottom: 55px;
  ${media.md} {
    width: 205px;
    margin-bottom: 0;
  }
`;
export const StatsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  margin: 40px auto 5px auto;
  flex-wrap: wrap;
  > :not(:last-child) {
    margin-right: 8px;
  }

  ${media.md} {
    margin: 64px auto 120px auto;
  }
`;
