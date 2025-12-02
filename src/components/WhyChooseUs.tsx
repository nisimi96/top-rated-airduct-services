import React from 'react';
import { ShieldCheck, Truck, Users, Wallet, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/constants';

const features = [
  {
    icon: Truck,
    title: "Advanced HEPA Equipment",
    description: "We use industrial-grade negative pressure vacuums and rotary brushes to remove 99.9% of debris."
  },
  {
    icon: Users,
    title: "Certified Technicians",
    description: "Our team is fully background-checked, drug-screened, and certified for your peace of mind."
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "No hidden fees. We provide free, no-obligation estimates before we start any work."
  },
  {
    icon: ShieldCheck,
    title: "Health Focused",
    description: "Eliminate allergens, mold spores, and dust mites to create a safer environment for your family."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-brand-blue text-white relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2">
            <span className="text-brand-lime font-bold tracking-widest uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The <span className="text-brand-lime">Top Rated</span> Difference
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              We don't just move dust around; we remove it. Our comprehensive cleaning process ensures your entire HVAC system is restored to peak performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-lime rounded-lg text-brand-blue">
                        <feature.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-blue-200 text-sm leading-relaxed pl-12">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                    href={COMPANY_INFO.phoneLink}
                    className="inline-block bg-white hover:bg-gray-100 text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-colors text-center"
                >
                    Get Your Free Quote
                </a>
                <Link
                    href="/why-us"
                    className="inline-flex items-center justify-center gap-2 border-2 border-brand-lime text-brand-lime hover:bg-brand-lime hover:text-brand-blue font-bold text-lg py-3 px-8 rounded-full transition-colors"
                >
                    Learn More <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                    src="/images/technician.webp"
                    alt="Technician cleaning air duct"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
                    <p className="text-white font-medium italic">"The difference in air quality was noticeable immediately. Highly recommend!"</p>
                    <p className="text-brand-lime text-sm mt-2">- Sarah J., Marietta GA</p>
                </div>
            </div>
            {/* Offset border accent */}
            <div className="absolute -z-10 top-6 -right-6 w-full h-full border-4 border-brand-lime rounded-2xl hidden md:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
