import React from 'react';
import { ArrowRight, Send, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onRequestQuote: () => void;
  onContactUs: () => void;
  onExploreProducts?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onExploreProducts,
  onSelectCategory,
}) => {
  const handleExplore = () => {
    if (onExploreProducts) {
      onExploreProducts();
    } else {
      const prod = document.getElementById('products');
      if (prod) prod.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (categoryName: string) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    } else {
      const prod = document.getElementById('products');
      if (prod) prod.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickPills = [
    { name: 'Seafood', label: 'Shrimp | Fish | Ocean' },
    { name: 'Poultry', label: 'Chicken | Cuts' },
    { name: 'Meat', label: 'Mutton | Lamb' },
    { name: 'Spices', label: 'Global Spices' },
    { name: 'Vegetables', label: 'Fresh & Frozen' },
  ];

  return (
    <section id="home" className="pt-24 sm:pt-28 pb-8 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Real Banner Artwork Container */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950 group">
          
          {/* Real Image Provided by Client */}
          <img
            src="/images/hero/hero_banner_real.jpg"
            alt="Blue Bahar Trading LLC - World-Class Seafood for the Middle East"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Interactive Overlay Hotspots on the Real Graphic */}
          {/* 1. Explore Our Products Button Hotspot */}
          <button
            onClick={handleExplore}
            title="Explore Our Products"
            aria-label="Explore Our Products"
            className="absolute top-[49%] left-[36%] w-[14%] h-[6.5%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-cyan-300/80 hover:bg-white/10"
          />

          {/* 2. Request a Quote Button Hotspot */}
          <button
            onClick={onRequestQuote}
            title="Request a Quote"
            aria-label="Request a Quote"
            className="absolute top-[49%] left-[51%] w-[13%] h-[6.5%] rounded-full cursor-pointer transition-all hover:ring-2 hover:ring-white/80 hover:bg-white/10"
          />

          {/* 3. Bottom 5 Category Card Hotspots */}
          {/* Seafood */}
          <button
            onClick={() => handleCategoryClick('Seafood Products')}
            title="Seafood Products"
            aria-label="View Seafood Products"
            className="absolute bottom-[2%] left-[2%] w-[18%] h-[24%] rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-cyan-400/80 hover:bg-cyan-500/10"
          />

          {/* Poultry */}
          <button
            onClick={() => handleCategoryClick('Poultry Products')}
            title="Poultry Products"
            aria-label="View Poultry Products"
            className="absolute bottom-[2%] left-[21.5%] w-[18%] h-[24%] rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-cyan-400/80 hover:bg-cyan-500/10"
          />

          {/* Meat */}
          <button
            onClick={() => handleCategoryClick('Meat Products')}
            title="Meat Products"
            aria-label="View Meat Products"
            className="absolute bottom-[2%] left-[41%] w-[18%] h-[24%] rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-cyan-400/80 hover:bg-cyan-500/10"
          />

          {/* Spices */}
          <button
            onClick={() => handleCategoryClick('Spices')}
            title="Spices"
            aria-label="View Spices"
            className="absolute bottom-[2%] left-[60.5%] w-[18%] h-[24%] rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-cyan-400/80 hover:bg-cyan-500/10"
          />

          {/* Vegetables */}
          <button
            onClick={() => handleCategoryClick('Vegetables')}
            title="Vegetables"
            aria-label="View Vegetables"
            className="absolute bottom-[2%] left-[80%] w-[18%] h-[24%] rounded-xl cursor-pointer transition-all hover:ring-2 hover:ring-cyan-400/80 hover:bg-cyan-500/10"
          />

        </div>

        {/* Mobile & Tablet Quick Action Toolbar */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs shadow-lg">
          
          {/* Quick Categories Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
              Direct Inquiries:
            </span>
            {quickPills.map((pill) => (
              <button
                key={pill.name}
                onClick={() => handleCategoryClick(pill.name)}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#0284c7] text-slate-200 hover:text-white border border-slate-800 hover:border-transparent transition-all font-semibold text-xs flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                <span>{pill.name}</span>
              </button>
            ))}
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handleExplore}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onRequestQuote}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0284c7] hover:bg-[#0369a1] text-white transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 rotate-45" />
              <span>Request Quote</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
