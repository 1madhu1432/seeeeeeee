import React from 'react';
import type { ProductItem } from '../data/companyData';
import { X, Check, ArrowRight, Package, Globe } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onEnquireProduct: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEnquireProduct,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl rounded-3xl border border-cyan-500/30 overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-red-950 text-slate-300 hover:text-white border border-slate-700 hover:border-red-500/40 transition-all flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Top Banner Image */}
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/90 text-cyan-300 border border-cyan-500/30 mb-2 inline-block">
                  {product.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {product.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Product Overview
            </h3>
            <p className="text-base text-slate-200 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-cyan-400" />
                Packaging Format
              </div>
              <div className="text-sm font-medium text-white">
                {product.packaging}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
              <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-cyan-400" />
                Primary Origins
              </div>
              <div className="text-sm font-medium text-white">
                {product.origin}
              </div>
            </div>
          </div>

          {/* Key Specifications list */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              Quality & Processing Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-xs font-medium text-slate-200">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Sticky CTA */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400">Trade Enquiries</div>
            <div className="text-sm font-bold text-white">Wholesale / Container Load Supply</div>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnquireProduct(product.name);
            }}
            className="px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2"
          >
            <span>Enquire For {product.name}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
