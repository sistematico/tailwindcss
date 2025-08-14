import createMDX from '@next/mdx' 
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/tailwindcss' : '',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'export',
};
 
const withMDX = createMDX({})

export default withMDX(nextConfig)