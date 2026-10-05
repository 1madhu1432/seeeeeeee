import React from 'react';
import { PRODUCT_CATEGORIES, CLIENT_PRODUCT_GALLERY } from '../data/companyData';
import type { CategoryItem } from '../data/companyData';
import { WaveSeparator } from './WaveSeparator';
import { ArrowUpRight, Fish, ShieldCheck } from 'lucide-react';

interface ProductsProps {
  onSelectCategoryForEnquiry: (categoryName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onSelectCategoryForEnquiry }) => {
  const seafoodCategory = PRODUCT_CATEGORIES.find(c => c.id === 'seafood')!;
  const chickenCategory = PRODUCT_CATEGORIES.find(c => c.id === 'chicken')!;
  const muttonCategory = PRODUCT_CATEGORIES.find(c => c.id === 'mutton')!;
  const spicesCategory = PRODUCT_CATEGORIES.find(c => c.id === 'spices')!;
  const vegetablesCategory = PRODUCT_CATEGORIES.find(c => c.id === 'vegetables')!;
  const frozenCategory = PRODUCT_CATEGORIES.find(c => c.id === 'frozen-products')!;

  const renderCard = (category: CategoryItem, isFeatured: boolean = false) => (
    <div
      key={category.id}
      className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 ${
        isFeatured ? 'lg:grid lg:grid-cols-12 lg:items-center' : ''
      }`}
    >
      {/* Category Image */}
      <div className={`relative overflow-hidden bg-slate-950 ${isFeatured ? 'h-72 lg:h-full lg:col-span-7' : 'h-64'}`}>
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        
        {/* Overlay Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-slate-950/90 text-cyan-400 border border-cyan-500/40 backdrop-blur-md uppercase tracking-wider">
            {category.name}
          </span>
        </div>
      </div>

      {/* Category Content */}
      <div className={`p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 ${isFeatured ? 'lg:col-span-5' : ''}`}>
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading group-hover:text-cyan-700 transition-colors uppercase tracking-tight">
            {category.name}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            "{category.shortDescription}"
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={() => onSelectCategoryForEnquiry(category.name)}
            className="w-full py-3.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-cyan-600/20 transition-all flex items-center justify-center gap-2 group/btn"
          >
            <span>ENQUIRE NOW</span>
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="products" className="py-24 bg-slate-100/80 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-widest">
            <Fish className="w-3.5 h-3.5 text-cyan-700" />
            <span>TRADING PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
            Our Trading <span className="text-cyan-700">Categories</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Based on our commercial import, export, and international supply operations in Dubai.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Real Product Gallery Showcase Header */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b border-slate-300 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-heading uppercase tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-700" />
                <span>Featured Seafood & Frozen Commodities</span>
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Real product specifications & commercial trade inventory handled by Blue Bahar Trading LLC
              </p>
            </div>
          </div>

          {/* 4 Real Product Photo Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_PRODUCT_GALLERY.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-slate-950/90 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 font-heading group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectCategoryForEnquiry(item.category)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-cyan-50 text-cyan-800 border border-slate-200 hover:border-cyan-300 transition-all flex items-center justify-center gap-1"
                  >
                    <span>ENQUIRE ITEM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Layout Stream for 6 Main Categories */}
        <div className="space-y-8 pt-8">
          
          {/* 1. Large Featured: SEAFOOD */}
          {seafoodCategory && renderCard(seafoodCategory, true)}

          {/* 2. Two Column Grid: CHICKEN & MUTTON */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chickenCategory && renderCard(chickenCategory)}
            {muttonCategory && renderCard(muttonCategory)}
          </div>

          {/* 3. Two Column Grid: SPICES & VEGETABLES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spicesCategory && renderCard(spicesCategory)}
            {vegetablesCategory && renderCard(vegetablesCategory)}
          </div>

          {/* 4. Large Featured: FROZEN PRODUCTS */}
          {frozenCategory && renderCard(frozenCategory, true)}

        </div>

      </div>

      {/* Wave Transition into Dark Ocean Services Section */}
      <div className="mt-20">
        <WaveSeparator fillColor="#090d16" />
      </div>

    </section>
  );
};
