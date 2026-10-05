import React from 'react';
import { TRADING_SERVICES } from '../data/companyData';
import { Ship, Globe, Anchor, Snowflake, Compass, Building2, ChevronRight, Layers } from 'lucide-react';

interface ServicesProps {
  onEnquire: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship': return <Ship className="w-6 h-6 text-cyan-400" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-cyan-400" />;
      case 'Snowflake': return <Snowflake className="w-6 h-6 text-cyan-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-cyan-400" />;
      default: return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            International Trading <span className="ocean-gradient-text">Solutions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Professional B2B trade facilitation, cold chain routing, and import/export execution in Dubai.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 6 Services: Asymmetric Dynamic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRADING_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between shadow-xl"
            >
              {/* Background Image Accent */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                
                {/* Large Typography Service Number */}
                <div className="absolute top-4 right-6 text-4xl font-extrabold font-heading text-white/10 group-hover:text-cyan-400/20 transition-colors">
                  0{index + 1}
                </div>

                {/* Service Icon Badge */}
                <div className="absolute bottom-4 left-6 w-12 h-12 rounded-2xl bg-slate-950 border border-cyan-500/30 flex items-center justify-center shadow-lg group-hover:border-cyan-400 transition-colors">
                  {getIcon(service.iconName)}
                </div>
              </div>

              {/* Service Description Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-heading tracking-wide group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-slate-800/80 space-y-1.5">
                  {service.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={onEnquire}
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>ENQUIRE SERVICE</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
