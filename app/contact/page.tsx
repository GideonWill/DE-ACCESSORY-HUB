import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { ContactForm } from './contact-form'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | THE CURTAIN ACCESSORIES WHOLESALE HUB',
  description:
    'Contact THE CURTAIN ACCESSORIES WHOLESALE HUB in Ghana. Call or WhatsApp +233 54647 8040 for wholesale pricing, bulk orders, automated tracks, motors, tapes, tie hooks, and tie backs.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-background">
        {/* Page Hero Header */}
        <section className="bg-secondary border-b border-border py-14">
          <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              THE CURTAIN ACCESSORIES WHOLESALE HUB
            </span>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-5xl">
              Wholesale Inquiries &amp; Technical Support
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Contact our wholesale team today for bulk price quotes, hardware technical specifications, and distribution across Ghana.
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Call Us</h3>
              <p className="mt-1 text-xs text-muted-foreground">Speak directly with our team</p>
              <div className="mt-3 flex flex-col gap-1 text-sm font-bold text-primary">
                <a href="tel:+233592678531" className="hover:underline">
                  +233 59 267 8531
                </a>
                <a href="tel:+233546478040" className="text-xs text-muted-foreground hover:underline">
                  +233 54 647 8040
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">WhatsApp Chat</h3>
              <p className="mt-1 text-xs text-muted-foreground">Instant chat &amp; wholesale quotes</p>
              <a
                href="https://wa.me/233277811521"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 font-bold text-[#25D366] hover:underline text-sm"
              >
                Chat +233 27 781 1521
              </a>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Email Us</h3>
              <p className="mt-1 text-xs text-muted-foreground">Inquiries &amp; quotes</p>
              <a
                href="mailto:gideonogunu@gmail.com"
                className="mt-3 font-bold text-primary hover:underline text-sm"
              >
                gideonogunu@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">Working Hours</h3>
              <p className="mt-1 text-xs text-muted-foreground">Mon – Sat: 8:00 AM – 6:00 PM</p>
              <span className="mt-3 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Home Visit Available 7 Days
              </span>
            </div>
          </div>
        </section>

        {/* Contact Form & Location Details */}
        <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-foreground">Send Us A Message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details below and our interior consultants will reach out promptly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-border bg-primary text-primary-foreground p-6 sm:p-8 shadow-md space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  SERVICE COVERAGE
                </span>
                <h3 className="mt-2 font-serif text-2xl font-bold text-primary-foreground">
                  Free Doorstep Service Across Ghana
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
                  Our expert design specialists bring the full catalog of curtain fabrics, blind textures, and motorized automation samples directly to your residence or office location.
                </p>

                <div className="mt-6 space-y-4 text-sm text-primary-foreground/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-primary-foreground">Greater Accra &amp; Surrounds</p>
                      <p className="text-xs text-primary-foreground/75">
                        Airport Residential, East Legon, Cantonments, Ridge, Dzorwulu, Tema &amp; all Greater Accra areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-primary-foreground">Nationwide Service in Ghana</p>
                      <p className="text-xs text-primary-foreground/75">
                        Kumasi, Takoradi, Cape Coast, Tamale, Koforidua, Sunyani, and all regional destinations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/15 text-xs text-primary-foreground/90 space-y-2">
                <p className="font-semibold text-accent text-sm">Need Urgent Assistance?</p>
                <p>Call us at <strong>+233 59 267 8531</strong> or WhatsApp <strong>+233 27 781 1521</strong> for immediate wholesale assistance.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  )
}
