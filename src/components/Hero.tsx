import React from 'react';
import Image from 'next/image';
import { Phone, CheckCircle, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 md:pt-20 lg:pt-20 overflow-hidden" style={{paddingTop: 'calc(100px + 5rem)'}}>
      <Image
        src="/images/hero-bg.webp"
        alt="Professional air duct cleaning service background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
        quality={85}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-blue/80 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white">

        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8 animate-fade-in-up">
          <div className="flex gap-1">
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
            <Star className="w-4 h-4 text-brand-lime fill-brand-lime" />
          </div>
          <span className="text-sm font-semibold tracking-wide uppercase">#1 Rated in Atlanta</span>
        </div>

        {/* Main Headlines */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg">
          Atlanta's Top Rated <br/>
          <span className="text-brand-lime">Air Duct Cleaning</span> Service
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
          Breathe Easier. We provide certified HVAC cleaning for a healthier, safer, and cleaner home environment.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={COMPANY_INFO.phoneLink}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-lime hover:bg-lime-400 text-brand-blue font-bold text-xl py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(132,204,22,0.5)]"
          >
            <Phone className="w-6 h-6 fill-current" />
            Call For Free Estimate
          </a>
        </div>

        {/* Trust Signals Footer in Hero */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-lime" />
            <span>100% Satisfaction Guaranteed</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-lime" />
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-lime" />
            <span>Serving Atlanta Metro Area</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
