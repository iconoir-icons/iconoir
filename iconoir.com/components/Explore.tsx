import type { Icon, IconListFilters } from './IconList';
import { IconoirProvider } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { CarbonCoverAd } from './CarbonCoverAd';
import { CustomizationEditor } from './CustomizationEditor';
import { FiltersEditor } from './FiltersEditor';
import { NAV_HEIGHT } from './Header';
import { IconList } from './IconList';
import { LargeInput } from './Input';
import { Streamline } from './Streamline';
import { useCustomizationPersistence } from './useCustomizationPersistence';

/** Height of the sticky toolbar holding search and customization. */
const TOOLBAR_HEIGHT = 64;
/** Matches the `top` offset the sidebar sticks at, just below the toolbar. */
const STICKY_TOP = NAV_HEIGHT + TOOLBAR_HEIGHT + 24;

/** Sticks under the site nav while the icons scroll, like phosphoricons.com. */
const Toolbar = styled.div`
  position: sticky;
  top: ${NAV_HEIGHT}px;
  z-index: 50;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
`;

const ToolbarInner = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  height: ${TOOLBAR_HEIGHT}px;
  padding: 0 var(--gutter);
  > :first-child {
    flex: 1;
    max-width: 520px;
  }
  > :last-child {
    margin-left: auto;
  }
  ${LargeInput} {
    height: 44px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 24px var(--gutter) 0;
  ${media.md} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 0;
  min-height: calc(100vh - 100px);
`;

const Right = styled.div`
  width: 280px;
  margin: 0 auto 32px;
  ${media.md} {
    position: sticky;
    top: ${STICKY_TOP}px;
    flex: none;
    margin: 0 0 0 24px;
    /* Sticky sidebars clip their overflow past the fold: cap the height to the
       viewport so taller sponsor content stays reachable. */
    max-height: calc(100vh - ${STICKY_TOP + 24}px);
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
  }
  > :first-child {
    margin-top: 0;
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
  // no longer pinned, so rewind it to the top.
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
    <>
      <Toolbar>
        <ToolbarInner>
          <FiltersEditor filters={filters} onChange={setFilters} />
          <CustomizationEditor
            customizations={customizations}
            onChange={setCustomizations}
          />
        </ToolbarInner>
      </Toolbar>
      <Body ref={containerRef}>
        <Left>
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
          <Streamline />
          <CarbonCoverAd />
        </Right>
      </Body>
    </>
  );
}
