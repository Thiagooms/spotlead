import { ensureObject, readRequiredString } from './base'

export interface OnboardingInput {
  service: string
  city: string
}

export function parseOnboardingInput(input: unknown): OnboardingInput {
  const body = ensureObject(input)

  return {
    service: readRequiredString(body.service, { field: 'service', minLength: 1, maxLength: 100 }),
    city: readRequiredString(body.city, { field: 'city', minLength: 1, maxLength: 100 }),
  }
}
