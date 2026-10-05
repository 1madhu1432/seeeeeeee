import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { GlobalTrade } from './components/GlobalTrade';
import { Contact } from './components/Contact';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import type { ProductItem } from './data/companyData';

export function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<string>('Fresh Seafood');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const handleOpenContact = (productName?: string) => {
    if (productName) {
      setSelectedProductForEnquiry(productName);
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header & Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero 
          onExploreProducts={handleExploreProducts} 
          onContactUs={() => handleOpenContact()} 
        />

        <About />

        <Products 
          onSelectProductForEnquiry={handleOpenContact}
          onViewProductDetails={(prod) => setActiveModalProduct(prod)}
        />

        <Services 
          onEnquire={() => handleOpenContact()}
        />

        <WhyUs />

        <GlobalTrade />

        <Contact 
          initialProductInterest={selectedProductForEnquiry}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Details Modal */}
      <ProductModal 
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onEnquireProduct={handleOpenContact}
      />
    </div>
  );
}

export default App;
