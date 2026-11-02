/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // endereços curtos usados pelos formulários dos sites
  async rewrites() {
    return [
      { source: '/email', destination: '/api/email' },
      { source: '/email-attach', destination: '/api/email-attach' },
    ]
  },
}

module.exports = nextConfig
