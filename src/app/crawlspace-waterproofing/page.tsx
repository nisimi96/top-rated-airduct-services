import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Droplets, Shield, Wind, Zap } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Crawlspace Waterproofing in Atlanta | Moisture Control',
  description: 'Professional crawlspace encapsulation and waterproofing. Stop moisture, mold, and improve air quality. Free inspections.',
}

export default function CrawlspaceWaterproofingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Crawlspace Waterproofing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            40% of the air you breathe comes from your crawlspace. Stop moisture, mold, and humidity with professional encapsulation.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Free Inspection
          </a>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why Crawlspace Waterproofing Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                An unprotected crawlspace is a gateway for moisture, humidity, mold, and poor indoor air quality. Moisture rises from the ground, creating ideal conditions for mold growth and wood rot.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Professional encapsulation seals your crawlspace, protecting your home's foundation, improving air quality, and reducing energy costs.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Prevents mold and mildew growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <Wind className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Improves indoor air quality</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Reduces energy costs</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-700 mb-6">Common Crawlspace Problems:</h3>
              <ul className="space-y-3">
                {[
                  "Excessive moisture and humidity",
                  "Mold and mildew growth",
                  "Wood rot on joists and beams",
                  "Musty odors in home",
                  "Poor indoor air quality",
                  "Pest infestations",
                ].map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Crawlspace Solution</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Moisture Barrier",
                desc: "Heavy-duty plastic liner seals the ground surface completely."
              },
              {
                title: "Dehumidification",
                desc: "Optional dehumidification systems maintain proper moisture levels."
              },
              {
                title: "Sealing",
                desc: "Seal all vents and penetrations to prevent air infiltration."
              },
              {
                title: "Air Quality",
                desc: "Improved indoor air quality through proper encapsulation."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="font-bold text-brand-blue mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Encapsulation Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Inspection", desc: "Assess crawlspace condition" },
              { num: "2", title: "Preparation", desc: "Clean and prepare surfaces" },
              { num: "3", title: "Installation", desc: "Install moisture barriers" },
              { num: "4", title: "Verification", desc: "Test humidity levels" },
            ].map((step) => (
              <div key={step.num} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-lime text-brand-blue font-bold rounded-full mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-brand-blue mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Long-Term Benefits</h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Health",
                items: ["Better air quality", "Reduced allergies", "No musty odors"]
              },
              {
                title: "Structural",
                items: ["Prevents wood rot", "Protects foundation", "Extends home life"]
              },
              {
                title: "Financial",
                items: ["Lower energy costs", "Reduced repairs", "Home value increase"]
              },
              {
                title: "Comfort",
                items: ["Better air circulation", "Consistent humidity", "Warmer floors"]
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-brand-blue mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Home Today</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Professional crawlspace waterproofing improves health, protects your foundation, and saves money long-term.
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
