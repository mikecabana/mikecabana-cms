import { ConsentBanner } from '@/components/consent'
import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { GoogleTagManager } from '@next/third-parties/google'
import { GeistSans } from 'geist/font/sans'
import { Metadata, Viewport } from 'next'
import { getCookieConsent } from '../actions'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1F1F23',
}

export const metadata: Metadata = {
  title: 'Mike Cabana',
  description: 'Code whisperer, espresso not depresso, dog daddy, AI wrangler.',
  classification: 'website',
  keywords: [
    'mike',
    'cabana',
    'mike cabana',
    'cabana mike',
    'michael',
    'cabana',
    'michael cabana',
    'cabana michael',
    'mikecabana',
    'mikecabana.com',
    'mikecabana com',
    'mikecabana website',
    'mikecabana blog',
    'mikecabana projects',
    'mikecabana portfolio',
    'mikecabana contact',
    'mikecabana about',
    'mikecabana home',
    'mikecabana homepage',
  ],
  openGraph: {
    title: 'Mike Cabana',
    description: 'Code whisperer, espresso not depresso, dog daddy, AI wrangler.',
    type: 'website',
    url: 'https://mikecabana.com',
    siteName: 'Mike Cabana',
  },
  twitter: {
    title: 'Mike Cabana',
    description: 'Code whisperer, espresso not depresso, dog daddy, AI wrangler.',
    site: 'https://mikecabana.com',
  },
  robots: 'index, follow',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.GOOGLE_TAG_MANAGER_ID as string

  const consent = await getCookieConsent()
  const showConsentBanner = consent === undefined

  return (
    <html lang="en" className={GeistSans.className}>
      <GoogleTagManager gtmId={gtmId} />
      <body className="flex flex-col items-center min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex-grow flex flex-col w-full max-w-2xl">
            <header className="w-full">
              <Nav />
            </header>
            <div className="flex-grow px-2">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <ConsentBanner show={showConsentBanner} />
      </body>
    </html>
  )
}
