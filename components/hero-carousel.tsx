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
        <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
          {slides[index].title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base font-medium leading-relaxed text-white/90 drop-shadow md:text-lg">
          {slides[index].text}
        </p>
        <a
          href="#consultation"
          className="mt-8 inline-block rounded-lg bg-accent px-8 py-3.5 font-serif text-lg font-semibold text-accent-foreground shadow-xl transition-all hover:scale-105 hover:brightness-110"
        >
          {slides[index].cta}
        </a>
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
