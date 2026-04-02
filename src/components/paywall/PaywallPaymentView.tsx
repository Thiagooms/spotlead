'use client'

import { initMercadoPago, CardPayment } from '@mercadopago/sdk-react'
import { mpApiClient } from '@/lib/api/mp.client'

interface PaywallPaymentViewProps {
  payerEmail: string
  onSuccess: () => void
  onCancel: () => void
}

initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY!, { locale: 'pt-BR' })

export function PaywallPaymentView({ payerEmail, onSuccess, onCancel }: PaywallPaymentViewProps) {
  async function handleSubmit(formData: { token: string }) {
    try {
      await mpApiClient.createSubscription({
        cardToken: formData.token,
        payerEmail,
      })
      onSuccess()
    } catch (error) {
      console.error('Erro ao criar assinatura:', error)
    }
  }

  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 mb-6">Dados do pagamento</h2>
      <CardPayment
        initialization={{ amount: 50, payer: { email: payerEmail } }}
        customization={{ paymentMethods: { maxInstallments: 1 } }}
        onSubmit={handleSubmit}
        onReady={() => {}}
        onError={(error) => console.error('MP Brick error:', error)}
      />
      <button
        onClick={onCancel}
        className="mt-4 w-full py-2 px-4 text-gray-600 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors"
      >
        Cancelar
      </button>
    </>
  )
}
