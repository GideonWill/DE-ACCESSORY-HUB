'use client'

import { useMemo, useState } from 'react'
import { formatPrice, type Category } from '@/lib/catalog'

const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'GH₵0 – GH₵100', min: 0, max: 100 },
  { label: 'GH₵100 – GH₵250', min: 100, max: 250 },
  { label: 'GH₵250 – GH₵500', min: 250, max: 500 },
  { label: 'GH₵500 – GH₵1,000', min: 500, max: 1000 },
  { label: 'GH₵1,000+', min: 1000, max: Infinity },
]

export function CategoryListing({
  category,
  initialType,
}: {
  category: Category
  initialType?: string
}) {
  const [activeType, setActiveType] = useState<string | null>(initialType ?? null)
  const [priceIdx, setPriceIdx] = useState(0)

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx]
    return category.products.filter((p) => {
      const typeOk = !activeType || p.type === activeType
      const priceOk = p.price >= range.min && p.price < range.max
      return typeOk && priceOk
    })
  }, [category.products, activeType, priceIdx])

  return (
    <div className="mx-auto max-w-7xl gap-8 px-4 py-8 lg:flex lg:px-8">
      {/* Sidebar filters */}
      <aside className="mb-8 shrink-0 lg:mb-0 lg:w-64">
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="mb-4 font-serif text-lg font-bold text-foreground">Filters</h2>

          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Price Filter
            </h3>
            <ul className="space-y-2">
              {priceRanges.map((r, i) => (
                <li key={r.label}>
                  <button
                    onClick={() => setPriceIdx(i)}
                    className={`text-sm transition-colors hover:text-primary ${
                      priceIdx === i ? 'font-semibold text-primary' : 'text-foreground'
                    }`}
                  >
                    {r.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Type
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveType(null)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeType === null ? 'font-semibold text-primary' : 'text-foreground'
                  }`}
                >
                  All
                </button>
              </li>
              {category.types.map((t) => (
                <li key={t.slug}>
                  <button
                    onClick={() => setActiveType(t.slug)}
                    className={`text-left text-sm transition-colors hover:text-primary ${
                      activeType === t.slug ? 'font-semibold text-primary' : 'text-foreground'
                    }`}
                  >
                    {t.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Product grid */}
      <div className="flex-1">
        <p className="mb-4 text-sm text-muted-foreground">
          Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </p>
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border py-20 text-center text-muted-foreground">
            No products match your filters.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {filtered.map((product, i) => (
              <div
                key={`${product.name}-${i}`}
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
                  <p className="mt-2 text-sm font-semibold text-primary">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
