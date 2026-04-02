import { IGooglePlacesRepository } from '@/lib/repositories/google-places.repository'
import { PlaceResult, PlacesSearchParams } from '@/lib/types/places'
import { ScoredPlace } from '@/lib/types/lead'
import { LeadScorer } from '@/lib/scoring/lead.scorer'

export class PlacesService {
  constructor(
    private readonly scorer: LeadScorer,
    private readonly placesRepository: IGooglePlacesRepository
  ) {}

  async search(params: PlacesSearchParams): Promise<ScoredPlace[]> {
    const places = await this.placesRepository.searchByText(params.query, params.city)
    const details = await Promise.all(places.map(p => this.placesRepository.getDetails(p.place_id)))
    const validDetails = details.filter((d): d is PlaceResult => d !== null)

    return validDetails
      .map(place => this.scorer.score(place))
      .filter(place => this.matchesRatingFilter(place, params))
      .sort((a, b) => b.score - a.score)
  }

  private matchesRatingFilter(place: ScoredPlace, params: PlacesSearchParams): boolean {
    if (params.minRating !== undefined && (place.rating ?? 0) < params.minRating) return false
    if (params.maxRating !== undefined && (place.rating ?? 5) > params.maxRating) return false
    return true
  }
}
