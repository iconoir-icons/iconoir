import type { IconUseDetail, ProModalVariant } from '../lib/proModal';
import * as AllIcons from 'iconoir-react';
import React from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { trackEvent } from '../lib/analytics';
import { getProModalVariant, onIconUsed } from '../lib/proModal';

// Mirrors the design system of pro.iconoir.com (landing.css): Inter with tight
// tracking, IBM Plex Mono eyebrows, black/gray pill buttons, 24px white cards.
const PRO_URL
  = 'https://pro.iconoir.com/?utm_source=iconoir&utm_medium=download_modal';

// Copy under A/B test. The variant is sent with every pro_modal_* event and as
// utm_content on the link, so results can be split by it in GA.
const COPY: Record<
  ProModalVariant,
  { title: string; body: string; cta: string }
> = {
  a: {
    title: 'Can\'t find the icon you need?',
    body: 'Create the icons Iconoir doesn\'t have yet, collect them with the ones it does, and ship the whole set to your codebase.',
    cta: 'Join the waitlist',
  },
  b: {
    title: 'Make new icons that match this one',
    body: 'Iconoir Pro lets you create icons in the Iconoir style, keep them in one set with the ones you use, and ship them straight to your codebase.',
    cta: 'Get early access',
  },
};

const NEW_TILES = [
  { Icon: AllIcons.CloudSync, label: 'cloud-sync' },
  { Icon: AllIcons.CartPlus, label: 'cart-plus' },
  { Icon: AllIcons.ShieldCheck, label: 'shield-check' },
];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.15s ease-out;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  box-sizing: border-box;
  padding: 36px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.35);
  // The site's global \`*\` rule reads this variable, so override it here.
  --font-family: 'Inter', system-ui, sans-serif;
  font-family: var(--font-family);
  color: #0a0a0a;
  letter-spacing: -0.01em;
  -webkit-font-smoothing: antialiased;
  animation: ${slideUp} 0.2s ease-out;

  @media (max-width: 560px) {
    padding: 24px 20px;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: #5e5e5e;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: #efefef;
    color: #000000;
  }
  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 2px;
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 16px;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: #4a4a4a;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 26px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: #000000;
`;

const Body = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: #5e5e5e;
`;

const Tiles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 24px 0 28px;
`;

const Tile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding: 22px 4px 12px;
  border-radius: 12px;
  border: 1px solid #e7e7e7;
  color: #000000;
  svg {
    width: 28px;
    height: 28px;
  }
`;

const TileLabel = styled.span`
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 10.5px;
  letter-spacing: -0.01em;
  color: #4a4a4a;
`;

const TileNew = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 1px 5px;
  border-radius: 4px;
  background: #000000;
  color: #ffffff;
  font-family: 'IBM Plex Mono', ui-monospace, monospace;
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Btn = styled.a`
  flex: 1 1 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 50px;
  padding: 0 24px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.012em;
  text-decoration: none;
  white-space: nowrap;
  transition:
    background 0.15s,
    transform 0.15s;
  &:active {
    transform: scale(0.98);
  }
  &:focus-visible {
    outline: 2px solid #000000;
    outline-offset: 3px;
  }
  @media (max-width: 560px) {
    flex-basis: 100%;
  }
`;

const PrimaryBtn = styled(Btn)`
  &&& {
    background: #000000;
    color: #ffffff;
    opacity: 1;
  }
  &&&:hover {
    background: #2a2a2a;
  }
`;

const SecondaryBtn = styled(Btn)`
  background: #efefef;
  color: #000000;
  &:hover {
    background: #e4e4e4;
  }
`;

export function ProModal() {
  const [download, setDownload] = React.useState<IconUseDetail | null>(
    null,
  );

  const [variant, setVariant] = React.useState<ProModalVariant>('a');

  const primaryRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(
    () =>
      onIconUsed((detail) => {
        const assigned = getProModalVariant();
        setVariant(assigned);
        setDownload(detail);

        trackEvent('pro_modal_view', {
          icon: detail.filename,
          variant: assigned,
        });
      }),
    [],
  );

  const close = React.useCallback(() => setDownload(null), []);

  const dismiss = React.useCallback(() => {
    trackEvent('pro_modal_dismiss', { variant });
    close();
  }, [close, variant]);

  React.useEffect(() => {
    if (!download)
      return;

    primaryRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape')
        dismiss();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [download, dismiss]);

  if (!download)
    return null;

  const copy = COPY[variant];

  const DownloadedIcon
    = (AllIcons as any)[download.iconComponentName] ?? AllIcons.Iconoir;

  return createPortal(
    <Backdrop
      onClick={(event) => {
        if (event.target === event.currentTarget)
          dismiss();
      }}
    >
      <Card role="dialog" aria-modal="true" aria-labelledby="pro-modal-title">
        <Close type="button" aria-label="Close" onClick={dismiss}>
          <AllIcons.Xmark width={20} height={20} />
        </Close>
        <Eyebrow>Iconoir Pro · Coming soon</Eyebrow>
        <Title id="pro-modal-title">{copy.title}</Title>
        <Body>{copy.body}</Body>
        <Tiles aria-hidden="true">
          <Tile>
            <DownloadedIcon />
            <TileLabel>{download.filename}</TileLabel>
          </Tile>
          {NEW_TILES.map(({ Icon, label }) => (
            <Tile key={label}>
              <TileNew>New</TileNew>
              <Icon />
              <TileLabel>{label}</TileLabel>
            </Tile>
          ))}
        </Tiles>
        <Actions>
          <PrimaryBtn
            ref={primaryRef}
            href={`${PRO_URL}&utm_content=${variant}`}
            target="_blank"
            rel="noopener"
            onClick={() => {
              trackEvent('pro_modal_click', {
                icon: download.filename,
                variant,
              });

              close();
            }}
          >
            {copy.cta}
          </PrimaryBtn>
          <SecondaryBtn as="button" type="button" onClick={dismiss}>
            Maybe later
          </SecondaryBtn>
        </Actions>
      </Card>
    </Backdrop>,
    document.body,
  );
}
