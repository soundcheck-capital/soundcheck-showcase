/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Legacy / shorthand links to the Terms of Service. www → apex and the
  // trailing-slash variants are already 301'd by Netlify and Next respectively.
  async redirects() {
    return [
      { source: '/terms', destination: '/terms-of-service', permanent: true },
      { source: '/tos', destination: '/terms-of-service', permanent: true },
    ]
  },
}

module.exports = nextConfig

