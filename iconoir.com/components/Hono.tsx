import React from 'react';
import styled from 'styled-components';

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

const PromoImage = styled.img`
  width: 70%;
`;

const PromoInfo = styled.div`
  // Styles for the text container, similar to SponsorRight
`;

const PromoTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin: 16px auto 0 auto;
`;

const PromoSub = styled.h2`
  font-size: 14px;
  margin: 0 auto 10px auto;
`;

export function Hono() {
  return (
    <a
      href="https://wearehono.com/?utm_source=iconoir&utm_medium=sidebar"
      style={{ textDecoration: 'none' }}
    >
      <PromoContainer>
        <PromoContent>
          <PromoInfo>
            <PromoTitle>Buy high-quality logos</PromoTitle>
            <PromoSub>with Hono.</PromoSub>
            <PromoImage src="./hono-ad.png" />
            <SponsorLabel>Our sponsor</SponsorLabel>
          </PromoInfo>
        </PromoContent>
      </PromoContainer>
    </a>
  );
}
