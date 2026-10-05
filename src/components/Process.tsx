import React from 'react';
import { BUSINESS_PROCESS } from '../data/companyData';
import { ArrowRight, Compass } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>OPERATIONAL WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Business <span className="ocean-gradient-text">Process</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Structured 4-step B2B execution for seamless international seafood and frozen product trading.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 4-Step Horizontal Process Layout with Ocean Connecting Wave Line */}
        <div className="relative">
          
          {/* Connecting Horizontal Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/10 via-cyan-400/40 to-cyan-500/10 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {BUSINESS_PROCESS.map((step, idx) => (
              <div
                key={step.number}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-6 group hover:-translate-y-1 shadow-xl bg-slate-950"
              >
                <div className="space-y-4">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold font-heading text-cyan-400">
                      {step.number}
                    </span>
                    {idx < 3 && (
                      <ArrowRight className="hidden lg:block w-5 h-5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-wider font-heading">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-400 mt-0.5">
                      {step.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  STEP 0{idx + 1}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
