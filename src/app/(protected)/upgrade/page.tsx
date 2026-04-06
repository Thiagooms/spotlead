'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { profileApiClient } from '@/lib/api/profile.client'
import { PaywallModal } from '@/components/paywall/PaywallModal'

export default function UpgradePage() {
  const [userEmail, setUserEmail] = useState('')
  const [isPaid, setIsPaid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showPaywall, setShowPaywall] = useState(false)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email ?? '')
    })

    profileApiClient.get().then((profile) => {
      setIsPaid(profile.effectivePlan === 'paid')
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-sm text-gray-500">Carregando...</p>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Planos</h1>
        <p className="text-gray-500">Escolha o plano ideal para prospectar mais clientes</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-xl p-6 bg-white">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Gratuito</h2>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            R$0<span className="text-base font-normal text-gray-500">/mês</span>
          </p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Busca no Google Maps
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Até 30 leads salvos
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Pipeline Kanban
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">✗</span> Leads ilimitados
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-300">✗</span> Suporte prioritário
            </li>
          </ul>
          <div className="w-full py-2 px-4 text-center text-sm font-medium text-gray-500 bg-gray-100 rounded-md">
            {isPaid ? 'Plano anterior' : 'Plano atual'}
          </div>
        </div>

        <div className="border-2 border-indigo-600 rounded-xl p-6 bg-white relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Recomendado
          </span>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Pro</h2>
          <p className="text-3xl font-bold text-gray-900 mb-4">
            R$49<span className="text-base font-normal text-gray-500">/mês</span>
          </p>
          <ul className="text-sm text-gray-600 space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Busca no Google Maps
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Leads ilimitados
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Pipeline Kanban completo
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Notas e histórico de contato
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span> Suporte prioritário
            </li>
          </ul>
          {isPaid ? (
            <div className="w-full py-2 px-4 text-center text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md">
              Plano atual ✓
            </div>
          ) : (
            <button
              onClick={() => setShowPaywall(true)}
              className="w-full py-2 px-4 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
            >
              Assinar agora
            </button>
          )}
        </div>
      </div>

      <PaywallModal
        isOpen={showPaywall}
        payerEmail={userEmail}
        onClose={() => setShowPaywall(false)}
      />
    </main>
  )
}
