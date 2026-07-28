'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { TrackOrderModal } from '@/components/track-order-modal'

export type CartItem = {
  id: string
  name: string
  brand: string
  price: number
  image: string
  quantity: number
  trackLength?: string
  motorSpec?: string
  bulkNotes?: string
}

export type ProductView = {
  id: string
  name: string
  brand: string
  price: number
  image: string
  categorySlug?: string
  sale?: boolean
  description?: string
  trackLength?: string
  motorSpec?: string
  bulkNotes?: string
}

export type WholesaleOrder = {
  id: string
  ref: string
  date: string
  dateIso: string
  customerName: string
  email: string
  phone: string
  address: string
  region: string
  trackLength?: string
  motorSpec?: string
  bulkNotes?: string
  items: CartItem[]
  subtotal: number
  paymentStatus: 'Paid' | 'Pending' | 'Unpaid (Pay on Delivery)'
  paymentMethod?: string
  status: 'Pending' | 'Processing' | 'Cutting / Customization' | 'Out for Delivery' | 'Delivered' | 'Completed'
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>, qty?: number, openDrawer?: boolean) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, qty: number) => void
  clearCart: () => void
  totalCount: number
  subtotal: number
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  isCheckoutOpen: boolean
  openCheckout: () => void
  closeCheckout: () => void
  isSearchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  isTrackModalOpen: boolean
  openTrackModal: () => void
  closeTrackModal: () => void
  activeProduct: ProductView | null
  openProductModal: (product: ProductView) => void
  closeProductModal: () => void
  buyNow: (product: ProductView, qty?: number) => void
  favorites: string[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
  orders: WholesaleOrder[]
  addOrder: (order: Omit<WholesaleOrder, 'id' | 'date' | 'dateIso' | 'status' | 'paymentStatus'>) => WholesaleOrder
  updateOrderStatus: (id: string, status: WholesaleOrder['status']) => void
  updatePaymentStatus: (id: string, paymentStatus: WholesaleOrder['paymentStatus']) => void
  clearAllOrders: () => void
  customProducts: ProductView[]
  addProduct: (product: ProductView) => void
  updateProductPrice: (id: string, newPrice: number) => void
  deleteProduct: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'the_interior_hub_cart'
const FAVORITES_STORAGE_KEY = 'the_interior_hub_favs'
const ORDERS_STORAGE_KEY = 'the_interior_hub_orders_v2'
const CUSTOM_PRODUCTS_KEY = 'the_interior_hub_custom_products'

const SAMPLE_ORDERS: WholesaleOrder[] = []

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [favorites, setFavorites] = useState<string[]>([])
  const [orders, setOrders] = useState<WholesaleOrder[]>([])
  const [customProducts, setCustomProducts] = useState<ProductView[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<ProductView | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      // Purge legacy test orders key
      localStorage.removeItem('the_interior_hub_orders')

      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) setItems(JSON.parse(savedCart))
      const savedFavs = localStorage.getItem(FAVORITES_STORAGE_KEY)
      if (savedFavs) setFavorites(JSON.parse(savedFavs))
      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY)
      if (savedOrders) {
        const parsed: WholesaleOrder[] = JSON.parse(savedOrders)
        // Filter out any legacy test orders
        const realOrders = parsed.filter((o) => !['ORD-984210', 'ORD-873104', 'ORD-762198'].includes(o.id))
        setOrders(realOrders)
      } else {
        setOrders([])
      }
      const savedProducts = localStorage.getItem(CUSTOM_PRODUCTS_KEY)
      if (savedProducts) setCustomProducts(JSON.parse(savedProducts))
    } catch (e) {
      console.error('Failed to load storage', e)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
      } catch (e) {
        console.error('Failed to save cart', e)
      }
    }
  }, [items, mounted])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
      } catch (e) {
        console.error('Failed to save favorites', e)
      }
    }
  }, [favorites, mounted])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
      } catch (e) {
        console.error('Failed to save orders', e)
      }
    }
  }, [orders, mounted])

  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(customProducts))
      } catch (e) {
        console.error('Failed to save custom products', e)
      }
    }
  }, [customProducts, mounted])

  const addItem = (newItem: Omit<CartItem, 'quantity'>, qty = 1, openDrawer = false) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.id === newItem.id &&
          i.trackLength === newItem.trackLength &&
          i.motorSpec === newItem.motorSpec
      )
      if (existingIndex > -1) {
        const updated = [...prev]
        updated[existingIndex].quantity += qty
        return updated
      }
      return [...prev, { ...newItem, quantity: qty }]
    })
    if (openDrawer) {
      setIsCartOpen(true)
    }
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const openProductModal = (product: ProductView) => {
    setActiveProduct(product)
  }

  const closeProductModal = () => {
    setActiveProduct(null)
  }

  const buyNow = (product: ProductView, qty = 1) => {
    addItem(
      {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        trackLength: product.trackLength,
        motorSpec: product.motorSpec,
        bulkNotes: product.bulkNotes,
      },
      qty,
      false
    )
    setActiveProduct(null)
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const isFavorite = (id: string) => favorites.includes(id)

  const addOrder = (orderData: Omit<WholesaleOrder, 'id' | 'date' | 'dateIso' | 'status' | 'paymentStatus'>) => {
    const now = new Date()
    const methodLower = (orderData.paymentMethod || '').toLowerCase()
    const isPayOnDelivery = methodLower.includes('delivery') || methodLower.includes('doorstep') || methodLower.includes('cod')

    const newOrder: WholesaleOrder = {
      ...orderData,
      id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      dateIso: now.toISOString().split('T')[0],
      date: now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      paymentStatus: isPayOnDelivery ? 'Unpaid (Pay on Delivery)' : 'Paid',
      paymentMethod: orderData.paymentMethod || 'Paystack Ghana (MoMo)',
      status: 'Pending',
    }
    setOrders((prev) => [newOrder, ...prev])
    return newOrder
  }

  const updateOrderStatus = (id: string, status: WholesaleOrder['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status } : o))
    )
  }

  const updatePaymentStatus = (id: string, paymentStatus: WholesaleOrder['paymentStatus']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, paymentStatus } : o))
    )
  }

  const clearAllOrders = () => {
    setOrders([])
    try {
      localStorage.removeItem('the_interior_hub_orders')
      localStorage.removeItem(ORDERS_STORAGE_KEY)
    } catch (e) {
      console.error('Failed to clear orders storage', e)
    }
  }

  const addProduct = (product: ProductView) => {
    setCustomProducts((prev) => [product, ...prev])
  }

  const updateProductPrice = (id: string, newPrice: number) => {
    setCustomProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, price: newPrice } : p))
    )
  }

  const deleteProduct = (id: string) => {
    setCustomProducts((prev) => prev.filter((p) => p.id !== id))
  }

  // Count of distinct unique items in the cart (so selecting the same item increases quantity without incrementing the cart badge count until a different product is added)
  const totalCount = items.length
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
        isCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        },
        closeCheckout: () => setIsCheckoutOpen(false),
        isSearchOpen,
        openSearch: () => setIsSearchOpen(true),
        closeSearch: () => setIsSearchOpen(false),
        isTrackModalOpen,
        openTrackModal: () => setIsTrackModalOpen(true),
        closeTrackModal: () => setIsTrackModalOpen(false),
        activeProduct,
        openProductModal,
        closeProductModal,
        buyNow,
        favorites,
        toggleFavorite,
        isFavorite,
        orders,
        addOrder,
        updateOrderStatus,
        updatePaymentStatus,
        clearAllOrders,
        customProducts,
        addProduct,
        updateProductPrice,
        deleteProduct,
      }}
    >
      {children}
      <TrackOrderModal />
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
