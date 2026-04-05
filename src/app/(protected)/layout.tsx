import { redirect } from 'next/navigation'
import Link from 'next/link'
import { LogoutButton } from '@/components/ui/LogoutButton'
import { TrialBanner } from '@/components/dashboard/TrialBanner'
import { createClient } from '@/lib/supabase/server'
import { makeProfileRepository } from '@/lib/factories/service.factory'

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  const profileRepository = makeProfileRepository(supabase)
  const profile = await profileRepository.findById(user.id)

  const isOnTrial =
    profile?.plan !== 'paid' &&
    !!profile?.trialEndsAt &&
    new Date(profile.trialEndsAt) > new Date()

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-bold text-indigo-600">SpotLead</span>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Buscar
            </Link>
            <Link href="/pipeline" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pipeline
            </Link>
            <Link href="/upgrade" className="text-gray-600 hover:text-gray-900 transition-colors">
              Planos
            </Link>
            <LogoutButton />
          </div>
        </div>
      </nav>
      {isOnTrial && <TrialBanner trialEndsAt={profile!.trialEndsAt!} />}
      {children}
    </div>
  )
}
