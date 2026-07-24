'use client'

import { useState } from 'react'
import { Phone, Clock } from 'lucide-react'

export function ConsultationSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="consultation" className="scroll-mt-20 bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center font-serif text-2xl font-bold md:text-4xl">
          Curtains &amp; Blinds in Gurgaon \u2014 Free Home Visit + Free Installation
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-sm leading-relaxed text-primary-foreground/85">
            <h3 className="font-serif text-xl font-semibold text-primary-foreground">
              Gurgaon&apos;s Most Trusted Curtain &amp; Blind Store \u2014 Serving Gurgaon &amp;
              South Delhi Since 2017
            </h3>
            <p>
              Kingdom of Curtains is Gurgaon&apos;s most trusted curtain and blind store \u2014
              serving homes across Gurgaon and South Delhi since 2017. We offer free home visits
              across all of Gurgaon and South Delhi. Our designer visits your home, measures every
              window, and shows you the complete fabric and design collection on the spot. Free
              installation is included with every order.
            </p>
            <p>
              We stock blackout curtains, sheer curtains, zebra blinds, roller blinds, wooden
              blinds, honeycomb blinds, vertical blinds, Roman blinds, and motorised curtains with
              remote and app control. All curtains and blinds are custom-made to your exact window
              size. Authorised dealers for: Asian Paints Beautiful Homes, D&apos;Decor, Aartex
              Furnishings, KC Fabrics and Shivanaa Homes \u2014 all under one roof.
            </p>
            <p>
              Serving Gurgaon: DLF Phase 1\u20135, Sohna Road, Golf Course Road, Sector 65, South
              City, Palam Vihar, Dwarka Expressway and Vatika City. Serving South Delhi: Vasant Kunj,
              Vasant Vihar, Saket, Hauz Khas, Greater Kailash, Defence Colony, Malviya Nagar and
              Chattarpur. Also serving Noida, Greater Noida, and Faridabad.
            </p>
            <div className="flex flex-wrap gap-6 pt-2">
              <p className="flex items-center gap-2 font-medium text-accent">
                <Phone className="h-4 w-4" /> +91 98101 29384
              </p>
              <p className="flex items-center gap-2 font-medium text-accent">
                <Clock className="h-4 w-4" /> Open 7 days: 11:00 AM \u2013 8:30 PM
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
