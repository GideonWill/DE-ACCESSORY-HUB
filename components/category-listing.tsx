'use client'

import { useMemo, useState } from 'react'
import { ShoppingBag, RotateCcw } from 'lucide-react'
import { formatPrice, type Category } from '@/lib/catalog'
import { useCart } from '@/lib/cart-context'

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
  const { addItem } = useCart()

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx]
    return category.products.filter((p) => {
      const typeOk = !activeType || p.type === activeType
      const priceOk = p.price >= range.min && p.price <= range.max
      return typeOk && priceOk
    })
  }, [category.products, activeType, priceIdx])

  const hasActiveFilters = activeType !== null || priceIdx !== 0

  const resetFilters = () => {
    setActiveType(null)
    setPriceIdx(0)
  }

  return (
    <div className="mx-auto max-w-7xl gap-8 px-4 py-8 lg:flex lg:px-8">
      {/* Sidebar filters */}
      <aside className="mb-8 shrink-0 lg:mb-0 lg:w-64">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-lg font-bold text-foreground">Filters</h2>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          <div className="mb-6 border-t border-border/60 pt-4">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Price Filter
            </h3>
            <ul className="space-y-2">
              {priceRanges.map((r, i) => (
                <li key={r.label}>
                  <button
                    onClick={() => setPriceIdx(i)}
                    className={`flex w-full items-center justify-between text-sm transition-colors hover:text-primary ${
                      priceIdx === i
                        ? 'font-bold text-primary bg-primary/5 px-2 py-1 rounded-md'
                        : 'text-foreground'
                    }`}
                  >
                    <span>{r.label}</span>
                    {priceIdx === i && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border/60 pt-4">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Category Type
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveType(null)}
                  className={`text-sm transition-colors hover:text-primary ${
                    activeType === null ? 'font-bold text-primary' : 'text-foreground'
                  }`}
                >
                  All Types
                </button>
              </li>
              {category.types.map((t) => (
                <li key={t.slug}>
                  <button
                    onClick={() => setActiveType(t.slug)}
                    className={`text-left text-sm transition-colors hover:text-primary ${
                      activeType === t.slug ? 'font-bold text-primary' : 'text-foreground'
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
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            Showing <span className="font-bold text-foreground">{filtered.length}</span> {filtered.length === 1 ? 'product' : 'products'}
          </p>
          {hasActiveFilters && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Filtered ({priceRanges[priceIdx].label})
            </span>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground">
            <p className="text-base font-semibold text-foreground">No products match your filters</p>
            <p className="mt-1 text-sm">Try broadening your price range or category type.</p>
            <button
              onClick={resetFilters}
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {filtered.map((product, i) => (
              <div
                key={`${product.name}-${i}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {product.sale && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                      SALE
                    </span>
                  )}
                  <img
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {product.brand}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-medium leading-snug text-foreground">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/50 pt-3">
                    <p className="text-sm font-bold text-primary">
                      {formatPrice(product.price)}
                    </p>
                    <button
                      onClick={() =>
                        addItem({
                          id: `cat-${category.slug}-${i}-${product.name}`,
                          name: product.name,
                          brand: product.brand,
                          price: product.price,
                          image: product.image,
                        })
                      }
                      className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow transition-transform hover:scale-105"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
