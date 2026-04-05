import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from '@/lib/supabase/auth'
import { createClient } from '@/lib/supabase/server'
import { makeProfileRepository } from '@/lib/factories/service.factory'
import { handleRouteError } from '@/lib/http/responses'
import { readJsonBody } from '@/lib/http/request'
import { parseOnboardingInput } from '@/lib/validation/onboarding'

export async function PATCH(request: NextRequest) {
  return withAuth(async (user) => {
    try {
      const supabase = await createClient()
      const body = parseOnboardingInput(await readJsonBody(request))
      const profileRepository = makeProfileRepository(supabase)

      await profileRepository.updateOnboarding(user.id, body.service, body.city)

      return NextResponse.json({ ok: true })
    } catch (error) {
      return handleRouteError(error, 'Onboarding API error:')
    }
  })
}
