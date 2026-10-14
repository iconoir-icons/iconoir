import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { CardTitle, Text18 } from './Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 72px;
  padding: 24px 20px;
  border-radius: 24px;
  background: var(--band);
  ${media.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    padding: 36px;
  }
  ${CardTitle} {
    margin-bottom: 8px;
  }
`;

const Action = styled.div`
  flex: none;
`;

export interface CalloutProps {
  title: string;
  action: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

/** Soft band card with a title, a line of copy and an action on the right. */
export function Callout({ title, action, children, style }: CalloutProps) {
  return (
    <Container style={style}>
      <div>
        <CardTitle>{title}</CardTitle>
        <Text18>{children}</Text18>
      </div>
      <Action>{action}</Action>
    </Container>
  );
}
