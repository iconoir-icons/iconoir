import Head from 'next/head';
import { useRouter } from 'next/router';

const TITLE_SUFFIX = 'Iconoir | Free Icons';

export interface SEOProps {
  title?: string;
  description?: string;
  /** schema.org structured data, rendered as JSON-LD. */
  jsonLd?: object;
}

export function SEO({ title, description, jsonLd }: SEOProps) {
  const { asPath } = useRouter();
  const pageTitle = title ? `${title} | ${TITLE_SUFFIX}` : TITLE_SUFFIX;
  const pageDescription = description;

  const pathWithoutQuery = asPath.split(/[?#]/)[0];

  const canonicalUrl = `https://iconoir.com${
    pathWithoutQuery !== '/' ? pathWithoutQuery : ''
  }`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={pageDescription} />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content="Iconoir" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content="https://iconoir.com/iconoir-brand.png"
      />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image:width" content="1270" />
      <meta property="og:image:height" content="760" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:domain" content="iconoir.com" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta
        name="twitter:image"
        content="https://iconoir.com/iconoir-brand.png"
      />
      <meta
        name="twitter:image:secure_url"
        content="https://iconoir.com/iconoir-brand.png"
      />
      <meta
        name="twitter:image:alt"
        content="The biggest open source icon library with tons of free icons."
      />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:card" content="summary_large_image" />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
