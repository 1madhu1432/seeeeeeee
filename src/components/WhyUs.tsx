import React from 'react';
import { WHY_BLUE_BAHAR } from '../data/companyData';
import { ShieldCheck, Handshake, TrendingUp, UserCheck, Briefcase, MapPin, Award, CheckCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-cyan-400" />;
      case 'Handshake': return <Handshake className="w-7 h-7 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-7 h-7 text-cyan-400" />;
      case 'Briefcase': return <Briefcase className="w-7 h-7 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-7 h-7 text-cyan-400" />;
      default: return <Award className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>VALUE PROPOSITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Why <span className="ocean-gradient-text">Blue Bahar?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Unwavering commitment to B2B trading reliability, product integrity, and Dubai hub efficiency.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Asymmetric Asymmetrical Layout (Hero Feature Card + Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Feature Highlight Box 1 (Larger Card) */}
          <div className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 flex flex-col justify-between space-y-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                {getIcon(WHY_BLUE_BAHAR[0].iconName)}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {WHY_BLUE_BAHAR[0].title}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {WHY_BLUE_BAHAR[0].description}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>CORE STANDARD</span>
              </span>
              <span className="text-slate-500">01</span>
            </div>
          </div>

          {/* Right Grid (5 Points) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_BLUE_BAHAR.slice(1).map((item, idx) => (
              <div
                key={item.id}
                className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                    {getIcon(item.iconName)}
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[10px] font-bold text-slate-500 flex justify-between">
                  <span>VERIFIED ASPECT</span>
                  <span>0{idx + 2}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
