'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const BEFORE_AFTER_PAIRS = [
  { before: '/images/dirty-duct.webp', after: '/images/clean-duct.webp' },
  { before: '/images/dirty-duct2.webp', after: '/images/clean-duct2.webp' },
  { before: '/images/dirty-duct3.webp', after: '/images/clean-duct3.webp' },
]

export default function BeforeAfterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Only auto-rotate if user doesn't prefer reduced motion
    if (prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault()
        setCurrentIndex((prev) => (prev - 1 + BEFORE_AFTER_PAIRS.length) % BEFORE_AFTER_PAIRS.length)
        break
      case 'ArrowRight':
        e.preventDefault()
        setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length)
        break
      case 'Home':
        e.preventDefault()
        setCurrentIndex(0)
        break
      case 'End':
        e.preventDefault()
        setCurrentIndex(BEFORE_AFTER_PAIRS.length - 1)
        break
    }
  }

  const pair = BEFORE_AFTER_PAIRS[currentIndex]

  return (
    <section className="py-12 bg-white" aria-label="Before and after carousel">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
          See the Difference We Make
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Before and after image carousel"
          aria-live="polite"
        >
          {/* Before */}
          <div className="text-center">
            <p className="text-xl font-bold text-gray-700 mb-4">Before</p>
            <div className="rounded-2xl overflow-hidden shadow-lg relative w-full" style={{paddingBottom: '66.67%'}}>
              <Image
                src={pair.before}
                alt="Dirty air duct before cleaning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>

          {/* After */}
          <div className="text-center">
            <p className="text-xl font-bold text-brand-blue mb-4">After</p>
            <div className="rounded-2xl overflow-hidden shadow-lg relative w-full" style={{paddingBottom: '66.67%'}}>
              <Image
                src={pair.after}
                alt="Clean air duct after professional cleaning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
              />
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-8" role="group" aria-label="Carousel slide selectors">
          {BEFORE_AFTER_PAIRS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-lime' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to before and after pair ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
