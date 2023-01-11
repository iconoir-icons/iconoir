import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';

export interface HeaderBackgroundProps {
  children: React.ReactElement;
  src: string;
}
export function HeaderBackground({ children, src }: HeaderBackgroundProps) {
  return (
    <HeaderContainer>
      <ImageContainer>
        <BackgroundImage src={src} />
      </ImageContainer>
      {children}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: relative;
`;
const ImageContainer = styled.div`
  position: absolute;
  top: -100px;
  bottom: -100px;
  left: -30px;
  right: -30px;
  ${media.lg} {
    left: -100px;
    right: -100px;
  }
  z-index: -1;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackgroundImage = styled.img`
  width: 90%;
  max-width: calc(min(1100px, 90vw));
  max-height: 60%;
  ${media.md} {
    max-height: 100%;
  }
`;
