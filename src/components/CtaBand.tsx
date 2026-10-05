import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Send, Waves } from 'lucide-react';

interface CtaBandProps {
  onSendEnquiry: () => void;
}

export const CtaBand: React.FC<CtaBandProps> = ({ onSendEnquiry }) => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-950 border-t border-slate-800">
      
      {/* Background Full-Width Dubai Sea Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/dubai_ocean.jpg"
          alt="Dubai Ocean Trading Partnership"
          className="w-full h-full object-cover opacity-35 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950" />
        <div className="absolute inset-0 bg-cyan-950/30 mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Waves className="w-4 h-4 text-cyan-400" />
          <span>B2B TRADING PARTNERSHIPS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading leading-tight max-w-4xl mx-auto">
          Let's Build a <span className="ocean-gradient-text">Global Trading Partnership</span>
        </h2>

        <p className="text-base sm:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
          "Talk to Blue Bahar Trading LLC about your seafood, frozen product, import or export requirements."
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onSendEnquiry}
            className="w-full sm:w-auto px-9 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-2xl shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>SEND AN ENQUIRY</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-9 py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/50 transition-all backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>CALL US</span>
          </a>
        </div>

      </div>
    </section>
  );
};
