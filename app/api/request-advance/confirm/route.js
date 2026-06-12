import { confirmAdvanceRequest } from '../../../../services/requestAdvanceConfirm'

export async function POST(request) {
  let body

  try {
    body = await request.json()
  } catch {
    return Response.json({ status: 'invalid_token' }, { status: 400 })
  }

  const token = typeof body.token === 'string' ? body.token.trim() : ''

  if (!token) {
    return Response.json({ status: 'missing_token' }, { status: 400 })
  }

  const result = await confirmAdvanceRequest(token)

  if (result.status === 'backend_unavailable') {
    return Response.json({ status: 'backend_unavailable' }, { status: 503 })
  }

  if (result.status === 'invalid_token' || result.status === 'expired_token') {
    return Response.json({ status: result.status }, { status: 400 })
  }

  return Response.json({ status: result.status })
}
