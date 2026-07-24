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
            THE INTERIOR HUB is Ghana&apos;s premier interior decor studio specializing in custom curtains, precision window blinds, motorized smart curtain systems, and luxury upholstery fabrics.
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
          <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Contact Us</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+233546478040" className="hover:text-accent transition-colors">
                +233 54647 8040
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href="mailto:info@theinteriorhub.com" className="hover:text-accent transition-colors">
                info@theinteriorhub.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>Accra, Ghana — Free Home Visits &amp; Installation Available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} THE INTERIOR HUB. All rights reserved.</p>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={`footer-b-${item.label}`} href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
