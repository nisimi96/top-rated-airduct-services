import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Hammer, ShieldAlert, CheckCircle, Construction, Ruler, ArrowRight } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dryer Vent Installation & Repair Service in Atlanta | Code Compliance',
  description: 'Professional dryer vent installation and repair. Code-compliant rigid venting. Fire-safe and efficient. Free estimates.',
}

export default function DryerVentInstallationPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url(/images/clean-dryer.webp)', paddingTop: 'calc(100px + 5rem)'}}>
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Hammer className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Code Compliant Solutions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Professional Dryer Vent <br/>
            <span className="text-brand-lime">Installation & Repair</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Ensure your home meets safety codes with rigid metal venting. We replace dangerous flexible ducts, repair damaged lines, and install new systems.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Get A Free Estimate</span>
          </a>
        </div>
      </section>

      {/* Code Compliance & Safety */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100">
            <div className="md:w-1/3 flex justify-center">
              <ShieldAlert className="w-32 h-32 text-red-500 opacity-90" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Your Vent Safe?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Many homes still use <strong>flexible white vinyl or foil ducts</strong>. These are highly flammable and trap lint easily, creating a severe fire hazard. Current building codes often require rigid metal ducting for dryer exhaust.
              </p>
              <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
                <h4 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> We Only Use Code-Compliant Materials
                </h4>
                <p className="text-gray-600">
                  We remove dangerous transition hoses and install <strong>smooth-walled, rigid galvanized steel</strong> ducts that maximize airflow and minimize lint accumulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Our Installation Services</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From minor repairs to complete system re-routes, we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-blue hover:border-brand-lime group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Construction className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">New Installation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Installing a dryer in a new location? We cut the necessary vents, install the exterior hood, and run rigid ductwork through walls, attics, or crawlspaces.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-blue hover:border-brand-lime group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Ruler className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Re-Routing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vents that are too long or have too many turns reduce efficiency. We re-route existing lines to take the shortest path to the exterior, improving drying time.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border-t-4 border-brand-blue hover:border-brand-lime group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue transition-colors">
                <Hammer className="w-8 h-8 text-brand-blue group-hover:text-brand-lime transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Repair & Replacement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We fix disconnected joints, crushed pipes, and damaged exterior vents. We also install bird/rodent guards to keep pests out of your home.
              </p>
            </div>
          </div>

          {/* Installation Workflow */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-blue text-center mb-12">
              Our Installation Process
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 max-w-4xl mx-auto">
              {/* Before - Dirty/Damaged */}
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">Before Installation</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-white">
                  <img
                    src="/images/dirty-dry.webp"
                    alt="Damaged or old dryer vent before installation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex justify-center">
                <div className="relative">
                  <ArrowRight className="w-8 h-8 text-brand-lime animate-pulse" />
                  <style>{`
                    @keyframes slide-right {
                      0%, 100% { transform: translateX(0); }
                      50% { transform: translateX(8px); }
                    }
                    .animate-slide-right {
                      animation: slide-right 1.5s ease-in-out infinite;
                    }
                  `}</style>
                </div>
              </div>

              {/* Middle - Installation Process */}
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-gray-600 mb-3 uppercase tracking-wide">During Installation</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-white">
                  <img
                    src="/images/dirty-dry2.webp"
                    alt="Professional installation of rigid metal venting"
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

              {/* After - Clean/New */}
              <div className="flex-1 text-center">
                <p className="text-sm font-bold text-brand-lime mb-3 uppercase tracking-wide">After Installation</p>
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 bg-white">
                  <img
                    src="/images/clean-dryer.webp"
                    alt="Clean, code-compliant dryer vent after installation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Why Rigid" Detail Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Rigid Metal Ducting?</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                While flexible foil hose is cheap and easy to install, it is terrible for airflow. The ridges inside the hose catch lint, causing it to build up rapidly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-lime rounded-full p-1"><CheckCircle className="w-4 h-4 text-brand-blue" /></div>
                  <div>
                    <strong className="block text-white">Smoother Interior</strong>
                    <span className="text-blue-200 text-sm">No ridges to trap lint, allowing air to flow freely.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-lime rounded-full p-1"><CheckCircle className="w-4 h-4 text-brand-blue" /></div>
                  <div>
                    <strong className="block text-white">Fire Containment</strong>
                    <span className="text-blue-200 text-sm">Metal ducts can contain a fire better than plastic or foil, preventing spread to the home structure.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-lime rounded-full p-1"><CheckCircle className="w-4 h-4 text-brand-blue" /></div>
                  <div>
                    <strong className="block text-white">Crush Resistant</strong>
                    <span className="text-blue-200 text-sm">Rigid metal won't easily crush or kink behind the dryer, ensuring consistent performance.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-brand-lime">Our Installation Guarantee</h3>
                <p className="text-white mb-6">
                  We treat your home like our own. Our installation services come with a guarantee on workmanship and materials.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    <div className="text-brand-lime font-bold text-xl mb-1">Code</div>
                    <div className="text-xs text-gray-300">Compliant Materials</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl text-center">
                    <div className="text-brand-lime font-bold text-xl mb-1">1 Year</div>
                    <div className="text-xs text-gray-300">Labor Warranty</div>
                  </div>
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
            Upgrade Your Safety Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Don't wait for a clog or a fire. Get a code-compliant vent installed by experts.
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
