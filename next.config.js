/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'symbols.getvecta.com', 'img.icons8.com', 'cdn.sanity.io'],
  },
}

module.exports = nextConfig
