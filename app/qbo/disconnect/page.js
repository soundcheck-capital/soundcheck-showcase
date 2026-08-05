import '../QboStatus.css'

export const metadata = {
  title: 'QuickBooks Online Disconnected | SoundCheck Capital',
  description: 'Confirmation that your QuickBooks Online company is disconnected from SoundCheck Capital, and how to reconnect.',
  robots: { index: false },
}

export default function QboDisconnectPage() {
  return (
    <div className="qbo">
      <div className="qbo-card">
        <div className="qbo-icon qbo-icon--neutral">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" d="M9 17H7A5 5 0 017 7h2M15 7h2a5 5 0 010 10h-2M4 20L20 4" />
          </svg>
        </div>

        <h1 className="qbo-title">QuickBooks Online is disconnected</h1>

        <p>
          SoundCheck Capital no longer has access to your QuickBooks Online company. We stopped
          reading new data immediately; data we already received is retained or deleted as described
          in our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>Features that rely on your accounting data are unavailable until you reconnect.</p>

        <h2 className="qbo-title" style={{ fontSize: '18px', marginTop: '24px' }}>
          To reconnect
        </h2>
        <ol>
          <li>
            Start the authorization flow at <a href="/qbo/connect">soundcheckcapital.com/qbo/connect</a>.
          </li>
          <li>Sign in to Intuit and pick the company you want to connect.</li>
          <li>Approve the requested permissions — you will land back on a confirmation page.</li>
        </ol>

        <p>
          Need help? Email <a href="mailto:support@soundcheckcapital.com">support@soundcheckcapital.com</a>.
        </p>
      </div>
    </div>
  )
}
