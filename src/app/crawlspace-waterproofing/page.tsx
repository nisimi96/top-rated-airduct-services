import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Droplets, ArrowUp, ShieldCheck, Waves, Construction, ArrowRight, Activity } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Basement & Crawlspace Waterproofing Atlanta | Moisture Control Experts',
  description: 'Expert basement and crawlspace waterproofing, encapsulation, and moisture control. Protect your foundation. Free inspection.',
}

export default function CrawlspaceWaterproofingPage() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Droplets className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Moisture & Humidity Control</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Basement & Crawlspace <br/>
            <span className="text-brand-lime">Waterproofing</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Stop moisture at the source. Protect your home's foundation and indoor air quality with our expert encapsulation and waterproofing solutions.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Schedule Free Inspection</span>
          </a>
        </div>
      </section>

      {/* The Stack Effect Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">The "Stack Effect" Explained</h2>
              <div className="w-20 h-1 bg-brand-lime rounded-full mb-8"></div>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Think of your home like a chimney. As warm air rises and escapes through your attic, it pulls replacement air up from the lowest point of your house—your crawlspace or basement.
              </p>
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-brand-blue mb-8">
                <p className="text-brand-blue font-medium text-xl leading-relaxed">
                  <span className="text-brand-lime font-bold text-2xl">40% to 60%</span> of the air you breathe on the first floor comes directly from your crawlspace.
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                If that space is damp, moldy, or full of pests, that is exactly what you and your family are breathing in upstairs.
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-3xl p-8 relative h-[400px] flex items-center justify-center border border-gray-200">
                {/* Simple Stack Effect Visualization */}
                <div className="relative w-64 h-80 border-4 border-gray-800 bg-white rounded-lg p-4 flex flex-col justify-between shadow-xl">
                  {/* Attic */}
                  <div className="w-full h-16 border-b-2 border-gray-300 flex justify-center items-start pt-2">
                    <ArrowUp className="w-8 h-8 text-red-500 animate-bounce" />
                  </div>
                  <div className="text-center text-xs text-gray-400 uppercase tracking-widest font-bold my-auto">Living Space</div>
                  {/* Crawlspace */}
                  <div className="w-full h-24 bg-blue-900/10 border-t-2 border-gray-300 rounded-b flex flex-col items-center justify-end pb-2 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <Waves className="w-16 h-16 text-blue-800" />
                    </div>
                    <ArrowUp className="w-8 h-8 text-blue-600 animate-pulse" />
                    <span className="text-xs text-blue-800 font-bold mt-1">Damp Air Entering</span>
                  </div>
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-4 rounded-xl border border-gray-100 max-w-xs">
                  <h4 className="font-bold text-brand-blue mb-1">Health Impact</h4>
                  <p className="text-xs text-gray-500">Mold spores and humidity travel up, triggering allergies and asthma.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Our Waterproofing Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just cover up the problem; we engineer a solution to keep your home dry permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Encapsulation */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-lime transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <ShieldCheck className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Crawlspace Encapsulation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We completely seal your crawlspace from the earth and outside air. This involves installing a heavy-duty, reinforced vapor barrier on the floor and walls, sealing vents, and insulating the rim joists.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-1.5"></div>Creates a clean, dry storage space</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-1.5"></div>Lowers humidity levels instantly</li>
              </ul>
            </div>

            {/* Drainage */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-lime transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Waves className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Drainage Systems</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                For homes with standing water issues, we install interior perimeter drains (French drains) and high-capacity sump pumps to actively remove water before it can cause damage.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-1.5"></div>Automatic water removal</li>
                <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-1.5"></div>Battery backup options available</li>
              </ul>
            </div>

            {/* Dehumidifiers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-lime transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Construction className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Dehumidification</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Once sealed, we install a commercial-grade dehumidifier to maintain optimal humidity levels (below 50%), preventing mold growth and wood rot in your floor joists.
              </p>
            </div>

            {/* Vapor Barriers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover:border-brand-lime transition-all group">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Droplets className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Vapor Barrier Installation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Even without full encapsulation, upgrading your basic 6-mil plastic to a properly sealed 12-mil or 20-mil barrier can significantly reduce moisture intrusion from the soil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mold Connection CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="mt-1 bg-brand-lime p-3 rounded-xl shrink-0">
                <Activity className="w-8 h-8 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Concerned about existing mold?</h3>
                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                  If your crawlspace has been damp for a while, mold may have already taken hold. We offer professional testing to confirm the extent of the issue before sealing the space.
                </p>
                <Link
                  href="/mold-testing"
                  className="inline-flex items-center gap-2 text-brand-lime font-bold hover:text-white transition-colors"
                >
                  Learn about our Mold Testing Services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-6">
            Dry Out Your Crawlspace Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Call us for a free moisture assessment and protect your home's foundation.
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
