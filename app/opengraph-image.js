import { ImageResponse } from 'next/og'

export const alt = 'SoundCheck Capital — Ticket sales advances for live events'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Brand colors from app/bem/page.js. No custom font file: the renderer's
// default sans stands in for Helvetica Neue / Arial.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', padding: '0 96px', background: '#231F20',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ width: 120, height: 4, background: '#C0B30B', marginBottom: 40 }} />
        <div style={{ fontSize: 88, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1 }}>SoundCheck Capital</div>
        <div style={{ fontSize: 44, color: '#C0B30B', marginTop: 24 }}>Ticket sales advances for live events</div>
      </div>
    ),
    size
  )
}
