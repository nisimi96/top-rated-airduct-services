'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'
import { useGooglePlacesAutocomplete } from '@/hooks/useGooglePlacesAutocomplete'

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
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const [isApiLoaded, setIsApiLoaded] = useState(false)
  const [localInput, setLocalInput] = useState(value || '')

  // Google Maps API is loaded by the contact page Script component
  useEffect(() => {
    setIsApiLoaded(true)
  }, [])

  // Use the custom hook for autocomplete functionality
  const { predictions, isLoading, showPredictions, setShowPredictions, selectPlace } =
    useGooglePlacesAutocomplete({
      inputValue: isApiLoaded ? localInput : '',
      onPlaceSelect: (address) => {
        setLocalInput(address)
        onChange(address)
      },
    })

  // Handle input change with parallel state management
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setLocalInput(newValue)
    onChange(newValue)
  }

  // Handle suggestion selection
  const handleSuggestionClick = (prediction: { place_id: string; description: string }) => {
    selectPlace(prediction.place_id, prediction.description)
    setLocalInput(prediction.description)
    onChange(prediction.description)
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      // Don't close if clicking on input or suggestions dropdown
      if (
        (inputRef.current && inputRef.current.contains(target)) ||
        (suggestionsRef.current && suggestionsRef.current.contains(target))
      ) {
        return
      }

      setShowPredictions(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [setShowPredictions])

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <MapPin className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={localInput}
          onChange={handleInputChange}
          onFocus={() => localInput && setShowPredictions(true)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-50'
              : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
          }`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'address-error' : undefined}
        />
        {isLoading && (
          <div className="absolute right-3 top-3 text-gray-400">
            <div className="w-5 h-5 border-2 border-gray-300 border-t-brand-blue rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showPredictions && predictions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
        >
          {predictions.map((prediction, index) => (
            <button
              key={prediction.place_id || index}
              onClick={() => handleSuggestionClick(prediction)}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-start gap-3 border-b border-gray-100 last:border-0 transition-colors"
            >
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{prediction.description}</p>
                {prediction.secondary_text && (
                  <p className="text-xs text-gray-500">{prediction.secondary_text}</p>
                )}
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
