import { Phone, MessageCircle } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 z-50 flex w-full justify-between px-4 lg:px-6">
      <a
        href="https://wa.me/233546478040"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" fill="currentColor" />
      </a>
      <a
        href="tel:+233546478040"
        aria-label="Call us"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" fill="currentColor" />
      </a>
    </div>
  )
}
