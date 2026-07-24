'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ChevronDown, Menu, X, ShoppingBag } from 'lucide-react'
import { Logo } from './logo'
import { navItems } from '@/lib/navigation'
import { useCart } from '@/lib/cart-context'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [openSub, setOpenSub] = useState<string | null>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const { totalCount, openCart, openSearch } = useCart()

  const activeItem = navItems.find((i) => i.label === activeMenu && i.children)

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md text-[#5d1019] border-b border-border/40 shadow-sm transition-all duration-200"
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
        <Link href="/" aria-label="THE INTERIOR HUB home" onMouseEnter={() => setActiveMenu(null)}>
          <Logo />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main navigation">
          <button
            onClick={openSearch}
            aria-label="Search catalog"
            className="mr-3 rounded-full p-2 text-[#5d1019] transition-colors hover:bg-muted"
            onMouseEnter={() => setActiveMenu(null)}
          >
            <Search className="h-5 w-5" />
          </button>
          {navItems.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveMenu(item.children ? item.label : null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 border-l border-[#5d1019]/20 px-4 py-2 text-sm font-semibold tracking-wide text-[#5d1019] transition-colors hover:text-[#a12c3b] ${
                  activeMenu === item.label ? 'text-[#a12c3b]' : ''
                }`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      activeMenu === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={openSearch}
            aria-label="Search catalog"
            className="rounded-full p-2.5 text-[#5d1019] transition-all hover:bg-muted lg:hidden"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            onClick={openCart}
            aria-label="Shopping Cart"
            className="relative flex items-center justify-center rounded-full p-2.5 text-[#5d1019] transition-all hover:bg-muted"
          >
            <ShoppingBag className="h-6 w-6 text-[#5d1019]" />
            {totalCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow-md">
                {totalCount}
              </span>
            )}
          </button>

          <button
            className="rounded-md p-2 text-[#5d1019] transition-colors hover:bg-muted lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      {activeItem?.children && (
        <div className="absolute left-0 right-0 top-full hidden border-t border-border bg-card text-foreground shadow-xl lg:block">
          <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6">
              {activeItem.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={() => setActiveMenu(null)}
                  className="group w-40 shrink-0"
                >
                  <div className="overflow-hidden rounded-xl border border-border bg-secondary shadow-sm">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={child.image || '/placeholder.svg'}
                        alt={child.label}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center font-serif text-base font-medium text-foreground transition-colors group-hover:text-primary">
                    {child.label}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href={activeItem.href}
                onClick={() => setActiveMenu(null)}
                className="inline-block rounded-md border border-primary px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View All {activeItem.label.charAt(0) + activeItem.label.slice(1).toLowerCase()}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border bg-white text-[#5d1019] lg:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-border/60">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex-1 py-3 text-sm font-semibold tracking-wide text-[#5d1019]"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenSub((v) => (v === item.label ? null : item.label))
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                      className="p-3 text-[#5d1019]"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSub === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openSub === item.label && (
                  <ul className="grid grid-cols-2 gap-3 pb-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block"
                        >
                          <div className="overflow-hidden rounded-lg border border-border">
                            <img
                              src={child.image || '/placeholder.svg'}
                              alt={child.label}
                              className="aspect-[3/4] w-full object-cover"
                            />
                          </div>
                          <p className="mt-1.5 text-center text-xs font-medium text-[#5d1019]">
                            {child.label}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
