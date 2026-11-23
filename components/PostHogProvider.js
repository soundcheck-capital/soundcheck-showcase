'use client'

import { useEffect } from 'react'
import { clickEvent } from '../utils/tracking'

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY

// Cookieless PostHog (EU), proxied through /ingest (see next.config.js).
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
        ui_host: 'https://eu.posthog.com',
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
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return children
}
