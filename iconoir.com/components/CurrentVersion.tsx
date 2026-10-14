import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BREAKPOINTS } from '../lib/responsive';

const INTERVAL_MS = 2500;

const rollIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(70%);
  }
`;

const rollOut = keyframes`
  to {
    opacity: 0;
    transform: translateY(-70%);
  }
`;

const Container = styled.a`
  position: relative;
  display: inline-flex;
  margin-left: 8px;
  padding: 3px 7px;
  border-radius: 6px;
  background: var(--gray-btn);
  color: var(--black);
  font-family: var(--mono);
  font-size: 11px;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-decoration: none;
  transition:
    color 0.15s,
    background 0.15s;
  &:hover {
    background: var(--black);
    color: var(--white);
  }
`;

/** Clips the rolling labels and eases its width to fit the current one. */
const Viewport = styled.span`
  position: relative;
  display: inline-block;
  overflow: hidden;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Label = styled.span<{ $leaving?: boolean; $still?: boolean }>`
  display: inline-block;
  animation: ${(props) => (props.$leaving ? rollOut : rollIn)} 0.4s
    cubic-bezier(0.16, 1, 0.3, 1) both;
  ${(props) => props.$still && 'animation: none;'}
  ${(props) => props.$leaving && 'position: absolute; left: 0; top: 0;'}
`;

/** Off-screen copies of every label, measured to size the viewport. */
const Measure = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
`;

export interface CurrentVersionProps {
  version: string;
  numIcons: number;
  numDownloads: number;
  numStars: number;
}

/**
 * The version badge beside the logo. On wider screens it rolls through the
 * version and a few project stats; it links to the changelog.
 */
export function CurrentVersion({
  version,
  numIcons,
  numDownloads,
  numStars,
}: CurrentVersionProps) {
  const compact = new Intl.NumberFormat('en-US', { notation: 'compact' });

  const labels = [
    version,
    `${new Intl.NumberFormat('en-US').format(numIcons)} icons`,
    `${compact.format(numDownloads)} React downloads`,
    `${compact.format(numStars)} GitHub stars`,
  ];

  const labelsKey = labels.join('|');

  const [{ index, previous }, setState] = React.useState<{
    index: number;
    previous: number | null;
  }>({ index: 0, previous: null });

  const [widths, setWidths] = React.useState<number[]>([]);
  const measureRef = React.useRef<HTMLSpanElement>(null);

  // Measure every label once the fonts are in, so the width can animate.
  React.useEffect(() => {
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled || !measureRef.current)
        return;

      setWidths(
        Array.from(measureRef.current.children).map(
          (child) => child.getBoundingClientRect().width,
        ),
      );
    });

    return () => {
      cancelled = true;
    };
  }, [labelsKey]);

  // Roll on wide screens only; phones keep the version, and so does reduced motion.
  React.useEffect(() => {
    const canRoll = window.matchMedia(
      `(min-width: ${BREAKPOINTS.sm}px) and (prefers-reduced-motion: no-preference)`,
    );

    if (!canRoll.matches)
      return;

    const timer = setInterval(() => {
      setState(({ index: current }) => ({
        index: (current + 1) % labels.length,
        previous: current,
      }));
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [labels.length]);

  return (
    <Link href="/docs/changelog" passHref legacyBehavior>
      <Container title="Changelog">
        <Viewport style={widths[index] ? { width: widths[index] } : undefined}>
          {previous !== null && (
            <Label key={`out-${previous}`} $leaving aria-hidden>
              {labels[previous]}
            </Label>
          )}
          {/* The first label just sits there; only later swaps roll. */}
          <Label key={`in-${index}`} $still={previous === null}>
            {labels[index]}
          </Label>
        </Viewport>
        <Measure ref={measureRef} aria-hidden>
          {labels.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </Measure>
      </Container>
    </Link>
  );
}
