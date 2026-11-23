'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import PostHogProvider from './PostHogProvider'

const STANDALONE_ROUTES = ['/docusign-success', '/request-advance/confirm', '/qbo', '/bem', '/theticketingco', '/hive', '/prism', '/wrstbnd']

export default function LayoutClient({ children }) {
  const pathname = usePathname()
  const hideHeader = STANDALONE_ROUTES.some((route) => pathname.startsWith(route))

  return (
    <PostHogProvider>
      {!hideHeader && <Header />}
      <main>{children}</main>
    </PostHogProvider>
  )
}
