'use client'

import { useState } from 'react'
import { payback } from './payback'
import './PaybackCalculator.css'

// "How long would it take to pay back?" on /prism, from Steve's design (Slack C08RK7YDX3L 1793203984.822309).
const PURPLE = '#8412AF'
const MUTED = '#5E5873'
const money = (n) => '$' + Math.round(n).toLocaleString('en-US')

function Slider({ id, label, value, display, hint, ...range }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
        <label htmlFor={id} style={{ fontSize: 15, fontWeight: 600 }}>{label}</label>
        <span style={{ fontSize: 22, fontWeight: 700, color: PURPLE }}>{display}</span>
      </div>
      <input id={id} className="pc-range" type="range" value={value} {...range} />
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.45, color: MUTED }}>{hint}</p>
    </div>
  )
}

export default function PaybackCalculator() {
  const [amount, setAmount] = useState(12000)
  const [sales, setSales] = useState(500000)
  const [rate, setRate] = useState(15)
  const r = payback(amount, sales, rate)
  const { months } = r

  const bars = Array.from({ length: 12 }, (_, i) => {
    const fill = months >= i + 1 ? 100 : months > i ? Math.round((months - i) * 100) : 0
    return `linear-gradient(90deg, #6450C1 ${fill}%, #D9D1F0 ${fill}%)`
  })

  const row = { color: MUTED }
  const value = { fontWeight: 600, textAlign: 'right' }
  const totalRow = { fontWeight: 700, borderTop: '1px solid #CFC5EA', paddingTop: 10 }

  return (
    <div style={{ background: '#FFFFFF', color: '#1A1530', borderRadius: 24, boxShadow: '0 18px 50px rgba(30,10,60,0.28)', display: 'flex', flexWrap: 'wrap', overflow: 'hidden' }}>
      <div style={{ flex: '11 1 400px', minWidth: 0, padding: 32, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <Slider id="calc-amt" label="Your Prism plan cost" value={amount} display={money(amount)}
          min={5000} max={50000} step={500} onChange={(e) => setAmount(Number(e.target.value))}
          hint="Use your annual quote, including any extra venues or team members." />
        <Slider id="calc-sales" label="Ticket sales, past 12 months" value={sales} display={money(sales)}
          min={100000} max={5000000} step={25000} onChange={(e) => setSales(Number(e.target.value))}
          hint="Use actual online ticket sales across all your shows, not projections." />
        <Slider id="calc-rate" label="Recoupment rate" value={rate} display={`${rate}%`}
          min={5} max={100} step={1} onChange={(e) => setRate(Number(e.target.value))}
          hint="The share of each ticket sale that goes toward repayment. A higher rate pays it back faster." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontSize: 15, fontWeight: 600 }}>SoundCheck fee</span>
            <b style={{ fontSize: 22, color: PURPLE }}>{r.feePct}%</b>
          </div>
          <p aria-live="polite" style={{ margin: 0, padding: '12px 14px', borderRadius: 12, background: '#F6F3FD', fontSize: 14, lineHeight: 1.45 }}>
            {typeof r.nudge === 'string' ? r.nudge : (
              <>Raise your recoupment rate to <strong>{r.nudge.rate}%</strong> to repay within {r.nudge.months} months and pay <strong>{r.nudge.fee}%</strong>.</>
            )}
          </p>
        </div>
      </div>

      <div style={{ flex: '9 1 320px', minWidth: 0, background: 'linear-gradient(160deg, #F3EFFD 0%, #EADFF7 100%)', padding: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div aria-live="polite" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: MUTED }}>Estimated payback</span>
          <span style={{ fontSize: 64, lineHeight: 1, fontWeight: 700, color: PURPLE }}>
            {months < 1 ? '< 1' : months < 10 ? months.toFixed(1) : Math.round(months)}
          </span>
          <span style={{ fontSize: 15 }}>{months <= 1 ? 'month' : 'months'}</span>
        </div>
        <div>
          <div aria-hidden="true" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: 4 }}>
            {bars.map((background, i) => <span key={i} style={{ display: 'block', height: 14, borderRadius: 4, background }} />)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: MUTED, paddingTop: 6 }}>
            <span>Month 1</span><span>6</span><span>12</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '10px 16px', fontSize: 15 }}>
          <span style={row}>Funded to Prism</span><span style={value}>{money(amount)}</span>
          <span style={row}>SoundCheck fee ({r.feePct}%)</span><span style={value}>{money(r.feeAmount)}</span>
          <span style={totalRow}>Total you repay</span><span style={{ ...totalRow, textAlign: 'right' }}>{money(r.total)}</span>
          <span style={row}>Average weekly repayment (est.)</span><span style={value}>{money(r.weekly)}</span>
        </div>
        {r.warn && (
          <p style={{ margin: 0, padding: '12px 14px', borderRadius: 12, fontSize: 13.5, lineHeight: 1.45, background: '#FFF4E5', color: '#9A4A00' }}>{r.warn}</p>
        )}
        <a href="#apply" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 52, padding: '0 28px', borderRadius: 999, background: PURPLE, color: '#FFFFFF', fontWeight: 600, fontSize: 16, textDecoration: 'none', alignSelf: 'flex-start' }}>
          Finance your Prism plan →
        </a>
      </div>
    </div>
  )
}
