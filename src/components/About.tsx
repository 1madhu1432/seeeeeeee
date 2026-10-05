import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Globe, UserCheck, Building } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Background Subtle Water Wave Graphic Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Large Dubai ocean / marine trading image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
              <img
                src="/images/hero/dubai_ocean.jpg"
                alt="Dubai Ocean & Marine Logistics Trade"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Overlay Location Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="bg-slate-950/90 px-4 py-2.5 rounded-xl text-xs font-bold text-white flex items-center gap-2 border border-cyan-500/30 backdrop-blur-md">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>AL GARHOUD, DUBAI, UAE</span>
                </div>
                <div className="text-xs font-bold text-cyan-300 font-arabic bg-slate-950/90 px-3 py-1.5 rounded-lg border border-slate-800">
                  {COMPANY_INFO.arabicName}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5 text-cyan-700" />
              <span>{COMPANY_INFO.name}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-tight">
              Dubai-Based. <br />
              <span className="text-cyan-700">Globally Connected.</span>
            </h2>

            {/* Arabic Name Card */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">Arabic Company Name</div>
              <div className="text-xl font-bold text-cyan-900 font-arabic">
                {COMPANY_INFO.arabicName}
              </div>
            </div>

            {/* Exact Client Supplied Copy Paragraphs */}
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-semibold border-l-4 border-cyan-500 pl-4 py-1">
              "{COMPANY_INFO.aboutP1}"
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              "{COMPANY_INFO.aboutP2}"
            </p>

            {/* Executive Management & Location Info Cards */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Managing Director</div>
                  <div className="text-sm font-extrabold text-slate-900 font-heading">
                    {COMPANY_INFO.managingDirector}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Business Hub</div>
                  <div className="text-sm font-extrabold text-slate-900 font-heading">
                    Al Garhoud, Dubai, UAE
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
