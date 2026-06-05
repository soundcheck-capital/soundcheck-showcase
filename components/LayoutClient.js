'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'

const STANDALONE_ROUTES = ['/docusign-success', '/request-advance/confirm']

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const hideHeader = STANDALONE_ROUTES.some((route) => pathname.startsWith(route))

  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </>
  )
}
