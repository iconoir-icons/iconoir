import React from 'react';
import { IconListFilters } from './IconList';
import { LargeInput } from './Input';

export interface FiltersEditorProps {
  filters: IconListFilters;
  onChange: (filters: IconListFilters) => void;
}
export function FiltersEditor({ filters, onChange }: FiltersEditorProps) {
  const [, startTransition] = (React as any).useTransition();
  const [search, setSearch] = React.useState(filters.search);
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
    <LargeInput
      placeholder={'Search...'}
      value={search}
      type={'search'}
      autoCapitalize={'none'}
      onChange={(e) => {
        const value = e.target.value;
        setSearch(value);
        updateFilters({ search: value });
      }}
    />
  );
}
