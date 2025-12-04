import { useEffect, useState } from 'react'

interface Prediction {
  place_id: string
  description: string
  main_text?: string
  secondary_text?: string
}

interface UseGooglePlacesAutocompleteProps {
  inputValue: string
  onPlaceSelect: (address: string) => void
}

export const useGooglePlacesAutocomplete = ({
  inputValue,
  onPlaceSelect,
}: UseGooglePlacesAutocompleteProps) => {
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showPredictions, setShowPredictions] = useState(false)

  // Fetch predictions when input changes
  useEffect(() => {
    if (!inputValue || inputValue.length < 2) {
      setPredictions([])
      setShowPredictions(false)
      return
    }

    setIsLoading(true)

    // Try backend API first (uses new Google Places API)
    fetch('/api/places/autocomplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: inputValue }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Check if the backend API returned predictions or an error
        if (data.predictions && Array.isArray(data.predictions) && data.predictions.length > 0) {
          setPredictions(
            data.predictions.map((p: any) => ({
              place_id: p.place_id || '',
              description: p.description,
              main_text: p.structured_formatting?.main_text,
              secondary_text: p.structured_formatting?.secondary_text,
            }))
          )
          setShowPredictions(true)
          setIsLoading(false)
        } else if (data.error || data.status === 'REQUEST_DENIED' || data.error_message) {
          // Backend API failed or is restricted, use fallback
          console.warn('Backend API unavailable, using client-side fallback')
          fallbackToClientSideAPI(inputValue)
        } else {
          // No predictions found
          setPredictions([])
          setShowPredictions(false)
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error('Autocomplete fetch error:', error)
        // Fallback to client-side API if backend fails
        fallbackToClientSideAPI(inputValue)
      })
  }, [inputValue])

  // Fallback to client-side Google Places API if backend fails
  // Note: Using AutocompleteService as fallback. For production with high volume,
  // consider upgrading to the new AutocompleteSuggestion API (requires separate backend implementation)
  const fallbackToClientSideAPI = (input: string) => {
    if (typeof window === 'undefined' || !window.google?.maps?.places) {
      console.warn('Google Maps API not available for fallback')
      setPredictions([])
      setIsLoading(false)
      return
    }

    try {
      const service = new window.google.maps.places.AutocompleteService()
      service.getPlacePredictions(
        {
          input,
          componentRestrictions: { country: 'us' },
          locationBias: {
            rectangle: {
              south: 33.906,
              west: -84.398,
              north: 34.006,
              east: -84.298,
            },
          },
        },
        (results, status) => {
          console.log('Fallback autocomplete results:', { results, status })
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
            const mapped = results.map((p) => ({
              place_id: p.place_id || '',
              description: p.description,
              main_text: p.structured_formatting?.main_text,
              secondary_text: p.structured_formatting?.secondary_text,
            }))
            console.log('Fallback - setting predictions:', mapped)
            setPredictions(mapped)
            setShowPredictions(true)
          } else {
            console.log('Fallback - no results, status:', status)
            setPredictions([])
            setShowPredictions(false)
          }
          setIsLoading(false)
        }
      )
    } catch (error) {
      console.error('Fallback autocomplete error:', error)
      setPredictions([])
      setIsLoading(false)
    }
  }

  const selectPlace = (placeId: string, description: string) => {
    onPlaceSelect(description)
    setPredictions([])
    setShowPredictions(false)
  }

  return {
    predictions,
    isLoading,
    showPredictions,
    setShowPredictions,
    selectPlace,
  }
}
