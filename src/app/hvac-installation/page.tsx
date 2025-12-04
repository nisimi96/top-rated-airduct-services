import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, Snowflake, ShieldCheck, DollarSign, Ruler, CheckCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'New HVAC System Installation Atlanta, GA | AC & Furnace Replacement',
  description: 'Professional HVAC installation and replacement. Energy-efficient AC and furnace systems. Expert installation. Free estimates.',
}

export default function HVACInstallationPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/images/duct-repair.webp)', paddingTop: 'calc(100px + 5rem)'}}>
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Snowflake className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Upgrade & Save</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            New HVAC System <br/>
            <span className="text-brand-lime">Installation & Replacement</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Stop paying for repairs on an inefficient unit. Upgrade to a modern, energy-efficient system that keeps your home perfectly comfortable year-round.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-lime-500/20 text-xl"
            >
              <Phone className="w-6 h-6 fill-current" />
              <span>Get Free Installation Quote</span>
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

      {/* Brands & Quality Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Top Brands, Expert Installation</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We partner with the industry's most reliable manufacturers to bring you systems that last. We install all major brands including Trane, Carrier, Lennox, and Rheem.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-3xl font-black text-gray-400 hover:text-brand-blue cursor-default">TRANE</div>
            <div className="text-3xl font-black text-gray-400 hover:text-brand-blue cursor-default">Carrier</div>
            <div className="text-3xl font-black text-gray-400 hover:text-brand-blue cursor-default">LENNOX</div>
            <div className="text-3xl font-black text-gray-400 hover:text-brand-blue cursor-default">Rheem</div>
            <div className="text-3xl font-black text-gray-400 hover:text-brand-blue cursor-default">Goodman</div>
          </div>
        </div>
      </section>

      {/* The Importance of Sizing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-brand-lime">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Ruler className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Why "Right Sizing" Matters</h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Bigger isn't always better. An oversized unit will short-cycle, leading to humidity issues and premature failure. An undersized unit will run constantly and never cool your home.
                </p>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  We perform a detailed <strong>Manual J Load Calculation</strong> for every installation. This factors in your home's square footage, insulation, windows, and orientation to ensure your new unit fits your home like a glove.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Signs You Need a Replacement</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue rounded-full p-1"><CheckCircle className="w-4 h-4 text-white" /></div>
                  <div>
                    <strong className="block text-brand-blue text-lg">Age (10-15+ Years)</strong>
                    <span className="text-gray-600 text-sm">Systems over a decade old are significantly less efficient than modern units (SEER2 standards).</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue rounded-full p-1"><CheckCircle className="w-4 h-4 text-white" /></div>
                  <div>
                    <strong className="block text-brand-blue text-lg">Frequent Repairs</strong>
                    <span className="text-gray-600 text-sm">If you're calling for service every season, the cost of repairs often outweighs the investment in a new unit.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-brand-blue rounded-full p-1"><CheckCircle className="w-4 h-4 text-white" /></div>
                  <div>
                    <strong className="block text-brand-blue text-lg">Rising Energy Bills</strong>
                    <span className="text-gray-600 text-sm">A steady increase in utility costs without a change in usage indicates efficiency loss.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranties & Financing */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors">
              <ShieldCheck className="w-12 h-12 text-brand-lime mb-4" />
              <h3 className="text-2xl font-bold mb-3">Industry-Leading Warranties</h3>
              <p className="text-blue-100 leading-relaxed">
                Peace of mind comes standard. Most of our systems come with a 10-year manufacturer parts warranty. We also back our craftsmanship with comprehensive labor warranties, so you're never left paying for our mistake.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors">
              <DollarSign className="w-12 h-12 text-brand-lime mb-4" />
              <h3 className="text-2xl font-bold mb-3">Flexible Financing</h3>
              <p className="text-blue-100 leading-relaxed">
                Don't let budget hold you back from comfort. We offer competitive financing options with low monthly payments for qualified buyers.
                <br/><span className="text-xs text-blue-300 mt-2 block">*Subject to credit approval. Ask for details.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Get Your Free Estimate Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Call now to discuss your replacement options with a certified expert.
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
