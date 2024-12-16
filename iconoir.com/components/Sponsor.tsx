import React from 'react';
import styled from 'styled-components';
import { media } from '../lib/responsive';

const SponsorContainer = styled.div`
  border: 1px solid var(--g7);
  background-color: var(--g7);
  border-radius: 10px;
  width: 88%;
  font-size: 14px;
  color: var(--g1);
  padding: 6%;
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

const SponsorRight = styled.div``;

const SponsorLeft = styled.div``;

const SponsorLogo = styled.div`
  @keyframes my-animation {
    0% {
      transform: scale(1);
    }
    45% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2) rotate(-15deg);
    }
    55% {
      transform: scale(1);
    }
    90% {
      transform: scale(1);
    }
    95% {
      transform: scale(1.6) rotate(15deg);
    }
    100% {
      transform: scale(1);
    }
  }

  width: 34px;
  height: 34px;
  background: url('/framer-spns.png') no-repeat;
  background-size: 100%;
  border-radius: 12px;
  margin-right: 16px;

  animation-name: my-animation;
  animation-duration: 5s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-delay: 5s;
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

export function Sponsor() {
  return (
    <SponsorContainer>
      <SponsorText>
        <SponsorLeft>
          <SponsorLogo />
        </SponsorLeft>
        <SponsorRight>
          <SponsorTitle>Get 3 months free of Framer with Iconoir.</SponsorTitle>
          <SponsorDescr>
            Click the link and use the code “pro-yearly-partner”.
          </SponsorDescr>
        </SponsorRight>
      </SponsorText>
      <a href="https://www.framer.com?via=iconoir">
        <SponsorCTA>Get the offer</SponsorCTA>
      </a>
    </SponsorContainer>
  );
}
