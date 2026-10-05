import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Anchor, ArrowRight, Globe, ShieldCheck, Ship } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactUs }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-slate-950">
      
      {/* Background Image with Dark Navy & Oceanic Glow Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/dubai_ocean.jpg"
          alt="Dubai Ocean Coastline & Maritime Trading"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-10000"
          style={{ animationDuration: '20s' }}
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay" />
      </div>

      {/* Decorative Ocean Light Flares */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Central Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full py-12">
        <div className="max-w-3xl space-y-6">
          
          {/* Dubai Trade Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-medium shadow-xl backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>DUBAI, UAE • B2B INTERNATIONAL TRADING</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-heading">
              BLUE BAHAR <br />
              <span className="ocean-gradient-text">TRADING LLC</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-cyan-300 tracking-wide">
              "{COMPANY_INFO.tagline}"
            </p>
          </div>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            {COMPANY_INFO.subTagline}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onContactUs}
              className="px-8 py-4 rounded-xl font-bold text-sm bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Key Guarantee Badges */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>HACCP Certified Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Ship className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Cold Chain Integrity</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Anchor className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Direct Dubai Exporters</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Ticker Bar (Import • Export • Seafood • Frozen Products • Trading) */}
      <div className="relative z-10 border-y border-cyan-900/40 bg-slate-950/80 backdrop-blur-md py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>IMPORT</span>
            </div>
            <span className="hidden sm:inline text-cyan-800">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>EXPORT</span>
            </div>
            <span className="hidden sm:inline text-cyan-800">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>SEAFOOD</span>
            </div>
            <span className="hidden sm:inline text-cyan-800">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>FROZEN PRODUCTS</span>
            </div>
            <span className="hidden sm:inline text-cyan-800">•</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>TRADING</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
