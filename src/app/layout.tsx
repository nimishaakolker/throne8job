import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/store/Provider'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f3ef',
}

export const metadata: Metadata = {
  title: { default: 'throne8 — Jobs', template: '%s | throne8 Jobs' },
  description: 'Find your next opportunity at the most ambitious companies',
  openGraph: {
    title: 'throne8 — Jobs',
    description: 'Find your next opportunity at the most ambitious companies',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <ReduxProvider>
          {/* pb-16 on mobile so content isn't hidden behind bottom nav */}
          <div className="md:pb-0 pb-16">
            {children}
          </div>
          <MobileBottomNav />
        </ReduxProvider>
      </body>
    </html>
  )
}