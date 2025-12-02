'use client'

import { useState, useEffect } from 'react'
import { Phone, Star, ShieldCheck, Award } from 'lucide-react'
import { COMPANY_INFO, WHY_US_FEATURES, TESTIMONIALS } from '@/lib/constants'

const BEFORE_AFTER_PAIRS = [
  { before: '/images/dirty-duct.webp', after: '/images/clean-duct.webp' },
  { before: '/images/dirty-duct2.webp', after: '/images/clean-duct2.webp' },
  { before: '/images/dirty-duct3.webp', after: '/images/clean-duct3.webp' },
]

export default function WhyUsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="bg-gray-50" style={{paddingTop: 'calc(100px + 5rem)'}}>
      {/* Page Header */}
      <section className="bg-white text-brand-blue py-16 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Star className="w-5 h-5 text-brand-lime fill-brand-lime" />
            <span className="text-brand-blue font-bold tracking-wide uppercase text-sm">Atlanta's #1 Choice</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            The "Top Rated" Difference: <br/>
            <span className="text-brand-blue">Unmatched Quality & Trust</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We don't just clean ducts; we restore healthy environments. Discover why homeowners and businesses across Atlanta trust us with their indoor air quality.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-2xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-lime rounded-full blur-2xl opacity-10 translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {WHY_US_FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="bg-gray-900/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-gray-900/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-lime rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-brand-lime/20">
                    <feature.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Between Section with Before & After */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Van Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-2xl mx-auto mb-12">
            <img
              src="/images/work_van2.webp"
              alt="Professional technician working on air duct cleaning"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Before & After Carousel */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue text-center mb-8">
              See the Difference We Make
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="text-center">
                <p className="text-base font-bold text-gray-700 mb-2">Before</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-64">
                  <img
                    src={BEFORE_AFTER_PAIRS[currentIndex].before}
                    alt="Dirty air duct before cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* After */}
              <div className="text-center">
                <p className="text-base font-bold text-brand-blue mb-2">After</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-48 md:h-64">
                  <img
                    src={BEFORE_AFTER_PAIRS[currentIndex].after}
                    alt="Clean air duct after professional cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-3 mt-8">
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
        </div>
      </section>

      {/* Trust Signals & Reviews */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-6">Proven Results</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our reputation is built on thousands of satisfied customers and strictly adhered safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                <ShieldCheck className="w-12 h-12 text-brand-lime" />
              </div>
              <div className="text-4xl font-extrabold text-brand-blue mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Guarantee</div>
            </div>
            {/* Stat 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                  <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <div className="text-4xl font-extrabold text-brand-blue mb-2">5.0</div>
              <div className="text-gray-600 font-medium">Average Customer Rating</div>
            </div>
            {/* Stat 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                <Award className="w-12 h-12 text-brand-lime" />
              </div>
              <div className="text-4xl font-extrabold text-brand-blue mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Serving Atlanta</div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">What Our Customers Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-brand-blue">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Experience the Top Rated Difference Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Call us for a free estimate and start breathing cleaner air immediately.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-3 bg-brand-blue hover:bg-blue-900 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <Phone className="w-6 h-6 fill-current" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
