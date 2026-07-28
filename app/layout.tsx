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
  title: 'THE CURTAIN ACCESSORIES WHOLESALE HUB | Ghana Wholesale Hardware',
  description:
    'THE CURTAIN ACCESSORIES WHOLESALE HUB is Ghana’s premier direct distributor of automated tracks, smart curtain motors, pleating & wave tapes, decorative tie hooks, and luxury tie backs.',
  icons: {
    icon: '/images/NEW LOGO.jpeg',
    shortcut: '/images/NEW LOGO.jpeg',
    apple: '/images/NEW LOGO.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#5d1019',
}

import { CartProvider } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import { CheckoutModal } from '@/components/checkout-modal'
import { ProductModal } from '@/components/product-modal'
import { SearchModal } from '@/components/search-modal'
import { PaymentSuccessModal } from '@/components/payment-success-modal'

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
          <ProductModal />
          <SearchModal />
          <PaymentSuccessModal />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
