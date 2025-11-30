import type { Metadata } from 'next'
import { Phone, Microscope, Activity, CheckCircle, Info, Wind } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Indoor Air Mold Testing in Atlanta, GA',
  description: 'Professional air and surface mold testing with lab analysis. Identify mold types and spore counts. Data-driven remediation recommendations.',
}

const testingMethods = [
  {
    title: "Air Quality Sampling",
    desc: "We use professional-grade spore traps to collect air samples from various rooms. These are analyzed in a lab to determine the concentration of airborne mold spores compared to outdoor baselines.",
    icon: Wind
  },
  {
    title: "Surface Sampling",
    desc: "If visible growth is present, we use swabs or tape lifts to collect samples directly from the surface. This confirms exactly what type of fungal growth is present on walls, vents, or furniture.",
    icon: Microscope
  }
];

const signs = [
  { title: "Musty Odors", desc: "A persistent earthy or damp smell that doesn't go away." },
  { title: "Visible Growth", desc: "Discoloration on walls, ceilings, or around vents (black, green, or white spots)." },
  { title: "Water Damage", desc: "History of leaks, floods, or high humidity issues in the home." },
  { title: "Health Symptoms", desc: "Unexplained allergies, coughing, or respiratory issues while at home." },
];

export default function MoldTestingPage() {
  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-brand-lime/10 px-4 py-2 rounded-full border border-brand-lime/20 mb-6">
            <Activity className="w-5 h-5 text-brand-lime" />
            <span className="text-brand-lime font-bold tracking-wide uppercase text-sm">Indoor Air Quality Analysis</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Professional Mold <br/>
            <span className="text-brand-lime">Testing & Assessment</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Stop guessing. Get scientific data. We provide fast, accurate testing to identify if mold is impacting your indoor environment.
          </p>
          <a
            href={COMPANY_INFO.phoneLink}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-lime-500/20 text-lg"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Schedule Testing</span>
          </a>
        </div>
      </section>

      {/* When to Test Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-blue mb-4">Do You Need Testing?</h2>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Mold isn't always visible. If you are experiencing any of the following, a professional assessment is recommended.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signs.map((sign, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border-l-4 border-brand-lime shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-brand-blue mb-3">{sign.title}</h3>
                <p className="text-gray-600">{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Scientific Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {testingMethods.map((method, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-brand-lime rounded-full flex items-center justify-center mb-6 text-brand-blue shadow-lg">
                  <method.icon className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                <p className="text-blue-100 text-lg leading-relaxed">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      {/* Important Disclaimer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-amber-50 border border-amber-100 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="mt-1 bg-amber-100 p-3 rounded-xl shrink-0 text-amber-700">
                <Info className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Testing vs. Remediation</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  <strong>We believe in data integrity.</strong> The goal of this service is to provide you with an objective analysis of your indoor air quality. We collect the samples and have them analyzed by an independent third-party laboratory.
                </p>
                <div className="bg-white p-6 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-brand-blue mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-brand-lime" /> What You Get
                  </h4>
                  <p className="text-gray-600">
                    You will receive a detailed lab report outlining the types of mold found (if any) and their spore counts. This report is crucial for determining if professional remediation is actually necessary.
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
            Get Peace of Mind Today
          </h2>
          <p className="text-brand-blue/80 text-xl mb-8 font-medium max-w-2xl mx-auto">
            Call now to schedule your air quality assessment.
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
