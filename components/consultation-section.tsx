'use client'

import { useState } from 'react'
import { Phone, Clock } from 'lucide-react'

export function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="consultation" className="scroll-mt-20 bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center font-serif text-2xl font-bold md:text-4xl">
          Custom Curtains &amp; Window Blinds — Free Doorstep Consultation &amp; Installation
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-sm leading-relaxed text-primary-foreground/85">
            <h3 className="font-serif text-xl font-semibold text-primary-foreground">
              THE INTERIOR HUB — Ghana&apos;s Premier Interior Decor &amp; Window Treatment Studio
            </h3>
            <p>
              THE INTERIOR HUB is Ghana&apos;s premier interior decor studio specializing in luxury custom curtains, precision window blinds, motorized smart curtain systems, and premium upholstery fabrics. We offer complimentary doorstep consultations across Ghana — our design specialists visit your home or business, measure every window, and present curated fabric samples on the spot.
            </p>
            <p>
              Explore our extensive range of blackout curtains, translucent sheers, zebra blinds, roller shades, wooden venetian blinds, honeycomb insulation blinds, Roman shades, and smart automated motorized systems with remote and smartphone controls. All products are bespoke, crafted to your exact specifications.
            </p>
            <p>
              Whether you are designing a contemporary residence, luxury apartment, commercial office, or hotel, THE INTERIOR HUB delivers unmatched elegance, durable craftsmanship, and seamless professional installation.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <a href="tel:+233546478040" className="flex items-center gap-2 font-medium text-accent hover:underline">
                <Phone className="h-4 w-4" /> +233 54647 8040
              </a>
              <p className="flex items-center gap-2 font-medium text-accent">
                <Clock className="h-4 w-4" /> Mon – Sat: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-card p-6 text-card-foreground shadow-lg">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Book Free Design Consultation
            </h3>
            {submitted ? (
              <p className="mt-6 rounded-md bg-muted p-4 text-sm text-muted-foreground">
                Thank you! Our team will contact you shortly to arrange your free home visit.
              </p>
            ) : (
              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <Field label="Name" name="name" type="text" />
                <Field label="Email" name="email" type="email" />
                <Field label="Mobile Number" name="mobile" type="tel" />
                <div>
                  <label htmlFor="query" className="mb-1 block text-sm font-medium text-foreground">
                    Query
                  </label>
                  <textarea
                    id="query"
                    name="query"
                    rows={3}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-5 py-2.5 font-medium text-accent-foreground transition-colors hover:brightness-95"
                >
                  Submit
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Mon \u2013 Sat 9:30 AM \u2013 6:00 PM
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type }: { label: string; name: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
