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
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import type { CategoryItem } from './data/companyData';

export function App() {
  const [selectedCategoryForEnquiry, setSelectedCategoryForEnquiry] = useState<string>('Fresh Seafood');
  const [activeModalCategory, setActiveModalCategory] = useState<CategoryItem | null>(null);

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
      {/* Header & Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Content Flow */}
      <main className="flex-1">
        {/* 1. HERO */}
        <Hero 
          onExploreProducts={handleExploreProducts} 
          onContactUs={() => handleOpenContact()} 
        />

        {/* 2. BUSINESS INTRODUCTION */}
        <About />

        {/* 3. PRODUCT CATEGORIES */}
        <Products 
          onSelectCategoryForEnquiry={handleOpenContact}
          onViewCategoryDetails={(cat) => setActiveModalCategory(cat)}
        />

        {/* 4. TRADING SERVICES */}
        <Services 
          onEnquire={() => handleOpenContact()}
        />

        {/* 5. DUBAI / GLOBAL TRADE */}
        <GlobalTrade />

        {/* 6. WHY BLUE BAHAR */}
        <WhyUs />

        {/* 7. BUSINESS PROCESS */}
        <Process />

        {/* 8. CONTACT CTA */}
        <CtaBand 
          onSendEnquiry={() => handleOpenContact()}
        />

        {/* 9. CONTACT */}
        <Contact 
          initialProductInterest={selectedCategoryForEnquiry}
        />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Category Details Modal */}
      <ProductModal 
        category={activeModalCategory}
        onClose={() => setActiveModalCategory(null)}
        onEnquireCategory={handleOpenContact}
      />
    </div>
  );
}

export default App;
