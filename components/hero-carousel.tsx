'use client'

import Link from 'next/link'
import { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'THE CURTAIN ACCESSORIES WHOLESALE HUB',
    text: 'Ghana\u2019s direct wholesale supplier of Automated Tracks, Motors, Curtain Tapes, Decorative Tie Hooks & Luxury Tie Backs.',
    cta: 'Get Bulk Quotation',
    href: '/contact',
  },
  {
    title: 'Smart Automation & Precision Hardware',
    text: 'Supply high-performance motorized tracks, silent Wi-Fi curtain drives, pleating tapes, and premium holdback accessories for your projects.',
    cta: 'Get Bulk Quotation',
    href: '/contact',
  },
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section
      className="relative isolate flex min-h-[480px] items-center justify-center overflow-hidden md:min-h-[620px]"
      aria-roledescription="carousel"
      aria-label="Featured offers"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/videos/HOMEPAGE HERO VIDEO.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for enhanced text readability */}
      <div className="absolute inset-0 -z-10 bg-black/45" />

      <div className="mx-4 w-full max-w-3xl px-4 text-center text-white">
        <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl transition-all duration-500">
          {slides[index].title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base font-medium leading-relaxed text-white/90 drop-shadow md:text-lg transition-all duration-500">
          {slides[index].text}
        </p>
        <Link
          href={slides[index].href}
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 font-serif text-lg font-semibold text-accent-foreground shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110 active:scale-95"
        >
          {slides[index].cta}
        </Link>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-3 text-foreground shadow transition-colors hover:bg-background"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-3 text-foreground shadow transition-colors hover:bg-background"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-all ${
              i === index ? 'w-8 bg-accent' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
