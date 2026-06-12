const DEFAULT_WEBHOOK_URL =
  'https://soundcheck-capital.app.n8n.cloud/webhook/advance-request-confirm'

export async function confirmAdvanceRequest(token) {
  const webhookUrl =
    process.env.N8N_ADVANCE_REQUEST_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK_URL

  if (!webhookUrl) {
    return { status: 'backend_unavailable' }
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
    cache: 'no-store',
  })

  let data = {}
  try {
    data = await response.json()
  } catch {
    data = {}
  }

  if (response.ok) {
    const status = data.status === 'already_confirmed' ? 'already_confirmed' : 'confirmed'
    return { status }
  }

  if (response.status === 410) {
    return { status: 'expired_token' }
  }

  if (response.status === 400) {
    if (data.error === 'expired_token') {
      return { status: 'expired_token' }
    }
    return { status: 'invalid_token' }
  }

  return { status: 'backend_unavailable' }
}
