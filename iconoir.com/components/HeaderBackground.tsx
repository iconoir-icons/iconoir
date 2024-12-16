import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';

export interface HeaderBackgroundProps {
  children: React.ReactElement;
}

export function HeaderBackground({ children }: HeaderBackgroundProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallaxRef.current)
      return;

    const parallaxElements = parallaxRef.current.querySelectorAll(
      '[data-parallax-factor]',
    );

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      parallaxElements.forEach((el) => {
        const factor = Number.parseFloat(
          el.getAttribute('data-parallax-factor') || '1',
        );

        (el as HTMLElement).style.transform = `translate3d(${
          x * factor * 40
        }px, ${y * factor * 80}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <HeaderContainer ref={parallaxRef}>
      <FloatingIconCellar data-parallax-factor="0.75" />
      <FloatingIconPay data-parallax-factor="1.5" />
      <FloatingFaceID data-parallax-factor="0.5" />
      <FloatingCommand data-parallax-factor="1.25" />
      <FloatingFill data-parallax-factor="2" />
      {children}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
`;

const FloatingIcon = styled.div`
  position: absolute;
  display: none;
  background-repeat: no-repeat;
  z-index: -1;
  pointer-events: none;
  align-items: center;
  justify-content: center;
  ${media.md} {
    display: flex;
  }
`;

const FloatingIconCellar = styled(FloatingIcon)`
  -webkit-transform: rotate(6deg);
  -moz-transform: rotate(6deg);
  top: -120px;
  right: 0px;
  width: 200px;
  height: 200px;
  background-image: url(/cellar.gif);
  background-size: 70%;
  ${media.lg} {
  }
`;

const FloatingIconPay = styled(FloatingIcon)`
  -webkit-transform: rotate(18deg);
  -moz-transform: rotate(18deg);
  top: -50px;
  right: -100px;
  width: 130px;
  height: 130px;
  background-image: url(/pay-bitcoin.gif);
  background-size: 70%;
  ${media.lg} {
  }
`;

const FloatingFaceID = styled(FloatingIcon)`
  -webkit-transform: rotate(6deg);
  -moz-transform: rotate(6deg);
  top: -130px;
  right: 380px;
  width: 110px;
  height: 110px;
  background-image: url(/face-id.gif);
  background-size: 70%;
  ${media.lg} {
  }
`;

const FloatingCommand = styled(FloatingIcon)`
  -webkit-transform: rotate(-7deg);
  -moz-transform: rotate(-7deg);
  top: -94px;
  left: 150px;
  width: 110px;
  height: 110px;
  background-image: url(/command.gif);
  background-size: 70%;
  ${media.lg} {
  }
`;

const FloatingFill = styled(FloatingIcon)`
  -webkit-transform: rotate(-14deg);
  -moz-transform: rotate(-14deg);
  top: -64px;
  left: -75px;
  width: 110px;
  height: 110px;
  background-image: url(/fill.gif);
  background-size: 70%;
  ${media.lg} {
  }
`;
