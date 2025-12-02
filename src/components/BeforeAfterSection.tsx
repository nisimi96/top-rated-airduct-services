'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const BEFORE_AFTER_PAIRS = [
  { before: '/images/dirty-duct.webp', after: '/images/clean-duct.webp' },
  { before: '/images/dirty-duct2.webp', after: '/images/clean-duct2.webp' },
  { before: '/images/dirty-duct3.webp', after: '/images/clean-duct3.webp' },
]

export default function BeforeAfterSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
          See the Difference We Make
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Before */}
          <div className="text-center">
            <p className="text-base font-bold text-gray-700 mb-2">Before</p>
            <div className="rounded-2xl overflow-hidden shadow-lg relative h-48 md:h-64">
              <Image
                src={BEFORE_AFTER_PAIRS[currentIndex].before}
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
            <p className="text-base font-bold text-brand-blue mb-2">After</p>
            <div className="rounded-2xl overflow-hidden shadow-lg relative h-48 md:h-64">
              <Image
                src={BEFORE_AFTER_PAIRS[currentIndex].after}
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
        <div className="flex justify-center gap-2 mt-6">
          {BEFORE_AFTER_PAIRS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
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
