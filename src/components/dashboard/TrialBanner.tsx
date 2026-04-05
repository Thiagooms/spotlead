'use client'

import Link from 'next/link'

interface TrialBannerProps {
  trialEndsAt: string
}

function getDaysRemaining(trialEndsAt: string): number {
  const now = new Date()
  const end = new Date(trialEndsAt)
  const diff = end.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

export function TrialBanner({ trialEndsAt }: TrialBannerProps) {
  const daysRemaining = getDaysRemaining(trialEndsAt)

  if (daysRemaining === 0) return null

  const isUrgent = daysRemaining <= 2

  return (
    <div className={`w-full px-4 py-2.5 flex items-center justify-between gap-4 text-sm ${
      isUrgent
        ? 'bg-amber-50 border-b border-amber-200'
        : 'bg-indigo-50 border-b border-indigo-100'
    }`}>
      <p className={isUrgent ? 'text-amber-800' : 'text-indigo-700'}>
        {isUrgent
          ? `⚠️ Seu trial Premium expira em ${daysRemaining} dia${daysRemaining > 1 ? 's' : ''}. Não perca o acesso!`
          : `✨ Você está no período Premium gratuito — ${daysRemaining} dias restantes.`
        }
      </p>
      <Link
        href="/upgrade"
        className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
          isUrgent
            ? 'bg-amber-600 text-white hover:bg-amber-700'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        Assinar agora
      </Link>
    </div>
  )
}
