'use client'

import { useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: 'Doorstep Presentation \u2013 Free Installation!',
    text: 'Book a complimentary call with our expert designers. They\u2019ll help you find the perfect curtains to match your style and needs.',
    cta: 'Consult Now',
  },
  {
    title: 'Book Free Home Visit',
    text: 'Arrange a no-cost home visit with our designers. They\u2019ll assist you in selecting the ideal curtains and blinds to suit your space.',
    cta: 'Book Now',
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
      className="relative isolate flex min-h-[420px] items-center justify-center overflow-hidden md:min-h-[560px]"
      aria-roledescription="carousel"
      aria-label="Featured offers"
    >
      <img
        src="/images/hero-living-room.png"
        alt="Bright living room with elegant blinds and sheer curtains"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="mx-4 w-full max-w-2xl rounded-md bg-background/75 px-6 py-10 text-center backdrop-blur-sm md:px-12 md:py-14">
        <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-foreground md:text-5xl">
          {slides[index].title}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          {slides[index].text}
        </p>
        <a
          href="#consultation"
          className="mt-7 inline-block rounded-md bg-accent px-8 py-3 font-serif text-lg text-accent-foreground shadow transition-colors hover:brightness-95"
        >
          {slides[index].cta}
        </a>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground transition-colors hover:bg-background"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground transition-colors hover:bg-background"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === index ? 'bg-accent' : 'bg-background/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
