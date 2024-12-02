/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/docs/:path*',
          destination: '/docs/:path*'
        }
      ]
    }
  }
};

export default nextConfig;