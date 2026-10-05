export interface ProductItem {
  id: string;
  name: string;
  category: 'Fresh Seafood' | 'Frozen Seafood' | 'Frozen Food Products' | 'Marine Products' | 'Bulk Trading';
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  packaging: string;
  origin: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const COMPANY_INFO = {
  name: "BLUE BAHAR TRADING LLC",
  tagline: "Connecting Dubai to Global Seafood Markets",
  subTagline: "Quality Seafood & Frozen Products. Global Trading. Trusted Partnerships.",
  businessScope: "IMPORT | EXPORT | SEAFOOD | FROZEN PRODUCTS | TRADING",
  phones: [
    "+971 56 16 52 555",
    "+971 56 26 27 555"
  ],
  emails: [
    "Hari@Bluebahartrading.com",
    "Info@Bluebahartrading.com"
  ],
  address: {
    office: "Office No. 104F, B90",
    building: "HNS Business Center",
    area: "Al Garhoud",
    city: "Dubai",
    country: "UAE",
    full: "Office No. 104F, B90, HNS Business Center, Al Garhoud, Dubai, UAE"
  },
  established: "Dubai, UAE",
  keyHighlights: [
    "Global Seafood Supply Chain",
    "Cold Chain Integrity",
    "Dubai International Hub",
    "Strict Quality Standards",
    "HACCP & ISO Compliant Supply",
    "B2B Wholesale Trading"
  ]
};

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "fresh-seafood",
    name: "Fresh Seafood",
    category: "Fresh Seafood",
    shortDescription: "Daily catches of premium ocean salmon, red snapper, kingfish, sea bass, and wild tiger prawns.",
    fullDescription: "Sourced daily from sustainable ocean vessels and certified coastal fisheries. Our fresh seafood is handled with strict temperature-controlled logistics, guaranteeing maximum peak freshness from ocean to kitchen.",
    image: "/images/products/fresh_seafood.jpg",
    features: [
      "Daily fresh ocean catch",
      "Air-freighted under strict chill chains",
      "HACCP certified processing",
      "Custom gutting, fillet & whole fish options"
    ],
    packaging: "Chilled Iced Thermocol Boxes (10kg, 20kg, 25kg)",
    origin: "Arabian Gulf, Atlantic Ocean, Indian Ocean"
  },
  {
    id: "frozen-seafood",
    name: "Frozen Seafood",
    category: "Frozen Seafood",
    shortDescription: "Individually Quick Frozen (IQF) king crab legs, prawns, squid rings, octopus, and fish fillets.",
    fullDescription: "Flash-frozen at sea or in state-of-the-art coastal processing centers to seal in nutrients and texture. Zero moisture loss, long shelf-life, and consistent commercial grade quality.",
    image: "/images/products/frozen_seafood.jpg",
    features: [
      "IQF (Individually Quick Frozen) technology",
      "Glazing options from 0% to 20%",
      "Long-term stability in cold storage",
      "Premium commercial & retail export grade"
    ],
    packaging: "Master Carton with inner poly-bag (10kg - 25kg)",
    origin: "North Atlantic, South East Asia, South America"
  },
  {
    id: "frozen-food-products",
    name: "Frozen Food Products",
    category: "Frozen Food Products",
    shortDescription: "High-grade commercial frozen food items, frozen poultry, beef cuts, and IQF vegetables for B2B supply.",
    fullDescription: "Extensive selection of commercial frozen food solutions catering to hotel chains, supermarket groups, catering companies, and food distributors across Dubai and international trade routes.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Halal certified meat & poultry lines",
      "IQF flash-frozen vegetables & berries",
      "Full traceability & lot inspection",
      "Custom bulk food processing agreements"
    ],
    packaging: "Export Packaging / Custom OEM branding available",
    origin: "South America, Europe, Australia"
  },
  {
    id: "marine-products",
    name: "Marine Products",
    category: "Marine Products",
    shortDescription: "Exotic and specialty ocean harvest, dried seafood, sea cucumber, fish maws, and gourmet marine delicacies.",
    fullDescription: "Specialized high-value ocean harvest for international seafood traders and premium Asian culinary markets. Rigorously inspected for purity, dryness, and size grading.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Wild-harvested sea cucumber & dried products",
      "Gourmet grade dried fish maws & shellfish",
      "Strict moisture content control",
      "Direct source procurement"
    ],
    packaging: "Sealed export drums & vacuum poly packs",
    origin: "Pacific Ocean, Indian Ocean"
  },
  {
    id: "bulk-trading",
    name: "Bulk Trading",
    category: "Bulk Trading",
    shortDescription: "Container-load wholesale ocean shipping, contract supply agreements, and international reefer logistics.",
    fullDescription: "Full-container-load (FCL) and multi-product consolidated shipping solutions. We manage complete export documentation, bill of lading, health certificates, and customs clearance.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    features: [
      "20ft & 40ft Reefer container shipments",
      "Multi-port logistics & transshipment",
      "Complete export documentation & phytosanitary certs",
      "Flexible B2B contract terms"
    ],
    packaging: "Palletized Reefer Container Loads",
    origin: "Global Hubs via Jebel Ali Port, Dubai"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "import",
    title: "Import Operations",
    subtitle: "Bringing World-Class Seafood into Dubai & GCC",
    description: "End-to-end management of ocean and air import cargo into Dubai. We streamline port clearance, municipality inspections, cold-storage warehousing, and local distribution.",
    iconName: "Ship",
    highlights: ["Jebel Ali Port customs clearance", "Temperature-monitored clearance", "Municipal health compliance", "Dubai cold-chain logistics"]
  },
  {
    id: "export",
    title: "Export Services",
    subtitle: "Global Reach from Dubai Logistics Hub",
    description: "Leveraging Dubai's strategic position to export high-grade seafood and frozen commodities to markets across the Middle East, Asia, Europe, and Africa.",
    iconName: "Globe",
    highlights: ["Global reefer container shipments", "Comprehensive trade documentation", "Health & origin certificates", "Seamless air & ocean freight"]
  },
  {
    id: "seafood-trading",
    title: "Seafood Trading",
    subtitle: "B2B Procurement & Contract Execution",
    description: "Direct bridge between international fisheries and business buyers. We facilitate volume pricing, quality verification, and reliable delivery schedules.",
    iconName: "Anchor",
    highlights: ["Direct fishery procurement", "Volume contract pricing", "Quality verification at origin", "Consistent supply schedules"]
  },
  {
    id: "frozen-products",
    title: "Frozen Products Supply",
    subtitle: "Sub-Zero Cold Chain Infrastructure",
    description: "Specialized frozen food supply chain operating at continuous sub-zero temperatures (-18°C to -25°C) ensuring uncompromised texture, flavor, and food safety.",
    iconName: "Snowflake",
    highlights: ["Continuous sub-zero cold chain", "IQF flash freezing standard", "Warehouse inventory holding", "Zero temperature breakdown"]
  },
  {
    id: "global-sourcing",
    title: "Global Sourcing",
    subtitle: "Vetted International Supplier Network",
    description: "Established partnerships with eco-certified fisheries, aqua-farms, and processing plants across 5 continents to ensure year-round supply stability.",
    iconName: "Compass",
    highlights: ["Certified sustainable fisheries", "Year-round availability", "Diverse species selection", "Strict partner audit standards"]
  },
  {
    id: "b2b-supply",
    title: "B2B Wholesale Supply",
    subtitle: "Custom Solutions for Enterprise Clients",
    description: "Tailored supply contracts for luxury hotel groups, restaurant chains, wholesale distributors, processing factories, and supermarket networks.",
    iconName: "Building2",
    highlights: ["Dedicated account managers", "Custom packaging & portioning", "Flexible credit & contract terms", "Emergency stock replenishment"]
  }
];

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: "quality",
    title: "Quality-Focused Sourcing",
    description: "We work exclusively with certified fisheries and processors enforcing rigorous HACCP, ISO, and EU food safety standards.",
    iconName: "ShieldCheck"
  },
  {
    id: "partnerships",
    title: "Reliable Partnerships",
    description: "Long-term relationships built on transparency, competitive pricing, and strict adherence to contract timelines.",
    iconName: "Handshake"
  },
  {
    id: "trading",
    title: "International Trading",
    description: "Deep expertise in international trade logistics, letter of credit execution, customs regulations, and reefer shipping.",
    iconName: "TrendingUp"
  },
  {
    id: "service",
    title: "Professional Service",
    description: "Dedicated B2B account desk offering prompt communication, rapid quote turnarounds, and personalized trade support.",
    iconName: "UserCheck"
  },
  {
    id: "b2b",
    title: "B2B Focus",
    description: "Structured specifically for wholesale buyers, importers, hotel chains, food distributors, and institutional clients.",
    iconName: "Briefcase"
  },
  {
    id: "dubai",
    title: "Dubai-Based Operations",
    description: "Prime location in Al Garhoud, Dubai, giving direct access to Jebel Ali Port, Dubai World Central, and global logistics corridors.",
    iconName: "MapPin"
  }
];

export const COMPANY_STATS = [
  { label: "Location Hub", value: "Dubai, UAE" },
  { label: "Cold Storage Standard", value: "-25°C Ultra" },
  { label: "B2B Order Capacity", value: "Bulk Containers" },
  { label: "Quality Standards", value: "100% Certified" }
];
