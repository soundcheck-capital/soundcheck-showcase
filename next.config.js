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
      // Shareable short link to the Express form (separate app). Temporary so
      // browsers don't cache it if the form URL ever changes.
      { source: '/apply', destination: 'https://express-application.soundcheckcapital.com/express', permanent: false },
    ]
  },
}

module.exports = nextConfig

