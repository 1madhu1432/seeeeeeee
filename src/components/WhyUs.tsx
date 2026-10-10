import React from 'react';
import { WHY_BLUE_BAHAR } from '../data/companyData';
import { ShieldCheck, Globe, TrendingDown, Truck, UserCheck, MapPin, Award, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-700" />;
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-700" />;
      case 'TrendingDown': return <TrendingDown className="w-6 h-6 text-cyan-700" />;
      case 'Truck': return <Truck className="w-6 h-6 text-cyan-700" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-cyan-700" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-cyan-700" />;
      default: return <Award className="w-6 h-6 text-cyan-700" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      
      {/* Background Subtle Water Accent */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-cyan-700" />
            <span>OUR ADVANTAGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
            Why Choose <span className="text-cyan-700">Blue Bahar</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Committed to quality, reliability, and customer satisfaction across global and regional food markets.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_BLUE_BAHAR.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-4 group hover:-translate-y-1 ${
                index === 0 || index === 5 ? 'bg-gradient-to-br from-white via-cyan-50/40 to-white border-cyan-200' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-cyan-700 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
