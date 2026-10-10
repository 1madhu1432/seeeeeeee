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

// 4 Official Product Categories with real images
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "seafood-products",
    name: "Seafood Products",
    shortDescription: "Finest quality wild-caught and aquaculture harvest processed to strict international cold-chain export benchmarks.",
    image: "/images/products/fresh_seafood.jpg",
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
    image: "/images/products/real_poultry.jpg",
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
    image: "/images/products/real_meat.jpg",
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
    image: "/images/products/real_vegetables.jpg",
    items: [
      "Fresh Vegetables",
      "Spices",
      "Food Commodities"
    ]
  }
];

export const REAL_CLIENT_GALLERY = [
  {
    id: "gallery-1",
    title: "Peeled Prawns (21/25 Count)",
    category: "Seafood Products",
    description: "Premium processed peeled raw shrimp packed for wholesale commercial trade.",
    image: "/images/products/peeled_shrimp_21_25.jpg"
  },
  {
    id: "gallery-2",
    title: "White Fish Fillets",
    category: "Seafood Products",
    description: "Cleaned, flash-frozen white fish fillets sorted for commercial distribution.",
    image: "/images/products/white_fish_fillets.jpg"
  },
  {
    id: "gallery-3",
    title: "Whole Gutted Fish",
    category: "Seafood Products",
    description: "Commercial whole gutted fish packed in cold chain crates for B2B supply.",
    image: "/images/products/whole_gutted_fish.jpg"
  },
  {
    id: "gallery-4",
    title: "Fresh Jumbo Tiger Prawns",
    category: "Seafood Products",
    description: "Sourced high-grade jumbo prawns for regional and export markets.",
    image: "/images/products/jumbo_tiger_prawns.jpg"
  }
];

// 5 Official Services
export const TRADING_SERVICES: ServiceItem[] = [
  {
    id: "import-services",
    title: "Import Services",
    description: "Global sourcing and procurement of quality food products.",
    iconName: "Ship"
  },
  {
    id: "export-services",
    title: "Export Services",
    description: "Reliable export solutions to international markets.",
    iconName: "Globe"
  },
  {
    id: "wholesale-distribution",
    title: "Wholesale Distribution",
    description: "Bulk supply solutions for distributors and retailers.",
    iconName: "Boxes"
  },
  {
    id: "retail-supply",
    title: "Retail Supply",
    description: "Serving supermarkets, restaurants, and food service businesses.",
    iconName: "Store"
  },
  {
    id: "logistics-documentation",
    title: "Logistics & Documentation",
    description: "Complete support for shipping, customs clearance, health certificates, and export documentation.",
    iconName: "FileCheck2",
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

// Process Steps
export const BUSINESS_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "SOURCE",
    description: "Identifying and establishing reliable food and seafood supply opportunities globally."
  },
  {
    number: "02",
    title: "SELECT",
    description: "Carefully inspecting products that meet stringent UAE and international commercial standards."
  },
  {
    number: "03",
    title: "TRADE",
    description: "Managing seamless import, export, cold-chain handling, and documentation logistics."
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Executing timely commercial delivery to our wholesale, retail, and international trade networks."
  }
];
