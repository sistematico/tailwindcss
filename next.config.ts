import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/tailwindcss' : '',
  output: 'export',
};

export default nextConfig;