import styled from 'styled-components';
import { media } from './responsive';

export function HeaderBackground() {
  return (
    <HeaderBackgroundContainer>
      <BubbleGradientOne />
      <BubbleGradientTwo />
      <BubbleGradientThree />
    </HeaderBackgroundContainer>
  );
}

function vw(original: number): string {
  return `${(original * 100) / 1724}vw`;
}
function vwm(original: number): string {
  return `${(original * 100) / 428}vw`;
}

const HeaderBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: -1;
  overflow: hidden;
  ${media.md} {
    overflow: visible;
  }
`;
const BubbleGradientOne = styled.div`
  position: absolute;
  width: ${vwm(863)};
  height: ${vwm(863)};
  left: ${vwm(-583)};
  top: ${vwm(-232)};

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(254, 194, 123, 0.4) 0%,
    rgba(254, 194, 123, 0) 100%
  );

  ${media.sm} {
    width: ${vw(1441)};
    height: ${vw(1441)};
    left: ${vw(-297)};
    top: ${vw(-324)};
  }
`;
const BubbleGradientTwo = styled.div`
  position: absolute;
  width: ${vwm(787)};
  height: ${vwm(787)};
  left: ${vwm(-260)};
  top: ${vwm(-232)};

  /* Bubble Grad 2 */
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(210, 235, 182, 0.4) 0%,
    rgba(210, 235, 182, 0) 100%
  );

  ${media.sm} {
    width: ${vw(1315)};
    height: ${vw(1315)};
    left: ${vw(242)};
    top: ${vw(-324)};
  }
`;
const BubbleGradientThree = styled.div`
  position: absolute;
  width: ${vwm(968)};
  height: ${vwm(968)};
  left: ${vwm(43)};
  top: ${vwm(-232)};

  /* Bubble Grad 3 */
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(156, 232, 238, 0.4) 0%,
    rgba(156, 232, 238, 0) 100%
  );

  ${media.sm} {
    width: ${vw(1616)};
    height: ${vw(1616)};
    left: ${vw(749)};
    top: ${vw(-324)};
  }
`;
