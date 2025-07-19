//app/(marketing)/layout.tsx

import { MarketingLayout } from '#components/layout'
import { Analytics } from '@vercel/analytics/react'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <MarketingLayout>
      {props.children}
      <Analytics />
    </MarketingLayout>
  )
}
