import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import Script from 'next/script'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - CJ Johanson',
    default:
      'CJ Johanson - Data engineer, scientist, builder, and indie hacker.',
  },
  description:
    'I’m CJ, a data engineer and scientist exploring the world of indie hacking and solopreneurship.',
  openGraph: {
    title: 'CJ Loves Data',
    description: 'I’m CJ, a data engineer and scientist exploring the world of indie hacking and solopreneurship.',
    url: 'https://cjlovesdata.com',
    siteName: 'CJ Loves Data',
    images: [
      {
        url: 'https://www.cjlovesdata.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.3bb321ce.jpg&w=1080&q=75',
        width: 1200,
        height: 630,
        alt: 'CJ Loves Data - Open Graph image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CJ Loves Data',
    description: 'Data, design, and experiments by Chris Johanson.',
    images: ['https://www.cjlovesdata.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.3bb321ce.jpg&w=1080&q=75'],
    creator: '@cjlovesdata', // optional
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>

      {/* Tracking via plausible */}
      <Script
        defer
        data-domain="cjlovesdata.com"
        src="https://plausible.io/js/script.js"
      />

      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
