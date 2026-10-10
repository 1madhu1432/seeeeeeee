import React from 'react';
import { Ship, Shield, Globe, Handshake, ChevronRight } from 'lucide-react';

interface HeroProps {
  onRequestQuote: () => void;
  onContactUs: () => void;
  onExploreProducts?: () => void;
  onSelectCategory?: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onExploreProducts,
  onSelectCategory
}) => {
  const quickCategories = [
    {
      id: 'seafood',
      name: 'Seafood',
      subtitle: 'Shrimp | Fish | Ocean Products',
      image: '/images/products/seafood_thumb.png',
    },
    {
      id: 'poultry',
      name: 'Poultry',
      subtitle: 'Chicken | Chicken Parts',
      image: '/images/products/poultry_thumb.png',
    },
    {
      id: 'meat',
      name: 'Meat',
      subtitle: 'Mutton | Lamb | Meat Cuts',
      image: '/images/products/meat_thumb.png',
    },
    {
      id: 'spices',
      name: 'Spices',
      subtitle: 'Premium Indian & Global Spices',
      image: '/images/products/spices_thumb.png',
    },
    {
      id: 'vegetables',
      name: 'Vegetables',
      subtitle: 'Fresh & Frozen Vegetables',
      image: '/images/products/vegetables_thumb.png',
    },
  ];

  const trustBadges = [
    {
      icon: <Ship className="w-5 h-5 text-cyan-300" />,
      title: 'Import & Export',
      subtitle: 'Global Trade Solutions',
    },
    {
      icon: <Shield className="w-5 h-5 text-cyan-300" />,
      title: 'Premium Quality',
      subtitle: 'Fresh & Safe Products',
    },
    {
      icon: <Globe className="w-5 h-5 text-cyan-300" />,
      title: 'Worldwide Supply',
      subtitle: 'Reliable & Timely Delivery',
    },
    {
      icon: <Handshake className="w-5 h-5 text-cyan-300" />,
      title: 'Your Trusted Partner',
      subtitle: 'in Food Trading',
    },
  ];

  const handleCardClick = (catName: string) => {
    if (onSelectCategory) {
      onSelectCategory(catName);
    } else {
      const prodEl = document.getElementById('products');
      if (prodEl) prodEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    if (onExploreProducts) {
      onExploreProducts();
    } else {
      const prodEl = document.getElementById('products');
      if (prodEl) prodEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] pt-28 lg:pt-36 pb-12 flex flex-col justify-between overflow-hidden bg-slate-950">
      
      {/* Background Composite Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/dubai_trade_hero.jpg"
          alt="Blue Bahar Global Food Trading Dubai Skyline & Maritime"
          className="w-full h-full object-cover object-center transform scale-100"
        />
        {/* Cinematic atmospheric overlays to maintain readability while keeping visuals vivid */}
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/30" />
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-8">
        
        {/* Eyebrow with decorative rules */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-widest text-slate-200 uppercase mb-4">
          <span className="w-8 sm:w-16 h-px bg-slate-300/60" />
          <span>BLUE BAHAR TRADING LLC • DUBAI</span>
          <span className="w-8 sm:w-16 h-px bg-slate-300/60" />
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-5 drop-shadow-md">
          World-Class Seafood <br />
          for the <span className="text-[#38bdf8]">Middle East</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal mb-8 drop-shadow-sm">
          We are a leading import, export and general trading company in UAE, specializing in premium seafood, chicken, mutton, spices, vegetables and food products. Delivering quality, freshness and trust across global markets.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={handleExplore}
            className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] shadow-lg shadow-sky-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            <span>Explore Our Products</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onRequestQuote}
            className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950/40 hover:bg-white/15 border border-white/80 hover:border-white transition-all backdrop-blur-sm"
          >
            <span>Request a Quote</span>
          </button>
        </div>

        {/* 4 Trust & Value Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto pt-2">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 text-left p-2">
              <div className="w-10 h-10 rounded-full border border-white/50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center shrink-0 shadow-md">
                {badge.icon}
              </div>
              <div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {badge.title}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-300 leading-tight">
                  {badge.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 5 Bottom Product Category Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {quickCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCardClick(cat.name)}
              className="bg-white/95 hover:bg-white rounded-2xl p-2.5 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 border border-white/80 flex flex-col justify-between group"
            >
              {/* Product Thumbnail */}
              <div className="h-20 w-full rounded-xl overflow-hidden bg-slate-100 mb-2 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title, Subtitle, and Circular Arrow Button */}
              <div className="flex items-center justify-between px-1 pt-1">
                <div className="truncate pr-1">
                  <h4 className="text-xs sm:text-sm font-black text-[#002d62] font-heading leading-tight truncate">
                    {cat.name}
                  </h4>
                  <p className="text-[9px] text-slate-500 truncate leading-tight mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                <div className="w-6 h-6 rounded-full bg-[#0284c7] group-hover:bg-[#0369a1] text-white flex items-center justify-center shrink-0 transition-colors shadow-sm">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
