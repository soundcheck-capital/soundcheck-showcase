import { Anton, Archivo } from 'next/font/google'
import ExpressEmbed from '../../components/ExpressEmbed'

// Unlisted partner page: noindex, not in the sitemap, no nav links.
// Design from Steve (Slack C08RK7YDX3L 1792773787.183289), same layout as /bem. Embeds the light Hive form
// (sliders + Hive quote, no bank connection): the n8n website webhook creates contact + company + deal
// in HubSpot tagged referral_partner=hive with the quote on the deal.
export const metadata = {
  title: 'Finance your Hive plan | SoundCheck Capital',
  robots: { index: false, follow: false },
}

// Anton and Archivo stand in for Hive's FK Screamer and FT Regola (not on Google Fonts).
const display = Anton({ weight: '400', subsets: ['latin'] })
const body = Archivo({ weight: ['400', '500', '600'], subsets: ['latin'] })

// Posts its height like the Express form does, so ExpressEmbed sizes the iframe.
const FORM_URL = 'https://finance.soundcheckcapital.com/hive/'

const YELLOW = '#FFE53A'
const section = { maxWidth: 960, margin: '0 auto', padding: '0 24px 80px', display: 'flex', flexDirection: 'column' }
const rule = { width: 120, height: 3, background: YELLOW }
const h2 = { ...display.style, margin: 0, fontWeight: 400, fontSize: 44, lineHeight: 1.05, textTransform: 'uppercase' }
const pill = {
  display: 'inline-flex', alignItems: 'center', minHeight: 36, padding: '0 16px',
  border: '1px solid rgba(255,255,255,0.35)', fontSize: 15,
}
const cta = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 56,
  padding: '0 32px', background: '#FFFFFF', color: '#131417', fontSize: 18, fontWeight: 600, textDecoration: 'none',
}
const link = { color: '#FFFFFF' }

const STEPS = [
  ['01', 'Apply', 'Enter your quote and answer a few quick questions about your business.'],
  ['02', 'Get your offer', 'Clear terms, usually within 3–5 business days.'],
  ['03', 'Launch and repay as you sell', 'SoundCheck pays Hive up front. Repayment comes out of ticket sales automatically.'],
]

function SectionTitle({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={rule} />
      <h2 style={h2}>{children}</h2>
    </div>
  )
}

export default function HivePage() {
  return (
    <div style={{ ...body.style, background: '#131417', color: '#FFFFFF', minHeight: '100vh' }}>
      <header style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
        <img src="/bem/soundcheck-capital.svg" alt="SoundCheck Capital" style={{ height: 64, width: 'auto', display: 'block' }} />
        <span aria-hidden="true" style={{ fontSize: 28, fontWeight: 300, color: '#C9CBD1' }}>×</span>
        <img src="/hive/hive.png" alt="Hive" style={{ height: 40, width: 'auto', display: 'block' }} />
      </header>

      <section style={{ ...section, padding: '40px 24px 80px', gap: 24 }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9CBD1' }}>
          For Hive clients
        </div>
        <h1 style={{ ...display.style, margin: 0, fontWeight: 400, fontSize: 'clamp(52px, 9vw, 96px)', lineHeight: 0.98, textTransform: 'uppercase', letterSpacing: '0.005em', maxWidth: 880 }}>
          <span style={{ color: YELLOW, fontStyle: 'italic' }}>Start with Hive now.</span> Pay for it as tickets sell.
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: '#E4E5E8', maxWidth: 640 }}>
          Fund your Hive plan or SMS package up front with SoundCheck Capital and repay it automatically from your ticket sales.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 15, color: '#C9CBD1' }}>You can fund:</span>
          <span style={pill}>A Hive subscription</span>
          <span style={pill}>A prepaid SMS package</span>
          <span style={pill}>Or both</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, paddingTop: 8 }}>
          <a href="#apply" style={cta}>Finance your Hive plan →</a>
          <span style={{ fontSize: 15, color: '#C9CBD1' }}>Takes a few minutes · No obligation</span>
        </div>
      </section>

      <section style={{ ...section, gap: 32 }}>
        <SectionTitle>How it works</SectionTitle>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map(([n, title, text]) => (
            <li key={n} style={{ display: 'flex', flexDirection: 'column', gap: 10, background: '#1E2026', border: '1px solid rgba(255,255,255,0.18)', padding: 28 }}>
              <div style={{ ...display.style, fontSize: 34, lineHeight: 1, color: YELLOW }}>{n}</div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: '#E4E5E8' }}>{text}</p>
            </li>
          ))}
        </ol>
        <p style={{ margin: '-8px 0 0', fontSize: 15, lineHeight: 1.5, color: '#C9CBD1' }}>
          <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>One requirement:</strong> you&apos;ll need to sell tickets
          through a platform that can send payments to SoundCheck, or use your own Stripe account. Not sure? Ask your Hive
          rep or <a href="mailto:steve@soundcheckcapital.com" style={link}>email Steve</a>.
        </p>
      </section>

      <section id="apply" style={{ ...section, gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={rule} />
          <h2 style={h2}>Start your application</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: '#E4E5E8' }}>
            Enter your quote and a few details about your business. We&apos;ll be in touch within 2 business days.
          </p>
        </div>
        <ExpressEmbed src={FORM_URL} title="SoundCheck Capital application for Hive clients" />
        <p style={{ margin: 0, fontSize: 16, color: '#E4E5E8' }}>
          Questions? Ask your Hive rep, or email Steve at{' '}
          <a href="mailto:steve@soundcheckcapital.com" style={link}>steve@soundcheckcapital.com</a>
        </p>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px 48px', fontSize: 13, lineHeight: 1.6, color: '#B5B8C0' }}>
          SoundCheck Capital is an independent company and is not part of Hive. Financing is subject to approval and a
          signed agreement.{' '}
          <a href="https://soundcheckcapital.com" style={link}>soundcheckcapital.com</a>
        </div>
      </footer>
    </div>
  )
}
