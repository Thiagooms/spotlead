import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from '@/lib/supabase/auth'
import { makePlacesService } from '@/lib/factories/service.factory'
import { PlacesSearchParams } from '@/lib/types/places'

const placesService = makePlacesService()

export async function POST(request: NextRequest) {
  return withAuth(async () => {
    const body: PlacesSearchParams = await request.json()

    const query = body.query?.trim()
    const city = body.city?.trim()

    if (!query || !city) {
      return NextResponse.json({ error: 'query and city are required' }, { status: 400 })
    }

    if (query.length > 100 || city.length > 100) {
      return NextResponse.json({ error: 'query and city must be under 100 characters' }, { status: 400 })
    }

    const results = await placesService.search(body)
    return NextResponse.json(results)
  })
}
