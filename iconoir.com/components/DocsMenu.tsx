import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { documentationHref, getDocumentationStructure } from '../lib/docs';
import { media } from '../lib/responsive';
import { Eyebrow } from './Typography';

const SECTIONS = getDocumentationStructure();

/** Appears under the nav link; the top padding bridges the gap so hover holds. */
const Panel = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: 10;
  padding-top: 20px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -4px);
  transition:
    opacity 0.15s,
    transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(${SECTIONS.length}, max-content);
  gap: 40px;
  padding: 24px 28px;
  border-radius: 20px;
  background: #f2f2f2;
  /* The second shadow dims the whole viewport, top bar included, while the
     card stays bright; it fades in and out with the panel. */
  box-shadow:
    0 30px 80px -30px rgba(0, 0, 0, 0.18),
    0 0 0 100vmax rgba(170, 170, 170, 0.5);
  ${Eyebrow} {
    margin-bottom: 12px;
  }
  /* Like the nav: hovering a page fades the others. */
  &:has(a:hover) a:not(:hover) {
    opacity: 0.4;
  }
`;

const PageLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 0;
  font-size: 14px;
  font-weight: 500;
  color: var(--black);
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.15s;
`;

const PageLabel = styled.span`
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--black);
  color: var(--white);
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 500;
  text-transform: uppercase;
`;

/** Only desktop gets the dropdown; the mobile menu keeps the plain link. */
const Container = styled.div`
  position: relative;
  ${media.lg} {
    &:hover ${Panel}, &:focus-within ${Panel} {
      opacity: 1;
      pointer-events: all;
      transform: translate(-50%, 0);
    }
  }
`;

/** Wraps the Documentation nav link with a menu of every docs page. */
export function DocsMenu({ children }: React.PropsWithChildren) {
  return (
    <Container>
      {children}
      <Panel>
        <Card>
          {SECTIONS.map((section) => (
            <div key={section.title}>
              <Eyebrow>{section.title}</Eyebrow>
              {section.children?.map((item) => (
                <Link
                  key={item.path}
                  href={documentationHref(section.path, item.path)}
                  passHref
                  legacyBehavior
                >
                  <PageLink>
                    {item.title}
                    {item.label && <PageLabel>{item.label}</PageLabel>}
                  </PageLink>
                </Link>
              ))}
            </div>
          ))}
        </Card>
      </Panel>
    </Container>
  );
}
