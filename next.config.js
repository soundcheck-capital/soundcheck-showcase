/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // PostHog reverse proxy (EU), so analytics isn't blocked as third-party.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: '/ingest/static/:path*', destination: 'https://eu-assets.i.posthog.com/static/:path*' },
      { source: '/ingest/:path*', destination: 'https://eu.i.posthog.com/:path*' },
    ]
  },
  // Legacy / shorthand links to the Terms of Service. www → apex and the
  // trailing-slash variants are already 301'd by Netlify and Next respectively.
  async redirects() {
    return [
      // skipTrailingSlashRedirect (for PostHog) turns off Next's own /page/ → /page
      // redirect; this puts it back for everything except the /ingest proxy.
      { source: '/:path((?!ingest/).+)/', destination: '/:path', permanent: true },
      { source: '/terms', destination: '/terms-of-service', permanent: true },
      { source: '/tos', destination: '/terms-of-service', permanent: true },
      // Shareable short link to the Express form (separate app). Temporary so
      // browsers don't cache it if the form URL ever changes.
      { source: '/apply', destination: 'https://express-application.soundcheckcapital.com/express', permanent: false },
    ]
  },
}

module.exports = nextConfig

