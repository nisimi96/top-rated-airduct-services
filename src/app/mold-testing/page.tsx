import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Microscope, Activity, Wind, BarChart3 } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Mold Testing in Atlanta | Lab Analysis',
  description: 'Professional air and surface mold testing with lab analysis. Identify mold types and spore counts. Data-driven remediation recommendations.',
}

export default function MoldTestingPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Mold Testing</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Professional air and surface mold testing with certified lab analysis. Get the data you need to make informed decisions.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Schedule Testing
          </a>
        </div>
      </section>

      {/* Why Testing Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Why Professional Mold Testing Matters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Mold can be invisible to the naked eye, but its effects on your health and home are very real. Professional testing identifies mold presence, type, and spore levels—giving you concrete data to work with.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We collect air samples and surface samples, send them to a certified lab, and provide detailed results with recommendations for remediation.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Microscope className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Lab-certified analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Detailed test results</span>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-brand-lime flex-shrink-0 mt-1" />
                  <span>Expert recommendations</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-6">Common Concerns:</h3>
              <ul className="space-y-4">
                {[
                  "Musty odors in home",
                  "Visible discoloration",
                  "Respiratory issues",
                  "Recent water damage",
                  "Basement moisture",
                  "Worried after inspection",
                ].map((concern, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-brand-lime rounded-full"></span>
                    <span className="text-gray-700">{concern}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Our Testing Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Wind,
                title: "Air Quality Testing",
                desc: "Collect airborne spore samples from multiple rooms. Identifies mold species and spore concentration."
              },
              {
                icon: Activity,
                title: "Surface Sampling",
                desc: "Swab suspected areas to identify mold growth. Determines what types of mold are present."
              },
              {
                icon: BarChart3,
                title: "Lab Analysis",
                desc: "Certified lab testing with detailed identification. Spore counts compared to baselines."
              },
              {
                icon: Microscope,
                title: "Expert Report",
                desc: "Comprehensive report with findings and recommendations for remediation."
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

      {/* Testing Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">The Testing Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Consultation", desc: "Discuss concerns and areas of interest" },
              { num: "2", title: "Sampling", desc: "Collect air and surface samples" },
              { num: "3", title: "Lab Analysis", desc: "Certified lab testing (3-5 business days)" },
              { num: "4", title: "Report", desc: "Detailed results and recommendations" },
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

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "How long does testing take?",
                a: "Sampling takes 30-60 minutes. Lab analysis takes 3-5 business days. Report delivered when complete."
              },
              {
                q: "Is mold testing expensive?",
                a: "Affordable pricing for peace of mind. Professional lab results help guide your next steps."
              },
              {
                q: "What if mold is found?",
                a: "We provide expert recommendations. Depending on levels, you may need professional remediation or simple fixes."
              },
              {
                q: "Do you provide remediation?",
                a: "We test and recommend solutions. We can coordinate professional remediation if needed."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-brand-blue mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Mold Test Today</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Professional testing gives you peace of mind and data-driven solutions.
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
