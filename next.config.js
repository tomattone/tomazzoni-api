/** @type {import('next').NextConfig} */
const nextConfig = {
  // servidor enxuto (.next/standalone) em vez do node_modules inteiro no servidor (2026-11-02)
  output: "standalone",
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
