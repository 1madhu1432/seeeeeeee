import React from 'react';
import { WHY_US_DATA } from '../data/companyData';
import { ShieldCheck, Handshake, TrendingUp, UserCheck, Briefcase, MapPin, Award, CheckCircle } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-cyan-400" />;
      case 'Handshake': return <Handshake className="w-8 h-8 text-cyan-400" />;
      case 'TrendingUp': return <TrendingUp className="w-8 h-8 text-cyan-400" />;
      case 'UserCheck': return <UserCheck className="w-8 h-8 text-cyan-400" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-cyan-400" />;
      case 'MapPin': return <MapPin className="w-8 h-8 text-cyan-400" />;
      default: return <Award className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-900/40 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Competitive Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Why Partner With <span className="ocean-gradient-text">Blue Bahar</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Unwavering quality assurance, strategic Dubai connectivity, and enterprise-grade trade reliability.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US_DATA.map((item) => (
            <div
              key={item.id}
              className="glass-panel-hover p-8 rounded-2xl border border-slate-800 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/50 flex items-center justify-center shadow-lg transition-colors">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
