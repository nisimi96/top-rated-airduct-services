import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, Flame, Clock, AlertTriangle, Thermometer } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Dryer Vent Cleaning in Atlanta | Fire Prevention',
  description: 'Expert dryer vent cleaning service in Atlanta. Prevent lint buildup and fire hazards. Improve dryer efficiency. Free estimates.',
}

const benefits = [
  { title: "Fire Prevention", desc: "Removes lint buildup - a major fire hazard.", icon: Flame },
  { title: "Faster Drying", desc: "Improves airflow and reduces drying time.", icon: Clock },
  { title: "Lower Energy", desc: "Reduces strain on dryer and lowers energy bills.", icon: Thermometer },
  { title: "Safety Assured", desc: "Code-compliant installation and repair.", icon: AlertTriangle },
];

export default function DryerVentCleaningPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dryer Vent Cleaning</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Prevent fire hazards and improve dryer efficiency. Professional lint removal keeps your family safe.
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

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why Dryer Vent Cleaning Matters</h2>

          <div className="mb-16">
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Lint buildup in your dryer vent is one of the top causes of home fires. Over time, lint accumulates in the vent ductwork, restricting airflow and creating a serious fire hazard. Professional cleaning removes this dangerous buildup and restores proper function.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                <benefit.icon className="w-10 h-10 text-brand-lime mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need Cleaning */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Signs You Need Dryer Vent Cleaning</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "Dryer takes longer than usual to dry clothes",
              "Excessive lint in lint trap",
              "Dryer gets extremely hot during use",
              "Burning smell coming from dryer",
              "Vent hood flapper not opening properly",
              "Lint visible outside dryer vent",
            ].map((sign, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-brand-lime rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-brand-blue font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Cleaning Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Inspection", desc: "Visual inspection of vent system and ductwork" },
              { num: "2", title: "Cleaning", desc: "Professional removal of all lint and debris" },
              { num: "3", title: "Verification", desc: "Test airflow to confirm proper function" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Home Today</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Schedule your professional dryer vent cleaning. Free estimates, no obligation.
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
