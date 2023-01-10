/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/docs', destination: '/docs/introduction', permanent: true },
    ];
  },
};

module.exports = nextConfig;
