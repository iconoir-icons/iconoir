import React from 'react';
import styled from 'styled-components';

export function Ad() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const addedScript = React.useRef(false);
  React.useEffect(() => {
    const container = containerRef.current;
    if (container && !addedScript.current) {
      addedScript.current = true;
      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src =
        '//cdn.carbonads.com/carbon.js?serve=CESDK5QJ&placement=iconoircom';
      script.id = '_carbonads_js';
      container.appendChild(script);
    }
  }, []);
  return <AdContainer ref={containerRef} />;
}

const AdContainer = styled.div`
  #carbonads {
    a {
      text-decoration: none !important;
    }
    .carbon-wrap {
      display: flex;
      align-items: flex-start;
      > :first-child {
        margin-right: 12px;
      }
    }
    .carbon-text {
      color: var(--black-80);
      font-size: 14px;
    }
    .carbon-poweredby {
      text-align: center;
      font-size: 12px;
      color: var(--black-40);
    }
  }
`;
