'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  PackagePlus,
  ShoppingBag,
  DollarSign,
  Users,
  Search,
  Trash2,
  Edit3,
  Check,
  Plus,
  ShieldAlert,
  Layers,
  PhoneCall,
  Calendar,
  CreditCard,
  MapPin,
  Mail,
  TrendingUp,
  FileSpreadsheet,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useCart, type ProductView, type WholesaleOrder } from '@/lib/cart-context'
import { productSections } from '@/lib/products'
import { formatPrice } from '@/lib/catalog'

export default function AdminPage() {
  const {
    orders,
    customProducts,
    addProduct,
    updateProductPrice,
    deleteProduct,
  } = useCart()

  const [activeTab, setActiveTab] = useState<'sales' | 'products' | 'orders'>('sales')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDate, setSelectedDate] = useState<string>('all')

  // Product Add Form state
  const [newProductName, setNewProductName] = useState('')
  const [newProductBrand, setNewProductBrand] = useState('THE CURTAIN ACCESSORIES WHOLESALE HUB')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [newProductCategory, setNewProductCategory] = useState('automated-tracks-motors')
  const [newProductImage, setNewProductImage] = useState('/images/AUTOMATED TRACKS.jpg')
  const [newProductSale, setNewProductSale] = useState(false)
  const [isAddFormOpen, setIsAddFormOpen] = useState(false)

  // Editing price state
  const [editingPriceId, setEditingPriceId] = useState<string | null>(null)
  const [editingPriceVal, setEditingPriceVal] = useState('')

  // All catalog products merged (default + admin custom)
  const [allProducts, setAllProducts] = useState<ProductView[]>([])

  useEffect(() => {
    const defaults: ProductView[] = []
    productSections.forEach((sec) => {
      sec.products.forEach((p, i) => {
        const numPrice = p.price ? parseFloat(p.price.replace(/[^0-9.]/g, '')) || 200 : 200
        defaults.push({
          id: `default-${sec.id}-${i}`,
          name: p.name,
          brand: p.brand,
          price: numPrice,
          image: p.image,
          sale: p.sale,
          categorySlug: sec.id,
        })
      })
    })
    setAllProducts([...customProducts, ...defaults])
  }, [customProducts])

  // Extract unique dates for daily filter
  const availableDates = useMemo(() => {
    const set = new Set<string>()
    orders.forEach((o) => {
      if (o.dateIso) set.add(o.dateIso)
      else set.add('2026-07-28')
    })
    return Array.from(set).sort().reverse()
  }, [orders])

  // Daily filtered orders
  const dailyFilteredOrders = useMemo(() => {
    let result = orders
    if (selectedDate !== 'all') {
      result = result.filter((o) => (o.dateIso || '2026-07-28') === selectedDate)
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (o) =>
          o.id.toLowerCase().includes(q) ||
          o.customerName.toLowerCase().includes(q) ||
          o.phone.includes(q) ||
          o.email.toLowerCase().includes(q)
      )
    }
    return result
  }, [orders, selectedDate, searchQuery])

  // Calculations for daily revenue metrics
  const selectedDayRevenue = dailyFilteredOrders.reduce((sum, o) => sum + o.subtotal, 0)
  const totalLifetimeRevenue = orders.reduce((sum, o) => sum + o.subtotal, 0)
  const todayRevenue = orders
    .filter((o) => (o.dateIso || '2026-07-28') === '2026-07-28')
    .reduce((sum, o) => sum + o.subtotal, 0)

  const handleAddProductSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newProductName || !newProductPrice) return

    const priceNum = parseFloat(newProductPrice) || 100
    const newProd: ProductView = {
      id: 'custom-prod-' + Date.now(),
      name: newProductName,
      brand: newProductBrand,
      price: priceNum,
      image: newProductImage || '/images/AUTOMATED TRACKS.jpg',
      categorySlug: newProductCategory,
      sale: newProductSale,
    }

    addProduct(newProd)
    setNewProductName('')
    setNewProductPrice('')
    setIsAddFormOpen(false)
  }

  const startEditPrice = (product: ProductView) => {
    setEditingPriceId(product.id)
    setEditingPriceVal(product.price.toString())
  }

  const saveEditPrice = (id: string) => {
    const val = parseFloat(editingPriceVal)
    if (!isNaN(val) && val > 0) {
      updateProductPrice(id, val)
      setAllProducts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, price: val } : p))
      )
    }
    setEditingPriceId(null)
  }

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-slate-50/50 dark:bg-zinc-950 pb-16">
        {/* Admin Top Banner */}
        <section className="bg-primary py-10 text-primary-foreground shadow-md">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <ShieldAlert className="h-4 w-4" /> Administrative Operations &amp; Daily Sales Hub
                </div>
                <h1 className="mt-1 font-serif text-3xl font-bold sm:text-4xl text-white">
                  Wholesale Sales &amp; Admin Dashboard
                </h1>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Track daily sales, client purchase details, amounts paid, update prices, and manage inventory live.
                </p>
              </div>

              <button
                onClick={() => setIsAddFormOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-serif text-sm font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110"
              >
                <Plus className="h-5 w-5" />
                <span>Add New Product</span>
              </button>
            </div>

            {/* Daily Metrics Dashboard Bar */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">Today&apos;s Revenue</p>
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                </div>
                <p className="mt-1 font-serif text-2xl font-bold text-white">
                  GH₵{todayRevenue.toFixed(2)}
                </p>
                <p className="text-[11px] text-white/70 mt-0.5">28 Jul 2026 Sales</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">Selected Date Sales</p>
                  <DollarSign className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-1 font-serif text-2xl font-bold text-white">
                  GH₵{selectedDayRevenue.toFixed(2)}
                </p>
                <p className="text-[11px] text-white/70 mt-0.5">{dailyFilteredOrders.length} Paid Client Orders</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">Lifetime Sales</p>
                  <FileSpreadsheet className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-1 font-serif text-2xl font-bold text-white">
                  GH₵{totalLifetimeRevenue.toFixed(2)}
                </p>
                <p className="text-[11px] text-white/70 mt-0.5">{orders.length} Total Client Orders</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">Catalog Inventory</p>
                  <Layers className="h-4 w-4 text-accent" />
                </div>
                <p className="mt-1 font-serif text-2xl font-bold text-white">{allProducts.length}</p>
                <p className="text-[11px] text-white/70 mt-0.5">Live Store Items</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 mt-8 lg:px-8">
          {/* Add Product Modal Form */}
          {isAddFormOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl border border-border animate-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h3 className="font-serif text-xl font-bold text-foreground">Add New Wholesale Product</h3>
                  <button
                    onClick={() => setIsAddFormOpen(false)}
                    className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    ✕
                  </button>
                </div>

                <form onSubmit={handleAddProductSubmit} className="mt-4 space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">Product Title *</label>
                    <input
                      type="text"
                      required
                      value={newProductName}
                      onChange={(e) => setNewProductName(e.target.value)}
                      placeholder="e.g. Wi-Fi Silent Track Drive 500W"
                      className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">Price (GH₵) *</label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={newProductPrice}
                        onChange={(e) => setNewProductPrice(e.target.value)}
                        placeholder="e.g. 450.00"
                        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-foreground">Brand</label>
                      <input
                        type="text"
                        value={newProductBrand}
                        onChange={(e) => setNewProductBrand(e.target.value)}
                        className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">Category</label>
                    <select
                      value={newProductCategory}
                      onChange={(e) => setNewProductCategory(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
                    >
                      <option value="automated-tracks-motors">Automated Tracks &amp; Motors</option>
                      <option value="curtain-tapes">Curtain Tapes</option>
                      <option value="tie-hooks-tie-backs">Tie Hooks &amp; Tie Backs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-foreground">Image Path / URL</label>
                    <input
                      type="text"
                      value={newProductImage}
                      onChange={(e) => setNewProductImage(e.target.value)}
                      placeholder="/images/AUTOMATED TRACKS.jpg"
                      className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none focus:border-primary"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="saleCheck"
                      checked={newProductSale}
                      onChange={(e) => setNewProductSale(e.target.checked)}
                      className="h-4 w-4 rounded border-input accent-primary"
                    />
                    <label htmlFor="saleCheck" className="text-xs font-semibold text-foreground">
                      Mark Product as On Sale
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                    <button
                      type="button"
                      onClick={() => setIsAddFormOpen(false)}
                      className="rounded-lg px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-muted"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-primary px-5 py-2 text-xs font-bold text-primary-foreground shadow transition-colors hover:brightness-110"
                    >
                      Save Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Tab Navigation & Search bar */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('sales')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-serif text-sm font-bold transition-all ${
                  activeTab === 'sales'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <DollarSign className="h-4 w-4" />
                <span>Daily Sales Ledger ({orders.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('products')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-serif text-sm font-bold transition-all ${
                  activeTab === 'products'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <Layers className="h-4 w-4" />
                <span>Products &amp; Pricing ({allProducts.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 font-serif text-sm font-bold transition-all ${
                  activeTab === 'orders'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground hover:bg-muted'
                }`}
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Orders &amp; Specs</span>
              </button>
            </div>

            {/* Date Selector & Search Bar */}
            <div className="flex items-center gap-3">
              {activeTab === 'sales' && (
                <div className="flex items-center gap-2 bg-card border border-input rounded-xl px-3 py-1.5 shadow-sm text-xs font-semibold text-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Date:</span>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-transparent font-bold outline-none cursor-pointer text-foreground"
                  >
                    <option value="all">All Dates</option>
                    {availableDates.map((d) => (
                      <option key={d} value={d}>
                        {d === '2026-07-28' ? `Today (${d})` : d}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search client, phone, or order ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-input bg-card pl-9 pr-4 py-2 text-xs text-foreground outline-none focus:border-primary shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* TAB 1: DAILY SALES LEDGER */}
          {activeTab === 'sales' && (
            <div className="mt-6 space-y-6">
              {/* Daily Sales Ledger Banner */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-foreground">
                    Daily Sales &amp; Revenue Breakdown {selectedDate !== 'all' ? `for ${selectedDate}` : '(All Dates)'}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Detailed record of client contact information, items ordered, track lengths, and total amounts paid per order.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-muted/50 p-3 rounded-xl border border-border/60 text-xs">
                  <div>
                    <span className="text-muted-foreground block font-semibold">Client Orders</span>
                    <span className="font-bold text-foreground text-sm">{dailyFilteredOrders.length} Orders</span>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <span className="text-muted-foreground block font-semibold">Total Paid Sales</span>
                    <span className="font-bold text-primary text-sm">{formatPrice(selectedDayRevenue)}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Sales Ledger Table */}
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-muted/60 text-muted-foreground font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3.5">Order Ref &amp; Date</th>
                      <th className="px-4 py-3.5">Client Information</th>
                      <th className="px-4 py-3.5">Ordered Items &amp; Specs</th>
                      <th className="px-4 py-3.5">Payment Method</th>
                      <th className="px-4 py-3.5 text-right">Amount Paid</th>
                      <th className="px-4 py-3.5 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {dailyFilteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                          No sales recorded for the selected date filter.
                        </td>
                      </tr>
                    ) : (
                      dailyFilteredOrders.map((order) => (
                        <tr key={order.id} className="transition-colors hover:bg-muted/30">
                          {/* Order Ref & Date */}
                          <td className="px-4 py-4 align-top">
                            <span className="font-mono font-bold text-primary block">{order.id}</span>
                            <span className="text-[11px] text-muted-foreground mt-0.5 block">{order.date}</span>
                          </td>

                          {/* Client Information */}
                          <td className="px-4 py-4 align-top space-y-1">
                            <p className="font-bold text-foreground text-sm">{order.customerName}</p>
                            <p className="flex items-center gap-1.5 text-muted-foreground">
                              <PhoneCall className="h-3 w-3 text-emerald-600 shrink-0" />
                              <a href={`tel:${order.phone}`} className="hover:underline font-semibold text-foreground">
                                {order.phone}
                              </a>
                            </p>
                            <p className="flex items-center gap-1.5 text-muted-foreground">
                              <Mail className="h-3 w-3 text-primary shrink-0" />
                              <span>{order.email}</span>
                            </p>
                            <p className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
                              <MapPin className="h-3 w-3 text-accent shrink-0" />
                              <span>{order.address}, {order.region}</span>
                            </p>
                          </td>

                          {/* Ordered Items & Specs */}
                          <td className="px-4 py-4 align-top space-y-2 max-w-sm">
                            <div className="space-y-1">
                              {order.items.map((it, idx) => (
                                <div key={idx} className="flex items-start justify-between gap-2 border-b border-border/40 pb-1">
                                  <span className="font-medium text-foreground">
                                    {it.quantity}x {it.name}
                                  </span>
                                  <span className="font-bold text-foreground">{formatPrice(it.price * it.quantity)}</span>
                                </div>
                              ))}
                            </div>

                            {/* Wholesale Hardware Specifications */}
                            {(order.trackLength || order.motorSpec || order.bulkNotes) && (
                              <div className="rounded-lg bg-muted/60 p-2 text-[11px] text-muted-foreground space-y-0.5 border border-border/50">
                                {order.trackLength && <p><strong className="text-foreground">Track Length:</strong> {order.trackLength}</p>}
                                {order.motorSpec && <p><strong className="text-foreground">Motor Spec:</strong> {order.motorSpec}</p>}
                                {order.bulkNotes && <p><strong className="text-foreground">Bulk Notes:</strong> {order.bulkNotes}</p>}
                              </div>
                            )}
                          </td>

                          {/* Payment Method */}
                          <td className="px-4 py-4 align-top">
                            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-bold text-emerald-800">
                              <CreditCard className="h-3 w-3" />
                              {order.paymentMethod || 'Paystack Ghana'}
                            </span>
                          </td>

                          {/* Amount Paid */}
                          <td className="px-4 py-4 align-top text-right">
                            <span className="font-serif text-base font-bold text-primary block">
                              {formatPrice(order.subtotal)}
                            </span>
                            <span className="inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700 mt-1">
                              PAID ✓
                            </span>
                          </td>

                          {/* Status */}
                          <td className="px-4 py-4 align-top text-center">
                            <span className="inline-block rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-800">
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS MANAGER */}
          {activeTab === 'products' && (
            <div className="mt-6">
              <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-muted/60 text-muted-foreground font-semibold uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3.5">Product</th>
                      <th className="px-4 py-3.5">Category</th>
                      <th className="px-4 py-3.5">Brand</th>
                      <th className="px-4 py-3.5">Price (GH₵)</th>
                      <th className="px-4 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredProducts.map((product) => {
                      const isEditing = editingPriceId === product.id

                      return (
                        <tr key={product.id} className="transition-colors hover:bg-muted/30">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image || '/placeholder.svg'}
                                alt={product.name}
                                className="h-10 w-10 rounded-lg object-cover bg-muted border border-border"
                              />
                              <div>
                                <p className="font-bold text-foreground">{product.name}</p>
                                {product.sale && (
                                  <span className="inline-block rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700">
                                    ON SALE
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 capitalize text-muted-foreground">
                            {product.categorySlug?.replace(/-/g, ' ') || 'General'}
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">{product.brand}</td>
                          <td className="px-4 py-3 font-bold text-primary">
                            {isEditing ? (
                              <div className="flex items-center gap-2">
                                <input
                                  type="number"
                                  step="0.01"
                                  value={editingPriceVal}
                                  onChange={(e) => setEditingPriceVal(e.target.value)}
                                  className="w-24 rounded border border-primary px-2 py-1 text-xs text-foreground bg-background outline-none"
                                />
                                <button
                                  onClick={() => saveEditPrice(product.id)}
                                  className="rounded bg-emerald-600 p-1 text-white hover:bg-emerald-700"
                                >
                                  <Check className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <span>{formatPrice(product.price)}</span>
                                <button
                                  onClick={() => startEditPrice(product)}
                                  className="text-muted-foreground hover:text-primary"
                                  title="Edit Price"
                                >
                                  <Edit3 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="rounded p-1 text-muted-foreground transition-colors hover:bg-rose-100 hover:text-rose-600"
                              title="Delete Product"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: WHOLESALE ORDERS & SPECS */}
          {activeTab === 'orders' && (
            <div className="mt-6 space-y-4">
              {dailyFilteredOrders.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
                  <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground/50" />
                  <h3 className="mt-3 font-serif text-lg font-bold text-foreground">No Orders Received Yet</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Orders submitted via checkout with custom track lengths &amp; motor specs will appear here.
                  </p>
                </div>
              ) : (
                dailyFilteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4 transition-all hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-primary">{order.id}</span>
                          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-800">
                            {order.status}
                          </span>
                        </div>
                        <h4 className="mt-1 font-serif text-base font-bold text-foreground">{order.customerName}</h4>
                        <p className="text-xs text-muted-foreground">
                          Placed on: {order.date} | Phone: {order.phone} | Email: {order.email}
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/${order.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow hover:brightness-110"
                      >
                        <PhoneCall className="h-4 w-4" />
                        <span>Contact Customer</span>
                      </a>
                    </div>

                    {/* Wholesale Specs Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl bg-muted/40 p-3.5 text-xs">
                      <div>
                        <span className="font-bold text-foreground uppercase tracking-wider block">Track Length</span>
                        <span className="text-muted-foreground">{order.trackLength || 'Standard / Per Item'}</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground uppercase tracking-wider block">Motor Spec</span>
                        <span className="text-muted-foreground">{order.motorSpec || 'Standard Silent Drive'}</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground uppercase tracking-wider block">Bulk Notes</span>
                        <span className="text-muted-foreground">{order.bulkNotes || 'None specified'}</span>
                      </div>
                    </div>

                    {/* Ordered Items Table */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-foreground">Order Items</p>
                      <div className="divide-y divide-border rounded-xl border border-border/70 overflow-hidden text-xs">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-background">
                            <div>
                              <p className="font-bold text-foreground">{item.name}</p>
                              <p className="text-[11px] text-muted-foreground">
                                Qty: {item.quantity} × {formatPrice(item.price)}
                                {item.trackLength && ` | Track: ${item.trackLength}`}
                                {item.motorSpec && ` | Motor: ${item.motorSpec}`}
                              </p>
                            </div>
                            <span className="font-bold text-primary">{formatPrice(item.price * item.quantity)}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-xs font-semibold text-muted-foreground">Total Order Amount</span>
                      <span className="font-serif text-lg font-bold text-primary">
                        {formatPrice(order.subtotal)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </>
  )
}
