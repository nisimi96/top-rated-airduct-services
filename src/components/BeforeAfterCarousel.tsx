'use client'

import { useState, useEffect } from 'react'

const BEFORE_AFTER_PAIRS = [
  { before: '/images/dirty-duct.webp', after: '/images/clean-duct.webp' },
  { before: '/images/dirty-duct2.webp', after: '/images/clean-duct2.webp' },
  { before: '/images/dirty-duct3.webp', after: '/images/clean-duct3.webp' },
]

export default function BeforeAfterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const pair = BEFORE_AFTER_PAIRS[currentIndex]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
          See the Difference We Make
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="text-center">
            <p className="text-xl font-bold text-gray-700 mb-4">Before</p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={pair.before}
                alt="Dirty air duct before cleaning"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* After */}
          <div className="text-center">
            <p className="text-xl font-bold text-brand-lime mb-4">After</p>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={pair.after}
                alt="Clean air duct after professional cleaning"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {BEFORE_AFTER_PAIRS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-brand-lime' : 'bg-gray-300'
              }`}
              aria-label={`Go to pair ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
