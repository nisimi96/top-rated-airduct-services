'use client'

import { useEffect } from 'react'

export default function GoogleMapsScript() {
  useEffect(() => {
    // Only load if not already loaded
    if (window.google?.maps) {
      return
    }

    const script = document.createElement('script')
    // Google requires loading=async parameter in the URL for proper async loading
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      // Cleanup is not needed for this script as it's a singleton
    }
  }, [])

  // This component doesn't render anything
  return null
}
