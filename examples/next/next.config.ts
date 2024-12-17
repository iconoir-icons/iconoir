import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['iconoir-react'],
  },
};

export default nextConfig;
