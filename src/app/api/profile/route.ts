import { NextResponse } from 'next/server'
import { withAuth } from '@/lib/supabase/auth'
import { createClient } from '@/lib/supabase/server'
import { ProfileRepository } from '@/lib/repositories/profile.repository'

export async function GET() {
  return withAuth(async (user) => {
    const supabase = await createClient()
    const profileRepository = new ProfileRepository(supabase)
    const profile = await profileRepository.findById(user.id)
    return NextResponse.json(profile)
  })
}
