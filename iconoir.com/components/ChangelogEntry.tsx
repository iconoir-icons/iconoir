import { BoxIso } from 'iconoir-react';
import moment from 'moment';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import styled from 'styled-components';
import { MDXRemote } from './MDXRemote';
import { media } from '../lib/responsive';
import { Code, Text15, Text18 } from './Typography';
import { CopyButton } from './Button';

const EXPAND_HEIGHT = 400;

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
      containerRef.current &&
      containerRef.current.clientHeight > EXPAND_HEIGHT
    ) {
      setShouldExpand(true);
    }
  }, []);
  return (
    <Container ref={containerRef}>
      <ContainerLeft>
        <ContainerIcon>
          <BoxIso />
        </ContainerIcon>
        <TitleContainer>
          <a
            href={url}
            target={'_blank'}
            rel={'noreferrer'}
            style={{ textDecoration: 'none' }}
          >
            <EntryTitle>{name}</EntryTitle>
          </a>
          <Text15>{moment(created_at).format('MMM DD, YYYY')}</Text15>
        </TitleContainer>
      </ContainerLeft>
      <EntryBody $expanded={expanded}>
        {body ? <MDXRemote {...body} /> : 'No changelog'}
        {shouldExpand ? (
          <ExpandContainer>
            <CopyButton onClick={() => setExpanded((e) => !e)}>
              {expanded ? 'Collapse' : 'Expand'}
            </CopyButton>
          </ExpandContainer>
        ) : null}
      </EntryBody>
    </Container>
  );
}

const Container = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  ${media.lg} {
    flex-direction: row;
    align-items: flex-start;
    margin: 24px 0;
  }
`;
const ContainerLeft = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  ${media.lg} {
    margin-bottom: 0;
    margin-right: 30px;
  }
`;
const ContainerIcon = styled.div`
  font-size: 18px;
  color: var(--black);
  margin-right: 18px;
`;
const TitleContainer = styled.div`
  width: 100px;
`;
const EntryTitle = styled(Text18)`
  &&& {
    color: var(--black);
    font-weight: 700;
  }
`;
const ExpandContainer = styled.div`
  position: absolute;
  bottom: 16px;
  right: 23px;
`;
const EntryBody = styled(Code)<{ $expanded?: boolean }>`
  &&& {
    flex: 1;
    margin: 0;
    max-height: ${(props) => (props.$expanded ? 'none' : `${EXPAND_HEIGHT}px`)};
    position: relative;
    overflow: hidden;
    * {
      font-family: var(--code-family);
    }
    ul {
      list-style: none none;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 8px;
      }
    }
    code {
      display: inline-block;
      background: var(--g5);
      color: var(--black);
      font-family: var(--font-family) !important;
      padding: 0 4px;
      font-size: 18px;
    }
  }
`;
