import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Eyebrow, Mono } from './Typography';

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  ${Eyebrow} {
    margin: 0;
    color: var(--black);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  ${media.sm} {
    padding-bottom: 28px;
  }
`;

const Separator = styled.div`
  height: 1px;
  flex: 1;
  background: var(--line);
`;

export interface CategoryRowProps {
  category: string;
  numIcons: number;
  style?: any;
}

export function CategoryRow({ category, numIcons, style }: CategoryRowProps) {
  return (
    <Container style={style}>
      <InnerContainer>
        <Eyebrow as="h3">{category}</Eyebrow>
        <Mono>
          {numIcons}
          {' '}
          icon
          {numIcons === 1 ? '' : 's'}
        </Mono>
        <Separator />
      </InnerContainer>
    </Container>
  );
}
