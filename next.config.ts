import type { NextConfig } from "next";

const nextConfig = {
  compiler: {
    // Removes all console.* calls only in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
