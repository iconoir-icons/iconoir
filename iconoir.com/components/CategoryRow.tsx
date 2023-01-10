import styled from 'styled-components';
import { media } from './responsive';
import { Text15 } from './Typography';

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
          {numIcons} Icon{numIcons === 1 ? '' : 's'}
        </Text15>
        <Separator />
      </InnerContainer>
    </Container>
  );
}

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
  font-weight: 700;
  color: var(--black);
`;
const Separator = styled.div`
  height: 1px;
  flex: 1;
  background: var(--light-gray);
`;
