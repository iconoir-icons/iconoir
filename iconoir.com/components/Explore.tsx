import type { Icon, IconListFilters } from './IconList';
import { IconoirProvider } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { CustomizationEditor } from './CustomizationEditor';
import { FiltersEditor } from './FiltersEditor';
import { IconList } from './IconList';
import { Streamline } from './Streamline';
import { useCustomizationPersistence } from './useCustomizationPersistence';

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
  top: 20px;
  width: 275px;
  display: block;
  z-index: -1;
  margin: 110px auto;
  ${media.md} {
    margin-left: 68px;
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
        <Streamline />
        <CustomizationEditor
          customizations={customizations}
          onChange={setCustomizations}
        />
      </Right>
    </Container>
  );
}
