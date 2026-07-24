'use client'

import { ShoppingBag } from 'lucide-react'
import type { ProductSection as ProductSectionType } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export function ProductSection({ section }: { section: ProductSectionType }) {
  const { addItem } = useCart()

  return (
    <section id={section.id} className="mx-auto max-w-7xl scroll-mt-20 px-4 py-10 lg:px-8">
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
        <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
          {section.title}
        </h2>
        <a
          href={`/products/${section.id}`}
          className="shrink-0 rounded-md border border-border px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {section.products.map((product, i) => {
          const numericPrice = product.price
            ? parseFloat(product.price.replace(/[^0-9.]/g, '')) || 200
            : 200

          return (
            <div
              key={`${section.id}-${i}`}
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

                <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/50 pt-3">
                  <p className="text-sm font-bold text-primary">{product.price || 'GH₵200.00'}</p>
                  <button
                    onClick={() =>
                      addItem({
                        id: `${section.id}-${i}-${product.name}`,
                        name: product.name,
                        brand: product.brand,
                        price: numericPrice,
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
          )
        })}
      </div>
    </section>
  )
}
