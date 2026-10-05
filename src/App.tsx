import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { GlobalTrade } from './components/GlobalTrade';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { CtaBand } from './components/CtaBand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedCategoryForEnquiry, setSelectedCategoryForEnquiry] = useState<string>('Seafood');

  const handleOpenContact = (categoryName?: string) => {
    if (categoryName) {
      setSelectedCategoryForEnquiry(categoryName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* 1. Header & Sticky Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <Hero 
          onExploreProducts={handleExploreProducts} 
          onContactUs={() => handleOpenContact()} 
        />

        {/* ABOUT SECTION */}
        <About />

        {/* PRODUCTS SECTION */}
        <Products 
          onSelectCategoryForEnquiry={handleOpenContact}
        />

        {/* SERVICES SECTION */}
        <Services 
          onEnquire={() => handleOpenContact()}
        />

        {/* GLOBAL TRADE SECTION */}
        <GlobalTrade />

        {/* WHY US SECTION */}
        <WhyUs />

        {/* BUSINESS PROCESS SECTION */}
        <Process />

        {/* CTA BAND */}
        <CtaBand 
          onSendEnquiry={() => handleOpenContact()}
        />

        {/* CONTACT SECTION */}
        <Contact 
          initialProductInterest={selectedCategoryForEnquiry}
        />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
