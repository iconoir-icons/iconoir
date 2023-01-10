import Script from 'next/script';

export function GA() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-33344001-9"
        strategy={'afterInteractive'}
      />
      <Script id={'google-analytics'} strategy={'afterInteractive'}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-33344001-9');
        `}
      </Script>
    </>
  );
}
