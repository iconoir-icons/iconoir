import {
  Bookmark,
  Droplet,
  Flash,
  Heart,
  IceCream,
  MusicNote,
  Pin,
  Planet,
  Spark,
  Star,
} from 'iconoir-react/solid';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/responsive';

const ICONS = [
  Flash,
  Heart,
  Star,
  Droplet,
  Planet,
  Pin,
  Bookmark,
  MusicNote,
  IceCream,
  Spark,
];

const INTERVAL_MS = 2600;
const FILTER_ID = 'hero-icon-backlight';

const enter = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
    filter: blur(8px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
`;

const leave = keyframes`
  from {
    opacity: 1;
    transform: none;
    filter: none;
  }
  to {
    opacity: 0;
    transform: scale(1.06);
    filter: blur(8px);
  }
`;

const breathe = keyframes`
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
`;

const Stage = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  margin: 0 auto 32px;
  ${media.md} {
    width: 152px;
    height: 152px;
    margin-bottom: 40px;
  }
`;

const Layer = styled.div<{ $leaving?: boolean }>`
  position: absolute;
  inset: 0;
  animation: ${(props) => (props.$leaving ? leave : enter)} 0.7s
    cubic-bezier(0.16, 1, 0.3, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
  /* Each copy fills the stage, so the halo filter gets a real box to work with. */
  > div {
    position: absolute;
    inset: 0;
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

/** Grainy dark light spilling out from behind the shape. */
const Halo = styled.div`
  color: var(--black);
  filter: url(#${FILTER_ID});
  animation: ${breathe} 4s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** Tight shadow nudged up, so the top edge reads darkest, like a rim light. */
const Rim = styled.div`
  color: var(--black);
  opacity: 0.55;
  filter: blur(2px);
  transform: translateY(-1.5px);
`;

const Face = styled.div`
  color: var(--white);
`;

/**
 * A solid icon lit from behind, after the triangle on vercel.com but inverted
 * for a white page: a white shape outlined by a grainy dark glow.
 */
export function HeroIcon() {
  const [{ index, previous }, setState] = React.useState<{
    index: number;
    previous: number | null;
  }>({ index: 0, previous: null });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setState(({ index: current }) => ({
        index: (current + 1) % ICONS.length,
        previous: current,
      }));
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const layers = previous === null ? [index] : [previous, index];

  return (
    <Stage aria-hidden>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter
          id={FILTER_ID}
          x="-75%"
          y="-75%"
          width="250%"
          height="250%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="near" />
          <feOffset in="near" dy="-6" result="nearUp" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="30" result="far" />
          <feComponentTransfer in="far" result="farSoft">
            <feFuncA type="linear" slope="0.7" />
          </feComponentTransfer>
          <feMerge result="glow">
            <feMergeNode in="farSoft" />
            <feMergeNode in="nearUp" />
          </feMerge>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="1"
            seed="3"
            result="noise"
          />
          <feComposite
            in="glow"
            in2="noise"
            operator="arithmetic"
            k1="1.8"
            k2="0"
            k3="0"
            k4="0"
          />
        </filter>
      </svg>
      {layers.map((iconIndex) => {
        const Icon = ICONS[iconIndex];

        return (
          <Layer key={iconIndex} $leaving={iconIndex !== index}>
            <Halo>
              <Icon />
            </Halo>
            <Rim>
              <Icon />
            </Rim>
            <Face>
              <Icon />
            </Face>
          </Layer>
        );
      })}
    </Stage>
  );
}
