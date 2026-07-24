import { partneredBrands } from '@/lib/products'

export function PartneredBrands() {
  return (
    <section className="bg-muted py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-8 border-b border-border pb-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
          Partnered Brands
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partneredBrands.map((brand) => (
            <div
              key={brand}
              className="flex min-h-24 items-center justify-center rounded-lg border border-border bg-card p-4 text-center text-sm font-medium text-muted-foreground"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
