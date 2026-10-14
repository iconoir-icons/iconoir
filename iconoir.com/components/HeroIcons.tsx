import * as AllIcons from 'iconoir-react';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/responsive';

/** Icons that read well at small sizes, picked from at random. */
const POOL = [
  'Airplane',
  'Apple',
  'Bag',
  'Basketball',
  'Bicycle',
  'Bonfire',
  'Book',
  'Brain',
  'BrightCrown',
  'Camera',
  'Cellar',
  'Cloud',
  'ColorFilter',
  'Compass',
  'Crown',
  'Cube',
  'DesignNib',
  'FillColor',
  'Fish',
  'Flash',
  'Flower',
  'Gift',
  'Glasses',
  'Globe',
  'HalfMoon',
  'Hammer',
  'HandCard',
  'Headset',
  'Heart',
  'Home',
  'Lamp',
  'Leaf',
  'LightBulb',
  'Lock',
  'MagicWand',
  'Map',
  'Megaphone',
  'Microphone',
  'Palette',
  'PeaceHand',
  'Planet',
  'Puzzle',
  'Rocket',
  'Running',
  'SeaWaves',
  'Shop',
  'Sparks',
  'Tram',
  'Tree',
  'Trophy',
  'Umbrella',
  'Wallet',
  'Weight',
  'Wolf',
  'Yoga',
] as const;

type IconName = (typeof POOL)[number];

/**
 * Where the three selection boxes sit, as on the live site. `depth` scales how
 * far each one drifts with the cursor, so they move at slightly different rates.
 */
const SLOTS = [
  { x: -128, y: 82, depth: 1.4 },
  { x: 12, y: 50, depth: 0.8 },
  { x: 137, y: 88, depth: 1.1 },
] as const;

/** How far, in px, a box at depth 1 drifts toward the cursor. */
const MAX_SHIFT = 10;

/** The central box's look is the default every new icon varies around. */
const BASE_BOX = 56;
const BASE_ICON = 40;
const BASE_TILT = 5;
/** Every icon's stroke renders at this many px, whatever its size. */
const STROKE_PX = 3;
/** New icons get up to ±10% size and ±10° rotation around the default. */
const SIZE_JITTER = 0.1;
const TILT_JITTER = 10;

/** First render matches the server: the original trio, varied within range. */
const INITIAL: { name: IconName; tilt: number; scale: number }[] = [
  { name: 'FillColor', tilt: -4, scale: 0.92 },
  { name: 'Cellar', tilt: BASE_TILT, scale: 1 },
  { name: 'HandCard', tilt: 13, scale: 1.08 },
];

const INTERVAL_MS = 2000;
const HANDLE = 10;

/** "MagicWand" → "Magic wand" */
function label(name: string) {
  const words = name.replace(/([a-z])([A-Z0-9])/g, '$1 $2').toLowerCase();

  return words.charAt(0).toUpperCase() + words.slice(1);
}

/** A random value within ±spread of center. */
function jitter(center: number, spread: number) {
  return center + (Math.random() * 2 - 1) * spread;
}

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  60% {
    opacity: 1;
    transform: scale(1.06);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const fadeOut = keyframes`
  to {
    opacity: 0;
    transform: scale(0.85);
  }
`;

const Stage = styled.div`
  /* Cursor offset, set from JS without re-rendering. */
  --gx: 0px;
  --gy: 0px;
  position: relative;
  width: 320px;
  height: 130px;
  margin: 0 auto 24px;
  transform: scale(0.85);
  transform-origin: 50% 100%;
  ${media.sm} {
    transform: none;
    margin-bottom: 32px;
  }
`;

/** Positions a slot; its center sits at (x, y) from the stage's top center. */
const Slot = styled.div<{ $depth: number }>`
  position: absolute;
  left: 50%;
  top: 0;
  translate: calc(var(--gx) * ${(props) => props.$depth})
    calc(var(--gy) * ${(props) => props.$depth});
  transition: translate 0.6s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Selection = styled.div<{ $leaving?: boolean }>`
  position: absolute;
  animation: ${(props) => (props.$leaving ? fadeOut : popIn)}
    ${(props) => (props.$leaving ? '0.25s' : '0.55s')}
    cubic-bezier(0.34, 1.2, 0.64, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0.01s;
  }
`;

/** The Figma-like bounding box with a handle in each corner. */
const Box = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border: 1.5px solid var(--selection);
  color: var(--black);
  svg {
    display: block;
  }
`;

const Handle = styled.span`
  position: absolute;
  width: ${HANDLE}px;
  height: ${HANDLE}px;
  border: 1.5px solid var(--selection);
  border-radius: 50%;
  background: var(--white);
  &:nth-of-type(1) {
    top: -${HANDLE / 2 + 1}px;
    left: -${HANDLE / 2 + 1}px;
  }
  &:nth-of-type(2) {
    top: -${HANDLE / 2 + 1}px;
    right: -${HANDLE / 2 + 1}px;
  }
  &:nth-of-type(3) {
    bottom: -${HANDLE / 2 + 1}px;
    left: -${HANDLE / 2 + 1}px;
  }
  &:nth-of-type(4) {
    bottom: -${HANDLE / 2 + 1}px;
    right: -${HANDLE / 2 + 1}px;
  }
`;

const Label = styled.span`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 2px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0;
  white-space: nowrap;
  color: var(--selection-text);
`;

/** Neutral grays, a step stronger than the secondary button gray. */
const Root = styled.div`
  --selection: #d4d4d4;
  --selection-text: #b0b0b0;
`;

interface SelectionState {
  name: IconName;
  tilt: number;
  scale: number;
  /** Bumped on every swap so React remounts the box and replays the pop. */
  id: number;
}

/**
 * Three icons in selection boxes, slightly tilted, recreating the live site's
 * hero artwork in code. Every two seconds one of them swaps for a new icon.
 */
export function HeroIcons() {
  const [{ current, leaving }, setState] = React.useState<{
    current: SelectionState[];
    /** The box on its way out in each slot, if any. */
    leaving: (SelectionState | null)[];
  }>(() => ({
    current: INITIAL.map((item, id) => ({ ...item, id })),
    leaving: [null, null, null],
  }));

  React.useEffect(() => {
    let nextId = INITIAL.length;

    const timer = setInterval(() => {
      const slot = Math.floor(Math.random() * SLOTS.length);
      const id = nextId++;
      const roll = Math.random();
      const tilt = Math.round(jitter(BASE_TILT, TILT_JITTER));
      const scale = jitter(1, SIZE_JITTER);

      setState((state) => {
        const shown = new Set(state.current.map((item) => item.name));
        const choices = POOL.filter((name) => !shown.has(name));
        const name = choices[Math.floor(roll * choices.length)];

        return {
          current: state.current.map((item, i) =>
            i === slot ? { name, tilt, scale, id } : item,
          ),
          leaving: state.leaving.map((item, i) =>
            i === slot ? state.current[i] : item,
          ),
        };
      });
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  // Drift the boxes toward the cursor, scaled by how far it is across the page.
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

  function renderSelection(item: SelectionState, isLeaving: boolean) {
    const box = Math.round(BASE_BOX * item.scale);
    const icon = BASE_ICON * item.scale;
    const Icon = (AllIcons as unknown as Record<string, React.ComponentType<any>>)[item.name];

    return (
      <Selection
        key={item.id}
        $leaving={isLeaving}
        style={{
          width: box,
          height: box,
          left: -box / 2,
          top: -box / 2,
          rotate: `${item.tilt}deg`,
        }}
      >
        <Label>{label(item.name)}</Label>
        <Box>
          <Handle />
          <Handle />
          <Handle />
          <Handle />
          {/* Scale the stroke inversely so it renders at STROKE_PX at any size. */}
          <Icon width={icon} height={icon} strokeWidth={(STROKE_PX * 24) / icon} />
        </Box>
      </Selection>
    );
  }

  return (
    <Root>
      <Stage ref={stageRef} aria-hidden>
        {SLOTS.map((slot, i) => (
          <Slot
            key={slot.x}
            $depth={slot.depth}
            style={{ transform: `translate(${slot.x}px, ${slot.y}px)` }}
          >
            {leaving[i] && renderSelection(leaving[i]!, true)}
            {renderSelection(current[i], false)}
          </Slot>
        ))}
      </Stage>
    </Root>
  );
}
