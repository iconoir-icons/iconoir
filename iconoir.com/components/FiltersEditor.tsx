import type { IconListFilters } from './IconList';
import { Search } from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { LargeInput } from './Input';

const Container = styled.div`
  position: relative;
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
  }
`;

export interface FiltersEditorProps {
  filters: IconListFilters;
  onChange: (filters: IconListFilters) => void;
}

export function FiltersEditor({ filters, onChange }: FiltersEditorProps) {
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

  return (
    <Container>
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
    </Container>
  );
}
