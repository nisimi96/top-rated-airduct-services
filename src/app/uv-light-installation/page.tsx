import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Lightbulb, ShieldCheck, HeartPulse, Zap, CheckCircle, Info, Sparkles } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'HVAC UV Light Installation Atlanta | Kill Mold & Germs in Your Ducts',
  description: 'Hospital-grade UV-C light systems for HVAC units. Kill mold, bacteria, and viruses. 24/7 air sanitation. Free estimates.',
}

export default function UVLightInstallationPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden pt-20 md:pt-20 lg:pt-20" style={{paddingTop: 'calc(100px + 5rem)'}}>
        <Image
          src="/images/hero-bg.webp"
          alt="HVAC UV light installation service"
          fill
          className="object-cover -z-20"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Lightbulb className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Advanced Air Purification</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            HVAC UV Light <br/>
            <span className="text-brand-lime">Installation</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Turn your HVAC system into a whole-home air purifier. Kill mold, viruses, and bacteria instantly with hospital-grade UV-C technology.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Get A Quote</span>
          </a>
        </div>
      </section>

      {/* How it Works - The Science */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">How UV-C Light Works</h2>
              <div className="w-20 h-1 bg-brand-lime rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Your HVAC system's cooling coil is a dark, damp environment—the perfect breeding ground for mold and bacteria. As air passes over the coil, these microscopic contaminants are picked up and circulated throughout your entire home.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                <strong>The UV Solution:</strong> We install a powerful UV-C lamp directly inside your air handler unit. This specific wavelength of light penetrates the cell walls of microorganisms, destroying their DNA and rendering them unable to reproduce or cause infection.
              </p>
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 flex items-start gap-4">
                <Zap className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                <p className="text-sm text-purple-900">
                  <strong>Fact:</strong> This is the same technology used in hospitals to sterilize surgical suites and isolation rooms.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-800 rounded-3xl p-1 shadow-2xl relative overflow-hidden h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50 z-10"></div>
                <div className="relative z-20 text-center">
                  <Lightbulb className="w-24 h-24 text-purple-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                  <h3 className="text-3xl font-bold text-white mb-2">24/7 Sanitation</h3>
                  <p className="text-blue-200">Active protection even when your AC is off.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Why Add UV Protection?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Essential protection for allergy sufferers and health-conscious families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-lime">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Prevents Mold Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Keeps your AC coils free of slime and mold buildup, ensuring they run efficiently and don't introduce spores into your air.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-lime">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Allergy & Asthma Relief</h3>
              <p className="text-gray-600 leading-relaxed">
                Neutralizes airborne allergens, viruses, and bacteria that standard air filters often miss, providing cleaner air for sensitive lungs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-lime">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Eliminates Odors</h3>
              <p className="text-gray-600 leading-relaxed">
                Destroys organic compounds that cause "dirty sock syndrome" and other musty HVAC odors at the molecular level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crucial Note Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="mt-1 bg-brand-lime p-3 rounded-xl shrink-0">
                <Info className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Important: An Additive Service</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  Installing a UV light is a powerful upgrade, but it is <strong>not a substitute for physical air duct cleaning</strong>. UV lights sterilize surfaces and air, but they cannot remove physical dust, lint, and debris blockages from your ducts.
                </p>
                <div className="bg-gray-900/50 p-6 rounded-xl border border-white/5">
                  <h4 className="font-bold text-brand-lime mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Our Recommendation
                  </h4>
                  <p className="text-gray-300">
                    For the best results, we recommend installing a UV system <strong>immediately after a full air duct cleaning</strong>. This ensures your system starts fresh and stays clean longer.
                  </p>
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
            Upgrade Your Home's Defense
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Ask about adding UV Installation to your cleaning package for a discount.
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
