/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cortadobarbershop.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
}

module.exports = nextConfig