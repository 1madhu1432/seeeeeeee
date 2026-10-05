import React from 'react';
import { Globe, Anchor, Navigation, ShieldCheck, Zap } from 'lucide-react';

export const GlobalTrade: React.FC = () => {
  return (
    <section id="global-trade" className="relative py-32 overflow-hidden bg-slate-950 border-t border-slate-800">
      
      {/* Background: Large Dubai Sea / Ocean Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/dubai_ocean.jpg"
          alt="Dubai Ocean Maritime Hub"
          className="w-full h-full object-cover opacity-30 filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950" />
        <div className="absolute inset-0 bg-cyan-950/25 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest shadow-xl">
            <Globe className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '15s' }} />
            <span>GLOBAL LOGISTICS HUB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Dubai. The Gateway to <span className="ocean-gradient-text">Global Trade.</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
            "Located in Dubai, Blue Bahar Trading LLC is positioned within a major international business and logistics environment, connecting trading opportunities across global markets."
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Global Map Visual Panel with Dubai Highlighted as Central Node */}
        <div className="glass-panel rounded-3xl border border-cyan-500/30 p-6 sm:p-12 shadow-2xl relative overflow-hidden my-8">
          
          <div className="relative w-full aspect-[21/9] min-h-[340px] sm:min-h-[440px] flex items-center justify-center">
            
            <svg viewBox="0 0 1000 450" className="w-full h-full opacity-90">
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(56, 189, 248, 0.08)" strokeWidth="1" />
                </pattern>
                
                <radialGradient id="dubaiGlowNode" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
                  <stop offset="50%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                </radialGradient>
                
                <linearGradient id="tradeRouteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              <rect width="1000" height="450" fill="url(#gridPattern)" />

              {/* Simplified World Continents Silhouettes */}
              {/* Americas */}
              <path d="M 180 100 Q 220 120 200 220 T 260 380 Q 220 390 180 340 T 150 200 Z" fill="rgba(30, 41, 59, 0.5)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
              {/* Europe & Africa */}
              <path d="M 460 80 Q 520 90 530 160 T 560 300 Q 500 360 450 320 T 440 180 Z" fill="rgba(30, 41, 59, 0.5)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
              {/* Asia */}
              <path d="M 580 80 Q 750 90 820 180 T 780 280 Q 680 300 620 220 Z" fill="rgba(30, 41, 59, 0.5)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
              {/* Australia */}
              <path d="M 800 300 Q 860 310 850 380 T 780 370 Z" fill="rgba(30, 41, 59, 0.5)" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />

              {/* Trade Routes Radiating from Dubai (Coordinates ~590, 185) */}
              <path d="M 590 185 Q 490 130 430 110" fill="none" stroke="url(#tradeRouteGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
              <path d="M 590 185 Q 700 220 780 240" fill="none" stroke="url(#tradeRouteGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
              <path d="M 590 185 Q 560 270 530 330" fill="none" stroke="url(#tradeRouteGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
              <path d="M 590 185 Q 720 150 810 140" fill="none" stroke="url(#tradeRouteGrad)" strokeWidth="2.5" strokeDasharray="6 4" />
              <path d="M 590 185 Q 520 160 470 140" fill="none" stroke="url(#tradeRouteGrad)" strokeWidth="2.5" strokeDasharray="6 4" />

              {/* Destination Trade Nodes */}
              <circle cx="430" cy="110" r="5" fill="#38bdf8" />
              <circle cx="780" cy="240" r="5" fill="#38bdf8" />
              <circle cx="530" cy="330" r="5" fill="#38bdf8" />
              <circle cx="810" cy="140" r="5" fill="#38bdf8" />

              {/* DUBAI CENTRAL HUB NODE (Highlighted Pulse) */}
              <circle cx="590" cy="185" r="32" fill="url(#dubaiGlowNode)" opacity="0.6" />
              <circle cx="590" cy="185" r="18" fill="none" stroke="#38bdf8" strokeWidth="2" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="590" cy="185" r="8" fill="#ffffff" />
              <circle cx="590" cy="185" r="4" fill="#0284c7" />

              {/* Dubai Label Box */}
              <g transform="translate(605, 160)">
                <rect width="145" height="40" rx="8" fill="#0284c7" opacity="0.95" />
                <text x="12" y="19" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">DUBAI, UAE</text>
                <text x="12" y="31" fill="#bae6fd" fontSize="9" fontWeight="600" fontFamily="sans-serif">Global Trade Hub</text>
              </g>

            </svg>

          </div>

          {/* Strategic Advantages Row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Anchor className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Jebel Ali Port Access</div>
                <div className="text-[11px] text-slate-400">Deep-sea ocean logistics</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Navigation className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Air Cargo Transit</div>
                <div className="text-[11px] text-slate-400">Dubai International Airport</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Cold Chain Corridor</div>
                <div className="text-[11px] text-slate-400">Sub-zero reefer logistics</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">Customs Facilitation</div>
                <div className="text-[11px] text-slate-400">Dubai Trade clearance</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
