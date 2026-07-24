import { PhoneCall, Home } from 'lucide-react'

const cards = [
  {
    icon: PhoneCall,
    title: 'Get Free Consultation From Experts',
    text: 'Book a complimentary call with our expert designers. They\u2019ll help you find the perfect curtains and blinds to match your style and needs.',
    cta: 'Consult Now',
  },
  {
    icon: Home,
    title: 'Book Free Home Visit',
    text: 'Arrange a no-cost home visit with our designers. They\u2019ll assist you in selecting the ideal window solutions to suit your space and preferences.',
    cta: 'Book Now',
  },
]

export function PromoBanner() {
  return (
    <section className="bg-muted py-12">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:px-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-7 shadow-sm sm:flex-row sm:items-center"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <card.icon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              <a
                href="#consultation"
                className="mt-3 inline-block rounded-md bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-colors hover:brightness-95"
              >
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
