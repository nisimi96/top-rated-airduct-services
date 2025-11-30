import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { DETAILED_SERVICES, COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Air Duct, Dryer Vent & HVAC Cleaning Services in Atlanta, GA',
  description: 'Comprehensive air duct cleaning, dryer vent cleaning, HVAC installation, insulation, and more. Licensed, insured, and certified.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Page Header */}
      <section className="bg-white text-brand-blue py-12 md:py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-lime font-bold tracking-widest uppercase mb-4 block text-sm">Our Expertise</span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Your Complete Solution for <br/>
            <span className="text-brand-blue">Cleaner Air & Healthier Systems</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            We provide comprehensive cleaning services tailored to your specific needs, ensuring efficiency, safety, and hygiene.
          </p>
        </div>
      </section>

      {/* Main Service Content - Compact Grid Layout */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {DETAILED_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.link}
                className="flex flex-col bg-brand-blue rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group h-full hover:-translate-y-1 border border-blue-800"
              >
                {/* Icon & Title Section (Top) */}
                <div className="p-5 bg-blue-900/40 flex flex-col items-start relative overflow-hidden min-h-[150px]">
                  {/* Decorative background blob */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-lime/10 rounded-full blur-2xl -translate-y-1/3 translate-x-1/3 transition-all duration-500 group-hover:bg-brand-lime/20"></div>

                  <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center mb-3 shadow-lg transform group-hover:scale-110 transition-transform duration-500 z-10">
                    <service.icon className="w-5 h-5 text-brand-blue" />
                  </div>

                  <div className="relative z-10 mt-auto">
                    <span className="inline-block py-0.5 px-2 rounded-full bg-brand-lime/20 text-brand-lime border border-brand-lime/30 text-[10px] font-bold tracking-wide uppercase mb-2">
                      {service.focus}
                    </span>
                    <h2 className="text-lg font-bold text-white leading-tight pr-2">{service.title}</h2>
                  </div>
                </div>

                {/* Detail Content Section (Bottom) */}
                <div className="p-5 flex flex-col flex-grow bg-brand-blue border-t border-blue-800">
                  <p className="text-blue-100 text-xs leading-relaxed mb-4">
                    {service.detail}
                  </p>

                  <div className="mt-auto flex flex-col gap-3">
                    <span className="w-full inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-2 px-4 rounded-lg transition-all shadow-md text-xs uppercase tracking-wide">
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-brand-blue rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-lime rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">
              Ready for Cleaner Air?
            </h2>
            <p className="text-blue-100 text-lg mb-8 relative z-10">
              Call now to schedule your service or get a free quote.
            </p>

            <a
              href={COMPANY_INFO.phoneLink}
              className="inline-flex items-center gap-3 bg-brand-lime hover:bg-lime-400 text-brand-blue text-2xl font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 relative z-10"
            >
              <Phone className="w-6 h-6 fill-current animate-pulse" />
              {COMPANY_INFO.phone}
            </a>

            <p className="mt-4 text-blue-200 text-sm font-medium relative z-10">
              100% Satisfaction Guaranteed • Licensed & Insured
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
