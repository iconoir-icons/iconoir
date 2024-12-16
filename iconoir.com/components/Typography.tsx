import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';
import { showNotification } from '../lib/showNotification';
import { CopyButton } from './Button';

export const Text15 = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: var(--g1);
`;

export const Text14 = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: var(--g1);
`;

export const Text13 = styled.div`
  font-size: 13px;
  color: var(--g1);
  line-height: 21px;
  font-weight: 500;
`;

export const Text17 = styled.div`
  font-size: 17px;
`;

export const Text18 = styled.div`
  font-size: 16px;
  line-height: 25px;
  color: var(--g1);

  ${media.md} {
    font-size: 18px;
    line-height: 29px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 24px;
  line-height: 40px;
  color: var(--g0);
  letter-spacing: -0.02em;
  margin: 24px 0;
  font-weight: 700;
`;

export const InlineCode = styled.span`
  background: var(--g6);
  border-radius: 6px;
  padding: 4px;
`;

export const Code = styled.div`
  background: var(--g7);
  border: solid 1px var(--g6);
  border-radius: 6px;
  padding: 26px 32px;
  color: var(--g1);
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  margin: 24px 0;
  font-family: var(--code-family);
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
    font-family: var(--code-family) !important;
    font-size: 16px;
    background: transparent;
  }
  strong {
    font-weight: 700;
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 500;
  line-height: 49px;
  letter-spacing: -0.02em;
  color: var(--g0);
  margin-bottom: 40px;
  ${media.lg} {
    font-size: 60px;
    line-height: 81px;
    letter-spacing: -0.05em;
  }
`;
export const H2 = styled.h2`
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  color: var(--g0);
  margin: 24px 0;
`;
export const H3 = styled.h3`
  font-size: 20px;
  line-height: 36px;
  font-weight: 700;
  color: var(--g0);
  margin: 24px 0;
`;
export const Body = styled.p`
  font-size: 18px;
  color: var(--g1);
  line-height: 30px;
  margin: 24px 0;
`;

export const Li = styled.li`
  font-size: 18px;
  color: var(--g1);
  line-height: 30px;
  margin: 4px 0;
`;

const PreContainer = styled(Code)`
  &&& {
    position: relative;
    padding: 0;
    * {
      white-space: pre;
    }
    > pre {
      margin-bottom: 0;
      padding: 26px 32px;
      box-sizing: border-box;
      overflow-x: auto;
    }
  }
`;

const CopyContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 23px;
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
