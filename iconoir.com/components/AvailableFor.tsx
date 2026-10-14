import React from 'react';
import styled from 'styled-components';
import { LIBRARY_LINKS } from '../lib/constants';
import { media } from '../lib/responsive';
import { Eyebrow } from './Typography';

const Container = styled.div`
  margin-top: 56px;
  text-align: center;
  ${media.sm} {
    margin-top: 72px;
  }
`;

const Libraries = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  /* Like the header nav: hovering a library fades the others. */
  &:has(a:hover) a:not(:hover) {
    opacity: 0.4;
  }
`;

const Library = styled.a`
  color: var(--black);
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.15s;
`;

const Dot = styled.span`
  margin: 0 10px;
  color: var(--muted);
`;

const LIBRARIES = [
  { name: 'React', href: LIBRARY_LINKS.React },
  {
    name: 'Swift',
    href: 'https://github.com/iconoir-icons/iconoir#swift-package',
  },
  { name: 'Flutter', href: LIBRARY_LINKS.Flutter },
  { name: 'Figma', href: LIBRARY_LINKS.Figma },
  {
    name: 'React Native',
    href: LIBRARY_LINKS.ReactNative,
  },
  { name: 'Vue', href: LIBRARY_LINKS.Vue },
  { name: 'Framer', href: LIBRARY_LINKS.Framer },
];

export function AvailableFor() {
  return (
    <Container>
      <Eyebrow>Available for</Eyebrow>
      <Libraries>
        {LIBRARIES.map((library, index) => (
          <React.Fragment key={library.name}>
            {index > 0 && <Dot aria-hidden>·</Dot>}
            <Library
              href={library.href}
              target="_blank"
              rel="nofollow noreferrer"
            >
              {library.name}
            </Library>
          </React.Fragment>
        ))}
      </Libraries>
    </Container>
  );
}
