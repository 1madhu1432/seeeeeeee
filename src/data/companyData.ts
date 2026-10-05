export interface CategoryItem {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  layoutType: 'large-featured-top' | 'medium-grid' | 'large-featured-bottom';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
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
  heroHeading: "Connecting Dubai to Global Markets",
  heroSubheading: "Import • Export • Seafood • Frozen Products • Trading",
  heroDescription: "Blue Bahar Trading LLC is a Dubai-based trading company focused on seafood, frozen products, import, export and international trading.",
  tagline: "IMPORT • EXPORT • SEAFOOD • FROZEN PRODUCTS • TRADING",
  
  aboutHeading: "Dubai-Based. Globally Connected.",
  aboutP1: "Blue Bahar Trading LLC is based in Al Garhoud, Dubai and specializes in import, export, seafood, frozen products and trading.",
  aboutP2: "With a focus on professional business relationships and international trading opportunities, Blue Bahar connects quality products and buyers across markets.",

  phones: [
    "+971 56 16 52 555",
    "+971 56 26 27 555"
  ],
  emails: [
    "Hari@Bluebahartrading.com",
    "Info@Bluebahartrading.com"
  ],
  website: "www.Bluebahartrading.com",
  address: "Office No. 104F, B90, H N S Business Center, Al Garhoud, Dubai, UAE",
  locationHighlight: "Dubai, UAE"
};

// Real Client Seafood Photos Showcase
export const CLIENT_PRODUCT_GALLERY = [
  {
    id: "gallery-1",
    title: "Peeled Prawns (21/25 Count)",
    category: "SEAFOOD",
    description: "Premium processed peeled raw shrimp packed for wholesale commercial trade.",
    image: "/images/products/peeled_shrimp_21_25.jpg"
  },
  {
    id: "gallery-2",
    title: "White Fish Fillets",
    category: "FROZEN PRODUCTS",
    description: "Cleaned, flash-frozen white fish fillets sorted for commercial distribution.",
    image: "/images/products/white_fish_fillets.jpg"
  },
  {
    id: "gallery-3",
    title: "Whole Gutted Fish",
    category: "SEAFOOD",
    description: "Commercial whole gutted fish packed in cold chain crates for B2B supply.",
    image: "/images/products/whole_gutted_fish.jpg"
  },
  {
    id: "gallery-4",
    title: "Fresh Jumbo Tiger Prawns",
    category: "SEAFOOD",
    description: "Sourced high-grade jumbo prawns for regional and export markets.",
    image: "/images/products/jumbo_tiger_prawns.jpg"
  }
];

// ONLY the 6 official client-specified product categories as mandated in prompt
export const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    id: "seafood",
    name: "SEAFOOD",
    shortDescription: "Seafood products for international B2B trading and supply requirements.",
    image: "/images/products/peeled_shrimp_21_25.jpg",
    layoutType: "large-featured-top"
  },
  {
    id: "chicken",
    name: "CHICKEN",
    shortDescription: "Chicken products for commercial trading and business supply requirements.",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=1200&q=80",
    layoutType: "medium-grid"
  },
  {
    id: "mutton",
    name: "MUTTON",
    shortDescription: "Mutton products for B2B trading and supply requirements.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80",
    layoutType: "medium-grid"
  },
  {
    id: "spices",
    name: "SPICES",
    shortDescription: "Spices and food products for commercial trading requirements.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    layoutType: "medium-grid"
  },
  {
    id: "vegetables",
    name: "VEGETABLES",
    shortDescription: "Vegetable products for business and trading requirements.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    layoutType: "medium-grid"
  },
  {
    id: "frozen-products",
    name: "FROZEN PRODUCTS",
    shortDescription: "Frozen food products for international trading and business requirements.",
    image: "/images/products/white_fish_fillets.jpg",
    layoutType: "large-featured-bottom"
  }
];

// Exact 6 Services as mandated in prompt
export const TRADING_SERVICES: ServiceItem[] = [
  {
    id: "import",
    title: "IMPORT",
    subtitle: "Dubai Gateway Inflow",
    description: "Ocean and air cargo imports passing through Dubai's international commercial trading hub.",
    iconName: "Ship",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "export",
    title: "EXPORT",
    subtitle: "Global Outbound Logistics",
    description: "Export operations delivering food and seafood commodities from Dubai to global markets.",
    iconName: "Globe",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "seafood-trading",
    title: "SEAFOOD TRADING",
    subtitle: "B2B Market Facilitation",
    description: "International B2B seafood trading bridging producers, commercial buyers, and wholesalers.",
    iconName: "Waves",
    image: "/images/products/peeled_shrimp_21_25.jpg"
  },
  {
    id: "frozen-products",
    title: "FROZEN PRODUCTS",
    subtitle: "Cold Chain Supply",
    description: "Specialized frozen food product trading maintained under strict temperature controls.",
    iconName: "Snowflake",
    image: "/images/products/white_fish_fillets.jpg"
  },
  {
    id: "global-sourcing",
    title: "GLOBAL SOURCING",
    subtitle: "Strategic Supply Networks",
    description: "Connecting quality international suppliers and commercial food product requirements.",
    iconName: "Compass",
    image: "/images/hero/dubai_ocean.jpg"
  },
  {
    id: "b2b-supply",
    title: "B2B SUPPLY",
    subtitle: "Commercial Partnerships",
    description: "Reliable commercial food supply solutions designed for business partners and trade entities.",
    iconName: "Building2",
    image: "/images/products/whole_gutted_fish.jpg"
  }
];

// Exact Why Us points as mandated in prompt
export const WHY_BLUE_BAHAR: WhyUsItem[] = [
  {
    id: "quality",
    title: "QUALITY-FOCUSED TRADING",
    description: "Commitment to handling and supplying quality food and seafood products across international trade channels.",
    iconName: "ShieldCheck"
  },
  {
    id: "relationships",
    title: "RELIABLE BUSINESS RELATIONSHIPS",
    description: "Fostering long-term, professional business relationships built on trust, integrity, and performance.",
    iconName: "Handshake"
  },
  {
    id: "trade",
    title: "INTERNATIONAL IMPORT & EXPORT",
    description: "Comprehensive import and export trade capabilities linking producers with international commercial markets.",
    iconName: "TrendingUp"
  },
  {
    id: "service",
    title: "PROFESSIONAL SERVICE",
    description: "Dedicated focus on customer satisfaction, transparent trade processes, and responsive commercial service.",
    iconName: "UserCheck"
  },
  {
    id: "b2b",
    title: "B2B TRADING",
    description: "Tailored B2B trading operations structured for wholesale commercial buyers and trade clients.",
    iconName: "Briefcase"
  },
  {
    id: "dubai",
    title: "DUBAI-BASED OPERATIONS",
    description: "Operating from Al Garhoud, Dubai, one of the world's most strategic international maritime trading hubs.",
    iconName: "MapPin"
  }
];

// Exact Process Steps as mandated in prompt Section 15
export const BUSINESS_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "SOURCE",
    description: "Identifying and establishing reliable food and seafood supply opportunities."
  },
  {
    number: "02",
    title: "SELECT",
    description: "Carefully selecting products that meet international B2B trading standards."
  },
  {
    number: "03",
    title: "TRADE",
    description: "Managing seamless import, export, and international trade logistics through Dubai."
  },
  {
    number: "04",
    title: "DELIVER",
    description: "Executing timely commercial delivery to our business partners and trade networks."
  }
];
