'use client'

import { useState } from 'react'
import { Phone, Clock } from 'lucide-react'

export function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="consultation" className="scroll-mt-20 bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center font-serif text-2xl font-bold md:text-4xl">
          Wholesale Curtain Hardware &amp; Accessories — Direct Bulk Supply Across Ghana
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-sm leading-relaxed text-primary-foreground/85">
            <h3 className="font-serif text-xl font-semibold text-primary-foreground">
              THE CURTAIN ACCESSORIES WHOLESALE HUB — Ghana&apos;s Direct Accessory Supplier
            </h3>
            <p>
              THE CURTAIN ACCESSORIES WHOLESALE HUB is Ghana&apos;s premier wholesale store specializing in 5 core drapery hardware lines: Automated Smart Tracks, Silent Wi-Fi &amp; Tubular Motors, Curtain Pleating &amp; Wave Tapes, Decorative Tie Hooks, and Luxury Tie Backs.
            </p>
            <p>
              We provide factory-direct wholesale pricing, large-volume stock availability in Accra, and on-site technical support for interior designers, contractors, installers, and retailers across Ghana.
            </p>
            <p>
              Whether you need smart motorized curtain track systems for commercial developments or luxury decorative tie hooks for residential projects, we deliver unmatched hardware reliability, precision engineering, and fast nationwide delivery.
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-2 text-sm">
              <a href="tel:+233592678531" className="flex items-center gap-1.5 font-semibold text-accent hover:underline">
                <Phone className="h-4 w-4" /> Call: +233 59 267 8531
              </a>
              <a href="https://wa.me/233277811521" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-semibold text-[#25D366] hover:underline bg-white/10 px-3 py-1 rounded-full">
                WhatsApp: +233 27 781 1521
              </a>
              <p className="flex items-center gap-1.5 font-medium text-accent">
                <Clock className="h-4 w-4" /> Mon – Sat: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-card p-6 text-card-foreground shadow-lg">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Inquiries on Other Vital Information
            </h3>
            {submitted ? (
              <div className="mt-6 rounded-md bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800 space-y-2">
                <p className="font-semibold">Message sent to WhatsApp!</p>
                <p className="text-xs text-muted-foreground">Thank you for reaching out. Our team will review your query and respond shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-primary hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  const name = formData.get('name') || ''
                  const email = formData.get('email') || ''
                  const mobile = formData.get('mobile') || ''
                  const query = formData.get('query') || ''

                  const message = `*Inquiries on Other Vital Information*\n\n` +
                    `*Name:* ${name}\n` +
                    `*Email:* ${email}\n` +
                    `*Mobile:* ${mobile}\n` +
                    `*Query:* ${query}`

                  const whatsappUrl = `https://wa.me/233277811521?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
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
                    required
                    placeholder="Enter your inquiry or window details..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent px-5 py-2.5 font-medium text-accent-foreground shadow transition-colors hover:brightness-95"
                >
                  Send Inquiry via WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Mon – Sat 8:00 AM – 6:00 PM
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
