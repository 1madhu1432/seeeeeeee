import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import { Menu, X, Phone, Mail, Globe, MapPin, Send, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (categoryName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#about', hasDropdown: false },
    { name: 'Products', href: '#products', hasDropdown: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Why Us', href: '#why-us', hasDropdown: false },
    { name: 'Gallery', href: '#products', hasDropdown: false },
    { name: 'Contact Us', href: '#contact', hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 shadow-sm border-b border-slate-100">
      
      {/* Top Corporate Strip with Navy Ribbon */}
      <div className="hidden xl:block bg-white border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <div className="bg-[#002d62] text-white text-[11px] font-medium py-1.5 px-6 rounded-l-full flex items-center gap-6 shadow-sm">
            <a href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <Phone className="w-3 h-3 text-cyan-400" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </a>
            
            <a href={`mailto:${COMPANY_INFO.emails[0]}`} className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <Mail className="w-3 h-3 text-cyan-400" />
              <span>{COMPANY_INFO.emails[0]}</span>
            </a>

            <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <Globe className="w-3 h-3 text-cyan-400" />
              <span>{COMPANY_INFO.website}</span>
            </a>

            <div className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#home" className="hover:opacity-95 transition-opacity py-1">
            <Logo size="md" />
          </a>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold tracking-wide text-slate-800">
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-1 py-1.5 transition-colors relative font-medium ${
                    isActive 
                      ? 'text-[#0284c7] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#0284c7]' 
                      : 'hover:text-[#0284c7]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Button & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#002d62] hover:bg-[#001f45] text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5 rotate-45 text-cyan-300" />
              <span>REQUEST A QUOTE</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-800 hover:text-[#0284c7] transition-all"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setMobileMenuOpen(false);
                }}
                className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0284c7] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#002d62] text-white text-center shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 rotate-45 text-cyan-300" />
                <span>REQUEST A QUOTE</span>
              </button>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};
