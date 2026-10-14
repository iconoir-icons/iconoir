import type { Icon } from './IconList';
import * as AllIcons from 'iconoir-react';
import { Download, Xmark } from 'iconoir-react';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/responsive';
import { showNotification } from '../lib/showNotification';
import { bakeSvg, downloadPng, downloadSvg } from '../lib/svg';
import { Button, CopyButton, ResetButton } from './Button';
import { DEFAULT_CUSTOMIZATIONS } from './IconList';
import { Mono } from './Typography';

const CSS_CDN = 'https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css';
const PNG_SIZE = 512;

const TABS = ['React', 'Vue', 'React Native', 'Flutter', 'CSS', 'SVG'] as const;
type Tab = (typeof TABS)[number];

interface Customizations {
  color: string;
  strokeWidth: number;
  size: number;
}

/** JSX-style props for any customization that differs from the defaults. */
function jsxProps({ color, strokeWidth, size }: Customizations, vue = false) {
  const props: string[] = [];
  if (color.toLowerCase() !== DEFAULT_CUSTOMIZATIONS.hexColor)
    props.push(`color="${color}"`);
  if (strokeWidth !== DEFAULT_CUSTOMIZATIONS.strokeWidth)
    props.push(vue ? `stroke-width="${strokeWidth}"` : `strokeWidth={${strokeWidth}}`);

  if (size !== DEFAULT_CUSTOMIZATIONS.size) {
    props.push(vue ? `width="${size}"` : `width={${size}}`);
    props.push(vue ? `height="${size}"` : `height={${size}}`);
  }

  return props.length ? ` ${props.join(' ')}` : '';
}

function snippet(tab: Tab, icon: Icon, custom: Customizations, svg: string) {
  const name = icon.iconComponentName;

  switch (tab) {
    case 'React':
      return `import { ${name} } from 'iconoir-react';\n\n<${name}${jsxProps(custom)} />`;
    case 'Vue':
      return `<script setup>\n  import { ${name} } from '@iconoir/vue';\n</script>\n\n<template>\n  <${name}${jsxProps(custom, true)} />\n</template>`;
    case 'React Native':
      return `import { ${name} } from 'iconoir-react-native';\n\n<${name}${jsxProps(custom)} />`;
    case 'Flutter':
      return `import 'package:iconoir_flutter/iconoir_flutter.dart';\n\nconst ${name}()`;
    case 'CSS':
      return `<link rel="stylesheet" href="${CSS_CDN}" />\n\n<i class="iconoir-${icon.filename}"></i>`;
    case 'SVG':
      return svg;
  }
}

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
`;

/** Sticks to the bottom of the viewport while the icon grid is on screen. */
const Dock = styled.div`
  position: sticky;
  bottom: 16px;
  z-index: 40;
  padding: 16px var(--gutter) 0;
`;

const Card = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  padding: 20px;
  border: 1px solid #dbdbdb;
  border-radius: 24px;
  /* Secondary button gray, with white surfaces inside. */
  background: var(--gray-btn);
  color: var(--black);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.25);
  animation: ${slideUp} 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
  ${media.md} {
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 28px;
  }
`;

const CloseButton = styled(ResetButton)`
  &&& {
    position: absolute;
    top: 14px;
    right: 14px;
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--white);
    color: var(--black);
    cursor: var(--cursor-pointer);
    &:hover {
      background: var(--gray-btn-hover);
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const Summary = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 16px;
  align-content: start;
`;

const Preview = styled.div`
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: var(--white);
  /* Thick strokes run past the 24px viewBox; let them show instead of clipping. */
  svg {
    overflow: visible;
  }
`;

const Name = styled.div`
  margin: 4px 40px 4px 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--black);
  overflow-wrap: anywhere;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 10px;
  ${Mono} {
    padding: 2px 7px;
    border-radius: 999px;
    background: var(--white);
    font-size: 11px;
  }
`;

const Downloads = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 8px;
  > * {
    flex: 1;
  }
`;

/** Secondary button for the gray card: white instead of gray. */
const LightButton = styled(Button)`
  &&& {
    background: var(--white);
    color: var(--black);
    &:hover {
      background: var(--gray-btn-hover);
    }
  }
`;

/** On wide screens the summary sets the row height and the code fills the rest. */
const CodeColumn = styled.div`
  min-width: 0;
  ${media.md} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

/** Segmented tabs, like the billing toggle on pro.iconoir.com. */
const TabList = styled.div`
  display: inline-flex;
  max-width: 100%;
  margin-bottom: 12px;
  padding: 4px;
  border-radius: 999px;
  background: var(--white);
  overflow-x: auto;
  scrollbar-width: none;
  ${media.md} {
    margin-right: 40px;
  }
`;

const TabButton = styled(ResetButton)<{ $active?: boolean }>`
  &&& {
    height: 30px;
    padding: 0 14px;
    border-radius: 999px;
    background: ${(props) => (props.$active ? 'var(--black)' : 'transparent')};
    color: ${(props) => (props.$active ? 'var(--white)' : 'var(--text)')};
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
    cursor: var(--cursor-pointer);
    &:hover {
      color: ${(props) => (props.$active ? 'var(--white)' : 'var(--black)')};
    }
  }
`;

const CodeBlock = styled.div`
  position: relative;
  border-radius: 16px;
  background: #e2e2e2;
  pre {
    margin: 0;
    max-height: 140px;
    padding: 16px 96px 16px 18px;
    overflow: auto;
    font: 500 12px/1.6 var(--mono);
    color: var(--ink);
    white-space: pre;
  }
  ${CopyButton} {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  ${media.md} {
    flex: 1;
    align-self: stretch;
    min-height: 0;
    /* Out of flow, so long snippets scroll instead of growing the sheet. */
    pre {
      position: absolute;
      inset: 0;
      max-height: none;
    }
  }
`;

/** Off-screen copy rendered with the explorer's settings, used to build the SVG. */
const Hidden = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;

export interface IconSheetProps {
  icon: Icon;
  onClose: () => void;
}

/** Details for the selected icon: code for each platform and downloads. */
export function IconSheet({ icon, onClose }: IconSheetProps) {
  const IconComponent = (AllIcons as any)[icon.iconComponentName];
  const context = React.useContext(AllIcons.IconoirContext);
  const [tab, setTab] = React.useState<Tab>('React');
  const [svg, setSvg] = React.useState('');
  const hiddenRef = React.useRef<HTMLDivElement>(null);

  const custom: Customizations = {
    color: (context.color as string) || DEFAULT_CUSTOMIZATIONS.hexColor,
    strokeWidth: Number(context.strokeWidth) || DEFAULT_CUSTOMIZATIONS.strokeWidth,
    size: Number.parseFloat(String(context.width)) || DEFAULT_CUSTOMIZATIONS.size,
  };

  // Bake the SVG from the hidden copy whenever the icon or settings change.
  React.useEffect(() => {
    const svgEl = hiddenRef.current?.querySelector('svg');
    if (svgEl)
      setSvg(bakeSvg(svgEl.outerHTML, custom.color, custom.strokeWidth));
  }, [icon, custom.color, custom.strokeWidth, custom.size]);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape')
        onClose();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const code = snippet(tab, icon, custom, svg);

  return (
    <Dock>
      <Card key={icon.filename} role="dialog" aria-label={`${icon.filename} details`}>
        {/* UI icons opt out of the explorer's color, which would paint them over. */}
        <CloseButton aria-label="Close" onClick={onClose}>
          <Xmark color="currentColor" strokeWidth={1.5} />
        </CloseButton>
        <Summary>
          <Preview>
            <IconComponent width={32} height={32} />
          </Preview>
          <div>
            <Name>{icon.filename}</Name>
            <Mono>{icon.category}</Mono>
            {icon.tags.length > 0 && (
              <Tags>
                {icon.tags.slice(0, 6).map((tag) => (
                  <Mono key={tag}>{tag}</Mono>
                ))}
              </Tags>
            )}
          </div>
          <Downloads>
            <Button
              $size="sm"
              disabled={!svg}
              onClick={() => downloadSvg(svg, icon.filename)}
            >
              <Download color="currentColor" strokeWidth={1.5} />
              SVG
            </Button>
            <LightButton
              $size="sm"
              disabled={!svg}
              onClick={() => downloadPng(svg, icon.filename, PNG_SIZE)}
            >
              <Download color="currentColor" strokeWidth={1.5} />
              PNG
            </LightButton>
          </Downloads>
        </Summary>
        <CodeColumn>
          <TabList role="tablist">
            {TABS.map((name) => (
              <TabButton
                key={name}
                role="tab"
                aria-selected={tab === name}
                $active={tab === name}
                onClick={() => setTab(name)}
              >
                {name}
              </TabButton>
            ))}
          </TabList>
          <CodeBlock>
            <pre>{code}</pre>
            <CopyButton
              onClick={() => {
                navigator.clipboard
                  ?.writeText(code)
                  .then(() => showNotification(`${tab} code copied!`))
                  .catch((err) => console.error(err));
              }}
            >
              Copy
            </CopyButton>
          </CodeBlock>
        </CodeColumn>
        <Hidden ref={hiddenRef} aria-hidden>
          <IconComponent />
        </Hidden>
      </Card>
    </Dock>
  );
}
