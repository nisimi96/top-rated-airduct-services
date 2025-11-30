import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Top Rated Air Duct Cleaning | Atlanta, GA',
    template: '%s | Top Rated Air Duct Cleaning'
  },
  description: "Atlanta's Top Rated Air Duct Cleaning Service. Breathe Easier with Certified HVAC Cleaning. Call 770-741-0615 for a Free Estimate.",
  keywords: ['air duct cleaning', 'Atlanta', 'HVAC cleaning', 'dryer vent cleaning', 'Marietta'],
  authors: [{ name: 'Top Rated Air Duct Cleaning' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://topratedairduct.com',
    siteName: 'Top Rated Air Duct Cleaning',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  )
}
