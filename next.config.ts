import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  // Enable static export for standalone mode
  output: 'standalone',
  // Enable source maps in development
  productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
  // Configure page extensions
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Configure images with remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  // Configure Turbopack root directory
  turbopack: {
    root: '.'
  },
  // Experimental features
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
  },
};

export default nextConfig;