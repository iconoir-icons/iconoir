import React from 'react';
import styled from 'styled-components';
import { trackEvent } from '../lib/analytics';

// Mirrors the layout Carbon serves for `format=responsive` (.carbon-responsive-wrap):
// image on top, text block below, inside a soft rounded card.
const AdLink = styled.a`
  display: block;
  margin: 24px 0 0 0;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid var(--g6);
  overflow: hidden;
  &:hover {
    background-color: var(--g7);
  }
`;

const AdImage = styled.img`
  display: block;
  padding: 12px 5%;
  width: 90%;
  height: auto;
  border-radius: 10px;
`;

const AdText = styled.div`
  padding: 12px;
  text-align: left;
`;

const AdTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--g0);
  margin-bottom: 4px;
`;

const AdDescription = styled.div`
  font-size: 14px;
  line-height: 1.4;
  color: var(--g1);
`;

const AD_URL
  = 'https://store.steampowered.com/app/4911430/About_Frontlines/';

export function FrontlinesAd() {
  const handleClick = React.useCallback(() => {
    // GA4 event names allow only letters, digits and underscores, so this is
    // the searchable stand-in for "About Frontlines Ad".
    trackEvent('about_frontlines_ad', {
      promotion_name: 'About Frontlines - Steam wishlist',
      creative_slot: 'explore-sidebar',
      link_url: AD_URL,
    });
  }, []);

  return (
    <AdLink
      rel="sponsored noopener"
      target="_blank"
      href={AD_URL}
      onClick={handleClick}
    >
      <AdImage src="./small-capsule.png" alt="About Frontlines" />
      <AdText>
        <AdTitle>Do you like strategy games?</AdTitle>
        <AdDescription>
          Fight with your friends or AI in the new About Frontlines. Wishlist it
          on Steam.
        </AdDescription>
      </AdText>
    </AdLink>
  );
}
