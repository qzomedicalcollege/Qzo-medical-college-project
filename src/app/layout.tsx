import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Кызылординский Высший Медицинский Колледж',
  description: 'Современное медицинское образование в Казахстане. Подготовка квалифицированных специалистов здравоохранения нового поколения.',
  keywords: 'медицинский колледж, Кызылорда, образование, здравоохранение',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
  openGraph: {
    title: 'Кызылординский Высший Медицинский Колледж',
    description: 'Современное медицинское образование в Казахстане',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0369a1" />
      </head>
      <body className={`${inter.className} bg-white text-medical-text`}> 
        <Providers>
          <a href="#main" className="sr-only focus:not-sr-only inline-block p-2 m-2 rounded bg-primary-100 text-primary-800">Перейти к содержанию</a>
          <Navbar />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
