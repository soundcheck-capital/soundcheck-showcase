'use client'

import { useEffect } from 'react'
import { clickEvent } from '../utils/tracking'

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

// Cookieless PostHog (US cloud), proxied through /ingest (see next.config.js).
// persistence 'memory' = no cookie, no localStorage, so no consent banner.
// Nothing loads or fires when NEXT_PUBLIC_POSTHOG_KEY is unset.
export default function PostHogProvider({ children }) {
  useEffect(() => {
    if (!KEY) return
    let posthog
    // Dynamic import: posthog-js isn't even downloaded when the key is unset.
    import('posthog-js').then(({ default: ph }) => {
      posthog = ph
      posthog.init(KEY, {
        api_host: '/ingest',
        ui_host: 'https://us.posthog.com',
        persistence: 'memory',
        capture_pageview: 'history_change',
        capture_pageleave: true,
        person_profiles: 'identified_only',
      })
    })

    // One delegated listener instead of an onClick on every CTA: links are
    // classified by href, buttons opt in with data-ph-event.
    const onClick = (e) => {
      if (!posthog) return
      const el = e.target.closest?.('a[href], [data-ph-event]')
      if (!el) return
      const event = clickEvent({ explicit: el.dataset.phEvent, href: el.getAttribute('href') }, window.location.href)
      if (!event) return
      const location = el.closest('[data-ph-location]')?.dataset.phLocation
        ?? el.closest('header, footer')?.localName
        ?? (window.location.pathname.split('/')[1] || 'home')
      posthog.capture(event, { location })
    }
    document.addEventListener('click', onClick, true)

    // Partner forms (finance.soundcheckcapital.com/<partner>/, in an iframe via
    // ExpressEmbed) post soundcheck-express:submitted after a successful submit.
    // Only trust messages from an iframe on this page.
    const onMessage = (e) => {
      if (!posthog || e.data?.type !== 'soundcheck-express:submitted') return
      if (![...document.querySelectorAll('iframe')].some((f) => f.contentWindow === e.source)) return
      const partner = typeof e.data.partner === 'string' && e.data.partner
        ? e.data.partner
        : window.location.pathname.split('/')[1]
      posthog.capture('express_form_submitted', { partner, location: partner })
    }
    window.addEventListener('message', onMessage)

    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('message', onMessage)
    }
  }, [])

  return children
}
