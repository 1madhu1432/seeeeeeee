import React from 'react';
import { MapPin, Globe, Waves, Snowflake, Ship } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-slate-900/40 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Ambient Flare */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Introduction Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Large Dubai ocean / marine visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl group">
              <img
                src="/images/hero/dubai_ocean.jpg"
                alt="Dubai Marine Coastline & Ocean Logistics"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              {/* Overlay Location Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="glass-panel px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 border border-cyan-500/30">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>AL GARHOUD, DUBAI, UAE</span>
                </div>
                <div className="text-xs font-semibold text-cyan-300">
                  MARITIME TRADE HUB
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Corporate Introduction Content */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5" />
              <span>BUSINESS INTRODUCTION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Dubai-Based. <br />
              <span className="ocean-gradient-text">Globally Connected.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed border-l-4 border-cyan-400 pl-4 py-1">
              "Blue Bahar Trading LLC operates from Dubai, connecting suppliers and business buyers through seafood, frozen products and international trading."
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Based in Al Garhoud, Dubai, we leverage one of the world's primary international trade corridors. Our operations link quality-focused producers with commercial enterprise buyers through professional import, export, and maritime trade management.
            </p>

            {/* 3 Simple Highlights (Client Requirement: Seafood, Frozen Products, Global Trading) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mx-auto">
                  <Waves className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                  SEAFOOD
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mx-auto">
                  <Snowflake className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                  FROZEN PRODUCTS
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-colors text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center mx-auto">
                  <Ship className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xs font-extrabold text-white uppercase tracking-wider">
                  GLOBAL TRADING
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
