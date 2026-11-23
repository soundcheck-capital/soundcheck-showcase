import './globals.css'
import Script from 'next/script'
import LayoutClient from '../components/LayoutClient'

const TITLE = 'SoundCheck Capital | Ticket Sales Advances for Live Events'
const DESCRIPTION = 'Revenue-based ticket sales advances for US promoters, venues and festivals. Repay as a share of ticket sales and keep your ticketing company.'

// ponytail: no title.template — every sub-page already ends its title with
// "| SoundCheck Capital", so a template would double the suffix.
// No canonical here either: it would cascade to every page. Pages set their own.
export const metadata = {
  metadataBase: new URL('https://soundcheckcapital.com'),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'SoundCheck Capital',
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

// HubSpot tracking code. Sets cookies: only set the portal ID once HubSpot's
// cookie consent banner is enabled (see README). Portal is on app.hubspot.com
// (US), hence js.hs-scripts.com; EU portals use js-eu1.hs-scripts.com.
const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
const HUBSPOT_SCRIPT_HOST = process.env.NEXT_PUBLIC_HUBSPOT_SCRIPT_HOST || 'js.hs-scripts.com'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geologica:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
        {HUBSPOT_PORTAL_ID && (
          <Script id="hs-script-loader" strategy="afterInteractive" src={`https://${HUBSPOT_SCRIPT_HOST}/${HUBSPOT_PORTAL_ID}.js`} />
        )}
      </body>
    </html>
  )
}

