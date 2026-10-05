import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, PRODUCTS_DATA } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle2, Building, MessageSquare, User, Briefcase, PhoneCall, AlertCircle } from 'lucide-react';

interface ContactProps {
  initialProductInterest?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProductInterest }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: initialProductInterest || 'Fresh Seafood',
    message: ''
  });

  useEffect(() => {
    if (initialProductInterest) {
      setFormData(prev => ({ ...prev, productInterest: initialProductInterest }));
    }
  }, [initialProductInterest]);

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Please include details of your enquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Static frontend processing - no API call
      setSubmitted(true);
      // Reset form after short delay
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productInterest: 'Fresh Seafood',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Our Trade Desk</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Get In Touch <span className="ocean-gradient-text">With Us</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Reach out to our Dubai team for global seafood inquiries, bulk pricing, and B2B trading partnerships.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Main Company Card */}
            <div className="glass-panel p-8 rounded-3xl border border-cyan-500/20 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <h3 className="text-2xl font-extrabold text-white font-heading tracking-tight">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-1 uppercase tracking-wider">
                  {COMPANY_INFO.businessScope}
                </p>
              </div>

              <div className="space-y-5 pt-4 border-t border-slate-800">
                
                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase">Trade Desk Phone</div>
                    {COMPANY_INFO.phones.map((phone, i) => (
                      <div key={i}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="text-sm sm:text-base font-medium text-slate-200 hover:text-cyan-400 transition-colors block"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase">Email Inquiries</div>
                    {COMPANY_INFO.emails.map((email, i) => (
                      <div key={i}>
                        <a
                          href={`mailto:${email}`}
                          className="text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors block"
                        >
                          {email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-semibold text-slate-400 uppercase">Registered Address</div>
                    <div className="text-sm text-slate-200 leading-relaxed">
                      {COMPANY_INFO.address.office}<br />
                      {COMPANY_INFO.address.building}<br />
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                    </div>
                  </div>
                </div>

              </div>

              {/* Business Hours Note */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Trade desk operates Sunday – Thursday, 8:00 AM – 6:00 PM (GST)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Static Frontend Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                Submit Product Enquiry
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Fill out your requirement below. Our trade representatives will respond with complete specifications and B2B pricing.
              </p>

              {/* Required Success Message Banner */}
              {submitted && (
                <div className="mb-8 p-6 rounded-2xl bg-cyan-950/90 border border-cyan-400/50 text-cyan-100 shadow-xl space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-3 text-cyan-300 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                    <span>Enquiry Received!</span>
                  </div>
                  <p className="text-base font-semibold text-white pl-9">
                    "Thank you for your enquiry. Our team will contact you soon."
                  </p>
                  <div className="pt-2 pl-9">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors placeholder:text-slate-600`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Global Foods Ltd"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.company ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors placeholder:text-slate-600`}
                    />
                    {errors.company && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.email ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors placeholder:text-slate-600`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors placeholder:text-slate-600`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Product Interest Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-400" />
                    Product Interest *
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-white text-sm outline-none transition-colors"
                  >
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.name} className="bg-slate-950 text-white">
                        {p.name} ({p.category})
                      </option>
                    ))}
                    <option value="General Trade Quotation" className="bg-slate-950 text-white">
                      General B2B Trade Quotation / Import Export
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    Enquiry Details & Volume Requirements *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify target quantities, destination port, packaging requirements, or delivery schedule..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                      errors.message ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                    } text-white text-sm outline-none transition-colors placeholder:text-slate-600 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Notice: This is a frontend-only demonstration form. Form validation executes locally in browser.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
