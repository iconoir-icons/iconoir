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
import styled, { createGlobalStyle, keyframes } from 'styled-components';

/** Each icon has its own glare palette: a base color and three drifting blobs. */
const ORBS = [
  { Icon: Flash, colors: ['#e2531b', '#ffb36b', '#b8300c', '#ff7a2e'] },
  { Icon: Heart, colors: ['#b57bff', '#ff8ad8', '#7f8cff', '#ffb0d0'] },
  { Icon: Star, colors: ['#f5a524', '#ffd66b', '#e0701c', '#fff0b0'] },
  { Icon: Droplet, colors: ['#2f6fe8', '#8fd3ff', '#2340b8', '#5fa8ff'] },
  { Icon: Planet, colors: ['#4a302b', '#c9654f', '#2a1c1a', '#8aa0ff'] },
  { Icon: Pin, colors: ['#e0303a', '#ff9a7a', '#9e1026', '#ff5a5a'] },
  { Icon: Bookmark, colors: ['#2fa477', '#a8ecc0', '#17694e', '#5fd1a0'] },
  { Icon: MusicNote, colors: ['#6a46e8', '#ff7ad9', '#35278f', '#a58bff'] },
  { Icon: IceCream, colors: ['#f08cc0', '#8fdcc8', '#ffcf6b', '#ffb3d6'] },
  { Icon: Spark, colors: ['#1aa9b8', '#9ef0ff', '#2a5fe0', '#4fd8d0'] },
];

/** Blob positions (x, y in %) the gradient morphs between, one per icon in turn. */
const LAYOUTS = [
  [30, 30, 72, 40, 45, 75],
  [68, 26, 28, 52, 62, 80],
  [40, 70, 76, 30, 22, 32],
  [55, 45, 25, 25, 78, 72],
];

const INTERVAL_MS = 2600;
/** How long the colors take to morph from one icon to the next. */
const MORPH_MS = 1400;
/** How far, in px, the glare shifts toward the cursor. */
const MAX_SHIFT = 10;

const FILTER_ID = 'hero-icon-glare';

const iconIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const iconOut = keyframes`
  from {
    opacity: 1;
    transform: none;
  }
  to {
    opacity: 0;
    transform: scale(1.15);
  }
`;

/** Registered so the browser can interpolate the glare's colors and blob positions. */
const OrbProperties = createGlobalStyle`
  @property --orb-base { syntax: '<color>'; inherits: true; initial-value: #e2531b; }
  @property --orb-a { syntax: '<color>'; inherits: true; initial-value: #ffb36b; }
  @property --orb-b { syntax: '<color>'; inherits: true; initial-value: #b8300c; }
  @property --orb-c { syntax: '<color>'; inherits: true; initial-value: #ff7a2e; }
  @property --orb-ax { syntax: '<percentage>'; inherits: true; initial-value: 30%; }
  @property --orb-ay { syntax: '<percentage>'; inherits: true; initial-value: 30%; }
  @property --orb-bx { syntax: '<percentage>'; inherits: true; initial-value: 72%; }
  @property --orb-by { syntax: '<percentage>'; inherits: true; initial-value: 40%; }
  @property --orb-cx { syntax: '<percentage>'; inherits: true; initial-value: 45%; }
  @property --orb-cy { syntax: '<percentage>'; inherits: true; initial-value: 75%; }
`;

const drift = keyframes`
  to {
    transform: rotate(360deg);
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

/**
 * The colored glare. Inside, the gradient only shows through an icon-shaped
 * hole in a white sheet; the filter then blurs and grains that shape. Multiply
 * blending makes the white vanish on the page, leaving just the colored glow.
 */
const Glare = styled.div`
  position: absolute;
  inset: -80px;
  overflow: hidden;
  isolation: isolate;
  mix-blend-mode: multiply;
  filter: url(#${FILTER_ID});
  transform: translate(var(--gx), var(--gy));
  transition-property: transform, --orb-base, --orb-a, --orb-b, --orb-c,
    --orb-ax, --orb-ay, --orb-bx, --orb-by, --orb-cx, --orb-cy;
  transition-duration: 0.6s, ${MORPH_MS}ms, ${MORPH_MS}ms, ${MORPH_MS}ms,
    ${MORPH_MS}ms, ${MORPH_MS}ms, ${MORPH_MS}ms, ${MORPH_MS}ms, ${MORPH_MS}ms,
    ${MORPH_MS}ms, ${MORPH_MS}ms;
  transition-timing-function: cubic-bezier(0.45, 0, 0.2, 1);
  @media (prefers-reduced-motion: reduce) {
    transition-duration: 0.01s;
  }
`;

/** The gradient: a base color and three blurred blobs, slowly turning. */
const Blobs = styled.div`
  position: absolute;
  inset: 0;
  background: var(--orb-base);
  > div {
    position: absolute;
    inset: 0;
    filter: blur(12px) saturate(1.25);
    background:
      radial-gradient(circle at var(--orb-ax) var(--orb-ay), var(--orb-a) 0, transparent 30%),
      radial-gradient(circle at var(--orb-bx) var(--orb-by), var(--orb-b) 0, transparent 32%),
      radial-gradient(circle at var(--orb-cx) var(--orb-cy), var(--orb-c) 0, transparent 30%);
    animation: ${drift} 18s linear infinite;
    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  }
`;

/** White sheet with the icon in black; screen blending keeps color only in the icon. */
const Cutout = styled.div`
  position: absolute;
  inset: 0;
  background: var(--white);
  mix-blend-mode: screen;
`;

/** Icon-sized slot centered in its parent, used by the cutout and the face. */
const Slot = styled.div<{ $leaving?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin: -40px 0 0 -40px;
  animation: ${(props) => (props.$leaving ? iconOut : iconIn)} 0.5s
    cubic-bezier(0.16, 1, 0.3, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

/**
 * A white filled icon in a grainy, colorful glare, cycling through ten icons.
 * The glare's colors morph to each icon's palette and lean toward the cursor.
 */
export function HeroIcon() {
  const [{ index, previous }, setState] = React.useState<{
    index: number;
    previous: number | null;
  }>({ index: 0, previous: null });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setState(({ index: current }) => ({
        index: (current + 1) % ORBS.length,
        previous: current,
      }));
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  // Lean the colors toward the cursor, scaled by how far it is across the page.
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

        stage.style.setProperty('--gx', `${clamp(dx) * MAX_SHIFT}px`);
        stage.style.setProperty('--gy', `${clamp(dy) * MAX_SHIFT}px`);
      });
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (frame)
        cancelAnimationFrame(frame);
    };
  }, []);

  const icons = previous === null ? [index] : [previous, index];
  const [base, a, b, c] = ORBS[index].colors;
  const [ax, ay, bx, by, cx, cy] = LAYOUTS[index % LAYOUTS.length];

  const glareStyle = {
    '--orb-base': base,
    '--orb-a': a,
    '--orb-b': b,
    '--orb-c': c,
    '--orb-ax': `${ax}%`,
    '--orb-ay': `${ay}%`,
    '--orb-bx': `${bx}%`,
    '--orb-by': `${by}%`,
    '--orb-cx': `${cx}%`,
    '--orb-cy': `${cy}%`,
  } as React.CSSProperties;

  return (
    <Stage ref={stageRef} aria-hidden>
      <OrbProperties />
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter
          id={FILTER_ID}
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Grow the colored shape (erode keeps the darker, colored pixels). */}
          <feMorphology in="SourceGraphic" operator="erode" radius="3" result="grown" />
          <feGaussianBlur in="grown" stdDeviation="14" result="blur" />
          {/* Push pale tints back to full color; white stays white. */}
          <feComponentTransfer in="blur" result="rich">
            <feFuncR type="gamma" exponent="2.6" />
            <feFuncG type="gamma" exponent="2.6" />
            <feFuncB type="gamma" exponent="2.6" />
          </feComponentTransfer>
          <feOffset in="rich" dy="-4" result="lifted" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="1"
            seed="3"
            result="noise"
          />
          <feComponentTransfer in="noise" result="grain">
            <feFuncA type="linear" slope="1.6" intercept="-0.15" />
          </feComponentTransfer>
          <feComposite in="lifted" in2="grain" operator="in" />
        </filter>
      </svg>
      <Glare style={glareStyle}>
        <Blobs>
          <div />
        </Blobs>
        <Cutout>
          {icons.map((iconIndex) => {
            const { Icon } = ORBS[iconIndex];

            return (
              <Slot
                key={iconIndex}
                $leaving={iconIndex !== index}
                style={{ color: 'var(--black)' }}
              >
                <Icon />
              </Slot>
            );
          })}
        </Cutout>
      </Glare>
      {icons.map((iconIndex) => {
        const { Icon } = ORBS[iconIndex];

        return (
          <Slot
            key={iconIndex}
            $leaving={iconIndex !== index}
            style={{ color: 'var(--white)' }}
          >
            <Icon />
          </Slot>
        );
      })}
    </Stage>
  );
}
