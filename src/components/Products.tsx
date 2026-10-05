import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/companyData';
import type { ProductItem } from '../data/companyData';
import { ArrowUpRight, Check, Info, Snowflake, Fish } from 'lucide-react';

interface ProductsProps {
  onSelectProductForEnquiry: (productName: string) => void;
  onViewProductDetails: (product: ProductItem) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onSelectProductForEnquiry,
  onViewProductDetails
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fresh Seafood', 'Frozen Seafood', 'Frozen Food Products', 'Marine Products', 'Bulk Trading'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-slate-900/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <Fish className="w-3.5 h-3.5" />
            <span>Product Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Our Premium <span className="ocean-gradient-text">Product Portfolio</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Certified quality seafood and frozen food commodities sourced for global B2B trading and commercial distribution.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400/30'
                  : 'bg-slate-950/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-cyan-950/40"
            >
              {/* Product Card Image Container */}
              <div className="relative h-60 overflow-hidden bg-slate-950">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-md flex items-center gap-1.5">
                    <Snowflake className="w-3 h-3 text-cyan-400" />
                    {product.category}
                  </span>
                </div>

                {/* Info Trigger Icon */}
                <button
                  onClick={() => onViewProductDetails(product)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-400 transition-all flex items-center justify-center shadow-lg"
                  title="View Details"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>

              {/* Product Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-800 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProductForEnquiry(product.name)}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onViewProductDetails(product)}
                    className="px-3.5 py-3 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-all"
                    title="Product Specifications"
                  >
                    Details
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
