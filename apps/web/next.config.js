// apps/web/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: 'https://turborepo-docs-theta.vercel.app/:path*' // Remove /docs from destination
      }
    ]
  }
};

export default nextConfig;