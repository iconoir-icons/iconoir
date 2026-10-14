import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { showNotification } from '../lib/showNotification';
import { CopyButton } from './Button';

/** Uppercase IBM Plex Mono label above headings, as on pro.iconoir.com. */
export const Eyebrow = styled.div<{ $dark?: boolean }>`
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: ${(props) => (props.$dark ? 'var(--dark-text)' : 'var(--mono-ink)')};
  margin-bottom: 16px;
`;

export const Mono = styled.span`
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: -0.01em;
  color: var(--mono-ink);
`;

export const Display = styled.h1`
  margin: 0;
  font-size: 40px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: var(--black);
  ${media.sm} {
    font-size: 48px;
  }
  ${media.md} {
    font-size: 64px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 34px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: -0.03em;
  color: var(--black);
  ${media.sm} {
    font-size: 40px;
  }
  ${media.md} {
    font-size: 52px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--black);
`;

export const Lede = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.45;
  color: var(--text);
  ${media.sm} {
    font-size: 18px;
  }
`;

export const Text15 = styled.div`
  font-size: 15px;
  line-height: 1.45;
  color: var(--text);
`;

export const Text14 = styled.div`
  font-size: 14px;
  line-height: 1.45;
  color: var(--text);
`;

export const Text13 = styled.div`
  font-size: 13px;
  line-height: 1.45;
  color: var(--text);
`;

export const Text18 = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: var(--text);
  ${media.md} {
    font-size: 17px;
  }
`;

export const InlineCode = styled.code`
  font-family: var(--mono);
  font-size: 0.88em;
  background: var(--band);
  color: var(--ink);
  border-radius: 6px;
  padding: 2px 6px;
`;

export const Code = styled.div`
  background: var(--band);
  border-radius: 16px;
  padding: 24px 28px;
  color: var(--ink);
  font-family: var(--mono);
  font-size: 14px;
  line-height: 1.7;
  margin: 24px 0;
  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0 !important;
  }
  span,
  code,
  p,
  strong {
    font-family: var(--mono) !important;
    font-size: 14px;
    background: transparent;
    padding: 0;
  }
  p {
    color: var(--ink);
    line-height: 1.7;
  }
  strong {
    font-weight: 500;
  }
`;

export const H1 = styled(SectionTitle).attrs({ as: 'h1' })`
  margin: 0 0 32px 0;
`;

export const H2 = styled.h2`
  font-size: 28px;
  line-height: 1.2;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: var(--black);
  margin: 56px 0 16px 0;
`;

export const H3 = styled.h3`
  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--black);
  margin: 40px 0 12px 0;
`;

export const Body = styled.p`
  font-size: 16px;
  color: var(--text);
  line-height: 1.65;
  margin: 16px 0;
  ${media.md} {
    font-size: 17px;
  }
  a {
    color: var(--black);
    text-underline-offset: 3px;
  }
`;

export const Li = styled.li`
  font-size: 16px;
  color: var(--text);
  line-height: 1.65;
  margin: 4px 0;
  ${media.md} {
    font-size: 17px;
  }
`;

const PreContainer = styled(Code)`
  &&& {
    position: relative;
    padding: 0;
    * {
      white-space: pre;
    }
    > pre {
      margin: 0;
      padding: 24px 28px;
      background: transparent;
      overflow-x: auto;
    }
  }
`;

const CopyContainer = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export function Pre({ children, ...props }: React.PropsWithChildren<any>) {
  const containerRef = React.useRef<HTMLPreElement>(null);
  const [supportsClipboard, setSupportsClipboard] = React.useState(false);

  React.useEffect(() => {
    setSupportsClipboard(
      typeof window !== 'undefined'
      && typeof window?.navigator?.clipboard?.writeText !== 'undefined',
    );
  }, []);

  return (
    <PreContainer {...props}>
      <pre ref={containerRef}>{children}</pre>
      {supportsClipboard
        ? (
            <CopyContainer>
              <CopyButton
                onClick={() => {
                  if (containerRef.current?.textContent) {
                    navigator.clipboard
                      .writeText(containerRef.current.textContent)
                      .then(() => {
                        showNotification('Code copied!');
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  }
                }}
              >
                Copy
              </CopyButton>
            </CopyContainer>
          )
        : null}
    </PreContainer>
  );
}
