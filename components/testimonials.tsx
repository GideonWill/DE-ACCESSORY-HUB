import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ananya Sharma',
    location: 'DLF Phase 4, Gurgaon',
    text: 'The designer visited our home, measured every window and showed us the whole collection on the spot. Installation was quick and completely free. Our living room looks stunning!',
  },
  {
    name: 'Rohit Malhotra',
    location: 'Vasant Kunj, South Delhi',
    text: 'We got motorised curtains for our double-height windows. App and Alexa control works flawlessly. Best curtain store in NCR, highly recommended.',
  },
  {
    name: 'Priya Nair',
    location: 'Golf Course Road, Gurgaon',
    text: 'Beautiful blackout curtains for the bedroom and zebra blinds for the study. Premium fabrics, fair pricing and a team that truly cares about detail.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
          Voices of Our Valued Customers
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${t.text}"`}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
