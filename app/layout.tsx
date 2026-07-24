import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'THE INTERIOR HUB | Custom Curtains, Blinds & Luxury Upholstery',
  description:
    'THE INTERIOR HUB is Ghana’s premier interior decor studio specializing in custom-made curtains, window blinds, smart motorized systems, and luxury upholstery. Free doorstep measurement and expert installation across Ghana.',
  icons: {
    icon: '/images/NEW LOGO.png',
    shortcut: '/images/NEW LOGO.png',
    apple: '/images/NEW LOGO.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5d1019',
}

import { CartProvider } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import { CheckoutModal } from '@/components/checkout-modal'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        <CartProvider>
          {children}
          <CartDrawer />
          <CheckoutModal />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
