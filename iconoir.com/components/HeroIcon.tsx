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
} from 'iconoir-react';
import React from 'react';
import styled, { keyframes } from 'styled-components';

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
/** How far, in px, the glow leans toward the cursor. */
const MAX_GLOW_SHIFT = 10;
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
  /* Cursor offset, set from JS without re-rendering. */
  --gx: 0px;
  --gy: 0px;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 40px;
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
  transform: translate(var(--gx), var(--gy));
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  animation: ${breathe} 4s ease-in-out infinite;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Face = styled.div`
  color: var(--black);
`;

/**
 * An outline icon lit from behind, after the triangle on vercel.com but
 * inverted for a white page: a black icon wrapped in a grainy dark glow.
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

  // Lean the glow toward the cursor, scaled by how far it is across the page.
  const stageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;

    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      if (frame)
        return;

      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = stage.getBoundingClientRect();
        const dx = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
        const dy = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
        const clamp = (v: number) => Math.max(-1, Math.min(1, v * 2));

        stage.style.setProperty('--gx', `${clamp(dx) * MAX_GLOW_SHIFT}px`);
        stage.style.setProperty('--gy', `${clamp(dy) * MAX_GLOW_SHIFT}px`);
      });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);

  const layers = previous === null ? [index] : [previous, index];

  return (
    <Stage ref={stageRef} aria-hidden>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter
          id={FILTER_ID}
          x="-200%"
          y="-200%"
          width="500%"
          height="500%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="16" result="near" />
          <feOffset in="near" dy="-10" result="nearUp" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="48" result="far" />
          <feComponentTransfer in="far" result="farSoft">
            <feFuncA type="linear" slope="0.55" />
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
            k1="1.3"
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
              {/* A heavier stroke gives the blur enough to glow from. */}
              <Icon strokeWidth={3} />
            </Halo>
            <Face>
              <Icon />
            </Face>
          </Layer>
        );
      })}
    </Stage>
  );
}
