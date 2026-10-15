import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { imageHosts } from './image-hosts.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Anchor output file tracing to this project so a stray lockfile in a parent
  // directory (e.g. C:\Users\User\package-lock.json) is not inferred as the root.
  outputFileTracingRoot: __dirname,
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    qualities: [75, 85, 100],
  }
};
export default nextConfig;