import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle2, User, Briefcase, PhoneCall, AlertCircle, MessageSquare } from 'lucide-react';

interface ContactProps {
  initialProductInterest?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProductInterest }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: initialProductInterest || PRODUCT_CATEGORIES[0].name,
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
    if (!formData.message.trim()) newErrors.message = 'Please enter your message or enquiry details';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productInterest: PRODUCT_CATEGORIES[0].name,
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-28 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMERCIAL ENQUIRIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Contact <span className="ocean-gradient-text">Blue Bahar</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Connect directly with our Dubai trade desk for commercial quotations and international B2B opportunities.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-cyan-500/30 space-y-8 shadow-2xl relative overflow-hidden bg-slate-950">
              
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs font-bold text-cyan-400 mt-2 uppercase tracking-wider">
                  {COMPANY_INFO.businessScope}
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-slate-800">
                
                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telephone</div>
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-base font-bold text-white hover:text-cyan-400 transition-colors block"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Addresses */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</div>
                    {COMPANY_INFO.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Address</div>
                    <div className="text-sm text-slate-200 leading-relaxed font-medium">
                      {COMPANY_INFO.address.office}<br />
                      {COMPANY_INFO.address.building}<br />
                      {COMPANY_INFO.address.area}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Static Frontend Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl bg-slate-950">
              
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                Trade Enquiry Form
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Please submit your commercial interest below. Our Dubai desk will review and respond promptly.
              </p>

              {/* Exact Client Requirement Success Banner */}
              {submitted && (
                <div className="mb-8 p-6 rounded-2xl bg-cyan-950/90 border border-cyan-400/50 text-cyan-100 shadow-2xl space-y-2">
                  <div className="flex items-center gap-3 text-cyan-300 font-bold text-lg">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                    <span>Enquiry Sent</span>
                  </div>
                  <p className="text-base font-bold text-white pl-9">
                    "Thank you for your enquiry. Our team will contact you soon."
                  </p>
                  <div className="pt-2 pl-9">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline uppercase tracking-wider"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900 border ${
                        errors.name ? 'border-red-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white text-sm outline-none transition-colors placeholder:text-slate-600`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900 border ${
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
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900 border ${
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
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                      Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-900 border ${
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
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Product Interest *
                  </label>
                  <select
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-500 text-white text-sm outline-none transition-colors font-medium"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name} className="bg-slate-950 text-white">
                        {cat.name}
                      </option>
                    ))}
                    <option value="General Trading Enquiry" className="bg-slate-950 text-white">
                      General Trading Enquiry / Import Export
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your commercial requirements..."
                    className={`w-full px-4 py-3.5 rounded-xl bg-slate-900 border ${
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
                    className="w-full py-4 rounded-xl font-extrabold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-xl shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>SEND ENQUIRY</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
