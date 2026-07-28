'use client'

import React, { useState, useEffect } from 'react'
import { X, Search, PhoneCall, Truck, CheckCircle2, Clock, Wrench, Package, ShieldCheck, ArrowRight } from 'lucide-react'
import { useCart, WholesaleOrder } from '@/lib/cart-context'
import { formatPrice } from '@/lib/catalog'

const TRACKING_STAGES = [
  {
    key: 'Pending',
    title: 'Order Confirmed',
    description: 'Wholesale order received & specifications logged',
    icon: CheckCircle2,
  },
  {
    key: 'Processing',
    title: 'Factory Processing',
    description: 'Hardware, motor, and tape inventory allocation',
    icon: Clock,
  },
  {
    key: 'Cutting / Customization',
    title: 'Precision Customization',
    description: 'Made-to-measure track cutting & motor drive programming',
    icon: Wrench,
  },
  {
    key: 'Out for Delivery',
    title: 'Out for Doorstep Delivery',
    description: 'Dispatched with installation technician across Ghana',
    icon: Truck,
  },
  {
    key: 'Delivered',
    title: 'Delivered & Installed',
    description: 'Window fitting complete & hardware handover',
    icon: Package,
  },
]

function getStageIndex(status: string): number {
  switch (status) {
    case 'Pending':
      return 0
    case 'Processing':
      return 1
    case 'Cutting / Customization':
      return 2
    case 'Out for Delivery':
      return 3
    case 'Delivered':
    case 'Completed':
      return 4
    default:
      return 0
  }
}

export function TrackOrderModal() {
  const { orders, isTrackModalOpen, closeTrackModal } = useCart()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [searched, setSearched] = useState(false)
  const [matchedOrders, setMatchedOrders] = useState<WholesaleOrder[]>([])

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isTrackModalOpen) {
        closeTrackModal()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isTrackModalOpen, closeTrackModal])

  if (!isTrackModalOpen) return null

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    setSearched(true)
    const cleanQuery = phoneNumber.trim().replace(/[^0-9a-zA-Z]/g, '')
    if (!cleanQuery) {
      setMatchedOrders([])
      return
    }

    const matches = orders.filter((o) => {
      const cleanPhone = o.phone.replace(/[^0-9]/g, '')
      const cleanRef = o.id.replace(/[^0-9a-zA-Z]/g, '')
      return cleanPhone.includes(cleanQuery) || cleanRef.toLowerCase().includes(cleanQuery.toLowerCase())
    })

    setMatchedOrders(matches)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={closeTrackModal} />

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl bg-card shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-white text-[#5d1019] px-6 py-4 shrink-0">
          <div className="flex items-center gap-2.5">
            <Truck className="h-6 w-6 text-[#5d1019]" />
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                Track Order Status by Phone Number
              </h2>
              <p className="text-xs text-muted-foreground">
                Enter your phone number to view live processing stages &amp; delivery status
              </p>
            </div>
          </div>
          <button
            onClick={closeTrackModal}
            className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close track order modal (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 lg:p-8 space-y-6">
          {/* Phone Input Search Bar */}
          <form onSubmit={handleSearch} className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
              Client Phone Number or Order Reference
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  required
                  placeholder="e.g. 0546478040 or 0277811521 or ORD-984210"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value)
                    setSearched(false)
                  }}
                  className="w-full rounded-xl border border-input bg-background pl-4 pr-10 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
                <Search className="absolute right-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
              </div>
              <button
                type="submit"
                className="rounded-xl bg-primary px-6 py-3 font-serif text-sm font-bold text-primary-foreground shadow-md transition-all hover:brightness-110 active:scale-95"
              >
                Track Status
              </button>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Tip: Use the same phone number entered during checkout (`+233 ...` or `0...`).
            </p>
          </form>

          {/* Results List */}
          {searched && (
            <div className="space-y-6">
              {matchedOrders.length === 0 ? (
                <div className="rounded-2xl border border-border bg-muted/30 p-8 text-center space-y-3">
                  <Package className="mx-auto h-12 w-12 text-muted-foreground/60" />
                  <h3 className="font-serif text-base font-bold text-foreground">No active orders found</h3>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto">
                    We couldn&apos;t find an order matching <strong className="text-foreground">{phoneNumber}</strong>. Please check your phone number or contact support below.
                  </p>
                </div>
              ) : (
                matchedOrders.map((order) => {
                  const currentStageIdx = getStageIndex(order.status)
                  return (
                    <div
                      key={order.id}
                      className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm space-y-6"
                    >
                      {/* Order Summary Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-primary">{order.id}</span>
                            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                              {order.paymentStatus || 'Paid ✓'}
                            </span>
                          </div>
                          <p className="mt-1 text-xs font-medium text-foreground">
                            Client: <strong className="font-semibold">{order.customerName}</strong> ({order.phone})
                          </p>
                          <p className="text-[11px] text-muted-foreground">{order.date} • {order.region}</p>
                        </div>

                        <div className="text-right">
                          <span className="text-xs text-muted-foreground block font-semibold">Total Amount</span>
                          <span className="font-serif text-lg font-bold text-primary">
                            {formatPrice(order.subtotal)}
                          </span>
                        </div>
                      </div>

                      {/* Hardware Specifications & Items Summary */}
                      <div className="rounded-xl bg-muted/40 p-4 border border-border/80 text-xs space-y-2">
                        <p className="font-bold text-foreground uppercase tracking-wider text-[11px]">
                          Ordered Items &amp; Wholesale Specifications
                        </p>
                        <div className="space-y-1">
                          {order.items.map((it, idx) => (
                            <div key={idx} className="flex justify-between items-center text-foreground font-medium">
                              <span>• {it.quantity}x {it.name}</span>
                              <span className="font-bold">{formatPrice(it.price * it.quantity)}</span>
                            </div>
                          ))}
                        </div>
                        {(order.trackLength || order.motorSpec || order.bulkNotes) && (
                          <div className="pt-2 border-t border-border/60 text-[11px] text-muted-foreground space-y-0.5">
                            {order.trackLength && <p><strong className="text-foreground">Track Length:</strong> {order.trackLength}</p>}
                            {order.motorSpec && <p><strong className="text-foreground">Motor Spec:</strong> {order.motorSpec}</p>}
                            {order.bulkNotes && <p><strong className="text-foreground">Bulk Notes:</strong> {order.bulkNotes}</p>}
                          </div>
                        )}
                      </div>

                      {/* Live Processing Stage Tracker Progress Bar */}
                      <div className="space-y-4 pt-2">
                        <h4 className="font-serif text-sm font-bold text-foreground flex items-center justify-between">
                          <span>Live Processing &amp; Delivery Progress</span>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Current Stage: {order.status}
                          </span>
                        </h4>

                        {/* Stage Steps Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                          {TRACKING_STAGES.map((stage, idx) => {
                            const isCompleted = idx <= currentStageIdx
                            const isCurrent = idx === currentStageIdx
                            const IconComponent = stage.icon

                            return (
                              <div
                                key={stage.key}
                                className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all ${
                                  isCurrent
                                    ? 'bg-primary/10 border-primary text-primary shadow-sm ring-2 ring-primary/20'
                                    : isCompleted
                                    ? 'bg-emerald-50/60 border-emerald-300 text-emerald-800'
                                    : 'bg-muted/30 border-border/60 text-muted-foreground'
                                }`}
                              >
                                <div
                                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                                    isCurrent
                                      ? 'bg-primary text-primary-foreground'
                                      : isCompleted
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-muted text-muted-foreground'
                                  }`}
                                >
                                  <IconComponent className="h-4 w-4" />
                                </div>
                                <p className="mt-2 text-[11px] font-bold leading-tight">{stage.title}</p>
                                <p className="mt-0.5 text-[9px] opacity-80 line-clamp-2">{stage.description}</p>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Direct Support Contact Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4 text-xs">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <ShieldCheck className="h-4 w-4 text-emerald-600" />
                          <span>Need to make changes to your specifications?</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <a
                            href="tel:0592678531"
                            className="flex items-center gap-1 font-semibold text-foreground hover:underline"
                          >
                            <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                            0592678531
                          </a>
                          <span className="text-muted-foreground">•</span>
                          <a
                            href={`https://wa.me/233277811521?text=${encodeURIComponent(`Hello, I want to check order updates for ${order.id} (${order.phone})`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 font-bold text-white shadow-sm transition-transform hover:scale-105"
                          >
                            <span>WhatsApp Support</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
