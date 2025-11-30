import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, Wrench, DollarSign, Zap, AlertTriangle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Air Duct Installation & Repair in Atlanta | Leaky Duct Sealing',
  description: 'Professional ductwork repair, sealing, and installation. Fix leaky ducts and improve HVAC efficiency. Licensed and insured.',
}

const benefits = [
  { title: "Improved Efficiency", desc: "Sealing leaks reduces wasted conditioned air.", icon: Zap },
  { title: "Lower Bills", desc: "Reduce energy consumption and save money.", icon: DollarSign },
  { title: "Better Comfort", desc: "Even temperature distribution throughout home.", icon: AlertTriangle },
  { title: "Proper Installation", desc: "Code-compliant ductwork for safety.", icon: Wrench },
];

export default function DuctInstallationRepairPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Duct Installation & Repair</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Leaky ducts waste energy and money. We fix what others ignore with professional repair and installation.
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

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Duct Repair Matters</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Leaky ductwork can waste 20-30% of your conditioned air before it reaches your living spaces. This means your HVAC system works harder, uses more energy, and your home stays uncomfortable.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our technicians locate leaks, seal them properly, and can install new ductwork if needed—all to code and to spec.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">What We Fix:</h3>
              <ul className="space-y-4">
                {[
                  "Disconnected or loose ducts",
                  "Duct leaks and gaps",
                  "Poor duct routing",
                  "Undersized or oversized ducts",
                  "Poorly sealed connections",
                  "Damaged or crushed ductwork",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-lime font-bold">→</span>
                    <span className="text-gray-700">{item}</span>
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
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Benefits of Professional Duct Repair</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <benefit.icon className="w-10 h-10 text-brand-lime mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Duct Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Leak Detection & Sealing",
                desc: "We locate all leaks and seal them using professional-grade materials and techniques."
              },
              {
                title: "New Duct Installation",
                desc: "Complete ductwork installation for new HVAC systems or renovations. Code-compliant."
              },
              {
                title: "Duct Repair",
                desc: "Fix damaged, crushed, or improperly routed ductwork to restore efficiency."
              },
              {
                title: "Duct Testing",
                desc: "We test your ductwork to measure efficiency before and after repairs."
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fix Your Leaky Ducts Today</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Save energy and improve comfort with professional duct repair and installation.
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
