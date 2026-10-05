import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { WaveSeparator } from './WaveSeparator';
import { Phone, ArrowRight, Anchor } from 'lucide-react';

interface CtaBandProps {
  onSendEnquiry: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onSendEnquiry }) => {
  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-slate-950">
      
      {/* Background Image: Full-width Cinematic Dubai Sea at Blue Hour */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/dubai_ocean.jpg"
          alt="Cinematic Dubai Arabian Sea Coastline at Blue Hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80" />
        <div className="absolute inset-0 bg-cyan-950/30 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-cyan-500/30 shadow-2xl backdrop-blur-2xl text-center max-w-4xl mx-auto space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Anchor className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMERCIAL ENQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
            Let's Build a <span className="ocean-gradient-text">Trading Partnership</span>
          </h2>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Talk to Blue Bahar Trading LLC about your seafood, frozen products, import or export requirements.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onSendEnquiry}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              <span>SEND AN ENQUIRY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>CALL US: {COMPANY_INFO.phones[0]}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Wave Transition into Light Contact Section */}
      <WaveSeparator fillColor="#ffffff" />

    </section>
  );
};
