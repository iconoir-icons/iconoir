import React from 'react';
import styled from 'styled-components';
import {
  DEFAULT_CUSTOMIZATIONS,
  Icon,
  IconList,
  IconListCustomizations,
  IconListFilters,
} from './IconList';

export interface ExploreProps {
  allIcons: Icon[];
}
export function Explore({ allIcons }: ExploreProps) {
  const [filters, setFilters] = React.useState<IconListFilters>({});
  const [customizations, setCustomizations] =
    React.useState<IconListCustomizations>(DEFAULT_CUSTOMIZATIONS);
  return (
    <Container>
      <Left>
        <IconList
          filters={filters}
          customizations={customizations}
          allIcons={allIcons}
        />
      </Left>
      <Right>
        <p>Right.</p>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  position: sticky;
  top: 50px;
  width: 275px;
  margin-left: 68px;
`;
