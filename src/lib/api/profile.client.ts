import { parseResponse } from '@/lib/api/errors'

interface ProfileResult {
  id: string
  plan: string
  mpSubscriptionId: string | null
}

export const profileApiClient = {
  async get(): Promise<ProfileResult> {
    const response = await fetch('/api/profile')
    return parseResponse<ProfileResult>(response)
  },
}
