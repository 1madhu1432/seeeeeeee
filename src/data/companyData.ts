export interface ProductCategory {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  image?: string;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  filterTag: 'harvest' | 'packaging' | 'processing' | 'fish' | 'logistics';
}

export const COMPANY_INFO = {
  name: "BLUE BAHAR TRADING LLC",
  arabicName: "بلو بحر للتجارة ذ.م.م",
  managingDirector: "Hari Krishna Singh K",
  eyebrow: "BLUE BAHAR TRADING LLC",
  heroHeading: "Connecting Global Markets with Premium Food Products",
  heroSubheading: "Seafood • Chicken • Mutton • Spices • Vegetables • Food Products",
  heroDescription: "Leading Import, Export & General Trading Company in UAE specializing in Seafood, Chicken, Mutton, Spices, Vegetables, and Food Products.",
  tagline: "Your Trusted Partner in Global Food Trading",
  
  aboutHeading: "Who We Are",
  aboutWhoWeAre: "BLUE BAHAR TRADING LLC is a UAE-based trading company specializing in the import, export, wholesale, and retail distribution of premium food products. We serve customers across the Middle East, Asia, and international markets with a commitment to quality, reliability, and customer satisfaction.",
  vision: "To become a trusted global trading partner in food commodities and seafood distribution.",
  mission: "To deliver high-quality products through efficient sourcing, logistics, and customer-focused service.",

  phones: [
    "+971 56 262 7555"
  ],
  emails: [
    "Info@bluebahartrading.com"
  ],
  website: "www.bluebahartrading.com",
  address: "Office No: 104F-B90, H N S Business Center, Al Garhoud, Dubai, UAE",
  locationHighlight: "Al Garhoud, Dubai, UAE"
};

// Official Product Categories
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "seafood-products",
    name: "Seafood Products",
    shortDescription: "Finest quality wild-caught and aquaculture harvest processed to strict international cold-chain export benchmarks.",
    image: "/images/products/giant_tiger_prawns.jpg",
    items: [
      "Frozen Vannamei Shrimp",
      "Black Tiger Shrimp",
      "Head-On Shrimp",
      "Headless Shrimp",
      "PD Shrimp",
      "PDTO Shrimp",
      "Various Seafood Products"
    ]
  },
  {
    id: "poultry-products",
    name: "Poultry Products",
    shortDescription: "Premium quality frozen poultry and processed cuts sourced from certified international producers.",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1200&q=80",
    items: [
      "Frozen Chicken",
      "Chicken Parts",
      "Processed Poultry Products"
    ]
  },
  {
    id: "meat-products",
    name: "Meat Products",
    shortDescription: "Grade-A frozen mutton, succulent lamb products, and prime butchery meat cuts tailored for commercial wholesale.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80",
    items: [
      "Frozen Mutton",
      "Lamb Products",
      "Meat Cuts"
    ]
  },
  {
    id: "agricultural-products",
    name: "Agricultural Products",
    shortDescription: "Freshly harvested produce, aromatic whole and ground spices, and essential bulk food commodities.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    items: [
      "Fresh Vegetables",
      "Spices",
      "Food Commodities"
    ]
  }
];

// Comprehensive Authentic Operational & Product Specifications Gallery (16 Real Photos)
export const CLIENT_SHOWCASE_GALLERY: GalleryItem[] = [
  {
    id: "showcase-harvest-bulk",
    title: "Large-Scale Pond Harvest & Crate Sorting",
    category: "POND HARVEST",
    filterTag: "harvest",
    description: "Multi-ton fresh shrimp harvest netted and sorted at origin aquaculture ponds ready for cold-chain transit.",
    image: "/images/products/bulk_field_harvest.jpg"
  },
  {
    id: "showcase-harvest-macro",
    title: "Fresh Head-On Vannamei Shrimp",
    category: "LIVE HARVEST",
    filterTag: "harvest",
    description: "Pristine translucent shell quality and intact whiskers demonstrating immediate pond-to-crate freshness.",
    image: "/images/products/vannamei_macro.jpg"
  },
  {
    id: "showcase-harvest-giant",
    title: "Giant Black Tiger Prawns",
    category: "PREMIUM HARVEST",
    filterTag: "harvest",
    description: "Freshly harvested jumbo grade black tiger prawns exhibiting firm muscle texture and vibrant natural luster.",
    image: "/images/products/giant_tiger_prawns.jpg"
  },
  {
    id: "showcase-harvest-wide",
    title: "High-Volume Field Crating Operation",
    category: "ORIGIN SOURCING",
    filterTag: "harvest",
    description: "Dozens of color-coded harvest crates organized directly by pond banks for rapid sorting and temperature control.",
    image: "/images/products/wide_field_harvest.jpg"
  },
  {
    id: "showcase-shrimp-pd",
    title: "Peeled & Deveined (PD) Raw Shrimp (21/25)",
    category: "SEAFOOD SPECIFICATIONS",
    filterTag: "processing",
    description: "Uniformly sized 21/25 count raw peeled and deveined shrimp ready for commercial foodservice and B2B trade.",
    image: "/images/products/peeled_shrimp_21_25.jpg"
  },
  {
    id: "showcase-shrimp-frozen",
    title: "Flash-Frozen Peeled Prawns (21/25)",
    category: "COLD STORAGE COMMODITIES",
    filterTag: "processing",
    description: "Individually quick-frozen (IQF) peeled prawns maintaining optimum moisture retention and delicate flavor profile.",
    image: "/images/products/frozen_prawns_21_25.jpg"
  },
  {
    id: "showcase-fish-fillets",
    title: "Cleaned White Fish Fillets",
    category: "FISH COMMODITIES",
    filterTag: "fish",
    description: "Skinless and boneless white fish fillets calibrated on grading tables for international supermarket supply.",
    image: "/images/products/white_fish_fillets.jpg"
  },
  {
    id: "showcase-fish-whole",
    title: "Whole Gutted & Cleaned Fish",
    category: "FISH COMMODITIES",
    filterTag: "fish",
    description: "Commercially cleaned and gutted whole fish sorted in hygienic cold storage bins for wholesale distribution.",
    image: "/images/products/whole_gutted_fish.jpg"
  },
  {
    id: "showcase-packaging-pouches",
    title: "Blue Bahar Branded Retail Pouches",
    category: "RETAIL PACKAGING",
    filterTag: "packaging",
    description: "Official Blue Bahar branded 500g frozen Jumbo Shrimps and Calamari Rings pouches for retail distribution.",
    image: "/images/products/blue_bahar_packaging.jpg"
  },
  {
    id: "showcase-packaging-box",
    title: "Export Boxed Jumbo Tiger Shrimps",
    category: "WHOLESALE EXPORT",
    filterTag: "packaging",
    description: "Uniformly graded head-on jumbo black tiger shrimp packaged in pristine export boxes for international food markets.",
    image: "/images/products/jumbo_tiger_box.jpg"
  },
  {
    id: "showcase-processing-sterile",
    title: "Hygienic Cleanroom Shrimp Sorting",
    category: "QUALITY CONTROL",
    filterTag: "processing",
    description: "Trained operators in sanitized protective gear inspecting, sorting, and grading fresh shrimp on stainless steel lines.",
    image: "/images/products/sterile_shrimp_processing.jpg"
  },
  {
    id: "showcase-processing-conveyor",
    title: "Automated Conveyor Packing Line",
    category: "FACTORY OPERATIONS",
    filterTag: "processing",
    description: "High-speed automated checkpoints ensuring precise weight and freshness standards prior to cold-chain sealing.",
    image: "/images/products/shrimp_processing_conveyor.jpg"
  },
  {
    id: "showcase-logistics-warehouse",
    title: "Cold Storage Master Carton Logistics",
    category: "WAREHOUSING",
    filterTag: "logistics",
    description: "Inspected and sealed master cartons stacked in state-of-the-art cold-storage bays awaiting container dispatch.",
    image: "/images/products/cold_storage_warehouse.jpg"
  },
  {
    id: "showcase-logistics-airfreight",
    title: "Air Freight & Live Seafood Shipping",
    category: "COLD CHAIN LOGISTICS",
    filterTag: "logistics",
    description: "Insulated temperature-controlled Blue Bahar containers ensuring live marine cargo reaches overseas destinations safely.",
    image: "/images/about/blue_bahar_air_freight.jpg"
  },
  {
    id: "showcase-logistics-executive",
    title: "Executive Audit with UAE Partners",
    category: "EXECUTIVE AUDIT",
    filterTag: "logistics",
    description: "Blue Bahar management reviewing fresh seafood inventory with Emirati trade partners at Dubai logistics facility.",
    image: "/images/about/executive_inspection.jpg"
  },
  {
    id: "showcase-commodities-cuts",
    title: "Premium Frozen Shellfish & Cuts",
    category: "EXPORT COMMODITIES",
    filterTag: "fish",
    description: "Cold water lobster tails, sea scallops, jumbo cooked shrimp, calamari rings, and crab legs for wholesale dispatch.",
    image: "/images/products/premium_frozen_seafood.jpg"
  }
];

// 5 Official Services
export const TRADING_SERVICES: ServiceItem[] = [
  {
    id: "import-services",
    title: "Import Services",
    description: "Global sourcing and procurement of quality food products.",
    iconName: "Ship",
    image: "/images/about/market_procurement_inspection.jpg"
  },
  {
    id: "export-services",
    title: "Export Services",
    description: "Reliable export solutions to international markets.",
    iconName: "Globe",
    image: "/images/about/blue_bahar_air_freight.jpg"
  },
  {
    id: "wholesale-distribution",
    title: "Wholesale Distribution",
    description: "Bulk supply solutions for distributors and retailers.",
    iconName: "Boxes",
    image: "/images/products/cold_storage_warehouse.jpg"
  },
  {
    id: "retail-supply",
    title: "Retail Supply",
    description: "Serving supermarkets, restaurants, and food service businesses.",
    iconName: "Store",
    image: "/images/products/blue_bahar_packaging.jpg"
  },
  {
    id: "logistics-documentation",
    title: "Logistics & Documentation",
    description: "Complete support for shipping, customs clearance, health certificates, and export documentation.",
    iconName: "FileCheck2",
    image: "/images/products/cold_storage_warehouse.jpg",
    features: [
      "Shipping",
      "Customs Clearance",
      "Health Certificates",
      "Export Documentation"
    ]
  }
];

// Why Choose Blue Bahar (6 core items)
export const WHY_BLUE_BAHAR: WhyUsItem[] = [
  {
    id: "quality",
    title: "Premium Quality Products",
    description: "Rigorous quality control and temperature compliance across all perishable and ambient food supplies.",
    iconName: "ShieldCheck"
  },
  {
    id: "global-network",
    title: "Global Supply Network",
    description: "Expansive direct producer linkages across key exporting regions in Asia, the Americas, and Africa.",
    iconName: "Globe"
  },
  {
    id: "pricing",
    title: "Competitive Pricing",
    description: "High-volume direct trading models ensuring attractive, highly competitive commercial market pricing.",
    iconName: "TrendingDown"
  },
  {
    id: "delivery",
    title: "Reliable Delivery",
    description: "Dependable multi-modal ocean and air freight schedules ensuring on-time delivery without disruption.",
    iconName: "Truck"
  },
  {
    id: "service",
    title: "Professional Service",
    description: "Dedicated account managers providing transparent trade execution, paperwork, and responsive communication.",
    iconName: "UserCheck"
  },
  {
    id: "uae-expertise",
    title: "UAE-Based Trading Expertise",
    description: "Deep regional knowledge and operational headquarters positioned at the heart of Dubai's maritime trade hub.",
    iconName: "MapPin"
  }
];

// 4 Structured Process Steps with Authentic Photos
export const BUSINESS_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "SOURCE",
    description: "Direct pond harvest & auditing trusted ocean aquaculture origins across world markets.",
    image: "/images/products/bulk_field_harvest.jpg"
  },
  {
    number: "02",
    title: "SELECT",
    description: "Strict quality grading and cleanroom inspection meeting stringent international export standards.",
    image: "/images/products/sterile_shrimp_processing.jpg"
  },
  {
    number: "03",
    title: "TRADE",
    description: "Automated precision packaging, sizing, and temperature-controlled cold chain handling.",
    image: "/images/products/shrimp_processing_conveyor.jpg"
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Multi-modal air freight, ocean reefer shipping, and timely delivery to international partners.",
    image: "/images/about/blue_bahar_air_freight.jpg"
  }
];
