import '../styles/globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

// Configuration des polices
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${playfair.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}