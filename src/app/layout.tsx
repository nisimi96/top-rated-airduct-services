import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import { getLocalBusinessSchema, getOrganizationSchema } from '@/lib/structuredData'
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
  description: "Atlanta's Top Rated Air Duct Cleaning Service. Professional HVAC, dryer vent, and air duct cleaning. Certified technicians. Free estimate. Call 770-741-0615.",
  keywords: ['air duct cleaning', 'Atlanta', 'HVAC cleaning', 'dryer vent cleaning', 'Marietta', 'professional cleaning'],
  authors: [{ name: 'Top Rated Air Duct Cleaning' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://topratedairduct.com',
    siteName: 'Top Rated Air Duct Cleaning',
    images: [
      {
        url: 'https://topratedairduct.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Top Rated Air Duct Cleaning Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Rated Air Duct Cleaning | Atlanta, GA',
    description: "Professional air duct cleaning, HVAC services, and dryer vent cleaning in Atlanta."
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const baseUrl = 'https://topratedairduct.com'

  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for Google APIs */}
        <link rel="dns-prefetch" href="https://mapsplatform.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema(baseUrl))
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema(baseUrl))
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:z-50 focus:fixed focus:top-0 focus:left-0 focus:bg-brand-blue focus:text-white focus:p-4 focus:font-bold"
        >
          Skip to main content
        </a>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
          <StickyMobileCTA />
        </div>
      </body>
    </html>
  )
}
