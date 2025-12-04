import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { input } = await request.json()

  if (!input || typeof input !== 'string') {
    return NextResponse.json(
      { error: 'Invalid input' },
      { status: 400 }
    )
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    console.error('GOOGLE_MAPS_API_KEY is not configured')
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    )
  }

  try {
    // Using the correct REST endpoint for Place Autocomplete
    const params = new URLSearchParams({
      input,
      key: apiKey,
      components: 'country:us',
    })

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.error('Google Places API error:', response.status, response.statusText)
      const errorText = await response.text()
      console.error('Error response:', errorText)
      return NextResponse.json(
        { error: 'Failed to fetch predictions' },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Places API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch predictions' },
      { status: 500 }
    )
  }
}
