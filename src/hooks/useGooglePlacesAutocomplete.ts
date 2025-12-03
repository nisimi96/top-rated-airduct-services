import { useEffect, useRef, useState } from 'react'

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

// Marietta, GA bounds (approximate 3 mile radius from center 33.956, -84.348)
// Southwest corner: 33.906, -84.398
// Northeast corner: 34.006, -84.298
const MARIETTA_BOUNDS = {
  south: 33.906,
  west: -84.398,
  north: 34.006,
  east: -84.298,
}

export const useGooglePlacesAutocomplete = ({
  inputValue,
  onPlaceSelect,
}: UseGooglePlacesAutocompleteProps) => {
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showPredictions, setShowPredictions] = useState(false)
  const autocompleteSessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(null)
  const autocompleteServiceRef = useRef<google.maps.places.AutocompleteService | null>(null)

  // Initialize session token and autocomplete service once
  useEffect(() => {
    const initializeServices = () => {
      if (typeof window === 'undefined' || !window.google?.maps?.places) {
        setTimeout(initializeServices, 500)
        return
      }

      try {
        autocompleteSessionTokenRef.current =
          new window.google.maps.places.AutocompleteSessionToken()
        autocompleteServiceRef.current =
          new window.google.maps.places.AutocompleteService()
      } catch (error) {
        console.error('Failed to initialize Google Places services:', error)
        setTimeout(initializeServices, 1000)
      }
    }

    initializeServices()
  }, [])

  // Fetch predictions when input changes
  useEffect(() => {
    if (!inputValue || inputValue.length < 2) {
      setPredictions([])
      setShowPredictions(false)
      return
    }

    if (!autocompleteServiceRef.current || !window.google?.maps?.places) {
      return
    }

    setIsLoading(true)

    try {
      const request: any = {
        input: inputValue,
        bounds: MARIETTA_BOUNDS,
        componentRestrictions: { country: 'us' },
      }

      // Only include sessionToken if it's initialized
      if (autocompleteSessionTokenRef.current) {
        request.sessionToken = autocompleteSessionTokenRef.current
      }

      autocompleteServiceRef.current.getPlacePredictions(
        request,
        (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
            setPredictions(
              results.map((p) => ({
                place_id: p.place_id || '',
                description: p.description,
                main_text: p.structured_formatting?.main_text,
                secondary_text: p.structured_formatting?.secondary_text,
              }))
            )
            setShowPredictions(true)
          } else {
            setPredictions([])
            setShowPredictions(false)
          }
          setIsLoading(false)
        }
      )
    } catch (error) {
      console.error('Autocomplete error:', error)
      setPredictions([])
      setIsLoading(false)
    }
  }, [inputValue])

  // Select a place and reset session token
  const selectPlace = (placeId: string, description: string) => {
    onPlaceSelect(description)
    setPredictions([])
    setShowPredictions(false)

    // Reset session token for next search (billing optimization)
    if (window.google?.maps?.places) {
      try {
        autocompleteSessionTokenRef.current =
          new window.google.maps.places.AutocompleteSessionToken()
      } catch (error) {
        console.error('Failed to reset session token:', error)
      }
    }
  }

  return {
    predictions,
    isLoading,
    showPredictions,
    setShowPredictions,
    selectPlace,
  }
}
