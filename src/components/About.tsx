import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, Globe, Eye, Target, Building, PlaneTakeoff, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Background Subtle Water Wave Graphic Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Real Official Facility Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative space-y-4">
              
              {/* Main Executive Inspection Photo */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
                <img
                  src="/images/about/executive_inspection.jpg"
                  alt="Blue Bahar Management & UAE Partners Inspecting Fresh Seafood"
                  className="w-full h-[380px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Overlay Location Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-slate-950/90 px-3.5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 border border-cyan-500/30 backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>AL GARHOUD, DUBAI, UAE</span>
                  </div>
                  <div className="text-xs font-bold text-cyan-300 font-arabic bg-slate-950/90 px-3 py-1.5 rounded-lg border border-slate-800">
                    {COMPANY_INFO.arabicName}
                  </div>
                </div>
              </div>

              {/* Floating Air Freight Facility Card */}
              <div className="sm:absolute sm:-bottom-8 sm:-right-6 sm:w-72 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xl space-y-2 backdrop-blur-xl group/card">
                <div className="relative h-28 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src="/images/about/blue_bahar_air_freight.jpg"
                    alt="Blue Bahar Air Freight & Cold Chain Seafood Packaging"
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#002d62] text-cyan-300 flex items-center gap-1 shadow-sm">
                      <PlaneTakeoff className="w-3 h-3" />
                      AIR FREIGHT
                    </span>
                  </div>
                </div>
                <div className="px-1 pb-1">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Blue Bahar Global Logistics
                  </div>
                  <div className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Insulated Temperature Controlled
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-extrabold uppercase tracking-widest">
              <Globe className="w-3.5 h-3.5 text-cyan-700" />
              <span>ABOUT US</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-heading leading-tight">
              Who We <span className="text-cyan-700">Are</span>
            </h2>

            {/* Who We Are Description */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {COMPANY_INFO.aboutWhoWeAre}
            </p>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 font-heading uppercase tracking-wide">
                  Our Vision
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {COMPANY_INFO.vision}
                </p>
              </div>

              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 font-heading uppercase tracking-wide">
                  Our Mission
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {COMPANY_INFO.mission}
                </p>
              </div>

            </div>

            {/* UAE Business Hub Badge */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Trading Hub</div>
                  <div className="text-sm font-extrabold text-slate-900 font-heading">
                    {COMPANY_INFO.address}
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
