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

// Small card only. With format=responsive, carbon.js renders the big "Carbon
// Cover" card (blurred large image, brand colors, call to action) whenever an
// ad has every Cover field, and its own small image-and-text card otherwise.
// Dropping the Cover-only fields from Carbon's ad JSON, before carbon.js reads
// it, makes it always pick the small card. Links, impression and viewability
// tracking and the "ads via Carbon" credit stay carbon.js's own. Cover ads have
// no small image, so carbon.js shows their logo on the brand color instead.
const COVER_ONLY_FIELDS = ['callToAction', 'companyTagline', 'largeImage'];
const CARBON_ADS_URL = /^https:\/\/srv\.(?:carbonads\.net|buysellads\.com)\/ads\//;

let smallCardOnlyInstalled = false;

function installSmallCardOnly() {
  if (smallCardOnlyInstalled)
    return;
  smallCardOnlyInstalled = true;

  const originalFetch = window.fetch;

  window.fetch = async function (...args: Parameters<typeof fetch>) {
    const res = await originalFetch.apply(this, args);
    const [input] = args;
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
    if (!CARBON_ADS_URL.test(url))
      return res;

    const json = await res.clone().json().catch(() => null);
    if (!json || !Array.isArray(json.ads))
      return res;

    for (const ad of json.ads) {
      for (const key of COVER_ONLY_FIELDS)
        delete ad[key];
    }

    return new Response(JSON.stringify(json), {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers,
    });
  };
}

export function CarbonCoverAd() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container)
      return;

    // carbon.js inserts the ad after whatever `#_carbonads_js` exists when its
    // JSON response arrives, and a removed script still runs once it has
    // started loading. Strict Mode's mount → unmount → mount would therefore
    // load two scripts that both land next to the second one. Deferring the
    // injection lets the cleanup cancel the first mount before any script exists.
    const timeout = window.setTimeout(() => {
      installSmallCardOnly();
      container.innerHTML = '';

      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = CARBON_SCRIPT_SRC;
      script.id = '_carbonads_js';
      container.appendChild(script);
    });

    return () => {
      window.clearTimeout(timeout);
      container.innerHTML = '';
    };
  }, []);

  return <CarbonCoverAdContainer ref={containerRef} />;
}
