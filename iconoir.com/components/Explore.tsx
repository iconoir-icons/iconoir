import { IconoirProvider } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { Ad } from './Ad';
import { Sponsor } from './Sponsor';
import { CustomizationEditor } from './CustomizationEditor';
import { FiltersEditor } from './FiltersEditor';
import { Icon, IconList, IconListFilters } from './IconList';
import { media } from '../lib/responsive';
import { useCustomizationPersistence } from './useCustomizationPersistence';

export interface ExploreProps {
  allIcons: Icon[];
}
export function Explore({ allIcons }: ExploreProps) {
  const [filters, setFilters] = React.useState<IconListFilters>({});
  const [customizations, setCustomizations] = useCustomizationPersistence();
  return (
    <Container>
      <Left>
        <FilterContainer $isMobile>
          <FiltersEditor filters={filters} onChange={setFilters} />
        </FilterContainer>
        <IconoirProvider
          iconProps={{
            color: customizations.hexColor,
            width: customizations.size ? `${customizations.size}px` : undefined,
            height: customizations.size
              ? `${customizations.size}px`
              : undefined,
            strokeWidth: customizations.strokeWidth,
          }}
        >
          <IconList filters={filters} allIcons={allIcons} />
        </IconoirProvider>
      </Left>
      <Right>
        <FilterContainer>
          <FiltersEditor filters={filters} onChange={setFilters} />
        </FilterContainer>
        <Sponsor />
        <Ad />
        <CustomizationEditor
          customizations={customizations}
          onChange={setCustomizations}
        />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  ${media.md} {
    align-items: flex-start;
    flex-direction: row;
  }
`;
const Left = styled.div`
  flex: 1;
  min-height: calc(100vh - 100px);
  background: white;
  ${media.md} {
    background: none;
  }
`;
const Right = styled.div`
  position: sticky;
  top: 50px;
  width: 275px;
  margin-left: 68px;
  display: block;
  z-index: -1;
  ${media.md} {
    z-index: 1;
  }
`;
const FilterContainer = styled.div<{ $isMobile?: boolean }>`
  display: ${(props) => (props.$isMobile ? 'block' : 'none')};
  margin-bottom: 40px;
  position: sticky;
  top: 20px;
  z-index: 100;
  width: 100%;
  ${media.md} {
    position: relative;
    top: 0;
    display: ${(props) => (props.$isMobile ? 'none' : 'block')};
    margin-bottom: 10px;
  }
`;
