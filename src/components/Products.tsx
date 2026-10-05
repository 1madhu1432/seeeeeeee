import React from 'react';
import { PRODUCT_CATEGORIES } from '../data/companyData';
import type { CategoryItem } from '../data/companyData';
import { ArrowUpRight, Eye, Fish } from 'lucide-react';

interface ProductsProps {
  onSelectCategoryForEnquiry: (categoryName: string) => void;
  onViewCategoryDetails: (category: CategoryItem) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onSelectCategoryForEnquiry,
  onViewCategoryDetails
}) => {
  return (
    <section id="products" className="py-28 bg-slate-950 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Fish className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our Trading <span className="ocean-gradient-text">Categories</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Specialized B2B commercial trading categories managed through our Dubai logistics hub.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 5 Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Overlay Name Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 backdrop-blur-md uppercase tracking-wider">
                    {category.name}
                  </span>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {category.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {category.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {category.highlights.slice(0, 3).map((hl, i) => (
                      <span key={i} className="text-[11px] font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons: VIEW CATEGORY & ENQUIRE NOW */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => onViewCategoryDetails(category)}
                    className="py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>VIEW CATEGORY</span>
                  </button>

                  <button
                    onClick={() => onSelectCategoryForEnquiry(category.name)}
                    className="py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
