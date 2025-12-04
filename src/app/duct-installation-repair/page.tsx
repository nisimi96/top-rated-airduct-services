import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Wrench, Wind, Zap, AlertCircle, CheckCircle, Ruler, Construction, Clock } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Air Duct Installation & Repair Services Atlanta, GA | HVAC Ductwork',
  description: 'Professional ductwork repair, sealing, and installation. Fix leaky ducts and improve HVAC efficiency. Licensed and insured.',
}

const commonIssues = [
  {
    title: "Poor Airflow",
    desc: "If some rooms are too hot or too cold, your ducts may be crushed, disconnected, or leaking.",
    icon: Wind
  },
  {
    title: "High Energy Bills",
    desc: "Leaky ducts can lose up to 30% of conditioned air, forcing your system to work harder.",
    icon: Zap
  },
  {
    title: "Noisy Operation",
    desc: "Popping, banging, or whistling sounds often indicate loose sections or pressure imbalances.",
    icon: AlertCircle
  },
  {
    title: "Old Materials",
    desc: "Flexible ducts have a lifespan. If yours are over 15 years old, they may be deteriorating.",
    icon: Clock
  },
];

export default function DuctInstallationRepairPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/images/duct-repair.webp)', paddingTop: 'calc(100px + 5rem)'}}>
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Wrench className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Full Service HVAC Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Expert Air Duct <br/>
            <span className="text-brand-lime">Installation & Repair</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Stop wasting money on conditioned air that never reaches your rooms. We seal leaks, repair damage, and install custom ductwork for peak efficiency.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-lime-500/20 text-xl"
            >
              <Phone className="w-6 h-6 fill-current" />
              <span>Schedule Free Inspection</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 border border-white/40 backdrop-blur-sm text-xl"
            >
              <Mail className="w-6 h-6" />
              <span>Send us Email</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The Importance of Sealing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Why Duct Repair Matters</h2>
              <div className="w-20 h-1 bg-brand-lime rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Your HVAC system is only as good as the ductwork connected to it. Even a brand new furnace or A/C unit will fail to keep you comfortable if the ducts are leaking air into your attic or crawlspace.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                <strong>The ENERGY STAR Reality:</strong> In typical houses, about 20% to 30% of the air that moves through the duct system is lost due to leaks, holes, and poorly connected ducts.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-lime flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Lower Monthly Utility Bills</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-lime flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Consistent Temperature in Every Room</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-lime flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Extended HVAC System Lifespan</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 relative h-96">
                <Image
                  src="/images/duct-repair.webp"
                  alt="Technician repairing HVAC ductwork"
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-blue to-transparent p-8">
                  <p className="text-white font-bold text-xl">We Fix What Others Ignore</p>
                </div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-brand-lime p-6 rounded-2xl shadow-xl hidden md:block max-w-xs">
                <p className="text-brand-blue font-bold text-lg leading-tight">
                  Average energy savings of 20% after proper sealing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Signs You Need Repair</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              If you're experiencing any of these issues, it's time for a professional assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-brand-lime group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                  <issue.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{issue.title}</h3>
                <p className="text-gray-600 leading-relaxed">{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Installation Services */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-900/50 rounded-3xl p-8 md:p-12 border border-blue-800">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="mt-2 bg-brand-lime rounded-lg p-3 shrink-0">
                <Construction className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">New Installation & Design</h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  Building a new home or adding an extension? We design custom ductwork solutions tailored to your floor plan. Proper sizing (Manual J & D) is critical to ensure your system isn't choked for air or working too hard.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-brand-lime" />
                    <span>Custom Sheet Metal Fabrication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-brand-lime" />
                    <span>Flexible Duct Replacement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-brand-lime" />
                    <span>Zone Control Systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ruler className="w-5 h-5 text-brand-lime" />
                    <span>Insulation Upgrades</span>
                  </div>
                </div>
                <a
                  href={COMPANY_INFO.phoneLink}
                  className="inline-block bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
                >
                  Get a Quote for Installation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Fix Your Ducts, Fix Your Comfort
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Schedule a comprehensive duct inspection today.
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
