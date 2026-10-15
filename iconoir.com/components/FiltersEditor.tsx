import type { IconListFilters } from './IconList';
import React from 'react';
import styled from 'styled-components';
import { FiltersSuggestions } from '@/components/FilterSuggestions';
import { LargeInput } from './Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
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
      <LargeInput
        placeholder="Search..."
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

      <FiltersSuggestions
        search={search}
        setSearch={(search) => {
          setSearch(search);
          updateFilters({ search });
        }}
      />
    </Container>
  );
}
