import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DETAILED_SERVICES, COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional HVAC & Air Duct Cleaning Services | Atlanta',
  description: 'Comprehensive air duct cleaning, dryer vent cleaning, HVAC installation, insulation, and more. Licensed, insured, and certified.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete HVAC Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            From air duct cleaning to system installation, we provide comprehensive solutions for healthier homes and businesses.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DETAILED_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-brand-lime hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                  <service.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-2">{service.title}</h3>
                <p className="text-sm text-brand-lime font-semibold mb-4">{service.focus}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.detail}</p>
                <div className="flex items-center gap-2 text-brand-blue font-bold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-blue mb-6">Ready to Breathe Easier?</h2>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-block bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-4 px-10 rounded-full transition-transform transform hover:scale-105"
          >
            Get Your Free Estimate - {COMPANY_INFO.phone}
          </a>
        </div>
      </section>
    </div>
  )
}
