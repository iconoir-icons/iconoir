import type { Icon as IconType } from './IconList';
import * as AllIcons from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { IconSelectionContext } from './IconSelection';

// A real link to the icon's page, so crawlers can follow it; a plain click opens the sheet instead.
const Tile = styled.a<{ $iconWidth: number; $selected?: boolean }>`
  &&& {
    display: block;
    text-decoration: none;
    width: ${(props) => props.$iconWidth}px;
    padding-bottom: 100%;
    position: relative;
    border-radius: 16px;
    background: ${(props) => (props.$selected ? 'var(--band)' : 'transparent')};
    color: var(--black);
    cursor: var(--cursor-pointer);
    transition: background 0.15s;
    @media (hover: hover) {
      &:hover {
        background: var(--band);
      }
    }
    &:focus-visible {
      outline: 2px solid var(--black);
      outline-offset: -2px;
    }
  }
`;

const IconContainer = styled.span`
  position: absolute;
  inset: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  /* Thick strokes run past the 24px viewBox; let them show instead of clipping. */
  svg {
    overflow: visible;
  }
`;

const IconTag = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--black);
  color: var(--white);
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: uppercase;
`;

const Subtitle = styled.span`
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 18px;
  font-family: var(--mono);
  font-size: 11px;
  line-height: 15px;
  letter-spacing: -0.01em;
  color: var(--mono-ink);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export interface IconProps {
  iconWidth: number;
  icon: IconType;
}

/** A grid cell; clicking it opens the icon's details sheet, modified clicks open its page. */
export function Icon({ iconWidth, icon }: IconProps) {
  const IconComponent = (AllIcons as any)[icon.iconComponentName];
  const { selected, select } = React.useContext(IconSelectionContext);
  const isSelected = selected?.filename === icon.filename;

  return (
    <div className="icon-container">
      <Tile
        href={`/icons/${icon.name}`}
        $iconWidth={iconWidth}
        $selected={isSelected}
        aria-current={isSelected || undefined}
        aria-label={`${icon.filename} details`}
        onClick={(e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
            return;
          e.preventDefault();
          select(icon);
        }}
        onKeyDown={(e) => {
          if (e.key === ' ') {
            e.preventDefault();
            select(icon);
          }
        }}
      >
        <IconContainer>
          <IconComponent />
          {icon.filename.includes('-solid') ? <IconTag>Solid</IconTag> : ''}
        </IconContainer>
        <Subtitle title={icon.filename}>{icon.filename}</Subtitle>
      </Tile>
    </div>
  );
}
