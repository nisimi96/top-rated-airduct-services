import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, ArrowRight, Building2, Clock, Stethoscope, Shield } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Commercial HVAC Cleaning Services | Atlanta Businesses',
  description: 'Professional commercial duct cleaning for offices, retail, warehouses. OSHA-compliant. Minimize downtime. Free estimates.',
}

export default function CommercialServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden pt-20 md:pt-20 lg:pt-20" style={{paddingTop: 'calc(100px + 5rem)'}}>
        <Image
          src="/images/hero-bg.webp"
          alt="Commercial HVAC cleaning services"
          fill
          className="object-cover -z-20"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Commercial HVAC <br/>
            <span className="text-brand-lime">Services</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 font-light">
            Professional duct cleaning for offices, retail, warehouses, and industrial spaces. OSHA-compliant and minimally disruptive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.phoneLink}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-lime-500/20 text-xl"
            >
              <Phone className="w-6 h-6 fill-current" />
              Schedule Consultation
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 border border-white/40 backdrop-blur-sm text-xl"
            >
              <Mail className="w-6 h-6" />
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Commercial Cleaning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why Commercial Spaces Need Regular Cleaning</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Health & Compliance</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Reduce sick days among employees</li>
                <li>• Improve indoor air quality (IAQ)</li>
                <li>• Meet OSHA and EPA requirements</li>
                <li>• Healthier work environment</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Operational Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Improved HVAC efficiency</li>
                <li>• Extended equipment lifespan</li>
                <li>• Lower energy costs</li>
                <li>• Minimal operational disruption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Commercial Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Building2,
                title: "Office Buildings",
                desc: "Complete HVAC cleaning for office complexes of all sizes. Scheduled during off-hours to minimize disruption."
              },
              {
                icon: Stethoscope,
                title: "Medical Facilities",
                desc: "Sterile, HIPAA-compliant cleaning for healthcare facilities. Maintains air quality standards."
              },
              {
                icon: Shield,
                title: "Industrial Facilities",
                desc: "Heavy-duty cleaning for warehouses, factories, and manufacturing plants. Handles specialized requirements."
              },
              {
                icon: Clock,
                title: "Retail & Restaurants",
                desc: "Quick, efficient cleaning scheduled around business hours. Maintains customer-facing standards."
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg">
                <service.icon className="w-10 h-10 text-brand-lime mb-4" />
                <h3 className="text-lg font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Commercial Cleaning Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Assessment", desc: "Evaluate your HVAC system and create a customized plan" },
              { num: "2", title: "Scheduling", desc: "Plan cleaning around your business operations" },
              { num: "3", title: "Professional Cleaning", desc: "Industrial-grade equipment and techniques" },
              { num: "4", title: "Verification", desc: "Documentation and air quality testing" },
            ].map((step) => (
              <div key={step.num} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-lime text-brand-blue font-bold rounded-full mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-brand-blue mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Industries We Serve</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "Office Complexes",
              "Medical/Dental Offices",
              "Hospitals & Clinics",
              "Retail Stores",
              "Restaurants & Food Service",
              "Warehouses",
              "Manufacturing Plants",
              "Schools & Universities",
              "Government Buildings",
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg text-center shadow">
                <p className="text-gray-700 font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Air Quality?</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us for a free consultation and customized proposal for your commercial space.
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
