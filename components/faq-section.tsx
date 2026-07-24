'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { faqs } from '@/lib/products'

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
        Frequently Asked Questions (FAQ&apos;s)
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="overflow-hidden rounded-lg border border-border bg-card">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-foreground">{faq.q}</span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-primary" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-primary" />
                )}
              </button>
              {isOpen && (
                <div className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
