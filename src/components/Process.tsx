import React from 'react';
import { BUSINESS_PROCESS } from '../data/companyData';
import type { ProcessStep } from '../data/companyData';
import { WaveSeparator } from './WaveSeparator';
import { Waves } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-100/90 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-widest">
            <Waves className="w-3.5 h-3.5 text-cyan-700" />
            <span>COMMERCIAL WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
            Our Trading <span className="text-cyan-700">Process</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            A structured four-step approach to international food & seafood trade execution.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {BUSINESS_PROCESS.map((step: ProcessStep, idx: number) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
            >
              {/* Photo Header */}
              {step.image && (
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-lg text-cyan-400">
                      {step.number}
                    </div>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-slate-900 font-heading uppercase tracking-wide group-hover:text-cyan-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-extrabold tracking-widest text-slate-400 uppercase">
                  <span>STEP 0{idx + 1} OF 04</span>
                  <span className="text-cyan-600 font-bold">OPERATIONS</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Wave Transition into Dark CtaBand (Dubai sea at blue hour) */}
      <div className="mt-20">
        <WaveSeparator fillColor="#030712" />
      </div>

    </section>
  );
};
