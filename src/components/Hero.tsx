import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { WaveSeparator } from './WaveSeparator';
import { ArrowRight, Globe, Waves, Anchor, Ship } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onContactUs }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 overflow-hidden bg-slate-950">
      
      {/* Background Image: Realistic Dubai Coastline + Arabian Sea */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/dubai_ocean.jpg"
          alt="Dubai Coastline, Arabian Sea & Maritime Skyline"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-10000"
          style={{ animationDuration: '25s' }}
        />
        {/* Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        <div className="absolute inset-0 bg-cyan-950/20 mix-blend-overlay" />
      </div>

      {/* Ambient Ocean Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.eyebrow}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase font-heading leading-tight">
              Connecting Dubai <br />
              <span className="ocean-gradient-text">to Global Markets</span>
            </h1>

            {/* Secondary Heading */}
            <p className="text-lg sm:text-2xl font-bold text-cyan-300 tracking-wide font-heading">
              {COMPANY_INFO.heroSubheading}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              "{COMPANY_INFO.heroDescription}"
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreProducts}
                className="px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onContactUs}
                className="px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <span>CONTACT US</span>
              </button>
            </div>

            {/* Bottom Text Badge */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Waves className="w-4 h-4 text-cyan-400" />
                <span>{COMPANY_INFO.tagline}</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE VISUAL SHOWCASE */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card Feature */}
              <div className="glass-panel p-4 sm:p-6 rounded-3xl border border-cyan-500/30 shadow-2xl space-y-4 backdrop-blur-xl relative overflow-hidden group">
                
                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/images/products/fresh_seafood.jpg"
                    alt="Blue Bahar Commercial Seafood Trade"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-bold">
                    <span className="px-3 py-1 rounded-full bg-slate-950/90 text-cyan-400 border border-cyan-500/40 backdrop-blur-md flex items-center gap-1.5">
                      <Waves className="w-3.5 h-3.5 text-cyan-400" />
                      SEAFOOD & FROZEN TRADE
                    </span>
                    <span className="text-slate-300">DUBAI, UAE</span>
                  </div>
                </div>

                {/* Secondary Inset Stats / Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <Ship className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">IMPORT / EXPORT</div>
                      <div className="text-xs font-bold text-white">Global Reefer</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                      <Anchor className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase">HUB LOCATION</div>
                      <div className="text-xs font-bold text-white">Al Garhoud</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Wave Separator Transitioning into Light About Section */}
      <WaveSeparator fillColor="#f8fafc" />

    </section>
  );
};
