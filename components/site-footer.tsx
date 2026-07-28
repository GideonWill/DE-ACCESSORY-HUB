import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from './logo'
import { navItems } from '@/lib/navigation'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            THE CURTAIN ACCESSORIES WHOLESALE HUB is Ghana&apos;s direct wholesale distributor for automated tracks, smart curtain motors, pleating &amp; wave tapes, decorative tie hooks, and luxury tie backs.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Quick Navigation</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/90">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-accent font-medium">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Contact Wholesale Desk</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <div className="flex flex-col sm:flex-row sm:gap-3">
                <a href="tel:+233592678531" className="hover:text-accent transition-colors font-medium">
                  +233 59 267 8531
                </a>
                <span className="hidden sm:inline text-white/40">|</span>
                <a href="tel:+233546478040" className="hover:text-accent transition-colors font-medium">
                  +233 54 647 8040
                </a>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white text-[10px] font-bold">WA</span>
              <a href="https://wa.me/233277811521" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors font-medium">
                WhatsApp: +233 27 781 1521
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:gideonogunu@gmail.com" className="hover:text-accent transition-colors">
                gideonogunu@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Accra, Ghana — Bulk Supply &amp; Technical Support Nationwide</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} THE CURTAIN ACCESSORIES WHOLESALE HUB. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            {navItems.map((item) => (
              <Link key={`footer-b-${item.label}`} href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ))}
            <Link href="/admin" className="font-semibold text-accent hover:underline">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
