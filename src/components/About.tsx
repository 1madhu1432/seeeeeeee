import React from 'react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/companyData';
import { CheckCircle2, MapPin, Building } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Building className="w-3.5 h-3.5" />
            <span>About Blue Bahar Trading LLC</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Your Trusted Partner in <span className="ocean-gradient-text">Global Seafood Trading</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Content & Main Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-slate-300">
            <p className="text-lg leading-relaxed text-slate-200 font-medium border-l-4 border-cyan-500 pl-4 bg-slate-900/40 py-2 rounded-r-lg">
              "Blue Bahar Trading LLC is a Dubai-based trading company focused on the import, export and trading of seafood and frozen products."
            </p>
            
            <p className="text-base leading-relaxed text-slate-300">
              "Based in Al Garhoud, Dubai, we connect quality products, trusted suppliers and business buyers through professional international trading."
            </p>

            <p className="text-base leading-relaxed text-slate-400">
              Our prime strategic location in Dubai enables us to harness world-class cold chain storage infrastructure, seamless sea freight access via Jebel Ali Port, and rapid air freight connectivity. We uphold unyielding standards of food safety, traceability, and supply chain dependability.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {COMPANY_INFO.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3 Visual Images Grid (Dubai sea, Seafood, Trading/shipping) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Image 1: Dubai Sea / Coastline */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl sm:col-span-2 h-56">
              <img
                src="/images/hero/dubai_ocean.jpg"
                alt="Dubai Ocean Logistics Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
                <span className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Dubai Maritime Hub
                </span>
                <span className="text-cyan-300">Al Garhoud, Dubai</span>
              </div>
            </div>

            {/* Image 2: Fresh Seafood */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl h-48">
              <img
                src="/images/products/fresh_seafood.jpg"
                alt="Fresh Premium Seafood"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-semibold text-cyan-200 bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Fresh & Frozen Seafood
              </div>
            </div>

            {/* Image 3: Global Trade & Shipping */}
            <div className="relative group overflow-hidden rounded-2xl border border-slate-800 shadow-xl h-48">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                alt="Global Reefer Shipping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-semibold text-cyan-200 bg-slate-950/80 px-2.5 py-1 rounded-md border border-cyan-500/20">
                International Logistics
              </div>
            </div>
          </div>
        </div>

        {/* Company Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMPANY_STATS.map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-2xl border border-slate-800 text-center hover:border-cyan-500/40 transition-all">
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
