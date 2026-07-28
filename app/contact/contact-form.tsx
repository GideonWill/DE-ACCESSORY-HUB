'use client'

import React, { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('c-name') || ''
    const email = formData.get('c-email') || ''
    const phone = formData.get('c-phone') || ''
    const subject = formData.get('c-subject') || ''
    const message = formData.get('c-message') || ''

    const waText = `*Inquiries on Other Vital Information*\n\n` +
      `*Full Name:* ${name}\n` +
      `*Email:* ${email}\n` +
      `*Phone:* ${phone}\n` +
      `*Category:* ${subject}\n` +
      `*Details:* ${message}`

    const whatsappUrl = `https://wa.me/233277811521?text=${encodeURIComponent(waText)}`

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setLoading(false)
      setSubmitted(true)
    }, 400)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center space-y-4">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-serif text-xl font-bold text-foreground">Opening WhatsApp...</h3>
        <p className="text-sm text-muted-foreground">
          Your inquiry has been formatted. If WhatsApp did not open automatically, click the button below to connect with us.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Send Another Inquiry
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
            name="c-name"
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
            name="c-email"
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
            name="c-phone"
            type="tel"
            required
            placeholder="+233 27 781 1521"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="c-subject" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
            Category / Subject *
          </label>
          <select
            id="c-subject"
            name="c-subject"
            className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            <option value="Automated Tracks & Motors">Automated Tracks &amp; Motors</option>
            <option value="Curtain Pleating Tapes">Curtain Pleating &amp; Wave Tapes</option>
            <option value="Tie Hooks & Tie Backs">Tie Hooks &amp; Tie Backs</option>
            <option value="Wholesale Bulk Pricing">Wholesale Bulk Pricing</option>
            <option value="Inquiries on Other Vital Information">Inquiries on Other Vital Information</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="c-message" className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
          Inquiry / Vital Information Details *
        </label>
        <textarea
          id="c-message"
          name="c-message"
          rows={4}
          required
          placeholder="Tell us about your inquiry, track measurements, or required specifications..."
          className="w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 font-serif text-base font-bold text-accent-foreground shadow-md transition-all hover:scale-[1.01] hover:brightness-105 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        <span>{loading ? 'Opening WhatsApp...' : 'Send Inquiry via WhatsApp'}</span>
      </button>
    </form>
  )
}
