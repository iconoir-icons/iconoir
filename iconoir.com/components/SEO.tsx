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
      <link rel="canonical" href="https://iconoir.com/" />
      <meta
        name="description"
        content="Iconoir is the biggest open source icon library that provides a massive selection of high-quality icons, available for free download. 
        No premium options or email sign-up required, free for real. Icons available in SVG, 
        Font, React, React Native, and Flutter libraries, Figma and Framer."
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
        content="Iconoir is the biggest open source icon library that provides a massive selection of high-quality icons, available for free download. 
        No premium options or email sign-up required, free for real. Icons available in SVG, 
        Font, React, React Native, and Flutter libraries, Figma and Framer."
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
        content="The biggest open source icon library with tons of free icons."
      />
      <meta
        name="twitter:description"
        content="The biggest open source icon library with tons of free icons."
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
