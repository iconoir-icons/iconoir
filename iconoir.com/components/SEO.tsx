import Head from 'next/head';

const TITLE_SUFFIX = 'Iconoir | Free Icons';

export interface SEOProps {
  title?: string;
}
export function SEO({ title }: SEOProps) {
  const pageTitle = title ? `${title} | ${TITLE_SUFFIX}` : TITLE_SUFFIX;
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content="The Simple and Definitive hand-crafted SVG Icons library."
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content="Iconoir" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://iconoir.com" />
      <meta
        property="og:image"
        content="https://iconoir.com/iconoir-brand-03.png"
      />
      <meta
        property="og:description"
        content="The Simple and Definitive hand-crafted SVG Icons Library."
      />
      <meta property="og:image:width" content="1270" />
      <meta property="og:image:height" content="760" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:domain" content="iconoir.com" />
      <meta name="twitter:url" content="https://iconoir.com" />
      <meta
        name="twitter:image"
        content="https://iconoir.com/iconoir-brand-03.png"
      />
      <meta
        name="twitter:image:secure_url"
        content="https://iconoir.com/iconoir-brand-03.png"
      />
      <meta
        name="twitter:image:alt"
        content="The Simple and Definitive hand-crafted SVG Icons Library."
      />
      <meta
        name="twitter:description"
        content="The Simple and Definitive hand-crafted SVG Icons Library."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
