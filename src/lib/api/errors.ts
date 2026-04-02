export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const text = await response.text()
    let message = `HTTP ${response.status}`
    if (text) {
      try {
        message = JSON.parse(text)?.error ?? text
      } catch {
        message = text
      }
    }
    throw new ApiError(message, response.status)
  }
  return response.json()
}
