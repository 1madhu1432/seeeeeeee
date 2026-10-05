import React from 'react';
import { SERVICES_DATA } from '../data/companyData';
import { Ship, Globe, Anchor, Snowflake, Compass, Building2, ChevronRight, Layers } from 'lucide-react';

interface ServicesProps {
  onEnquire: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship': return <Ship className="w-7 h-7 text-cyan-400" />;
      case 'Globe': return <Globe className="w-7 h-7 text-cyan-400" />;
      case 'Anchor': return <Anchor className="w-7 h-7 text-cyan-400" />;
      case 'Snowflake': return <Snowflake className="w-7 h-7 text-cyan-400" />;
      case 'Compass': return <Compass className="w-7 h-7 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-7 h-7 text-cyan-400" />;
      default: return <Layers className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Trading Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our Core <span className="ocean-gradient-text">B2B Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Comprehensive end-to-end import, export, and temperature-controlled logistics services operating out of Dubai.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-950 to-slate-900 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-lg">
                  {getIcon(service.iconName)}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mt-0.5">
                    {service.subtitle}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights list */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Button */}
              <div className="pt-6">
                <button
                  onClick={onEnquire}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500/40"
                >
                  <span>Request Service Quote</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
