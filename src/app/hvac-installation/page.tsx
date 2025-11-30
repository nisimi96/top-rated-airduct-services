import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Snowflake, TrendingDown, HomeIcon, CheckCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'HVAC System Installation in Atlanta | AC & Furnace Replacement',
  description: 'Professional HVAC installation and replacement. Energy-efficient AC and furnace systems. Expert installation. Free estimates.',
}

export default function HVACInstallationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">HVAC System Installation</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Upgrade to a modern, energy-efficient HVAC system. Lower energy bills, improved comfort, and expert installation.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Get Free Estimate
          </a>
        </div>
      </section>

      {/* When to Replace */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">When to Replace Your HVAC System</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-brand-blue mb-6">Signs You Need Replacement:</h3>
              <ul className="space-y-3">
                {[
                  "System is 10+ years old",
                  "Frequent costly repairs",
                  "Poor heating/cooling performance",
                  "Inconsistent temperatures",
                  "Strange noises or odors",
                  "High energy bills",
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <TrendingDown className="w-5 h-5 text-brand-lime flex-shrink-0" />
                    <span className="text-gray-700">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-lg border-2 border-brand-lime">
              <h3 className="text-xl font-bold text-brand-blue mb-6">Benefits of New Systems:</h3>
              <ul className="space-y-3">
                {[
                  "Up to 30% energy savings",
                  "Improved comfort & consistency",
                  "Quieter operation",
                  "Better air quality",
                  "Warranty coverage",
                  "Enhanced reliability",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-lime flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Quality Brands We Install</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Carrier",
              "Trane",
              "Lennox",
              "Rheem",
              "Goodman",
              "York",
            ].map((brand, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
                <p className="font-bold text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Installation Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { num: "1", title: "Assessment", desc: "Evaluate your home and needs" },
              { num: "2", title: "Quote", desc: "Detailed proposal and financing" },
              { num: "3", title: "Installation", desc: "Professional setup and testing" },
              { num: "4", title: "Training", desc: "How to use and maintain" },
              { num: "5", title: "Support", desc: "Ongoing warranty and service" },
            ].map((step) => (
              <div key={step.num} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-lime text-brand-blue font-bold rounded-full mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-brand-blue mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why Choose Us for Installation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                icon: HomeIcon,
                title: "Expert Technicians",
                desc: "Certified, experienced installers ensure quality workmanship."
              },
              {
                icon: Snowflake,
                title: "Quality Equipment",
                desc: "We install premium brands backed by full warranties."
              },
              {
                icon: CheckCircle,
                title: "Proper Sizing",
                desc: "Correct system sizing for optimal efficiency and comfort."
              },
              {
                icon: TrendingDown,
                title: "Energy Savings",
                desc: "Modern systems reduce energy consumption significantly."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <item.icon className="w-10 h-10 text-brand-lime mb-4" />
                <h3 className="text-lg font-bold text-brand-blue mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a New HVAC System?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Expert installation with premium brands and energy-efficient technology.
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
