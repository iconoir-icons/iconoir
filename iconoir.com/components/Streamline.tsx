import React from 'react';
import styled from 'styled-components';

export function Streamline() {
  return (
    <a
      rel="sponsored"
      href="https://bit.ly/3SNgpKo"
      style={{ textDecoration: 'none' }}
    >
      <PromoContainer>
        <PromoContent>
          <PromoInfo>
            <PromoLogo />
            <PromoTitle>Expand Your Icon Collection</PromoTitle>
            <PromoSub>with Streamline</PromoSub>
            <PromoImage src="./streamline-ad.png" />
            <PromoDescription>170,000 Vector Icons</PromoDescription>
            <SponsorLabel>Our sponsor</SponsorLabel>
          </PromoInfo>
        </PromoContent>
      </PromoContainer>
    </a>
  );
}

// Styled components go here

const PromoContainer = styled.div`
  border-radius: 12px;
  border: 1px solid var(--g6);
  text-align: center;
  margin-top: 24px;
  text-decoration: none;
  &:hover {
    background-color: var(--g7);
  }
`;
const SponsorLabel = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--g4);
  margin: 10px 0;
`;

const PromoContent = styled.div`
  // Your content styles here, similar to SponsorText
`;

const PromoLogo = styled.div`
  @keyframes my-animation {
    0% {
      transform: scale(1);
    }
    45% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    55% {
      transform: scale(1);
    }
    90% {
      transform: scale(1);
    }
    95% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  background-image: url('./streamline-ad-logo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 14px auto;

  animation-name: my-animation;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-delay: 5s;
`;

const PromoImage = styled.img`
  width: 70%;
`;

const PromoInfo = styled.div`
  // Styles for the text container, similar to SponsorRight
`;

const PromoTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 0 auto;
`;

const PromoSub = styled.h2`
  font-size: 14px;
  margin: 0 auto 30px auto;
`;

const PromoDescription = styled.p`
  border: 1px solid var(--g6);
  margin: 6%;
  border-radius: 8px;
  font-size: 12px;
  padding: 10px 0;
  font-weight: 600;
`;
