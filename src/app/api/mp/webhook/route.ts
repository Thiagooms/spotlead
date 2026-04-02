import { NextRequest, NextResponse } from 'next/server'
import { makeMercadoPagoService } from '@/lib/factories/service.factory'

const mpService = makeMercadoPagoService()

async function isValidSignature(
  request: NextRequest,
  dataId: string
): Promise<boolean> {
  const secret = process.env.MP_WEBHOOK_SECRET
  if (!secret) return true

  const xSignature = request.headers.get('x-signature')
  const xRequestId = request.headers.get('x-request-id')

  if (!xSignature || !xRequestId) return false

  const parts = Object.fromEntries(
    xSignature.split(',').map(part => {
      const [key, ...rest] = part.split('=')
      return [key.trim(), rest.join('=').trim()]
    })
  )

  const ts = parts['ts']
  const v1 = parts['v1']

  if (!ts || !v1) return false

  const template = `id:${dataId};request-id:${xRequestId};ts:${ts};`
  const encoder = new TextEncoder()

  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(template))
  const hashHex = Array.from(new Uint8Array(signature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  return hashHex === v1
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text()
    const { type, data } = JSON.parse(rawBody)

    if (!type || !data?.id) {
      return NextResponse.json({ received: true })
    }

    const valid = await isValidSignature(request, data.id)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    await mpService.handleWebhook(type, data.id)
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('MP webhook error:', error)
    return NextResponse.json({ received: true })
  }
}
