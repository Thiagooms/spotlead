import { NextResponse } from 'next/server'
import { withAuth } from '@/lib/supabase/auth'
import { createClient } from '@/lib/supabase/server'
import { makeProfileRepository } from '@/lib/factories/service.factory'

export async function GET() {
  return withAuth(async (user) => {
    const supabase = await createClient()
    const profileRepository = makeProfileRepository(supabase)
    const profile = await profileRepository.findById(user.id)
    return NextResponse.json(profile)
  })
}
