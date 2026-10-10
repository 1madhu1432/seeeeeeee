import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const productCategories = [
    { name: 'Seafood Products', href: '#products' },
    { name: 'Poultry Products', href: '#products' },
    { name: 'Meat Products', href: '#products' },
    { name: 'Agricultural Products', href: '#products' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Top Wave Separator Line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="md" />

            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-white font-heading">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-sm font-semibold text-cyan-400 italic">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-normal max-w-sm">
              UAE-based trading company specializing in the import, export, wholesale, and retail distribution of premium food products.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {productCategories.map((cat) => (
                <li key={cat.name}>
                  <a href={cat.href} className="hover:text-cyan-400 transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs">
              <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.emails[0]}</span>
              </a>
              <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-cyan-400 transition-colors">
                <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.website}</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};
