import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Globe, UserCheck, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  initialProductInterest?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProductInterest = 'Seafood' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: initialProductInterest,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialProductInterest) {
      setFormData(prev => ({ ...prev, category: initialProductInterest }));
    }
  }, [initialProductInterest]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in your Name, Email, and Message.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const productOptions = [
    "Seafood",
    "Chicken",
    "Mutton",
    "Spices",
    "Vegetables",
    "Frozen Products",
    "Import / Export",
    "Other"
  ];

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background Subtle Water Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-900 text-xs font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-cyan-700" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight font-heading">
            Contact <span className="text-cyan-700">Blue Bahar</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Submit your commercial trade enquiry or reach out to our Dubai headquarters.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Official Corporate Details in Sleek Dark Navy Container for Logo Contrast */}
          <div className="lg:col-span-5 bg-slate-950 text-white p-8 sm:p-10 rounded-3xl border border-slate-900 space-y-8 shadow-2xl">
            
            <Logo size="lg" />

            <div className="space-y-6 pt-6 border-t border-slate-800">
              
              {/* Managing Director */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Managing Director</div>
                  <div className="text-base font-extrabold text-white font-heading">
                    {COMPANY_INFO.managingDirector}
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Phone Contacts</div>
                  {COMPANY_INFO.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone.replace(/\s+/g, '')}`} className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email Addresses</div>
                  {COMPANY_INFO.emails.map((email, i) => (
                    <a key={i} href={`mailto:${email}`} className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Globe className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Official Website</div>
                  <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="text-sm font-semibold text-cyan-400 hover:underline">
                    {COMPANY_INFO.website}
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Head Office Address</div>
                  <div className="text-sm font-medium text-slate-300 leading-relaxed">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Frontend Commercial Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl">
            
            <h3 className="text-2xl font-extrabold text-slate-950 font-heading uppercase tracking-wide mb-6">
              Send Trade Enquiry
            </h3>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white border border-cyan-300 text-center space-y-4 shadow-sm animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center mx-auto text-cyan-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 font-heading">Enquiry Received</h4>
                <p className="text-base text-slate-700">
                  Thank you for your enquiry. Our team will contact you soon.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      category: 'Seafood',
                      message: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 text-cyan-400 hover:bg-slate-800 transition-all"
                >
                  SEND ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-100 border border-red-300 text-xs text-red-700 font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors text-sm shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Global Foods Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors text-sm shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. buyer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors text-sm shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors text-sm shadow-sm"
                    />
                  </div>
                </div>

                {/* Product Category Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Product Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-cyan-600 transition-colors text-sm cursor-pointer shadow-sm"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    Trade Requirement / Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your commercial product or supply requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-600 transition-colors text-sm shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-xl shadow-cyan-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>SEND ENQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
