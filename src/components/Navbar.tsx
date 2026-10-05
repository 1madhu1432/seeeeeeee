import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, ChevronRight, Waves, Phone, Mail, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (categoryName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      
      {/* Top Corporate Strip - Hidden on small mobile */}
      <div className={`hidden md:block transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 border-b border-cyan-900/40 py-1.5 text-xs text-slate-300' : 'bg-slate-950/60 backdrop-blur-sm border-b border-white/10 py-2 text-xs text-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              Al Garhoud, Dubai, UAE
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 tracking-wider text-[11px] font-semibold">
              {COMPANY_INFO.businessScope}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a href={`mailto:${COMPANY_INFO.emails[1]}`} className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.emails[1]}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar: Transparent on top, Navy/Glass when scrolled */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/90 shadow-2xl backdrop-blur-xl border-b border-cyan-500/20 py-3.5' 
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo matching Visiting Card Corporate Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-600 to-blue-900 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Waves className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                <span>BLUE BAHAR</span>
                <span className="text-cyan-400 text-xs font-semibold px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30">TRADING</span>
              </div>
              <div className="text-[10px] text-slate-400 tracking-widest uppercase font-medium">
                LLC • DUBAI, UAE
              </div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-7 text-xs font-bold tracking-wider text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenContact()}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>GET A QUOTE</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-slate-950/98 border-b border-cyan-900/40 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl backdrop-blur-2xl">
            <div className="grid grid-cols-1 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-xs font-bold tracking-wider text-slate-200 hover:bg-slate-900 hover:text-cyan-400 border border-transparent hover:border-cyan-900/40 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-900">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center shadow-lg shadow-cyan-500/20"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};
