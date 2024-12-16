import styled from 'styled-components';
import { media } from '../lib/responsive';
import { Text15 } from './Typography';

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  * {
    line-height: 1;
  }
  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 25px;
  box-sizing: border-box;
  ${media.sm} {
    padding-bottom: 40px;
  }
`;

const Title = styled(Text15)`
  &&& {
    font-weight: 700;
    color: var(--g0);
    background-color: var(--g6);
    border-radius: 8px;
    padding: 6px 10px;
  }
`;

const Separator = styled.div`
  height: 1px;
  flex: 1;
  background: var(--g6);
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
        <Title>{category}</Title>
        <Text15>
          {numIcons}
          {' '}
          Icon
          {numIcons === 1 ? '' : 's'}
        </Text15>
        <Separator />
      </InnerContainer>
    </Container>
  );
}
