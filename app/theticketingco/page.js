import ExpressEmbed from '../../components/ExpressEmbed'

// Unlisted partner page: noindex, not in the sitemap, no nav links.
// Design from Steve (Slack C08RK7YDX3L 1792618666.036389), same layout as /bem. Embeds the short
// Ticketing Co. form, not the Express application: its ticketing-company question lists their competitors
// (Slack 1793041252.240419). The n8n website webhook tags the HubSpot deal referral_partner=theticketingco
// with the funding requested as the amount.
export const metadata = {
  title: 'Funding for The Ticketing Co. organizers | SoundCheck Capital',
  robots: { index: false, follow: false },
}

// Posts its height like the Express form does, so ExpressEmbed sizes the iframe.
const FORM_URL = 'https://finance.soundcheckcapital.com/theticketingco/'

const section = { maxWidth: 960, margin: '0 auto', padding: '0 24px 80px', display: 'flex', flexDirection: 'column' }
const rule = { width: 120, height: 1, background: '#6184C3' }
const h2 = { margin: 0, fontSize: 32, lineHeight: 1.15, fontWeight: 500 }
const pill = {
  display: 'inline-flex', alignItems: 'center', minHeight: 36, padding: '0 16px',
  borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)', fontSize: 15,
}
const cta = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 56,
  padding: '0 32px', borderRadius: 999, background: '#0048FF', color: '#FFFFFF',
  fontSize: 19, fontWeight: 600, textDecoration: 'none',
}
const card = {
  display: 'flex', flexDirection: 'column', gap: 10, background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.18)', borderRadius: 20, padding: 28,
}
const cardText = { margin: 0, fontSize: 16, lineHeight: 1.5, color: '#E3E9F4' }
const link = { color: '#FFFFFF' }

const WHY = [
  ['Not a loan', 'No monthly payments. Repayment only comes from your ticket sales.'],
  ['You keep the upside', 'No ownership stake and no share of your profits.'],
  ['Nothing changes for fans', 'Keep selling on The Ticketing Co. exactly as you do now.'],
]

const STEPS = [
  ['01', 'Apply', 'Tell us about your business and what you need funded.'],
  ['02', 'Get your offer', 'Clear terms, usually within 3–5 business days.'],
  ['03', 'Get funded and repay as you sell', 'Repayment comes out of your ticket sales through The Ticketing Co. No monthly bills.'],
]

function SectionTitle({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={rule} />
      <h2 style={h2}>{children}</h2>
    </div>
  )
}

export default function TheTicketingCoPage() {
  return (
    <div style={{ background: '#0B1320', color: '#FFFFFF', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", minHeight: '100vh' }}>
      <header style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
        <img src="/bem/soundcheck-capital.svg" alt="SoundCheck Capital" style={{ height: 64, width: 'auto', display: 'block' }} />
        <span aria-hidden="true" style={{ fontSize: 28, fontWeight: 300, color: '#C9D3E6' }}>×</span>
        <img src="/theticketingco/the-ticketing-co.svg" alt="The Ticketing Co." style={{ height: 48, width: 'auto', display: 'block' }} />
      </header>

      <section style={{ ...section, padding: '40px 24px 80px', gap: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9D3E6' }}>
          For The Ticketing Co. organizers
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(40px, 7vw, 68px)', lineHeight: 1.04, fontWeight: 500, letterSpacing: '-0.02em', maxWidth: 820 }}>
          Fund your next show now. Pay it back as tickets sell.
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.5, color: '#E3E9F4', maxWidth: 660 }}>
          Get cash up front from SoundCheck Capital for the costs that land before your on-sale, repaid automatically
          from your ticket sales through The Ticketing Co.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 15, color: '#C9D3E6' }}>You can fund:</span>
          <span style={pill}>Artist deposits</span>
          <span style={pill}>Marketing campaigns</span>
          <span style={pill}>Production and venue costs</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, paddingTop: 8 }}>
          <a href="#apply" style={cta}>Apply for funding →</a>
          <span style={{ fontSize: 15, color: '#C9D3E6' }}>Funding from $10K to $1M · Takes a few minutes · No obligation</span>
        </div>
      </section>

      <section style={{ ...section, gap: 32 }}>
        <SectionTitle>Why SoundCheck</SectionTitle>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {WHY.map(([title, text]) => (
            <li key={title} style={card}>
              <h3 style={{ margin: 0, fontSize: 21, fontWeight: 500 }}>{title}</h3>
              <p style={cardText}>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ ...section, gap: 32 }}>
        <SectionTitle>How it works</SectionTitle>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map(([n, title, text]) => (
            <li key={n} style={card}>
              <div style={{ fontSize: 26, fontWeight: 600, lineHeight: 1, color: '#8FA9DA' }}>{n}</div>
              <h3 style={{ margin: 0, fontSize: 21, fontWeight: 500 }}>{title}</h3>
              <p style={cardText}>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="apply" style={{ ...section, gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={rule} />
          <h2 style={h2}>Start your application</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: '#E3E9F4' }}>
            A few quick questions and how much you need. We&apos;ll reach out within 2 business days, and most offers
            come within 3–5.
          </p>
        </div>
        <ExpressEmbed src={FORM_URL} title="The Ticketing Co. funding application" />
        <p style={{ margin: 0, fontSize: 16, color: '#E3E9F4' }}>
          Questions? Ask your Ticketing Co. contact, or email Steve at{' '}
          <a href="mailto:steve@soundcheckcapital.com" style={link}>steve@soundcheckcapital.com</a>
        </p>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px 48px', fontSize: 13, lineHeight: 1.6, color: '#C9D3E6' }}>
          SoundCheck Capital is an independent company and is not part of The Ticketing Co. Funding is subject to
          approval and a signed agreement.{' '}
          <a href="https://soundcheckcapital.com" style={link}>soundcheckcapital.com</a>
        </div>
      </footer>
    </div>
  )
}
