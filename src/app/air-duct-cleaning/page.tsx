import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, Fan, Trash2, ShieldCheck, HeartPulse, Building, CheckCircle } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Certified Air Duct Cleaning in Atlanta | Residential & Commercial HVAC',
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
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <CheckCircle className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">NADCA Certified Process</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Residential & Commercial <br/>
            <span className="text-brand-lime">Air Duct Cleaning</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Using advanced HEPA filtration and source removal technology to ensure the air you breathe is clean, safe, and healthy.
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

      {/* The Cleaning Process - Source Removal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">Our Deep Cleaning Process</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We don't just vacuum the vents; we perform a complete Source Removal to eliminate contaminants from the entire system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">1</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Inspection & Prep</h3>
              <p className="text-gray-600">We inspect your system, protect your floors, and seal off vents to ensure negative pressure is maintained.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-lime text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">2</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">Agitation & Extraction</h3>
              <p className="text-gray-600">Using rotary brushes and compressed air whips, we dislodge debris while our HEPA vacuum extracts it instantly.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">3</div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">System Sanitization</h3>
              <p className="text-gray-600">We finish by cleaning the main trunk lines and apply an optional EPA-registered antimicrobial treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See The Difference</h2>
            <p className="text-blue-200 text-lg">Real results from Atlanta homes and businesses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider z-10">Before</div>
              <div className="relative h-64 w-full">
                <Image
                  src="/images/placeholders/dirty-duct.jpg"
                  alt="Dirty Air Duct"
                  fill
                  className="w-full h-full object-cover filter brightness-75"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-gray-900">
                <p className="text-sm text-gray-400">Accumulated dust, lint, and debris blocking airflow.</p>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-brand-lime">
              <div className="absolute top-4 left-4 bg-brand-lime text-brand-blue text-xs font-bold px-3 py-1 rounded uppercase tracking-wider z-10">After</div>
              <div className="relative h-64 w-full">
                <Image
                  src="/images/placeholders/clean-duct.jpg"
                  alt="Clean Air Duct"
                  fill
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-gray-900">
                <p className="text-sm text-brand-lime">Completely sanitized and debris-free ductwork.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-blue mb-6">Why Clean Your Ducts?</h2>
              <p className="text-gray-600 text-lg mb-8">
                Indoor air can be 2-5 times more polluted than outdoor air. Our service directly targets the source of indoor pollution.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <b.icon className="w-6 h-6 text-brand-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue">{b.title}</h4>
                      <p className="text-sm text-gray-500">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="bg-brand-blue p-8 rounded-3xl text-white relative overflow-hidden">
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-lime rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <Building className="w-8 h-8 text-brand-lime" />
                  <h3 className="text-2xl font-bold">Commercial Services</h3>
                </div>
                <p className="mb-6 text-blue-100 relative z-10">
                  Managing a facility? We provide OSHA-compliant cleaning for offices, hospitals, and retail spaces.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-blue-200 relative z-10">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-lime" /> After-hours scheduling available</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-lime" /> NADCA certified technicians</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brand-lime" /> Detailed compliance reporting</li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-lime font-bold hover:text-white transition-colors relative z-10"
                >
                  Request Commercial Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-lime py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue mb-4">
            Schedule Your Cleaning Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium">
            Residential or Commercial, we have the team to get it done right.
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
