import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { CopyButton } from './Button';
import { MDXRemote } from './MDXRemote';
import { Code, Mono } from './Typography';

const EXPAND_HEIGHT = 400;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  margin: 40px 0;
  ${media.lg} {
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
    margin: 24px 0;
  }
`;

const ContainerLeft = styled.div`
  ${media.lg} {
    width: 140px;
    flex: none;
    padding-top: 22px;
  }
`;

const EntryTitle = styled.a`
  display: block;
  margin-bottom: 4px;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--black);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExpandContainer = styled.div`
  position: absolute;
  bottom: 14px;
  right: 14px;
`;

const EntryBody = styled(Code)<{ $expanded?: boolean }>`
  &&& {
    flex: 1;
    min-width: 0;
    margin: 0;
    max-height: ${(props) => (props.$expanded ? 'none' : `${EXPAND_HEIGHT}px`)};
    position: relative;
    overflow: hidden;
    font-family: var(--font);
    ul {
      list-style: none none;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 8px;
      }
    }
    p,
    li {
      font-family: var(--font) !important;
      font-size: 15px;
      color: var(--text);
    }
    h1,
    h2,
    h3 {
      margin: 0 0 12px;
      font-size: 15px;
    }
    code {
      display: inline-block;
      padding: 0 4px;
      border-radius: 4px;
      background: var(--white);
      color: var(--black);
      font-family: var(--mono) !important;
      font-size: 13px;
    }
  }
`;

export interface ChangelogEntryProps {
  name: string;
  url: string;
  created_at: string;
  body?: MDXRemoteSerializeResult;
}

export function ChangelogEntry({
  name,
  url,
  body,
  created_at,
}: ChangelogEntryProps) {
  const [expanded, setExpanded] = React.useState(false);
  const [shouldExpand, setShouldExpand] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      containerRef.current
      && containerRef.current.clientHeight > EXPAND_HEIGHT
    ) {
      setShouldExpand(true);
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <ContainerLeft>
        <div>
          <EntryTitle href={url} target="_blank" rel="noreferrer">
            {name}
          </EntryTitle>
          <Mono>{moment(created_at).format('MMM DD, YYYY')}</Mono>
        </div>
      </ContainerLeft>
      <EntryBody $expanded={expanded}>
        {body ? <MDXRemote {...body} /> : 'No changelog'}
        {shouldExpand
          ? (
              <ExpandContainer>
                <CopyButton onClick={() => setExpanded((e) => !e)}>
                  {expanded ? 'Collapse' : 'Expand'}
                </CopyButton>
              </ExpandContainer>
            )
          : null}
      </EntryBody>
    </Container>
  );
}
