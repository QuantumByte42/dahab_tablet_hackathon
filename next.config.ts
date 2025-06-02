import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Disable telemetry in production
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false,
  },
  
  // Configure images domain if needed
  images: {
    domains: [],
    unoptimized: true, // Disable image optimization for easier deployment
  },
  
  // Experimental features can be added here if needed
  experimental: {
    // App directory is now stable in Next.js 15
  },
};

export default nextConfig;
