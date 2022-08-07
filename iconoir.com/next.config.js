/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  async redirects() {
    return [
      { source: '/docs', destination: '/docs/introduction', permanent: true }
    ]
  }
};

module.exports = nextConfig;
