'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">Message Sent Successfully!</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out to THE INTERIOR HUB. Our design consultant will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-name" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
            Full Name *
          </label>
          <input
            id="c-name"
            type="text"
            required
            placeholder="Kwame Mensah"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="c-email" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
            Email Address *
          </label>
          <input
            id="c-email"
            type="email"
            required
            placeholder="kwame@example.com"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-phone" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
            Phone Number *
          </label>
          <input
            id="c-phone"
            type="tel"
            required
            placeholder="+233 54 647 8040"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="c-subject" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
            Service Required *
          </label>
          <select
            id="c-subject"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="measurement">Free Home Measurement</option>
            <option value="curtains">Custom Curtains Inquiry</option>
            <option value="blinds">Window Blinds Inquiry</option>
            <option value="motors">Motorized Automation Systems</option>
            <option value="upholstery">Luxury Upholstery</option>
            <option value="commercial">Commercial / Hotel Project</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
          Message / Window Details *
        </label>
        <textarea
          id="c-message"
          rows={4}
          required
          placeholder="Tell us about your project, window counts, or preferred fabric styles..."
          className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-serif text-base font-bold text-accent-foreground shadow-md transition-all hover:scale-[1.01] hover:brightness-105 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        <span>{loading ? 'Sending Message...' : 'Submit Message'}</span>
      </button>
    </form>
  )
}
