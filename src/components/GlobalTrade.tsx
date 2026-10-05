import React from 'react';
import { WaveSeparator } from './WaveSeparator';
import { MapPin, Globe, Compass, Anchor, Navigation } from 'lucide-react';

export const GlobalTrade: React.FC = () => {
  return (
    <section id="global-trade" className="py-24 bg-slate-950 relative overflow-hidden">
      
      {/* Background Dubai Maritime Coastline */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/images/hero/dubai_ocean.jpg"
          alt="Dubai Ocean Logistics Hub"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>GLOBAL MARITIME NEXUS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Dubai. Connecting Business <br />
            <span className="ocean-gradient-text">to Global Markets.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Strategically located in Dubai, Blue Bahar Trading LLC operates from an important international business and logistics hub.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Visual Global Map & Dubai Center Point */}
        <div className="relative glass-panel rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Subtle World Map SVG background */}
          <div className="relative h-80 sm:h-96 w-full rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-center overflow-hidden">
            
            {/* World Map Background Pattern */}
            <svg viewBox="0 0 1000 500" fill="none" className="w-full h-full opacity-25">
              <path d="M150,120 Q180,100 220,130 T300,150 T280,240 T200,280 T140,200 Z" fill="#0284c7" />
              <path d="M350,140 Q400,100 480,120 T520,200 T460,260 T380,220 Z" fill="#0284c7" />
              <path d="M500,170 Q540,150 600,180 T650,250 T580,300 T520,240 Z" fill="#0284c7" />
              <path d="M680,130 Q750,100 850,140 T880,260 T780,320 T700,240 Z" fill="#0284c7" />
              <path d="M220,320 Q260,300 300,340 T320,440 T240,460 Z" fill="#0284c7" />
              <path d="M740,340 Q780,320 840,360 T820,440 Z" fill="#0284c7" />
            </svg>

            {/* Glowing Trade Concentric Waves from Dubai */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-64 h-64 border border-cyan-500/20 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
              <div className="w-44 h-44 border border-cyan-400/30 rounded-full animate-ping absolute top-10 left-10" style={{ animationDuration: '3s' }} />
            </div>

            {/* Dubai Central Pulsing Beacon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-20">
              <div className="relative flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-cyan-400/30 animate-ping absolute" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-0.5 shadow-xl shadow-cyan-400/50 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="glass-panel px-4 py-2 rounded-xl border border-cyan-400/40 text-center shadow-2xl backdrop-blur-xl">
                <div className="text-xs font-extrabold text-white tracking-widest uppercase flex items-center gap-1.5">
                  <Anchor className="w-3.5 h-3.5 text-cyan-400" />
                  DUBAI, UAE
                </div>
                <div className="text-[10px] text-cyan-300 font-semibold tracking-wider">
                  MARITIME & FOOD TRADE HUB
                </div>
              </div>
            </div>

            {/* Simulated Animated Trade Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
              <path d="M 500 250 Q 380 200 250 220" stroke="url(#cyanGrad)" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-75" />
              <path d="M 500 250 Q 650 220 800 280" stroke="url(#cyanGrad)" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-75" />
              <path d="M 500 250 Q 480 340 450 400" stroke="url(#cyanGrad)" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-75" />

              <defs>
                <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
              </defs>
            </svg>

          </div>

          {/* Location Feature Bar */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">Strategic Position</div>
                <div className="text-xs text-slate-400">East-West Trade Corridor</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Anchor className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">Port Infrastructure</div>
                <div className="text-xs text-slate-400">World-Class Logistics Facilities</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                <Navigation className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-white uppercase">Al Garhoud Headquarters</div>
                <div className="text-xs text-slate-400">Commercial Business Center</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Wave Transition into Light WhyUs Section */}
      <div className="mt-20">
        <WaveSeparator fillColor="#f8fafc" />
      </div>

    </section>
  );
};
