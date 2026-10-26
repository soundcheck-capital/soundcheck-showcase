import { Poppins } from 'next/font/google'
import ExpressEmbed from '../../components/ExpressEmbed'

// Unlisted partner page: noindex, not in the sitemap, no nav links.
// Design from Steve (Slack C08RK7YDX3L 1792773787.183289, "Prism colors" page), same layout as /bem. Embeds the
// light Prism form (sliders + Prism quote, no bank connection): the n8n website webhook creates contact + company
// + deal in HubSpot tagged referral_partner=prism with the quote on the deal.
export const metadata = {
  title: 'Finance your Prism plan | SoundCheck Capital',
  robots: { index: false, follow: false },
}

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

// Posts its height like the Express form does, so ExpressEmbed sizes the iframe.
const FORM_URL = 'https://finance.soundcheckcapital.com/prism/'

const section = { maxWidth: 960, margin: '0 auto', padding: '0 24px 80px', display: 'flex', flexDirection: 'column' }
const rule = { width: 120, height: 2, background: '#FFFFFF' }
const h2 = { margin: 0, fontSize: 32, lineHeight: 1.15, fontWeight: 600 }
const pill = {
  display: 'inline-flex', alignItems: 'center', minHeight: 36, padding: '0 16px',
  borderRadius: 999, border: '1px solid rgba(255,255,255,0.4)', fontSize: 15,
}
const cta = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 56,
  padding: '0 32px', borderRadius: 999, background: '#FFFFFF', color: '#8412AF',
  fontSize: 18, fontWeight: 600, textDecoration: 'none',
}
const link = { color: '#FFFFFF' }

const STEPS = [
  ['01', 'Apply', 'Enter your quote and answer a few quick questions about your business.'],
  ['02', 'Get your offer', 'Clear terms, usually within 3–5 business days.'],
  ['03', 'Start Prism, repay as you sell', 'SoundCheck pays Prism for your year. Repayment comes out of ticket sales automatically.'],
]

function SectionTitle({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={rule} />
      <h2 style={h2}>{children}</h2>
    </div>
  )
}

export default function PrismPage() {
  return (
    <div style={{ ...poppins.style, background: 'linear-gradient(180deg, #6450C1 0%, #8412AF 100%)', color: '#FFFFFF', minHeight: '100vh' }}>
      <header style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
        <img src="/bem/soundcheck-capital.svg" alt="SoundCheck Capital" style={{ height: 64, width: 'auto', display: 'block' }} />
        <span aria-hidden="true" style={{ fontSize: 28, fontWeight: 300, color: '#EDE8FA' }}>×</span>
        <img src="/prism/prism.png" alt="Prism.fm" style={{ height: 52, width: 'auto', display: 'block' }} />
      </header>

      <section style={{ ...section, padding: '40px 24px 80px', gap: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EDE8FA' }}>
          For Prism.fm clients
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 64px)', lineHeight: 1.08, fontWeight: 700, letterSpacing: '-0.01em', maxWidth: 840 }}>
          Start with Prism now. Pay for it as tickets sell.
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: '#F6F3FD', maxWidth: 640 }}>
          Fund your full year of Prism up front with SoundCheck Capital and repay it automatically from your ticket sales.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 15, color: '#EDE8FA' }}>You can fund:</span>
          <span style={pill}>A year of Prism</span>
          <span style={pill}>More venues or team members</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, paddingTop: 8 }}>
          <a href="#apply" style={cta}>Finance your Prism plan →</a>
          <span style={{ fontSize: 15, color: '#EDE8FA' }}>Takes a few minutes · No obligation</span>
        </div>
      </section>

      <section style={{ ...section, gap: 32 }}>
        <SectionTitle>How it works</SectionTitle>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map(([n, title, text]) => (
            <li key={n} style={{ display: 'flex', flexDirection: 'column', gap: 10, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 20, padding: 28 }}>
              <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>{n}</div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: '#F6F3FD' }}>{text}</p>
            </li>
          ))}
        </ol>
        <p style={{ margin: '-8px 0 0', fontSize: 15, lineHeight: 1.5, color: '#EDE8FA' }}>
          <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>One requirement:</strong> you&apos;ll need to sell tickets
          through a platform that can send payments to SoundCheck, or use your own Stripe account. Not sure? Ask your Prism
          account manager or <a href="mailto:steve@soundcheckcapital.com" style={link}>email Steve</a>.
        </p>
      </section>

      <section id="apply" style={{ ...section, gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={rule} />
          <h2 style={h2}>Start your application</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: '#F6F3FD' }}>
            Enter your quote and a few details about your business. We&apos;ll be in touch within 2 business days.
          </p>
        </div>
        <ExpressEmbed src={FORM_URL} title="SoundCheck Capital application for Prism clients" />
        <p style={{ margin: 0, fontSize: 16, color: '#F6F3FD' }}>
          Questions? Ask your Prism account manager, or email Steve at{' '}
          <a href="mailto:steve@soundcheckcapital.com" style={link}>steve@soundcheckcapital.com</a>
        </p>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px 48px', fontSize: 13, lineHeight: 1.6, color: '#EDE8FA' }}>
          SoundCheck Capital is an independent company and is not part of Prism.fm. Financing is subject to approval and a
          signed agreement.{' '}
          <a href="https://soundcheckcapital.com" style={link}>soundcheckcapital.com</a>
        </div>
      </footer>
    </div>
  )
}
