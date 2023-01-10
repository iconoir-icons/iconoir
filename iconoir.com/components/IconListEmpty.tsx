import { SpockHandGesture } from 'iconoir-react';
import styled from 'styled-components';
import { SUGGEST_ICON_LINK } from './constants';
import { Text18 } from './Typography';

export interface IconListEmptyProps {
  searchTerm: string;
}
export function IconListEmpty({ searchTerm }: IconListEmptyProps) {
  return (
    <Container>
      <IconContainer>
        <SpockHandGesture />
      </IconContainer>
      <Title>
        Unfortunately there are no icons for &apos;{searchTerm}&apos;
      </Title>
      <Text18 style={{ color: 'var(--black-60)' }}>
        {"If you can't find the icon, you can make a"}
        <br />
        <a href={SUGGEST_ICON_LINK} target={'_blank'} rel={'noreferrer'}>
          suggestion on GitHub.
        </a>
      </Text18>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 90px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const IconContainer = styled.div`
  svg {
    width: 60px;
    height: 60px;
  }
  margin-bottom: 65px;
  color: var(--black);
`;
const Title = styled(Text18)`
  font-weight: 700;
  margin-bottom: 30px;
  color: var(--black);
`;
