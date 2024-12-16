import type { Icon as IconType } from './IconList';
import * as AllIcons from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { showNotification } from '../lib/showNotification';
import { ResetButton } from './Button';
import { DEFAULT_CUSTOMIZATIONS } from './IconList';

const HEADER = '<?xml version="1.0" encoding="UTF-8"?>';

function bakeSvg(
  svgString: string,
  color: string,
  strokeWidth: string | number,
) {
  return (
    HEADER
    + svgString
      .replace(
        /stroke="currentColor"/g,
        `stroke="currentColor" stroke-width="${strokeWidth}"`,
      )
      .replace(/currentColor/g, color)
  );
}

const Overlay = styled.div`
  position: absolute;
  border-radius: 50%;
  border: solid 2px var(--g0);
  background: var(--white);
  width: 8px;
  height: 8px;
`;

const CornerBR = styled(Overlay)`
  bottom: -6px;
  right: -6px;
  z-index: 999;
`;

const CornerTR = styled(Overlay)`
  top: -6px;
  right: -6px;
`;

const CornerBL = styled(Overlay)`
  bottom: -6px;
  left: -6px;
`;

const CornerTL = styled(Overlay)`
  top: -6px;
  left: -6px;
`;

const HoverContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  flex-direction: column;

  transform: translateZ(0px); // Safari Fix
  transition: opacity 0.1s linear;
  opacity: 0;
  pointer-events: none;
`;

const HoverButton = styled(ResetButton)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 0px;
    transition: background 0.1s linear;
    color: var(--g0);
    font-size: 14px;
    line-height: 23px;
    font-weight: 700;
    text-align: center;
    flex: 1;
    cursor: pointer;
    text-decoration: none;
    &:hover,
    &:active {
      background: var(--g0);
      color: var(--white);
    }
  }
`;

const BorderContainer = styled.div<{ $iconWidth: number }>`
  width: ${(props) => props.$iconWidth}px;
  box-sizing: border-box;
  padding-bottom: 100%;
  position: relative;
  border: solid 1px var(--g6);
  border-radius: 12px;
  margin-bottom: 10px;
  @media (hover: hover) {
    &:hover ${HoverContainer} {
      opacity: 1;
      pointer-events: all;
      border: solid 2px var(--g0);
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

const IconTag = styled.div`
  background-color: var(--g6);
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 5px 10px;
  padding: 3px 6px;
  letter-spacing: 0.3px;
  font-weight: 600;
  font-size: 11px;
  color: var(--g0);
`;

const Subtitle = styled.div<{ $iconWidth: number }>`
  font-size: 11px;
  font-weight: 500;
  line-height: 14.74px;
  color: var(--black-60);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => props.$iconWidth}px;
`;

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
  const [supportsClipboard, setSupportsClipboard] = React.useState(false);

  React.useEffect(() => {
    setSupportsClipboard(
      typeof window !== 'undefined'
      && typeof window?.navigator?.clipboard?.writeText !== 'undefined',
    );
  }, []);

  React.useEffect(() => {
    if (iconContainerRef.current) {
      htmlContentsRef.current = bakeSvg(
        (iconContainerRef.current.firstChild as SVGElement).outerHTML,
        iconContext.color || DEFAULT_CUSTOMIZATIONS.hexColor,
        iconContext.strokeWidth || DEFAULT_CUSTOMIZATIONS.strokeWidth,
      );
    }
  }, [iconContext, supportsClipboard]);

  React.useEffect(() => {
    const element = downloadRef.current || (iconContainerRef.current as unknown as HTMLAnchorElement);

    if (element) {
      element.href = `data:image/svg+xml;base64,${btoa(
        htmlContentsRef.current,
      )}`;
    }
  }, [iconContext, supportsClipboard]);

  return (
    <div className="icon-container">
      <BorderContainer $iconWidth={iconWidth}>
        <IconContainer
          ref={iconContainerRef}
          {...((supportsClipboard
            ? {}
            : {
                as: 'a',
                href: '#',
                rel: 'noreferrer',
                download: `${icon.filename}.svg`,
              }) as any)}
        >
          <IconComponent />

          {icon.filename.includes('-solid') ? <IconTag>SOLID</IconTag> : ''}
        </IconContainer>
        {supportsClipboard
          ? (
              <HoverContainer>
                <CornerBR />
                <CornerTR />
                <CornerBL />
                <CornerTL />
                <HoverButton
                  onClick={() => {
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
                  as="a"
                  ref={downloadRef}
                  href="#"
                  rel="noreferrer"
                  download={`${icon.filename}.svg`}
                >
                  Download
                </HoverButton>
              </HoverContainer>
            )
          : null}
      </BorderContainer>
      <Subtitle $iconWidth={iconWidth} title={icon.filename}>
        {icon.filename}
      </Subtitle>
    </div>
  );
}
