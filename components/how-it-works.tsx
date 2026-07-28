const steps = [
  {
    step: 'Step 1',
    title: 'Select Accessories',
    text: 'Choose from our wholesale catalog of automated tracks, motors, pleating tapes, tie hooks, and tie backs.',
  },
  {
    step: 'Step 2',
    title: 'Specifications & Quote',
    text: 'Provide track lengths, motor specifications, or bulk quantity requirements for instant wholesale pricing.',
  },
  {
    step: 'Step 3',
    title: 'Fast Dispatch',
    text: 'Orders are processed immediately with full quality inspection from our central warehouse in Accra.',
  },
  {
    step: 'Step 4',
    title: 'Delivery & Tech Support',
    text: 'Prompt doorstep delivery across Ghana with optional technical installation support for smart motorized systems.',
  },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-serif text-2xl font-bold text-foreground md:text-3xl">
          Wholesale Supply Made Simple &amp; Efficient
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Sourcing premium curtain hardware is effortless with THE CURTAIN ACCESSORIES WHOLESALE HUB. We serve contractors, interior designers, and retailers across Ghana.
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
