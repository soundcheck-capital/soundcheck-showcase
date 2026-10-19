// Unlisted partner page: noindex, not in the sitemap, no nav links.
// Design approved by BEM (Steve, Slack #product 1792019160.628759). The CTAs go to the
// Express form through /apply, which keeps ?partner=bem: that tag lands in HubSpot
// (deal.referral_partner) and in the Slack ping.
export const metadata = {
  title: 'Campaign financing for BEM clients | SoundCheck Capital',
  robots: { index: false, follow: false },
}

const APPLY_URL = '/apply?partner=bem'

const section = { maxWidth: 960, margin: '0 auto', padding: '0 24px 80px', display: 'flex', flexDirection: 'column' }
const rule = { width: 120, height: 1, background: '#C0B30B' }
const h2 = { margin: 0, fontSize: 32, lineHeight: 1.15, fontWeight: 500 }
const pill = {
  display: 'inline-flex', alignItems: 'center', minHeight: 36, padding: '0 16px',
  borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)', fontSize: 15,
}
const cta = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 56,
  padding: '0 32px', borderRadius: 999, background: '#C0B30B', color: '#231F20',
  fontSize: 19, fontWeight: 600, textDecoration: 'none',
}
const link = { color: '#FFFFFF' }

const STEPS = [
  ['01', 'Apply', 'Answer a few quick questions about your business.'],
  ['02', 'Get your offer', 'Clear terms, usually within 3–5 business days.'],
  ['03', 'Launch and repay as you sell', 'Repayment comes out of ticket sales automatically. No monthly bills.'],
]

export default function BemPage() {
  return (
    <div style={{ background: '#5F497A', color: '#FFFFFF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", minHeight: '100vh' }}>
      <header style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
        <img src="/bem/soundcheck-capital.svg" alt="SoundCheck Capital" style={{ height: 64, width: 'auto', display: 'block' }} />
        <span aria-hidden="true" style={{ fontSize: 28, fontWeight: 300, color: '#E8DDF3' }}>×</span>
        <img src="/bem/bem.png" alt="Bauer Entertainment Marketing" style={{ height: 52, width: 'auto', display: 'block' }} />
      </header>

      <section style={{ ...section, padding: '40px 24px 80px', gap: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#E8DDF3' }}>
          For Bauer Entertainment Marketing clients
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 68px)', lineHeight: 1.04, fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 820 }}>
          Launch your full campaign now. Pay for it as tickets sell.
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: '#F3EEF8', maxWidth: 640 }}>
          Fund your campaign up front with SoundCheck Capital and repay it automatically from the ticket sales it drives.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 15, color: '#E8DDF3' }}>You can fund:</span>
          <span style={pill}>BEM management fee</span>
          <span style={pill}>Paid media budget</span>
          <span style={pill}>Or both</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, paddingTop: 8 }}>
          <a href={APPLY_URL} style={cta}>See what you could get →</a>
          <span style={{ fontSize: 15, color: '#E8DDF3' }}>Takes a few minutes · No obligation</span>
        </div>
      </section>

      <section style={{ ...section, gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={rule} />
          <h2 style={h2}>How it works</h2>
        </div>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map(([n, title, text]) => (
            <li key={n} style={{ display: 'flex', flexDirection: 'column', gap: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1, color: '#C0B30B' }}>{n}</div>
              <h3 style={{ margin: 0, fontSize: 21, fontWeight: 500 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: '#F3EEF8' }}>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* The design's embed slot is a link: the form opens on its own page (Sami, 2026-10-19). */}
      <section id="apply" style={{ ...section, gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={rule} />
          <h2 style={h2}>Start your application</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: '#F3EEF8' }}>
            A few quick questions about your business. We&apos;ll be in touch within 2 business days.
          </p>
        </div>
        <div>
          <a href={APPLY_URL} style={cta}>Start your application →</a>
        </div>
        <p style={{ margin: 0, fontSize: 16, color: '#F3EEF8' }}>
          Questions? Ask your BEM rep, or email Steve at{' '}
          <a href="mailto:steve@soundcheckcapital.com" style={link}>steve@soundcheckcapital.com</a>
        </p>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px 48px', fontSize: 13, lineHeight: 1.6, color: '#E8DDF3' }}>
          SoundCheck Capital is an independent company and is not part of Bauer Entertainment Marketing. Financing is
          subject to approval and a signed agreement.{' '}
          <a href="https://soundcheckcapital.com" style={link}>soundcheckcapital.com</a>
        </div>
      </footer>
    </div>
  )
}
