import React from 'react';
import { TRADING_SERVICES } from '../data/companyData';
import { WaveSeparator } from './WaveSeparator';
import { Ship, Globe, Boxes, Store, FileCheck2, Anchor, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onEnquire: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onEnquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ship': return <Ship className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-cyan-400" />;
      case 'Store': return <Store className="w-5 h-5 text-cyan-400" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-cyan-400" />;
      default: return <Anchor className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Background Image: Cargo Ship & Maritime Ocean Logistics */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
          alt="International Ocean Shipping & Cargo Logistics"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Anchor className="w-3.5 h-3.5" />
            <span>OUR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Comprehensive <span className="ocean-gradient-text">Trading Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            End-to-end import, export, distribution, and documentation solutions based in UAE.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRADING_SERVICES.map((service, index) => {
            const isWide = index === 4; // Logistics & Documentation gets wide span on lg
            return (
              <div
                key={service.id}
                className={`glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isWide ? 'lg:col-span-2 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-cyan-950/20' : ''
                }`}
              >
                {/* Real Operations Image Banner */}
                {service.image && (
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-950/90 border border-cyan-500/40 flex items-center justify-center backdrop-blur-md shadow-md">
                        {getIcon(service.iconName)}
                      </div>
                      <span className="text-[10px] font-extrabold tracking-widest text-cyan-400 bg-slate-950/90 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md">
                        UAE SERVICE
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading group-hover:text-cyan-300 transition-colors uppercase tracking-wide">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Feature Bullets (for Logistics & Documentation) */}
                    {service.features && (
                      <div className="pt-2">
                        <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
                          Complete Support For:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-900/80 px-3 py-2 rounded-xl border border-slate-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={onEnquire}
                      className="w-full py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all text-center"
                    >
                      DISCUSS REQUIREMENT
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Wave Separator Transitioning into Global Trade */}
      <div className="mt-20">
        <WaveSeparator fillColor="#030712" />
      </div>

    </section>
  );
};
