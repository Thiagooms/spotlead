import { NextResponse } from 'next/server'
import { withAuth } from '@/lib/supabase/auth'
import { createClient } from '@/lib/supabase/server'
import { makeProfileRepository } from '@/lib/factories/service.factory'
import { handleRouteError } from '@/lib/http/responses'

export async function GET() {
  return withAuth(async (user) => {
    try {
      const supabase = await createClient()
      const profileRepository = makeProfileRepository(supabase)
      const profile = await profileRepository.findById(user.id)

      const effectivePlan = await profileRepository.getPlanByUserId(user.id)

      return NextResponse.json({
        id: user.id,
        plan: profile?.plan ?? 'free',
        effectivePlan,
        trialEndsAt: profile?.trialEndsAt ?? null,
      })
    } catch (error) {
      return handleRouteError(error, 'Profile API error:')
    }
  })
}
