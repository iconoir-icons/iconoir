import React from 'react';
import styled from 'styled-components';

const CarbonCoverAdContainer = styled.div`
  #carbonads {
    margin: 16px 0 0 0;
    a {
      text-decoration: none;
    }
    /* Match the sponsor card (Streamline card) instead of Carbon's
       default grey box and #333 text. */
    #carbon-responsive {
      --carbon-text-color: var(--black);
    }
    #carbon-responsive .carbon-responsive-wrap {
      background-color: var(--band);
      border: none;
      border-radius: 20px;
      transition: box-shadow 0.15s;
      &:hover {
        box-shadow: 0 0 0 1.5px var(--black);
      }
    }
    .carbon-text {
      font-family: var(--font);
      font-size: 14px;
    }
    .carbon-poweredby {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
    }
  }
`;

const CARBON_SCRIPT_SRC
  = 'https://cdn.carbonads.com/carbon.js?serve=CWBDKK7J&placement=iconoircom&format=responsive';

export function CarbonCoverAd() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container)
      return;

    // Clear before inject (recommended for React SPAs; avoids stale markup on remount / Strict Mode)
    container.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = CARBON_SCRIPT_SRC;
    script.id = '_carbonads_js';
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <CarbonCoverAdContainer ref={containerRef} />;
}
