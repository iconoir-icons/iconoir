import React from 'react';
import styled from 'styled-components';
import { showNotification } from '../helpers/showNotification';
import { Button } from './Button';
import { media } from './responsive';

export const Text15 = styled.div`
  font-size: 15px;
  line-height: 24px;
  color: var(--black-60);
`;

export const Text14 = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: var(--black);
`;

export const Text13 = styled.div`
  font-size: 13px;
  color: var(--dark-gray);
  line-height: 21px;
  font-weight: 500;
`;

export const Text18 = styled.div`
  font-size: 16px;
  line-height: 25px;
  color: var(--black-60);

  ${media.md} {
    font-size: 18px;
    line-height: 29px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 24px;
  line-height: 40px;
  color: var(--black);
  letter-spacing: -0.02em;
  margin: 24px 0;
  font-weight: 700;
`;

export const Code = styled.div`
  background: var(--light-gray) !important;
  border-radius: 0 !important;
  padding: 26px 32px;
  color: var(--black-60);
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
    font-size: 16px !important;
    background: transparent !important;
  }
  strong {
    font-weight: 700;
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 700;
  line-height: 49px;
  letter-spacing: -0.02em;
  color: var(--black);
  margin-bottom: 40px;
  ${media.lg} {
    font-size: 90px;
    line-height: 81px;
    letter-spacing: -0.05em;
  }
`;
export const H2 = styled.h2`
  font-size: 24px;
  line-height: 40px;
  font-weight: 700;
  color: var(--black);
  margin: 24px 0;
`;
export const H3 = styled.h3`
  font-size: 20px;
  line-height: 36px;
  font-weight: 700;
  color: var(--black);
  margin: 24px 0;
`;
export const Body = styled.p`
  font-size: 18px;
  color: var(--black-60);
  line-height: 30px;
  margin: 24px 0;
`;
export const CodeElement = styled.code`
  display: inline-block;
  padding: 0 4px;
  color: var(--black);
`;

const PreContainer = styled(Code)`
  position: relative;
  padding: 0;
  * {
    white-space: pre;
  }
  > pre {
    padding: 26px 32px;
    box-sizing: border-box;
    overflow-x: auto;
  }
`;
const CopyContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 23px;
`;
export const CopyButton = styled(Button)`
  text-transform: uppercase;
  background: var(--gray);
  height: 30px;
  padding: 0 12px;
  font-size: 11px;
  letter-spacing: 0.12em;
  line-height: 17.6px;
  font-weight: 700;
  color: var(--black);
  transition: background 0.1s linear, color 0.1s linear;
  font-family: var(--font-family) !important;
  &:hover {
    background: var(--black) !important;
    color: var(--white);
  }
`;
export function Pre({ children, ...props }: React.PropsWithChildren<any>) {
  const containerRef = React.useRef<HTMLPreElement>(null);
  const [supportsClipboard, setSupportsClipboard] = React.useState(false);
  React.useEffect(() => {
    setSupportsClipboard(
      typeof window !== 'undefined' &&
        typeof window?.navigator?.clipboard?.writeText !== 'undefined'
    );
  }, []);
  return (
    <PreContainer {...props}>
      <pre ref={containerRef}>{children}</pre>
      {supportsClipboard ? (
        <CopyContainer>
          <CopyButton
            onClick={() => {
              if (containerRef.current) {
                navigator.clipboard
                  .writeText(containerRef.current.innerText)
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
      ) : null}
    </PreContainer>
  );
}
