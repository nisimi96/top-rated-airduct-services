import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Thermometer, Layers, Zap, DollarSign } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blown-In Attic Insulation in Atlanta | Energy Savings',
  description: 'Professional blown-in insulation installation. Improve energy efficiency, lower utility bills. R-value optimization. Free estimates.',
}

export default function BlownInInsulationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blown-In Attic Insulation</h1>
          <p className="text-xl text-blue-100 max-w-2xl mb-8">
            Stop energy loss through your roof. Professional insulation installation improves comfort and lowers utility bills immediately.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Get Free Estimate
          </a>
        </div>
      </section>

      {/* Why Insulation Matters */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">The Importance of Proper Insulation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your attic is responsible for most of your home's temperature regulation. Poor or inadequate insulation allows heated and cooled air to escape, forcing your HVAC system to work harder and use more energy.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Blown-in insulation fills gaps and creates an effective thermal barrier, keeping conditioned air where it belongs—inside your home.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-brand-blue mb-3">Typical Savings:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 15-20% reduction in heating costs</li>
                  <li>• 10-15% reduction in cooling costs</li>
                  <li>• Improved comfort year-round</li>
                  <li>• ROI in 3-5 years</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-brand-blue mb-6">Signs You Need More Insulation:</h3>
                <ul className="space-y-4">
                  {[
                    "High heating/cooling bills",
                    "Uneven room temperatures",
                    "Cold spots in winter",
                    "Hot attic in summer",
                    "Ice dams in winter",
                    "Visible rafters in attic",
                  ].map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-brand-lime font-bold">✓</span>
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Benefits of Blown-In Insulation</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: DollarSign, title: "Lower Bills", desc: "Reduce energy consumption and save money monthly" },
              { icon: Thermometer, title: "Better Comfort", desc: "Consistent temperatures throughout your home" },
              { icon: Zap, title: "Energy Efficiency", desc: "Improve your home's energy rating" },
              { icon: Layers, title: "Complete Coverage", desc: "Fills gaps where other insulation can't reach" },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <benefit.icon className="w-10 h-10 text-brand-lime mx-auto mb-4" />
                <h3 className="font-bold text-brand-blue mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R-Value */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Understanding R-Value</h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 text-center">
              R-Value measures insulation's resistance to heat flow. Higher R-values provide better insulation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { region: "Atlanta Climate", recommended: "R-38 to R-49", desc: "Recommended for optimal efficiency" },
                { region: "Most Homes", current: "R-19 or less", desc: "Often inadequate for current standards" },
                { region: "After Upgrade", target: "R-49+", desc: "Modern efficiency standards" },
              ].map((item, idx) => (
                <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                  <p className="text-sm text-gray-600 mb-2">{item.region || item.current}</p>
                  <p className="text-2xl font-bold text-brand-blue">{item.recommended || item.target}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-blue mb-12 text-center">Installation Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Assessment", desc: "Evaluate current insulation and R-value needs" },
              { num: "2", title: "Preparation", desc: "Air seal gaps and prepare attic space" },
              { num: "3", title: "Installation", desc: "Professional blown-in insulation application" },
              { num: "4", title: "Verification", desc: "Confirm proper coverage and R-value achieved" },
            ].map((step) => (
              <div key={step.num} className="bg-white p-6 rounded-lg shadow text-center">
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

      {/* CTA */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Saving on Energy Bills</h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Professional insulation installation pays for itself. Schedule your energy audit today.
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
