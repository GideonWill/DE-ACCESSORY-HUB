import { Phone, Mail, MapPin } from 'lucide-react'
import { Logo } from './logo'

const shopLinks = ['Curtains', 'Sheer Curtains', 'Blackout Curtains', 'Blinds', 'Upholstery', 'Accessories']
const quickLinks = ['Curtain Shop Gurgaon', 'Motorised Curtains', 'Zebra Blinds', 'Roller Blinds', 'Wooden Blinds', 'Roman Blinds']
const kocLinks = ['About Us', 'Blogs', 'Careers', 'Contact Us']

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Gurgaon&apos;s most trusted curtain and blind store, serving Gurgaon &amp; South Delhi
            since 2017. Free home visit and free installation on every order.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold">Contact</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> +91 98101 29384
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> hello@kingdomofcurtains.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> DLF Phase 1, Sector 28 &amp;
              Sector 65, Gurgaon
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold">Shop Links</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {shopLinks.map((l) => (
              <li key={l}>
                <a href="#curtains" className="transition-colors hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-serif text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#blinds" className="transition-colors hover:text-accent">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-primary-foreground/70 sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} Kingdom Of Curtains. All rights reserved.</p>
          <div className="flex gap-4">
            {kocLinks.map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-accent">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
