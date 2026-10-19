'use client'

import { useEffect, useRef, useState } from 'react'

// The Express form inside an iframe. It posts its height (soundcheck-express:height) so the
// iframe never scrolls on its own, and soundcheck-express:page when a new step starts.
export default function ExpressEmbed({ src, title }) {
  const ref = useRef(null)
  const [height, setHeight] = useState(900)

  useEffect(() => {
    const onMessage = (event) => {
      // Matching the sender, not the origin: src may redirect (/apply) or be a deploy preview.
      if (event.source !== ref.current?.contentWindow) return
      if (event.data?.type === 'soundcheck-express:height') setHeight(event.data.height)
      if (event.data?.type === 'soundcheck-express:page') ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <iframe
      ref={ref}
      src={src}
      title={title}
      style={{ display: 'block', width: '100%', height, border: 0, borderRadius: 24, background: '#FBFBFC' }}
    />
  )
}
