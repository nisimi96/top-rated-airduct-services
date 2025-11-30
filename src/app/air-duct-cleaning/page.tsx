import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, Fan, Trash2, ShieldCheck, HeartPulse } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Air Duct Cleaning in Atlanta | Residential & Commercial',
  description: 'Expert air duct cleaning service in Atlanta. Remove allergens, dust, and improve indoor air quality. NADCA certified. Free estimates.',
  openGraph: {
    title: 'Professional Air Duct Cleaning in Atlanta',
    description: 'Expert air duct cleaning service in Atlanta',
  }
}

const benefits = [
  { title: "Reduces Allergens", desc: "Removes pollen, pet dander, and dust mites.", icon: HeartPulse },
  { title: "Eliminates Odors", desc: "Removes musty smells trapped in ductwork.", icon: Trash2 },
  { title: "Improves Airflow", desc: "Restores system efficiency by removing blockages.", icon: Fan },
  { title: "System Longevity", desc: "Prevents wear and tear on your HVAC unit.", icon: ShieldCheck },
];

export default function AirDuctCleaningPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Air Duct Cleaning</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Breathe cleaner, healthier air. Our certified technicians remove dust, allergens, and debris from your entire HVAC system.
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

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Air Duct Cleaning Matters</h2>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                Your air ducts can accumulate dust, pet dander, pollen, and other contaminants over time. This buildup reduces your HVAC system's efficiency and compromises the air quality in your home.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our professional cleaning service removes these contaminants, improving airflow, reducing allergens, and helping your system work at peak efficiency.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-blue-50 p-6 rounded-lg">
                  <benefit.icon className="w-8 h-8 text-brand-lime mb-3" />
                  <h3 className="font-bold text-brand-blue mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-blue mb-4">See The Difference</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our industrial-grade HEPA vacuum systems can remove up to 99.9% of contaminants from your ductwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="group">
              <div className="relative h-64 md:h-80 mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholders/dirty-duct.jpg"
                  alt="Dirty Air Duct Before Cleaning"
                  fill
                  className="object-cover filter brightness-75 group-hover:brightness-100 transition-all"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-red-500 text-white font-bold py-2 px-6 rounded-full mb-3">BEFORE</span>
                <p className="text-gray-600">Dust, debris, and allergens accumulate</p>
              </div>
            </div>

            {/* After */}
            <div className="group">
              <div className="relative h-64 md:h-80 mb-4 rounded-lg overflow-hidden shadow-lg border-4 border-brand-lime">
                <Image
                  src="/images/placeholders/clean-duct.jpg"
                  alt="Clean Air Duct After Cleaning"
                  fill
                  className="object-cover group-hover:brightness-110 transition-all"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-center">
                <span className="inline-block bg-brand-lime text-brand-blue font-bold py-2 px-6 rounded-full mb-3">AFTER</span>
                <p className="text-gray-600">Clean, efficient airflow restored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Inspection",
                desc: "We thoroughly inspect your entire HVAC system and ductwork using advanced camera technology."
              },
              {
                num: "2",
                title: "Cleaning",
                desc: "Using our industrial HEPA vacuum and rotary brush tools, we remove all dust and debris."
              },
              {
                num: "3",
                title: "Testing",
                desc: "We verify improved airflow and provide documentation of the cleaning completed."
              }
            ].map((step) => (
              <div key={step.num} className="bg-blue-50 p-8 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-lime text-brand-blue font-bold text-2xl rounded-full mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Cleaner Air?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule your free air duct cleaning estimate today. No hidden fees, no obligation.
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
