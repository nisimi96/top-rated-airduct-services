import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, MapPin } from 'lucide-react'
import { COMPANY_INFO, SERVICE_CITIES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Service Area | Top Rated Air Duct Cleaning - Atlanta Metro',
  description: 'We serve Atlanta and 60-mile radius including Marietta, Alpharetta, Roswell, and surrounding areas.',
}

export default function ServiceAreaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Proudly Serving Metro Atlanta</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            We cover a 60-mile radius around Atlanta. If you're in the metro area, we're ready to help you breathe cleaner air.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call For Service
          </a>
        </div>
      </section>

      {/* Service Cities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Cities We Service</h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {SERVICE_CITIES.map((city, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-700 font-medium">
                    <MapPin className="w-4 h-4 text-brand-lime" />
                    {city}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-lime/10 border-2 border-brand-lime p-8 rounded-lg text-center">
              <p className="text-lg text-brand-blue font-bold mb-2">Don't See Your City?</p>
              <p className="text-gray-600 mb-6">
                We likely serve your neighborhood even if it's not listed. Give us a call to confirm coverage for your area.
              </p>
              <a
                href={COMPANY_INFO.phoneLink}
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-2 px-6 rounded-full"
              >
                <Phone className="w-4 h-4" />
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">60-Mile Service Radius</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-300 rounded-lg overflow-hidden h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Map Service Area - Atlanta Metro Region</p>
                <p className="text-sm mt-2">Centered at Marietta, GA - 60-mile radius</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-brand-blue mb-4">North</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Alpharetta</li>
                  <li>• Roswell</li>
                  <li>• Cumming</li>
                  <li>• Canton</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-brand-blue mb-4">South</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Peachtree City</li>
                  <li>• Fayetteville</li>
                  <li>• Douglasville</li>
                  <li>• Stone Mountain</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-brand-blue mb-4">East</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Decatur</li>
                  <li>• Lawrenceville</li>
                  <li>• Duluth</li>
                  <li>• Suwanee</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-brand-blue mb-4">West</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Marietta</li>
                  <li>• Smyrna</li>
                  <li>• Kennesaw</li>
                  <li>• Acworth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wide Coverage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why We Service This Wide Area</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Local Expertise",
                desc: "We know the Atlanta metro area and the specific HVAC challenges of each region."
              },
              {
                title: "Fast Response",
                desc: "Our strategic location allows us to respond quickly to service requests throughout our service area."
              },
              {
                title: "Consistent Quality",
                desc: "Same professional service and standards everywhere we work in the Atlanta region."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-brand-blue mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Contact Information</h2>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <Phone className="w-10 h-10 text-brand-lime mx-auto mb-4" />
              <h3 className="font-bold text-brand-blue mb-2">Phone</h3>
              <a href={COMPANY_INFO.phoneLink} className="text-lg font-bold text-brand-lime hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <MapPin className="w-10 h-10 text-brand-lime mx-auto mb-4" />
              <h3 className="font-bold text-brand-blue mb-2">Address</h3>
              <p className="text-sm text-gray-600">
                1880 West Oak Parkway<br />
                Marietta, GA 30062
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <ArrowRight className="w-10 h-10 text-brand-lime mx-auto mb-4" />
              <h3 className="font-bold text-brand-blue mb-2">Service Area</h3>
              <p className="text-sm text-gray-600">
                60-mile radius<br />
                around Atlanta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Service?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Call us today to schedule your service. We service all of metro Atlanta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={COMPANY_INFO.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              Call {COMPANY_INFO.phone}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue font-bold text-lg py-4 px-10 rounded-full transition-colors"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
