import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Mail, MapPin, Waves, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'SERVICES', href: '#services' },
    { name: 'GLOBAL TRADE', href: '#global-trade' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-cyan-900/40 relative z-10 pt-20 pb-12 overflow-hidden">
      
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-cyan-950/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-900">
          
          {/* Col 1: Corporate Identity */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-600 to-blue-900 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Waves className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="font-extrabold text-lg text-white tracking-tight">BLUE BAHAR</div>
                <div className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">TRADING LLC</div>
              </div>
            </div>

            <div className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              {COMPANY_INFO.businessScope}
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Dubai-based international trading company specializing in seafood, frozen products, import, export and B2B trade.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest text-cyan-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-bold tracking-wider">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest text-cyan-400">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-semibold tracking-wider">
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Fresh Seafood</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Frozen Seafood</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Frozen Food Products</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Marine Products</a></li>
              <li><a href="#products" className="hover:text-cyan-400 transition-colors">Bulk Trading</a></li>
            </ul>
          </div>

          {/* Col 4: Official Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest text-cyan-400">
              Dubai Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.emails[1]}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 Blue Bahar Trading LLC. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Al Garhoud, Dubai, UAE</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-cyan-950 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-1.5"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline font-bold uppercase tracking-wider text-[10px]">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
