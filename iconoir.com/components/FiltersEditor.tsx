import type { IconListFilters, IconStyle } from './IconList';
import { CubeScan, CubeScanSolid, Search } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { FilterDropdown } from './FilterDropdown';
import { NAV_HEIGHT } from './Header';
import { LargeInput } from './Input';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchField = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  > svg {
    position: absolute;
    top: 50%;
    left: 16px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    color: var(--muted);
    pointer-events: none;
  }
  ${LargeInput} {
    padding-left: 46px;
    border-color: transparent;
    /* Keep the custom arrow instead of the text I-beam. */
    cursor: var(--cursor);
    background: var(--gray-btn);
    &:hover {
      background: var(--gray-btn-hover);
    }
    &:focus {
      border-color: var(--black);
      background: var(--gray-btn);
    }
    /* Focusing scrolls the toolbar up to sit just under the sticky nav. */
    scroll-margin-top: ${NAV_HEIGHT + 10}px;
  }
`;

const STYLE_OPTIONS = [
  { value: undefined, label: 'All' },
  { value: 'outline', label: 'Outline', icon: CubeScan },
  { value: 'solid', label: 'Solid', icon: CubeScanSolid },
];

export interface FiltersEditorProps {
  filters: IconListFilters;
  categories: string[];
  onChange: (filters: IconListFilters) => void;
}

export function FiltersEditor({ filters, categories, onChange }: FiltersEditorProps) {
  const [, startTransition] = (React as any).useTransition();
  const [search, setSearch] = React.useState(filters.search);

  // Keep track if the user hits tab before scrolling, so we can scroll the search
  // field to the top of the page automatically.
  const didScrollRef = React.useRef(false);

  React.useEffect(() => {
    const scrollEvent = () => {
      didScrollRef.current = true;
      window.removeEventListener('scroll', scrollEvent);
    };

    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);

  React.useEffect(() => {
    setSearch(filters.search);
  }, [filters]);

  function updateFilters(partial: Partial<IconListFilters>) {
    startTransition(() => {
      onChange({
        ...filters,
        ...partial,
      });
    });
  }

  const categoryOptions = React.useMemo(
    () => [
      { value: undefined, label: 'All' },
      ...categories.map((category) => ({ value: category, label: category })),
    ],
    [categories],
  );

  return (
    <Container>
      <FilterDropdown
        label="Style"
        allLabel="All styles"
        options={STYLE_OPTIONS}
        value={filters.style}
        onChange={(style) => updateFilters({ style: style as IconStyle | undefined })}
      />
      <FilterDropdown
        label="Category"
        allLabel="All categories"
        options={categoryOptions}
        value={filters.category}
        onChange={(category) => updateFilters({ category })}
      />
      <SearchField>
        <Search />
        <LargeInput
          placeholder="Search icons"
          aria-label="Search icons"
          value={search}
          type="search"
          autoCapitalize="none"
          tabIndex={1}
          onFocus={(e) => {
            if (!didScrollRef.current) {
              e.target.scrollIntoView({
                block: 'start',
                behavior: 'auto',
              });
            }
          }}
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            updateFilters({ search: value });
          }}
        />
      </SearchField>
    </Container>
  );
}
