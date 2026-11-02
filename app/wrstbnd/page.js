import { Anek_Latin, Work_Sans } from 'next/font/google'
import ExpressEmbed from '../../components/ExpressEmbed'
import PartnerFAQ from '../../components/PartnerFAQ'

// Unlisted partner page: noindex, not in the sitemap, no nav links.
// Design from Steve (Slack C08RK7YDX3L 1793596430.698279), same layout as /hive. Embeds the light WRSTBND form
// (sliders + WRSTBND quote, no bank connection): the n8n website webhook creates contact + company + deal
// in HubSpot tagged referral_partner=wrstbnd with the quote on the deal.
export const metadata = {
  title: 'Finance your WRSTBND order | SoundCheck Capital',
  robots: { index: false, follow: false },
}

const display = Anek_Latin({ weight: ['500'], subsets: ['latin'] })
const body = Work_Sans({ weight: ['400', '500', '600'], subsets: ['latin'] })

// Posts its height like the Express form does, so ExpressEmbed sizes the iframe.
const FORM_URL = 'https://finance.soundcheckcapital.com/wrstbnd/'

const PINK = '#FF52B2'
const MUTED = '#9DB1C8'
const TEXT = '#C3D2E2'
const GRADIENT = 'linear-gradient(120deg, #FF52B2 0%, #D7339A 55%, #B3247F 100%)'
const section = { maxWidth: 960, margin: '0 auto', padding: '0 24px 80px', display: 'flex', flexDirection: 'column' }
const eyebrow = { display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }
const h2 = { ...display.style, margin: 0, fontWeight: 500, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.01em' }
const pill = {
  display: 'inline-flex', alignItems: 'center', minHeight: 36, padding: '0 16px',
  border: '1px solid rgba(233,241,250,0.28)', borderRadius: 999, fontSize: 15,
}
const cta = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 56, padding: '0 32px',
  borderRadius: 999, background: GRADIENT, color: '#FFFFFF', fontSize: 18, fontWeight: 600, textDecoration: 'none',
}
const link = { color: PINK }

const FUNDABLE = ['RFID wristbands', 'Credentials and badges', 'Fulfillment and shipping', 'The full event quote', 'Multi-event packages', 'Multi-year agreements']

const STEPS = [
  ['01', 'Apply', 'Enter your quote and answer a few quick questions about your business.'],
  ['02', 'Get your offer', 'Clear terms, usually within 3–5 business days.'],
  ['03', 'Get started, repay as you sell', 'SoundCheck pays WRSTBND up front. Repayment comes out of ticket sales automatically.'],
]

const FAQ = [
  ["What does it cost?", "A one-time fee of 10–20% of the amount you fund, depending on how quickly you repay. It's agreed before you sign, and your offer shows the full amount you'll repay up front. There's no interest and no hidden fees."],
  ["How is repayment taken?", "Automatically, from your ticket sales. Your ticketing platform sends SoundCheck an agreed share of each sale, or it comes from your own Stripe account if you take payments there. No invoices or monthly bills, and it stops once the total is repaid. Ticket prices and checkout stay the same for your fans."],
  ["What if tickets don't sell as expected?", "Repayment just takes longer. You only repay as tickets sell, and the total you owe doesn't change."],
  ["What if an event is postponed or canceled?", "SoundCheck funds your business, not a single show, so repayment continues from your other ticket sales. If a date moves or is canceled, let us know early and we'll work through it with you."],
  ["Who qualifies?", "US businesses with a US bank account, operating for more than a year, with at least $100K in annual revenue and regular ticketed events. Tickets must be sold through a platform that can send payments to SoundCheck, or through your own Stripe account. We can't currently fund events ticketed on Ticketmaster."],
  ["How much can I fund?", "From $5,000 up to $1M, covering any part of your WRSTBND quote: wristbands, credentials, fulfillment, the full event, or a multi-event or multi-year agreement. The amount depends on your actual ticket sales over the past year, not projections."],
  ["How fast is funding?", "The application takes a few minutes. You'll usually have an offer within 3–5 business days. Funding is confirmed once you're approved and the agreement is signed, so plan production and shipping dates with WRSTBND around it."],
  ["Who gets paid, and when?", "Once you're approved and the agreement is signed, SoundCheck pays WRSTBND directly for the part of your order you finance, so your wristbands and credentials can go into production."],
]

function Dot() {
  return <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: 999, background: PINK, display: 'block' }} />
}

function SectionTitle({ label, dot, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={eyebrow}>{dot && <Dot />}{label}</div>
      <h2 style={h2}>{children}</h2>
    </div>
  )
}

export default function WrstbndPage() {
  return (
    <div style={{ ...body.style, background: '#001022', color: '#E9F1FA', minHeight: '100vh' }}>
      <header style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24 }}>
        <img src="/bem/soundcheck-capital.svg" alt="SoundCheck Capital" style={{ height: 64, width: 'auto', display: 'block' }} />
        <span aria-hidden="true" style={{ fontSize: 28, fontWeight: 300, color: MUTED }}>×</span>
        <img src="/wrstbnd/wrstbnd.svg" alt="WRSTBND" style={{ height: 30, width: 'auto', display: 'block' }} />
      </header>

      <section style={{ ...section, padding: '40px 24px 80px', gap: 24 }}>
        <div style={eyebrow}><Dot />For WRSTBND clients</div>
        <h1 style={{ ...display.style, margin: 0, fontWeight: 500, fontSize: 'clamp(44px, 8vw, 80px)', lineHeight: 1.02, letterSpacing: '-0.02em', maxWidth: 860 }}>
          <span style={{ background: 'linear-gradient(120deg, #D7339A, #EA5555 42%, #FFA91E 78%, #FFE644)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
            Start with WRSTBND now.
          </span>{' '}
          Pay for it as tickets sell.
        </h1>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.55, color: TEXT, maxWidth: 640 }}>
          Cover your WRSTBND costs up front with SoundCheck Capital and repay them automatically from your ticket sales.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 15, color: MUTED, paddingRight: 4 }}>You can fund:</span>
          {FUNDABLE.map((item) => <span key={item} style={pill}>{item}</span>)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20, paddingTop: 8 }}>
          <a href="#apply" style={cta}>Fund your WRSTBND quote →</a>
          <span style={{ fontSize: 15, color: MUTED }}>Takes a few minutes · No obligation</span>
        </div>
      </section>

      <section style={{ ...section, gap: 32 }}>
        <SectionTitle label="How it works">Three steps to a funded order</SectionTitle>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {STEPS.map(([n, title, text]) => (
            <li key={n} style={{ display: 'flex', flexDirection: 'column', gap: 10, background: '#08203C', border: '1px solid rgba(233,241,250,0.12)', borderRadius: 16, padding: 28 }}>
              <div style={{ ...display.style, fontSize: 34, fontWeight: 500, lineHeight: 1, color: PINK }}>{n}</div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.5, color: TEXT }}>{text}</p>
            </li>
          ))}
        </ol>
        <p style={{ margin: '-8px 0 0', fontSize: 15, lineHeight: 1.5, color: MUTED }}>
          <strong style={{ color: '#E9F1FA', fontWeight: 600 }}>One requirement:</strong> you&apos;ll need to sell tickets
          through a platform that can send payments to SoundCheck, or use your own Stripe account. Not sure? Ask your
          WRSTBND rep or <a href="mailto:steve@soundcheckcapital.com" style={link}>email Steve</a>.
        </p>
      </section>

      <section id="apply" style={{ ...section, gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={eyebrow}>Apply</div>
          <h2 style={h2}>Start your application</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: TEXT }}>
            Enter your quote and a few details about your business. We&apos;ll be in touch within 2 business days.
          </p>
        </div>
        <ExpressEmbed src={FORM_URL} title="SoundCheck Capital application for WRSTBND clients" />
        <p style={{ margin: 0, fontSize: 16, color: TEXT }}>
          Questions? Ask your WRSTBND rep, or email Steve at{' '}
          <a href="mailto:steve@soundcheckcapital.com" style={link}>steve@soundcheckcapital.com</a>
        </p>
      </section>

      <section id="faq" style={{ ...section, gap: 32 }}>
        <SectionTitle label="FAQ" dot>Common questions</SectionTitle>
        <PartnerFAQ items={FAQ} question="#E9F1FA" answer={TEXT} border="rgba(233,241,250,0.16)" />
      </section>

      <footer style={{ borderTop: '1px solid rgba(233,241,250,0.12)' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 24px 48px', fontSize: 13, lineHeight: 1.6, color: MUTED }}>
          SoundCheck Capital is an independent company and is not part of WRSTBND. Financing is subject to approval and a
          signed agreement.{' '}
          <a href="https://soundcheckcapital.com" style={link}>soundcheckcapital.com</a>
        </div>
      </footer>
    </div>
  )
}
