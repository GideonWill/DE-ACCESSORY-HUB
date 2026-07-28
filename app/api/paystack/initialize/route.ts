import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, amount, metadata, callback_url } = body

    const secretKey =
      process.env.PAYSTACK_SECRET_KEY ||
      process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY ||
      'sk_test_22d65443a7f1adc0f6e24f8010642da1e2864d46'

    // Amount in pesewas (1 GHS = 100 pesewas)
    const amountInPesewas = Math.round(Number(amount) * 100)

    const paystackRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email || 'customer@deaccessoryhub.com',
        amount: amountInPesewas,
        currency: 'GHS',
        metadata: metadata || {},
        callback_url: callback_url || undefined,
      }),
    })

    const data = await paystackRes.json()

    if (!paystackRes.ok || !data.status) {
      console.error('Paystack initialization failed:', data)
      return NextResponse.json(
        { status: false, message: data.message || 'Failed to initialize Paystack transaction' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      status: true,
      authorization_url: data.data.authorization_url,
      access_code: data.data.access_code,
      reference: data.data.reference,
    })
  } catch (error: any) {
    console.error('Error initializing Paystack:', error)
    return NextResponse.json(
      { status: false, message: error?.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
