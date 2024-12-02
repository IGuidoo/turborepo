// apps/web/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'https://turborepo-docs-theta.vercel.app/docs'
      },
      {
        source: '/docs/:path*',
        destination: 'https://turborepo-docs-theta.vercel.app/docs/:path*'
      }
    ]
  }
};

export default nextConfig;