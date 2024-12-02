// apps/web/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'https://turborepo-docs-theta.vercel.app'
      },
      {
        source: '/docs/:path*',
        destination: 'https://turborepo-docs-theta.vercel.app/:path*'
      }
    ]
  }
};

export default nextConfig;