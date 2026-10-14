import type { Icon } from './IconList';
import React from 'react';

export interface IconSelectionValue {
  selected: Icon | null;
  select: (icon: Icon) => void;
}

/**
 * The icon picked in the explorer. Shared through context so tiles inside the
 * virtualized list can read and set it without threading props through rows.
 */
export const IconSelectionContext = React.createContext<IconSelectionValue>({
  selected: null,
  select: () => {},
});
