import '../QboStatus.css'

export const metadata = {
  title: 'Connect QuickBooks Online | SoundCheck Capital',
  description: 'How a QuickBooks Online company is connected to, or reconnected with, SoundCheck Capital.',
  robots: { index: false },
}

// ponytail: a page, not a redirect. The QBO authorization is held by n8n's
// built-in quickBooksOAuth2Api credential, whose consent flow only starts from
// the authenticated n8n UI — there is no public URL to redirect to, and n8n
// rejects a callback whose `state` it did not issue. Replace this with a real
// /qbo/connect + /qbo/callback pair if customers ever self-connect their books.
export default function QboConnectPage() {
  return (
    <div className="qbo">
      <div className="qbo-card">
        <div className="qbo-icon qbo-icon--neutral">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" d="M9 17H7A5 5 0 017 7h2M15 7h2a5 5 0 010 10h-2M8 12h8" />
          </svg>
        </div>

        <h1 className="qbo-title">Connect QuickBooks Online</h1>

        <p>
          SoundCheck Capital connects to your QuickBooks Online company as part of onboarding your
          advance. The connection is set up with you by our team, so there is nothing to install.
        </p>

        <h2 className="qbo-title" style={{ fontSize: '18px', marginTop: '24px' }}>
          To connect or reconnect
        </h2>
        <ol>
          <li>
            Email <a href="mailto:support@soundcheckcapital.com">support@soundcheckcapital.com</a> with
            the name of the QuickBooks company you want connected.
          </li>
          <li>We send you an Intuit authorization link for that company.</li>
          <li>
            Sign in to Intuit, approve the requested permissions, and you land on our{' '}
            <a href="/qbo/launch">confirmation page</a>.
          </li>
        </ol>

        <p>
          You can revoke access at any time from the Apps section of your QuickBooks Online account —
          see <a href="/qbo/disconnect">disconnecting</a>. What we do with the data is covered by our{' '}
          <a href="/privacy-policy">Privacy Policy</a> and{' '}
          <a href="/end-user-license-agreement">End-User License Agreement</a>.
        </p>
      </div>
    </div>
  )
}
