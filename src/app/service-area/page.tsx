import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MapPin, Navigation, Info } from 'lucide-react'
import { COMPANY_INFO, SERVICE_CITIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Service Area: Atlanta, Marietta, and 60 Miles Out',
  description: 'We serve Atlanta and 60-mile radius including Marietta, Alpharetta, Roswell, and surrounding areas.',
}

export default function ServiceAreaPage() {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Page Header */}
      <section className="bg-white text-brand-blue py-16 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Navigation className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-blue font-bold tracking-wide uppercase text-sm">Serving 60-Mile Radius</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Dedicated to the <br/>
            <span className="text-brand-blue">Greater Atlanta Metro Area & Beyond</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We are proud to bring certified air duct cleaning services to homes and businesses across Atlanta, Marietta, and all surrounding communities.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Map Context Text */}
            <div className="lg:w-1/3 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Coverage</h2>
              <div className="w-20 h-1 bg-brand-lime rounded-full mb-8"></div>
              <p className="text-blue-100 text-lg mb-8">
                We cover a comprehensive <span className="text-brand-lime font-bold">60-mile radius</span> from our headquarters in Marietta. This allows us to serve the entire sprawling Atlanta metro region efficiently.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-brand-lime shrink-0 mt-1" />
                  <p className="text-sm text-blue-100">
                    <strong>Note:</strong> We prioritize promptness. Our team is strategically located to ensure we can reach any location within our service area quickly for estimates and appointments.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Visual */}
            <div className="lg:w-2/3 w-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-brand-lime/50 h-[500px]">
                <Image
                  src="/images/atlanta-map.webp"
                  alt="Service Area Map Coverage - Atlanta Metro"
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />

                {/* Floating Overlay Card */}
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse"></div>
                    <span className="text-brand-blue font-bold text-sm">Active Service Zone</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Cities List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">Cities We Serve</h2>
            <p className="text-gray-600">Including but not limited to:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {SERVICE_CITIES.map((city, idx) => (
              <div key={idx} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <MapPin className="w-5 h-5 text-brand-lime mr-3 shrink-0" />
                <span className="text-gray-700 font-medium">{city}, GA</span>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-brand-blue font-medium mb-6">
              Don't see your city listed? We likely still cover your area.
            </p>
            <a
              href={COMPANY_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 text-brand-lime font-bold text-lg hover:underline decoration-2 underline-offset-4 transition-all"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call to Confirm Availability: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Need Local Air Duct Cleaning?
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Our certified team is ready to serve your neighborhood. Contact us today for a free estimate.
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
