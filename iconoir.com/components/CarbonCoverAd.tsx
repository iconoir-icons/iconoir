import React from 'react';
import styled from 'styled-components';

const CarbonCoverAdContainer = styled.div`
  #carbonads {
    margin: 24px 0 0 0;
    a {
      text-decoration: none;
    }
    .carbon-text {
      font-size: 14px;
    }
    .carbon-poweredby {
      font-size: 12px;
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
