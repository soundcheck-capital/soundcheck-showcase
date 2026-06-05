'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import './RequestAdvanceConfirm.css'

const VIEW = {
  loading: {
    icon: 'loading',
    title: 'Confirming your request...',
    message: 'Please wait while we register your advance request.',
  },
  confirmed: {
    icon: 'success',
    title: 'Request received!',
    message:
      "We've received your request for a new advance. Our team will be in touch soon.",
  },
  already_confirmed: {
    icon: 'success',
    title: 'Request already received',
    message:
      'We already have your request on file. Our team will be in touch soon.',
  },
  missing_token: {
    icon: 'error',
    title: 'Invalid link',
    message:
      'This link is missing required information. Please use the button from your Monday reminder email.',
  },
  invalid_token: {
    icon: 'error',
    title: 'Invalid link',
    message:
      'This link is not valid. Please use the button from your most recent Monday reminder email.',
  },
  expired_token: {
    icon: 'error',
    title: 'Link expired',
    message:
      'This link has expired. Please wait for your next Monday reminder email or contact our team.',
  },
  backend_unavailable: {
    icon: 'error',
    title: 'Something went wrong',
    message:
      "We couldn't confirm your request right now. Please try again in a few minutes or contact our team.",
  },
}

function ConfirmContent() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [viewKey, setViewKey] = useState(token ? 'loading' : 'missing_token')

  useEffect(() => {
    if (!token) {
      return
    }

    let cancelled = false

    async function confirmRequest() {
      try {
        const response = await fetch('/api/request-advance/confirm', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        })

        const data = await response.json()
        const status = VIEW[data.status] ? data.status : 'backend_unavailable'

        if (!cancelled) {
          setViewKey(status)
        }
      } catch {
        if (!cancelled) {
          setViewKey('backend_unavailable')
        }
      }
    }

    confirmRequest()

    return () => {
      cancelled = true
    }
  }, [token])

  const view = VIEW[viewKey]

  return (
    <div className="request-advance-confirm">
      <div className="request-advance-confirm-inner">
        <div className="request-advance-confirm-card">
          <div className="request-advance-confirm-icon-wrap">
            <div
              className={`request-advance-confirm-icon request-advance-confirm-icon--${view.icon}`}
            >
              {view.icon === 'loading' && (
                <div className="request-advance-confirm-spinner" aria-hidden="true" />
              )}
              {view.icon === 'success' && (
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {view.icon === 'error' && (
                <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>

          <h1 className="request-advance-confirm-title">{view.title}</h1>
          <p className="request-advance-confirm-message" role="status" aria-live="polite">
            {view.message}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function RequestAdvanceConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="request-advance-confirm">
          <div className="request-advance-confirm-inner">
            <div className="request-advance-confirm-card">
              <p className="request-advance-confirm-message">Loading...</p>
            </div>
          </div>
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  )
}
