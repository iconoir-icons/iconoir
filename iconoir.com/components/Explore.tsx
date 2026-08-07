import type { Icon, IconListFilters } from './IconList';
import { IconoirProvider } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { CustomizationEditor } from './CustomizationEditor';
import { FiltersEditor } from './FiltersEditor';
import { FrontlinesAd } from './FrontlinesAd';
import { IconList } from './IconList';
import { Streamline } from './Streamline';
import { useCustomizationPersistence } from './useCustomizationPersistence';

/** Matches the `top` offset the sidebar sticks at. */
const STICKY_TOP = 20;

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
  /* Avoid painting the sidebar behind the main column (was -1; hid content in some layouts) */
  z-index: 0;
  margin: 0 auto;
  ${media.md} {
    margin-left: 68px;
    z-index: 1;
    /* Sticky sidebars clip their overflow past the fold: cap the height to the
       viewport so taller content (ads + customization panel) stays reachable. */
    max-height: calc(100vh - 40px);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
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
  const containerRef = React.useRef<HTMLDivElement>(null);
  const rightRef = React.useRef<HTMLDivElement>(null);

  // Once the list scrolls back under the sidebar's sticky offset the sidebar is
  // no longer pinned, so rewind it to the top and bring the search back first.
  React.useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame)
        return;

      frame = requestAnimationFrame(() => {
        frame = 0;
        const container = containerRef.current;
        const right = rightRef.current;
        if (!container || !right || right.scrollTop === 0)
          return;

        if (container.getBoundingClientRect().top >= STICKY_TOP)
          right.scrollTop = 0;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Container ref={containerRef}>
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
      <Right ref={rightRef}>
        <FilterContainer>
          <FiltersEditor filters={filters} onChange={setFilters} />
        </FilterContainer>
        <Streamline />
        {/* CarbonAds temporarily disabled while testing the Frontlines ad */}
        {/* <CarbonCoverAd /> */}
        <FrontlinesAd />
        <CustomizationEditor
          customizations={customizations}
          onChange={setCustomizations}
        />
      </Right>
    </Container>
  );
}
