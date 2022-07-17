import React from 'react';
import styled from 'styled-components';
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
  font-size: 50px;
  font-weight: 700;
  line-height: 82px;
  color: var(--black);
`;
const StatContainer = styled.div`
  text-align: center;
  width: 205px;
`;
export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 64px auto 120px auto;
  flex-wrap: wrap;
  > :not(:last-child) {
    margin-right: 16px;
  }
`;
