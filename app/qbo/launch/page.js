import '../QboStatus.css'

export const metadata = {
  title: 'QuickBooks Online Connected | SoundCheck Capital',
  description: 'Confirmation that your QuickBooks Online company is connected to SoundCheck Capital.',
  robots: { index: false },
}

export default function QboLaunchPage({ searchParams }) {
  // Intuit appends realmId when it opens the launch URL from inside QuickBooks.
  const realmId = typeof searchParams?.realmId === 'string' ? searchParams.realmId : null

  return (
    <div className="qbo">
      <div className="qbo-card">
        <div className="qbo-icon">
          <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <h1 className="qbo-title">QuickBooks Online is connected</h1>

        <p>
          SoundCheck Capital is authorized to access your QuickBooks Online company. Your accounting
          data is used only to service your advance, as described in our{' '}
          <a href="/privacy-policy">Privacy Policy</a> and{' '}
          <a href="/end-user-license-agreement">End-User License Agreement</a>.
        </p>
        <p>
          You can revoke this access at any time from the Apps section of your QuickBooks Online
          account, or from <a href="/qbo/disconnect">this page</a>.
        </p>
        <p>
          Questions? Email <a href="mailto:support@soundcheckcapital.com">support@soundcheckcapital.com</a>.
        </p>

        {realmId && <p className="qbo-realm">Connected company ID: {realmId}</p>}
      </div>
    </div>
  )
}
