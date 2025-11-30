import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Lightbulb, Zap, Wind, Shield } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'HVAC UV Light Installation | Atlanta Air Purification',
  description: 'Hospital-grade UV-C light systems for HVAC units. Kill mold, bacteria, and viruses. 24/7 air sanitation. Free estimates.',
}

export default function UVLightInstallationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">HVAC UV Light Installation</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Hospital-grade UV-C light systems that continuously sterilize your air. Kill mold, bacteria, and viruses at the source.
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

      {/* Technology */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">UV-C Light Technology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                UV-C light is proven to eliminate microorganisms by disrupting their DNA. Unlike filters that trap particles, UV light actively kills mold spores, bacteria, and viruses as air passes through your HVAC system.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our hospital-grade UV systems provide 24/7 air sanitation, keeping your home constantly protected without maintenance or chemicals.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Professional-grade UV-C bulbs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Safe and non-toxic air purification</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Works with your existing HVAC system</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">What UV Light Kills:</h3>
              <ul className="space-y-4">
                {[
                  "Mold spores",
                  "Bacteria",
                  "Viruses",
                  "Dust mite allergens",
                  "Pet dander particles",
                  "Odor-causing microbes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Benefits of UV Light Installation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "Healthier Air",
                desc: "Eliminate microorganisms at the source for cleaner, healthier indoor air."
              },
              {
                icon: Lightbulb,
                title: "Continuous Operation",
                desc: "24/7 air sanitation without chemicals or maintenance."
              },
              {
                icon: Wind,
                title: "Coil Protection",
                desc: "Prevents mold growth on cooling coils, improving HVAC efficiency."
              },
              {
                icon: Zap,
                title: "Energy Efficient",
                desc: "Uses minimal electricity while providing maximum air purification."
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <benefit.icon className="w-10 h-10 text-brand-lime mb-4" />
                <h3 className="text-lg font-bold text-brand-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Who Benefits Most?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Allergy Sufferers",
                desc: "Reduce airborne allergens and breathe easier year-round."
              },
              {
                title: "Pet Owners",
                desc: "Eliminate pet dander and odor-causing particles."
              },
              {
                title: "Asthma Patients",
                desc: "Cleaner air means fewer triggers and better respiratory health."
              },
              {
                title: "Health-Conscious Families",
                desc: "Continuous protection against harmful microorganisms."
              },
            ].map((group, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="font-bold text-brand-blue mb-2">{group.title}</h3>
                <p className="text-sm text-gray-600">{group.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Purify Your Air with UV Technology</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Experience healthier air with hospital-grade UV light installation.
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
