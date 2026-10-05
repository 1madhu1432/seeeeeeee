import React from 'react';
import type { CategoryItem } from '../data/companyData';
import { X, Check, ArrowRight } from 'lucide-react';

interface ProductModalProps {
  category: CategoryItem | null;
  onClose: () => void;
  onEnquireCategory: (categoryName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  category,
  onClose,
  onEnquireCategory,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl rounded-3xl border border-cyan-500/40 overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/90 hover:bg-red-950 text-slate-300 hover:text-white border border-slate-700 hover:border-red-500/40 transition-all flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Header Visual Image */}
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-800">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 uppercase tracking-wider mb-2 inline-block">
                COMMERCIAL CATEGORY
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading">
                {category.name}
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Category Overview
            </h3>
            <p className="text-base text-slate-200 leading-relaxed font-medium">
              {category.fullDescription}
            </p>
          </div>

          {/* Key Highlights list */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
              Commercial Trade Aspects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Sticky CTA Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trading Desk Enquiry</div>
            <div className="text-sm font-bold text-white">Commercial Wholesale & B2B Supply</div>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnquireCategory(category.name);
            }}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>ENQUIRE FOR {category.name.toUpperCase()}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
