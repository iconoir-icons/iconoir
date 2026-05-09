import React from 'react';
import styled from 'styled-components';
import { CATEGORIES } from '@/lib/constants';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 180px;
  overflow-y: auto;
  align-items: stretch;
  border: solid 1px var(--g6);
  border-radius: 10px;
`;

export const FilterSuggestion = styled.div`
  &&& {
    font-size: 15px;
    line-height: 24px;
    font-weight: 700;
    color: var(--g0);
    background-color: var(--g6);
    border-radius: 8px;
    padding: 6px 10px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    user-select: none;
    &:hover {
      background-color: var(--g5);
      color: var(--g0);
    }
    &.active,
    &:focus,
    &:active {
      background-color: var(--g0);
      color: var(--g6);
    }
  }
`;

export interface FiltersSuggestionsProps {
  search?: string;
  setSearch: (search: string) => void;
}

export function FiltersSuggestions({ search, setSearch }: FiltersSuggestionsProps) {
  function acceptSuggestion(suggestion: string) {
    const searchInput = document.getElementById('search-icons');
    searchInput?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setSearch(suggestion);
  }

  return (
    <Container>
      {CATEGORIES.map((category) => <FilterSuggestion
        key={category}
        onClick={() => acceptSuggestion(category)}
        className={search === category ? "active" : ""}
      >
        {category}
      </FilterSuggestion>)}
    </Container>
  );
}
