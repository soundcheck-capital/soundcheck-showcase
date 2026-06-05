const DEFAULT_CONFIRM_PATH = '/api/advance-requests/confirm'

export async function confirmAdvanceRequest(token) {
  const backendUrl = process.env.APPLICATION_FORM_BACKEND_URL?.replace(/\/$/, '')
  const confirmPath =
    process.env.APPLICATION_FORM_BACKEND_CONFIRM_PATH || DEFAULT_CONFIRM_PATH

  if (!backendUrl) {
    return { status: 'backend_unavailable' }
  }

  const response = await fetch(`${backendUrl}${confirmPath}`, {
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
