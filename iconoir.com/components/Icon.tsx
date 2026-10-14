import type { Icon as IconType } from './IconList';
import * as AllIcons from 'iconoir-react';
import React from 'react';
import styled from 'styled-components';
import { showNotification } from '../lib/showNotification';
import { ResetButton } from './Button';
import { DEFAULT_CUSTOMIZATIONS } from './IconList';

const HEADER = '<?xml version="1.0" encoding="UTF-8"?>';

function svgToDataUrl(svg: string) {
  // RFC 2397: encode as a URI component so `#`, `<`, non-Latin1, etc. stay valid.
  // `btoa` is Latin-1 only and breaks Safari/Arc downloads for some SVGs (#515).
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function bakeSvg(
  svgString: string,
  color: string,
  strokeWidth: string | number,
) {
  // Serialized SVG from the DOM already includes stroke-width on stroked
  // elements; blindly appending after stroke="currentColor" duplicates the
  // attribute and breaks strict XML parsers (e.g. network-* icons).
  const withoutStrokeWidth = svgString.replace(
    /\sstroke-width=(["'])[^"']*\1/g,
    '',
  );

  return (
    HEADER
    + withoutStrokeWidth
      .replace(
        /stroke="currentColor"/g,
        `stroke="currentColor" stroke-width="${strokeWidth}"`,
      )
      .replace(/currentColor/g, color)
  );
}

const HoverContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 6px;
  padding: 20px;
  background: var(--band);

  transform: translateZ(0px); // Safari Fix
  transition: opacity 0.15s linear;
  opacity: 0;
  pointer-events: none;
`;

const HoverButton = styled(ResetButton)<{ $primary?: boolean }>`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 34px;
    border-radius: 999px;
    corner-shape: superellipse(1.6);
    background: ${(props) => (props.$primary ? 'var(--black)' : 'var(--gray-btn)')};
    color: ${(props) => (props.$primary ? 'var(--white)' : 'var(--black)')};
    font-size: 13px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition:
      background 0.15s,
      transform 0.15s;
    &:hover {
      background: ${(props) => (props.$primary ? '#2a2a2a' : 'var(--gray-btn-hover)')};
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

/** Thin L-shaped crop marks in each corner of a cell. */
const BRACKET = 'linear-gradient(var(--bracket), var(--bracket))';
const BRACKET_LENGTH = 10;

const BorderContainer = styled.div<{ $iconWidth: number }>`
  --bracket: #dcdcdc;
  width: ${(props) => props.$iconWidth}px;
  padding-bottom: 100%;
  position: relative;
  color: var(--black);
  transition: background 0.15s;
  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    z-index: 1;
    pointer-events: none;
    background:
      ${BRACKET} top left / ${BRACKET_LENGTH}px 1px,
      ${BRACKET} top left / 1px ${BRACKET_LENGTH}px,
      ${BRACKET} top right / ${BRACKET_LENGTH}px 1px,
      ${BRACKET} top right / 1px ${BRACKET_LENGTH}px,
      ${BRACKET} bottom left / ${BRACKET_LENGTH}px 1px,
      ${BRACKET} bottom left / 1px ${BRACKET_LENGTH}px,
      ${BRACKET} bottom right / ${BRACKET_LENGTH}px 1px,
      ${BRACKET} bottom right / 1px ${BRACKET_LENGTH}px;
    background-repeat: no-repeat;
  }
  @media (hover: hover) {
    &:hover {
      --bracket: var(--black);
      background: var(--band);
    }
    &:hover ${HoverContainer} {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  inset: 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

const IconTag = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
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

const Subtitle = styled.div`
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
    const container = iconContainerRef.current;
    const svgEl = container?.firstChild as SVGElement | undefined;
    if (!svgEl)
      return;

    const baked = bakeSvg(
      svgEl.outerHTML,
      iconContext.color || DEFAULT_CUSTOMIZATIONS.hexColor,
      iconContext.strokeWidth || DEFAULT_CUSTOMIZATIONS.strokeWidth,
    );

    htmlContentsRef.current = baked;

    const downloadTarget = supportsClipboard
      ? downloadRef.current
      : (container as unknown as HTMLAnchorElement | null);

    if (downloadTarget) {
      downloadTarget.href = svgToDataUrl(baked);
    }
  }, [icon, iconContext, supportsClipboard]);

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

          {icon.filename.includes('-solid') ? <IconTag>Solid</IconTag> : ''}
        </IconContainer>
        <Subtitle title={icon.filename}>{icon.filename}</Subtitle>
        {supportsClipboard
          ? (
              <HoverContainer>
                <HoverButton
                  $primary
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
    </div>
  );
}
