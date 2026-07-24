const steps = [
  {
    step: 'Step 1',
    title: 'Shortlist Designs',
    text: 'Shortlist or consult for the perfect curtain and blind design that matches your space.',
  },
  {
    step: 'Step 2',
    title: 'Customisation',
    text: 'Customise your design. Tailor-made to fit your window size and complement your room decor.',
  },
  {
    step: 'Step 3',
    title: 'Make & Deliver',
    text: 'Crafted with premium fabrics and delivered to your doorstep with utmost care.',
  },
  {
    step: 'Step 4',
    title: 'Free Installation',
    text: 'Prepare to fall in love with your windows and receive compliments for your beautiful spaces.',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-serif text-2xl font-bold text-foreground md:text-3xl">
          Unique Patterns, Simple Ordering &amp; Upkeep
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Customising your environment is effortless with THE INTERIOR HUB. No matter your taste,
          we offer a variety of styles – from abstract to traditional, modern, and international
          designs.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div
            key={s.step}
            className="rounded-lg border border-border bg-card p-6 text-center shadow-sm"
          >
            <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
              {s.step}
            </span>
            <h3 className="mt-4 font-serif text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
