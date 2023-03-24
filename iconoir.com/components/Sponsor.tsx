import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';

export function Sponsor() {
  return <SponsorContainer>
    <SponsorText>
      <SponsorLeft>
        <SponsorLogo />
      </SponsorLeft>
      <SponsorRight>
        <SponsorTitle>Get 3 months free of Framer with Iconoir.</SponsorTitle>
        <SponsorDescr>Click the link and use the code “pro-yearly-partner”.</SponsorDescr>
      </SponsorRight>
    </SponsorText>
    <a href="https://www.framer.com?via=iconoir">
      <SponsorCTA>Get the offer</SponsorCTA>
    </a>
  </SponsorContainer>;
}

const SponsorContainer = styled.div`
  border: 1px solid var(--g7);
  background-color: var(--g7);
  border-radius: 10px;
  width: 96%;
  font-size: 14px;
  color: var(--g1);
  padding: 2%;
  margin-top: 24px;
  & > a {
    text-decoration: none;
  }
  display: none;
  ${media.md} {
    display: block;
  }
`;

const SponsorText = styled.div`
  display: flex;
  padding 8px;
`;

const SponsorRight = styled.div`
`;

const SponsorLeft = styled.div`
 
`;

const SponsorLogo = styled.div`
  width: 34px;
  height: 34px;
  background: url('/framer-spns.png') no-repeat;
  background-size: 100%;
  border-radius: 12px;
  margin-right: 16px;
`;

const SponsorTitle = styled.div`
  color: var(--g0);
  font-weight: 600;
`;

const SponsorDescr = styled.div`
  margin: 8px 0 16px 0;
`;

const SponsorCTA = styled.div`
  background-color: var(--g6);
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  padding: 16px 0;
  border-radius: 10px;
  text-decoration: none;
  &:hover {
    background-color: var(--g0);
    color: var(--white);
  }
`;