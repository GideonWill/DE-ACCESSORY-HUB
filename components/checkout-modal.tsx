'use client'

import React, { useState } from 'react'
import { X, CheckCircle2, ShieldCheck, CreditCard, Truck, Lock, ArrowRight, Smartphone, AlertCircle, ArrowLeft } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/catalog'

type PaymentMethod = 'paystack' | 'cod'

export function CheckoutModal() {
  const {
    items,
    subtotal,
    isCheckoutOpen,
    closeCheckout,
    openCart,
    clearCart,
    addOrder,
  } = useCart()

  const [step, setStep] = useState<'form' | 'success'>('form')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paystack')
  const [orderRef, setOrderRef] = useState('')

  // Form fields
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [region, setRegion] = useState('Greater Accra')
  
  // Custom Wholesale Specs
  const [orderTrackLength, setOrderTrackLength] = useState('')
  const [orderMotorSpec, setOrderMotorSpec] = useState('Silent Wi-Fi Motor (220V)')
  const [orderBulkNotes, setOrderBulkNotes] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCheckoutOpen) {
        closeCheckout()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isCheckoutOpen, closeCheckout])

  if (!isCheckoutOpen) return null

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const newOrd = addOrder({
      ref: '',
      customerName: fullName,
      email,
      phone,
      address,
      region,
      trackLength: orderTrackLength,
      motorSpec: orderMotorSpec,
      bulkNotes: orderBulkNotes,
      items,
      subtotal,
      paymentMethod: paymentMethod === 'paystack' ? 'Paystack Ghana (MoMo / Card)' : 'Pay on Delivery',
    })

    setOrderRef(newOrd.id)
    clearCart()

    // Build WhatsApp message
    let lineItemsText = items
      .map(
        (it) =>
          `• *${it.name}* (x${it.quantity}) - GH₵${(it.price * it.quantity).toFixed(2)}` +
          (it.trackLength ? `\n  - Track Length: ${it.trackLength}` : '') +
          (it.motorSpec ? `\n  - Motor Spec: ${it.motorSpec}` : '') +
          (it.bulkNotes ? `\n  - Notes: ${it.bulkNotes}` : '')
      )
      .join('\n')

    const waText =
      `*NEW WHOLESALE ACCESSORIES ORDER (${newOrd.id})*\n\n` +
      `*Customer:* ${fullName}\n` +
      `*Phone:* ${phone}\n` +
      `*Email:* ${email}\n` +
      `*Delivery Address:* ${address}, ${region}\n\n` +
      `*WHOLESALE SPECIFICATIONS:*\n` +
      `• *Track Length:* ${orderTrackLength || 'Standard / Per Item'}\n` +
      `• *Motor Specification:* ${orderMotorSpec}\n` +
      `• *Bulk / Project Notes:* ${orderBulkNotes || 'None'}\n\n` +
      `*ORDERED ITEMS:*\n${lineItemsText}\n\n` +
      `*TOTAL AMOUNT:* GH₵${subtotal.toFixed(2)}\n` +
      `*Payment Option:* ${paymentMethod.toUpperCase()}`

    const whatsappUrl = `https://wa.me/233277811521?text=${encodeURIComponent(waText)}`

    if (paymentMethod === 'paystack') {
      try {
        const callbackUrl = typeof window !== 'undefined'
          ? `${window.location.origin}/?payment=success&orderRef=${newOrd.id}`
          : undefined

        const res = await fetch('/api/paystack/initialize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: email || 'gideonogunu@gmail.com',
            amount: subtotal,
            callback_url: callbackUrl,
            metadata: {
              orderRef: newOrd.id,
              customerName: fullName,
              phone,
              address,
              region,
              trackLength: orderTrackLength,
              motorSpec: orderMotorSpec,
              bulkNotes: orderBulkNotes,
            },
          }),
        })

        const payData = await res.json()

        if (payData.status && payData.authorization_url) {
          // Redirect customer directly to Paystack Ghana MoMo / Card Checkout Page
          window.location.href = payData.authorization_url
          return
        }
      } catch (err) {
        console.error('Paystack transaction error:', err)
      }
    }

    // Pay on Doorstep Delivery flow: Open WhatsApp notification and show success screen
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setIsSubmitting(false)
      setStep('success')
    }, 600)
  }

  const handleFinish = () => {
    clearCart()
    setStep('form')
    closeCheckout()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-card shadow-2xl overflow-hidden border border-border animate-in fade-in zoom-in duration-200">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between border-b border-border bg-white text-[#5d1019] px-4 sm:px-6 py-4 shrink-0">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                closeCheckout()
                openCart()
              }}
              className="flex items-center gap-1.5 rounded-lg border border-border/80 bg-muted/60 px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:bg-primary hover:text-primary-foreground shadow-sm"
              title="Return to cart to modify items"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Cart</span>
            </button>

            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-[#5d1019] shrink-0" />
              <div>
                <h2 className="font-serif text-base sm:text-xl font-bold leading-tight">
                  {step === 'form' ? 'THE INTERIOR HUB — Secure Checkout' : 'Order Successfully Placed'}
                </h2>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {step === 'form' ? 'Complete your order for custom window measurement & installation' : 'Confirmation details'}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={closeCheckout}
            className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              {/* Form Input Columns */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      1
                    </span>
                    <h3 className="font-serif text-base font-bold text-foreground">
                      Customer &amp; Delivery Details
                    </h3>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Kwame Mensah"
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="kwame@example.com"
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+233 54 647 8040"
                          className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                        Street Address / House No. / Landmark *
                      </label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="House No., Street Name, Landmark"
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                        Ghana Region / City *
                      </label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="Greater Accra">Greater Accra Region (Accra, Tema, Madina, etc.)</option>
                        <option value="Ashanti">Ashanti Region (Kumasi, Obuasi, etc.)</option>
                        <option value="Western">Western Region (Takoradi, Sekondi, etc.)</option>
                        <option value="Central">Central Region (Cape Coast, Winneba, etc.)</option>
                        <option value="Eastern">Eastern Region (Koforidua, Aburi, etc.)</option>
                        <option value="Northern">Northern Region (Tamale, Yendi, etc.)</option>
                        <option value="Volta">Volta Region (Ho, Keta, etc.)</option>
                        <option value="Bono">Bono Region (Sunyani, Techiman, etc.)</option>
                        <option value="Other">Other Region in Ghana</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 2: Wholesale Specifications (Scoped for Automated Hardware) */}
                {items.some((it) => {
                  const n = it.name.toLowerCase()
                  return (
                    n.includes('track') ||
                    n.includes('motor') ||
                    n.includes('automated') ||
                    n.includes('tuya') ||
                    n.includes('drive')
                  )
                }) ? (
                  <div>
                    <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        2
                      </span>
                      <h3 className="font-serif text-base font-bold text-foreground">
                        Automated Hardware Specifications
                      </h3>
                    </div>

                    <div className="mt-4 space-y-4 rounded-xl border border-border/80 bg-muted/30 p-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                            Track Length (Meters)
                          </label>
                          <input
                            type="text"
                            value={orderTrackLength}
                            onChange={(e) => setOrderTrackLength(e.target.value)}
                            placeholder="e.g., 3.5m, 6.0m or per item"
                            className="w-full rounded-xl border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                            Motor Specification / Drive Type
                          </label>
                          <select
                            value={orderMotorSpec}
                            onChange={(e) => setOrderMotorSpec(e.target.value)}
                            className="w-full rounded-xl border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:border-primary"
                          >
                            <option value="Silent Wi-Fi Motor (220V)">Silent Wi-Fi Motor (220V)</option>
                            <option value="Zigbee Smart Drive">Zigbee Smart Drive</option>
                            <option value="Battery Rechargeable Motor">Battery Rechargeable Motor</option>
                            <option value="Standard RF Remote Motor">Standard RF Remote Motor</option>
                            <option value="Manual / Non-Motorized">Manual / Non-Motorized</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                          Bulk Quantity / Project Specifications Notes
                        </label>
                        <textarea
                          rows={2}
                          value={orderBulkNotes}
                          onChange={(e) => setOrderBulkNotes(e.target.value)}
                          placeholder="Provide details on project counts (e.g. 1000 pcs), custom track curves, or installer requirements..."
                          className="w-full rounded-xl border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                        2
                      </span>
                      <h3 className="font-serif text-base font-bold text-foreground">
                        Wholesale Order &amp; Bulk Quantity Notes
                      </h3>
                    </div>

                    <div className="mt-4 rounded-xl border border-border/80 bg-muted/30 p-4">
                      <label className="mb-1 block text-xs font-bold uppercase tracking-wider text-foreground">
                        Bulk Quantity / Special Instructions
                      </label>
                      <textarea
                        rows={2}
                        value={orderBulkNotes}
                        onChange={(e) => setOrderBulkNotes(e.target.value)}
                        placeholder="Provide details on bulk quantities (e.g. 1000 pcs tie hooks), finish options, or delivery notes..."
                        className="w-full rounded-xl border border-input bg-background px-4 py-2 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 border-b border-border/80 pb-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      2
                    </span>
                    <h3 className="font-serif text-base font-bold text-foreground">
                      Payment Method
                    </h3>
                  </div>

                  <div className="mt-4 space-y-3">
                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                        paymentMethod === 'paystack'
                          ? 'border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'paystack'}
                        onChange={() => setPaymentMethod('paystack')}
                        className="mt-1 accent-primary"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-2 font-bold text-sm text-foreground">
                            <CreditCard className="h-4 w-4 text-primary" /> Paystack Ghana (Card &amp; Mobile Money)
                          </span>
                          <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                            RECOMMENDED
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Secure online payment via Paystack: MTN MoMo, Telecel Cash, AT Money, Visa &amp; Mastercard.
                        </p>
                      </div>
                    </label>

                    <label
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                        paymentMethod === 'cod'
                          ? 'border-primary bg-primary/5 shadow-sm ring-2 ring-primary/20'
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="mt-1 accent-primary"
                      />
                      <div className="flex-1">
                        <span className="flex items-center gap-2 font-bold text-sm text-foreground">
                          <Truck className="h-4 w-4 text-primary" /> Pay on Doorstep Delivery
                        </span>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Pay via Mobile Money or Cash when our team arrives for doorstep installation.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Summary Sidebar Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-border bg-muted/40 p-5 lg:p-6 shadow-sm">
                <div>
                  <h3 className="font-serif text-base font-bold text-foreground border-b border-border pb-3">
                    Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
                  </h3>

                  <div className="mt-4 max-h-64 overflow-y-auto space-y-3 pr-1">
                    {items.length === 0 ? (
                      <p className="text-xs text-muted-foreground py-4 text-center">Your cart is empty.</p>
                    ) : (
                      items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between gap-3 text-xs">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image || '/placeholder.svg'}
                              alt={item.name}
                              className="h-11 w-11 rounded-lg object-cover border border-border bg-white"
                            />
                            <div>
                              <p className="font-bold text-foreground line-clamp-1">{item.name}</p>
                              <p className="text-muted-foreground text-[11px]">{item.brand} • Qty: {item.quantity}</p>
                            </div>
                          </div>
                          <span className="font-bold text-foreground shrink-0">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="mt-6 border-t border-border pt-4 space-y-2.5 text-xs">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span className="font-bold text-foreground">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Doorstep Measurement &amp; Fitting</span>
                      <span className="font-bold text-emerald-600">FREE</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between text-base font-bold text-foreground">
                      <span>Total Amount</span>
                      <span className="text-xl text-primary">{formatPrice(subtotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 font-serif text-base font-bold text-accent-foreground shadow-xl transition-all hover:scale-[1.02] hover:brightness-105 disabled:opacity-50"
                  >
                    <Lock className="h-4 w-4" />
                    <span>
                      {isSubmitting
                        ? 'Processing Order...'
                        : paymentMethod === 'paystack'
                        ? `Pay ${formatPrice(subtotal)} via Paystack`
                        : 'Confirm & Place Order'}
                    </span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Paystack SSL Encrypted &amp; 100% Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
              <CheckCircle2 className="h-12 w-12" />
            </div>

            <div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                ORDER SUCCESSFUL
              </span>
              <h3 className="mt-3 font-serif text-3xl font-bold text-foreground">Thank You For Your Order!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your order has been created and registered with THE INTERIOR HUB.
              </p>
              <div className="mt-4 inline-block rounded-xl bg-primary/10 px-5 py-2.5 text-base font-bold text-primary border border-primary/20 shadow-sm">
                Order Reference: {orderRef}
              </div>
            </div>

            <div className="mx-auto max-w-md rounded-2xl border border-border bg-muted/40 p-5 text-left text-xs space-y-3 text-muted-foreground">
              <p className="font-bold text-foreground text-sm border-b border-border/80 pb-2">What happens next?</p>
              <p>• A confirmation receipt has been saved for <strong>{fullName || 'valued customer'}</strong> ({email}).</p>
              <p>• Our Ghana installation manager will call/WhatsApp you shortly at <strong>{phone || '+233 ...'}</strong> to schedule your free doorstep window measurement.</p>
            </div>

            <button
              onClick={handleFinish}
              className="rounded-xl bg-primary px-8 py-3.5 font-serif text-sm font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
