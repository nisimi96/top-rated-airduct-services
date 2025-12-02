import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Flame, Zap, Clock, AlertTriangle, Thermometer, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Dryer Vent Cleaning in Atlanta | Fire Safety & Prevention',
  description: 'Professional dryer vent cleaning in Atlanta. Remove lint buildup, prevent fire hazards, improve efficiency. Certified technicians. Free estimates.',
  keywords: ['dryer vent cleaning', 'lint removal', 'fire prevention', 'dryer safety', 'Atlanta'],
  openGraph: {
    title: 'Expert Dryer Vent Cleaning Services in Atlanta',
    description: 'Professional dryer vent cleaning to prevent fire hazards and improve efficiency. Free estimates available.',
    images: [
      {
        url: 'https://topratedairduct.com/images/dryer-vent-og.png',
        width: 1200,
        height: 630,
        alt: 'Professional Dryer Vent Cleaning Service'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Dryer Vent Cleaning Atlanta',
    description: 'Expert dryer vent cleaning service. Prevent fire hazards and improve dryer efficiency.'
  }
}

const signs = [
  { title: "Long Drying Times", desc: "Clothes taking more than one cycle to dry is the #1 sign of a blockage.", icon: Clock },
  { title: "Hot To The Touch", desc: "If the dryer top or clothes feel unusually hot, heat is trapped inside.", icon: Thermometer },
  { title: "Burning Smell", desc: "A musty or burning odor when running the dryer is an immediate danger signal.", icon: Flame },
  { title: "Lint Build-Up", desc: "Excess lint accumulating around the dryer door seal or exterior vent hood.", icon: AlertTriangle },
]

export default function DryerVentCleaningPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/images/dirty-dry2.webp)', paddingTop: 'calc(100px + 5rem)'}}>
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30 mb-6">
            <Flame className="w-5 h-5 text-red-400" />
            <span className="text-red-100 font-bold tracking-wide uppercase text-sm">Urgent Safety Alert</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Protect Your Home from <br/>
            <span className="text-brand-lime">Dryer Fire Hazards</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Thousands of house fires occur every year due to clogged dryer vents. Our professional cleaning ensures your family is safe and your energy bills stay low.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Schedule Safety Inspection</span>
          </a>
        </div>
      </section>

      {/* The Danger Section - Fire Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-red-500/20">
                <AlertTriangle className="w-24 h-24 text-red-500" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Did You Know?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                According to the U.S. Fire Administration, there are nearly <span className="font-bold text-red-600">3,000 dryer fires reported each year</span>. The leading cause of these fires is a failure to clean the dryer vent. Lint is highly flammable, and when airflow is restricted, heat builds up rapidly.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 font-medium text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-500" /> Prevent Fire Hazards
                </li>
                <li className="flex items-center gap-2 font-medium text-gray-700">
                  <CheckCircle className="w-5 h-5 text-red-500" /> Reduce Carbon Monoxide Risk
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Is Your Dryer Trying to Tell You Something?</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              If you notice any of these signs, stop using your dryer and call us immediately for a professional cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signs.map((sign, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-brand-lime hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6">
                  <sign.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{sign.title}</h3>
                <p className="text-gray-600 leading-relaxed">{sign.desc}</p>
              </div>
            ))}
          </div>

          {/* Dryer Vent Cleaning Workflow */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue text-center mb-12">
              Our Cleaning Process
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 max-w-4xl mx-auto">
              {/* Before - Clogged */}
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">Before Cleaning</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-white">
                  <img
                    src="/images/dirty-dry.webp"
                    alt="Clogged dryer vent before cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex justify-center">
                <div className="relative">
                  <ArrowRight className="w-8 h-8 text-brand-lime animate-pulse" />
                </div>
              </div>

              {/* Middle - During Process */}
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">During Cleaning</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-white">
                  <img
                    src="/images/dirty-dry2.webp"
                    alt="Professional cleaning of dryer vent"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex justify-center">
                <div className="relative">
                  <ArrowRight className="w-8 h-8 text-brand-lime animate-pulse" />
                </div>
              </div>

              {/* After - Clean */}
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-brand-blue mb-3 uppercase tracking-wide">After Cleaning</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-white">
                  <img
                    src="/images/clean-dryer.webp"
                    alt="Clean dryer vent after professional cleaning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution: Professional vs DIY */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lime rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why DIY Kits Aren't Enough</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Store-bought dryer vent cleaning kits often only reach a few feet into the ductwork. Worse, they can compact the lint further down the line, creating a denser, more dangerous blockage.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-brand-lime/20 p-2 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-brand-lime" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">The Professional Difference</h4>
                    <p className="text-blue-200">
                      We use industrial rotary brushes and high-powered HEPA vacuums that traverse the <span className="text-brand-lime font-bold">entire length</span> of your vent run, from the back of your dryer all the way to the exterior termination point.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-brand-lime/20 p-2 rounded-lg">
                    <Zap className="w-6 h-6 text-brand-lime" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Save Money on Energy</h4>
                    <p className="text-blue-200">
                      A clean vent allows your dryer to work efficiently. Removing the blockage can reduce drying times by 50%, significantly lowering your utility bills and extending the life of your appliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 md:p-10 text-brand-blue shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4">Our Cleaning Checklist</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-lime shrink-0" />
                    <span className="font-medium">Airflow measurement before & after</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-lime shrink-0" />
                    <span className="font-medium">Complete lint removal (entire run)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-lime shrink-0" />
                    <span className="font-medium">Cleaning of exterior vent hood</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-lime shrink-0" />
                    <span className="font-medium">Inspection of flex transition hose</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-brand-lime shrink-0" />
                    <span className="font-medium">Debris cleanup & disposal</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={COMPANY_INFO.phoneLink}
                    className="block w-full text-center bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 rounded-xl transition-colors text-lg"
                  >
                    Call {COMPANY_INFO.phone} to Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Don't Risk a Fire. Book Now.
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Fast, affordable, and potentially life-saving. Get your free estimate today.
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
