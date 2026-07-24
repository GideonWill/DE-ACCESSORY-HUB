import type { ProductSection as ProductSectionType } from '@/lib/products'

export function ProductSection({ section }: { section: ProductSectionType }) {
  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-10 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {section.title}
        </h2>
        <a
          href={`#${section.id}`}
          className="shrink-0 rounded-md border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {section.products.map((product, i) => (
          <a
            key={`${section.id}-${i}`}
            href={`#${section.id}`}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-square overflow-hidden">
              {product.sale && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  SALE
                </span>
              )}
              <img
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-accent-foreground/70">
                {product.brand}
              </p>
              <h3 className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-foreground">
                {product.name}
              </h3>
              {product.price && (
                <p className="mt-2 text-sm font-semibold text-primary">{product.price}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
