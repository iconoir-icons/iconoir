import { chunk } from 'lodash';
import React from 'react';
import {
  areEqual,
  ListChildComponentProps,
  VariableSizeList as List,
} from 'react-window';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer';
import { CategoryRow } from './CategoryRow';
import { ICON_SPACE, ICON_WIDTH } from '../lib/constants';
import { IconListEmpty } from './IconListEmpty';
import { IconsRow } from './IconsRow';
import { ReactWindowScroller } from './ReactWindowScroller';

export interface IconListFilters {
  search?: string;
}
export interface IconListCustomizations {
  size: number;
  strokeWidth: number;
  hexColor: string;
}
export interface Icon {
  filename: string;
  category: string;
  tags: string[];
  iconComponentName: string;
}

export const DEFAULT_CUSTOMIZATIONS: IconListCustomizations = {
  size: 24,
  strokeWidth: 1.5,
  hexColor: '#000000',
};

function normalizeString(s: string) {
  return s.toLowerCase().replace(/[!@#$%^&*(),.\][-]/g, '');
}

function filterIcons(allIcons: Icon[], filters: IconListFilters): Icon[] {
  if (filters.search) {
    const normalSearch = normalizeString(filters.search!);
    let result = allIcons;
    for (const term of normalSearch.split(' ')) {
      result = result.filter((icon) => {
        return (
          normalizeString(icon.filename).includes(term) ||
          normalizeString(icon.category).includes(term) ||
          icon.tags.some((tag) => normalizeString(tag).includes(term))
        );
      });
    }
    return result;
  } else return allIcons;
}

interface IconCategoryRow {
  category: string;
  numIcons: number;
}
interface IconIconsRow {
  icons: Icon[];
}
type IconRow = IconCategoryRow | IconIconsRow;
function isCategoryRow(iconRow: IconRow): iconRow is IconCategoryRow {
  return !!(iconRow as IconCategoryRow).category;
}

function getRowsFromIcons(
  filteredIcons: Icon[],
  iconsPerRow: number,
): IconRow[] {
  const categoryGroups: Record<string, Icon[]> = {};
  for (const icon of filteredIcons) {
    if (!categoryGroups[icon.category]) categoryGroups[icon.category] = [];
    categoryGroups[icon.category].push(icon);
  }

  const result: IconRow[] = [];
  const sortedCategories = Object.keys(categoryGroups).sort();
  for (const sortedCategory of sortedCategories) {
    result.push({
      category: sortedCategory,
      numIcons: categoryGroups[sortedCategory].length,
    });
    const iconRows = chunk(categoryGroups[sortedCategory], iconsPerRow);
    for (const iconRow of iconRows) {
      result.push({ icons: iconRow });
    }
  }

  return result;
}

const ICON_BOTTOM_PADDING = 65;
const HEADER_HEIGHT = 150;
const HEADER_INNER_HEIGHT = 15 + 40;
const HEADER_TOP_PADDING = HEADER_HEIGHT - HEADER_INNER_HEIGHT;
function getItemSize(row: IconRow, iconWidth: number): number {
  if (isCategoryRow(row)) {
    return HEADER_HEIGHT;
  } else {
    return iconWidth + ICON_BOTTOM_PADDING;
  }
}

interface IconListContextValue {
  iconWidth: number;
  iconsPerRow: number;
}
export const IconListContext = React.createContext<
  IconListContextValue | undefined
>(undefined);

export interface IconListProps {
  filters: IconListFilters;
  allIcons: Icon[];
}
export function IconList({ filters, allIcons }: IconListProps) {
  const filteredIcons = filterIcons(allIcons, filters);
  const { ref, width = 400 } = useResizeObserver();
  const iconsPerRow = width
    ? Math.floor((width + ICON_SPACE) / (ICON_WIDTH + ICON_SPACE))
    : null;
  let children = null;
  const listRef = React.useRef<List<IconRow[]> | null>();
  const [height, setHeight] = React.useState(400);
  const iconWidth = iconsPerRow
    ? Math.floor((width + ICON_SPACE) / iconsPerRow) - ICON_SPACE
    : null;
  React.useEffect(() => {
    setHeight(window.innerHeight);
  }, []);
  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.resetAfterIndex(0, true);
    }
  }, [iconWidth, height]);

  if (filteredIcons.length && iconsPerRow && width && iconWidth) {
    const iconRows = getRowsFromIcons(filteredIcons, iconsPerRow);
    children = (
      <IconListContext.Provider value={{ iconsPerRow, iconWidth }}>
        <ReactWindowScroller>
          {({ ref, outerRef, style, onScroll }: any) => (
            <List<IconRow[]>
              ref={(c) => {
                if (typeof ref === 'function') ref(c);
                else ref.current = c;
                listRef.current = c;
              }}
              itemData={iconRows}
              width={width}
              outerRef={outerRef}
              style={style}
              height={height}
              itemCount={iconRows.length}
              onScroll={onScroll}
              itemSize={(index) => getItemSize(iconRows[index], iconWidth)}
            >
              {Row}
            </List>
          )}
        </ReactWindowScroller>
      </IconListContext.Provider>
    );
  } else if (width && filters.search) {
    return <IconListEmpty searchTerm={filters.search} />;
  }

  return <Container ref={ref}>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  margin-top: -${HEADER_TOP_PADDING}px;
  > :first-child {
    overflow: visible !important;
    > :first-child {
      -webkit-overflow-scrolling: touch;
    }
  }
`;

const Row = React.memo(
  ({ data, index, style }: ListChildComponentProps<IconRow[]>) => {
    const { iconWidth } = React.useContext(IconListContext)!;
    const row = data[index];
    if (isCategoryRow(row)) {
      return (
        <CategoryRow
          category={row.category}
          numIcons={row.numIcons}
          style={style}
        />
      );
    } else {
      return <IconsRow icons={row.icons} style={style} iconWidth={iconWidth} />;
    }
  },
  areEqual,
);
Row.displayName = 'Row';
