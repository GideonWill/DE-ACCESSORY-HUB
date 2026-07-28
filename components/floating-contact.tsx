import { Phone, MessageCircle } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 left-0 right-0 z-40 pointer-events-none flex w-full justify-between px-4 lg:px-6">
      <a
        href="https://wa.me/233277811521"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+233 27 781 1521)"
        className="pointer-events-auto flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all hover:scale-110 active:scale-90 ring-4 ring-white/80"
        title="WhatsApp Wholesale Desk"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </a>

      <a
        href="tel:+233592678531"
        aria-label="Call Wholesale Desk (+233 59 267 8531)"
        className="pointer-events-auto flex h-13 w-13 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all hover:scale-110 active:scale-90 ring-4 ring-white/80"
        title="Call Wholesale Support"
      >
        <Phone className="h-6 w-6" fill="currentColor" />
      </a>
    </div>
  )
}
