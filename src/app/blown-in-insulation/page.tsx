import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Thermometer, Layers, Zap, DollarSign, Home, CheckCircle, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blown-In Attic Insulation Installation Atlanta | Energy Efficiency Experts',
  description: 'Professional blown-in insulation installation. Improve energy efficiency, lower utility bills. R-value optimization. Free estimates.',
}

export default function BlownInInsulationPage() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Thermometer className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Home Energy Optimization</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Blown-In Attic <br/>
            <span className="text-brand-lime">Insulation Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Stop losing money through your roof. Upgrade your thermal envelope with professional blown-in insulation to keep your home comfortable year-round.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Free Attic Assessment</span>
          </a>
        </div>
      </section>

      {/* R-Value and Thermal Envelope Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Understanding R-Value</h2>
              <div className="w-20 h-1 bg-brand-lime rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                "R-Value" measures a material's resistance to heat flow. The higher the R-Value, the better the insulation. In the Atlanta area, the recommended R-Value for attics is <strong>R-38 to R-60</strong>.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Most older homes in Georgia have settled insulation that barely reaches R-19, meaning you are essentially paying to heat and cool the outdoors. We "cap" your existing insulation or remove and replace it to meet modern energy standards.
              </p>

              <div className="p-6 bg-green-50 rounded-2xl border border-green-100 flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-green-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-1">Tax Credits & Rebates</h4>
                  <p className="text-green-700 text-sm">
                    Upgrading your insulation may qualify you for federal energy tax credits (25C). *Always consult a tax professional for eligibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-brand-blue p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Home className="w-8 h-8 text-brand-lime" />
                    The Thermal Envelope
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2 rounded-lg">
                        <Zap className="w-5 h-5 text-brand-lime" />
                      </div>
                      <div>
                        <strong className="block text-lg">Summer Savings</strong>
                        <span className="text-blue-200">Prevents the intense Georgia attic heat (often 150°F+) from radiating down into your living space.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-white/10 p-2 rounded-lg">
                        <Layers className="w-5 h-5 text-brand-lime" />
                      </div>
                      <div>
                        <strong className="block text-lg">Winter Comfort</strong>
                        <span className="text-blue-200">Traps the warm air generated by your furnace inside your home, preventing it from rising out through the roof.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Our Insulation Materials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We use premium, blown-in materials that fill every nook and cranny for superior coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Fiberglass */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-lime transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Layers className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Blown-In Fiberglass</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-brand-lime" /> Naturally fire resistant</li>
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-brand-lime" /> Non-corrosive & moisture resistant</li>
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-brand-lime" /> Maintains R-value over time (no settling)</li>
              </ul>
              <p className="text-gray-500 text-sm">
                Ideal for "capping" existing insulation to boost performance without complete removal.
              </p>
            </div>

            {/* Cellulose */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-lime transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Layers className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Blown-In Cellulose</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-brand-lime" /> Made from recycled paper products (Eco-friendly)</li>
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-brand-lime" /> Treated for fire and pest resistance</li>
                <li className="flex items-center gap-2 text-gray-600"><CheckCircle className="w-4 h-4 text-brand-lime" /> Higher density blocks sound better</li>
              </ul>
              <p className="text-gray-500 text-sm">
                Excellent for maximizing coverage in irregularly shaped attics and tight spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The HVAC Connection */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Why Pair Insulation with HVAC Cleaning?</h2>
              <p className="text-blue-100 text-lg">
                The Synergy of Efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-lime rounded-full p-1 h-fit"><ArrowRight className="w-4 h-4 text-brand-blue" /></div>
                <div>
                  <strong className="block text-white mb-2">Protect New Equipment</strong>
                  <p className="text-blue-200 text-sm">If you clean your ducts or install a new AC unit but leave the attic uninsulated, the equipment has to work overtime, shortening its lifespan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-brand-lime rounded-full p-1 h-fit"><ArrowRight className="w-4 h-4 text-brand-blue" /></div>
                <div>
                  <strong className="block text-white mb-2">Prevent Condensation</strong>
                  <p className="text-blue-200 text-sm">Proper insulation helps regulate temperature differences that cause sweating on ductwork, which leads to mold growth.</p>
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
            Start Saving Money Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Call us for a free attic measurement and quote.
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
