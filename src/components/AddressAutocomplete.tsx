'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

interface AddressAutocompleteProps {
  value: string | undefined
  onChange: (value: string) => void
  placeholder?: string
  error?: string
}

export default function AddressAutocomplete({
  value,
  onChange,
  placeholder = '123 Main St, Atlanta, GA 30303',
  error,
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [autocompleteService, setAutocompleteService] = useState<google.maps.places.AutocompleteService | null>(null)
  const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null)

  // Load Google Maps API and initialize services
  useEffect(() => {
    if (typeof window === 'undefined' || !window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = () => {
        if (window.google) {
          setAutocompleteService(new window.google.maps.places.AutocompleteService())
          const dummyDiv = document.createElement('div')
          setPlacesService(new window.google.maps.places.PlacesService(dummyDiv))
          setIsLoaded(true)
        }
      }
      script.onerror = () => {
        console.error('Failed to load Google Maps API')
      }
      document.head.appendChild(script)
    } else if (window.google) {
      setAutocompleteService(new window.google.maps.places.AutocompleteService())
      const dummyDiv = document.createElement('div')
      setPlacesService(new window.google.maps.places.PlacesService(dummyDiv))
      setIsLoaded(true)
    }
  }, [])

  // Handle input change and get suggestions
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChange(inputValue)

    if (!inputValue || !autocompleteService) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    try {
      const request = {
        input: inputValue,
        componentRestrictions: { country: 'us' },
      }

      const predictions = await autocompleteService.getPlacePredictions(request)
      setSuggestions(predictions.predictions)
      setShowSuggestions(true)
    } catch (error) {
      console.error('Autocomplete error:', error)
      setSuggestions([])
    }
  }

  // Handle suggestion selection
  const handleSuggestionClick = async (prediction: google.maps.places.AutocompletePrediction) => {
    onChange(prediction.description)
    setSuggestions([])
    setShowSuggestions(false)

    // Get detailed place information
    if (placesService && prediction.place_id) {
      try {
        placesService.getDetails(
          { placeId: prediction.place_id },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
              // You could use the detailed place data here if needed
              console.log('Place details:', place)
            }
          }
        )
      } catch (error) {
        console.error('Place details error:', error)
      }
    }
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <MapPin className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => value && suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-50'
              : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
          }`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'address-error' : undefined}
          disabled={!isLoaded}
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {suggestions.map((prediction, index) => (
            <button
              key={prediction.place_id || index}
              onClick={() => handleSuggestionClick(prediction)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-start gap-3 border-b border-gray-100 last:border-0 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{prediction.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {error && (
        <p id="address-error" className="text-red-600 text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
