import React from 'react';
import styled from 'styled-components';
import { Mono } from './Typography';

const PromoContainer = styled.a`
  display: block;
  padding: 20px 20px 16px;
  border-radius: 20px;
  background: var(--white);
  text-align: center;
  text-decoration: none;
  color: var(--black);
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 0 0 1.5px var(--black);
  }
`;

const PromoLogo = styled.div`
  @keyframes streamline-pulse {
    0%,
    45%,
    55%,
    90%,
    100% {
      transform: scale(1);
    }
    50%,
    95% {
      transform: scale(1.2);
    }
  }

  width: 32px;
  height: 32px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: url('./streamline-ad-logo.png') no-repeat;
  background-size: 100% 100%;
  animation: streamline-pulse 5s ease 5s infinite;
`;

const PromoTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.015em;
`;

const PromoSub = styled.div`
  font-size: 14px;
  color: var(--text);
  margin-bottom: 16px;
`;

const PromoImage = styled.img`
  width: 70%;
`;

const PromoDescription = styled.div`
  margin: 12px 0;
  padding: 10px 0;
  border-radius: 12px;
  background: var(--band);
  font-size: 13px;
  font-weight: 500;
`;

export function Streamline() {
  return (
    <PromoContainer rel="sponsored" href="https://bit.ly/3SNgpKo">
      <PromoLogo />
      <PromoTitle>Expand your icon collection</PromoTitle>
      <PromoSub>with Streamline</PromoSub>
      <PromoImage src="./streamline-ad.png" alt="" />
      <PromoDescription>170,000 vector icons</PromoDescription>
      <Mono style={{ color: 'var(--muted)' }}>Our sponsor</Mono>
    </PromoContainer>
  );
}
