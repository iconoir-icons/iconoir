import React from 'react';
import {
  DEFAULT_CUSTOMIZATIONS,
  Icon as IconType,
  IconListContext,
} from './IconList';
import styled from 'styled-components';
import * as AllIcons from 'iconoir-react';
import { ResetButton } from './Button';
import { showNotification } from '../helpers/showNotification';

const HEADER = '<?xml version="1.0" encoding="UTF-8"?>';
function bakeSvg(
  svgString: string,
  color: string,
  strokeWidth: string | number
) {
  return (
    HEADER +
    svgString
      .replace(
        /stroke="currentColor"/g,
        `stroke="currentColor" stroke-width="${strokeWidth}"`
      )
      .replace(/currentColor/g, color)
  );
}

export interface IconProps {
  iconWidth: number;
  icon: IconType;
}
export function Icon({ iconWidth, icon }: IconProps) {
  const IconComponent = (AllIcons as any)[icon.iconComponentName];
  const iconContainerRef = React.useRef<HTMLDivElement>(null);
  const downloadRef = React.useRef<HTMLAnchorElement>(null);
  const htmlContentsRef = React.useRef<string>('');
  const iconContext = React.useContext(AllIcons.IconoirContext);
  const { setHoverItem, hoverItem } = React.useContext(IconListContext) || {};
  React.useEffect(() => {
    if (iconContainerRef.current) {
      htmlContentsRef.current = bakeSvg(
        iconContainerRef.current.innerHTML,
        iconContext.color || DEFAULT_CUSTOMIZATIONS.hexColor,
        iconContext.strokeWidth || DEFAULT_CUSTOMIZATIONS.strokeWidth
      );
      if (downloadRef.current) {
        downloadRef.current.href = `data:image/svg+xml;base64,${btoa(
          htmlContentsRef.current
        )}`;
      }
    }
  }, [iconContext]);
  return (
    <div
      className={'icon-container'}
      onTouchEnd={
        setHoverItem
          ? (e) => {
              if (hoverItem !== icon.filename) {
                e.preventDefault();
                e.stopPropagation();
              }
              setHoverItem(icon.filename);
            }
          : undefined
      }
    >
      <BorderContainer
        iconWidth={iconWidth}
        hovering={hoverItem === icon.filename}
      >
        <IconContainer ref={iconContainerRef}>
          <IconComponent />
        </IconContainer>
        <HoverContainer>
          <HoverButton
            onClick={() => {
              if (setHoverItem) setHoverItem('');
              if (htmlContentsRef.current) {
                navigator.clipboard
                  .writeText(htmlContentsRef.current)
                  .then(() => {
                    showNotification('SVG code copied!');
                  })
                  .catch((err) => {
                    console.error(err);
                  });
              }
            }}
          >
            Copy SVG
          </HoverButton>
          <HoverButton
            as={'a'}
            ref={downloadRef}
            href={'#'}
            rel={'noreferrer'}
            download={`${icon.filename}.svg`}
            onClick={() => {
              if (setHoverItem) setHoverItem('');
            }}
          >
            Download
          </HoverButton>
        </HoverContainer>
      </BorderContainer>
      <Subtitle>{icon.filename}</Subtitle>
    </div>
  );
}

const HoverContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  transform: translateZ(0px); // Safari Fix
  transition: opacity 0.1s linear;
  opacity: 0;
  pointer-events: none;
`;
const HoverButton = styled(ResetButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-gray);
  border-radius: 0;
  transition: background 0.1s linear;
  color: var(--black);
  font-size: 14px;
  line-height: 23px;
  font-weight: 700;
  text-align: center;
  flex: 1;
  cursor: pointer;
  text-decoration: none;
  &:hover,
  &:active {
    background: var(--gray);
  }
`;
const BorderContainer = styled.div<{ iconWidth: number; hovering: boolean }>`
  width: ${(props) => props.iconWidth}px;
  box-sizing: border-box;
  padding-bottom: 100%;
  position: relative;
  border: solid 1px var(--light-gray);
  border-radius: 12px;
  margin-bottom: 10px;
  ${(props) => (props.hovering ? '&' : '&.noop')}
  ${HoverContainer} {
    opacity: 1;
    pointer-events: all;
  }
  @media (hover: hover) {
    &:hover ${HoverContainer} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
const IconContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Subtitle = styled.div`
  font-size: 11px;
  font-weight: 500;
  line-height: 14.74px;
  color: var(--black-40);
  text-align: center;
`;
