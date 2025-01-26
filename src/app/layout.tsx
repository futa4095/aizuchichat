import type { Metadata } from 'next'
import { M_PLUS_Rounded_1c } from 'next/font/google'
import './globals.css'

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-mplus',
})

export const metadata: Metadata = {
  title: '適当に相槌チャット',
  description: 'あなたの話に適当に相槌を打つチャットアプリです。気軽な会話のパートナーとして、日々の出来事や考えを共有してみましょう。',
  openGraph: {
    title: '適当に相槌チャット',
    description: 'あなたの話に適当に相槌を打つチャットアプリです。気軽な会話のパートナーとして、日々の出来事や考えを共有してみましょう。',
    images: [
      {
        url: '/ogp.png',
        width: 1200,
        height: 630,
        alt: '適当に相槌チャット',
      }
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '適当に相槌チャット',
    description: 'あなたの話に適当に相槌を打つチャットアプリです。気軽な会話のパートナーとして、日々の出来事や共有してみましょう。',
    images: ['/ogp.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${mplus.variable} font-mplus`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
