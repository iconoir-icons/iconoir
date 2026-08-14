import Script from 'next/script';

export function GA() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-760RDT5HY2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-760RDT5HY2');
        `}
      </Script>
    </>
  );
}
