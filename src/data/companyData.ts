export interface CategoryItem {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  highlights: string[];
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
  subtitle: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "BLUE BAHAR TRADING LLC",
  eyebrow: "BLUE BAHAR TRADING LLC",
  heroHeading: "Connecting Dubai to Global Markets",
  heroSubheading: "Seafood & Frozen Products • Import • Export • Trading",
  heroDescription: "Blue Bahar Trading LLC is a Dubai-based trading company focused on seafood, frozen products, import, export and international B2B trading.",
  tagline: "Import • Export • Seafood • Frozen Products • Trading",
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
  locationHighlight: "Dubai, UAE"
};

// ONLY the 5 official client-specified categories (No fake individual product lists)
export const PRODUCT_CATEGORIES: CategoryItem[] = [
  {
    id: "fresh-seafood",
    name: "Fresh Seafood",
    shortDescription: "Chilled fresh ocean catches sourced and handled for commercial seafood trading.",
    fullDescription: "Chilled fresh seafood selection managed under strict temperature logistics from coastal marine harvest directly into Dubai's trade network.",
    image: "/images/products/fresh_seafood.jpg",
    highlights: [
      "Chilled marine catch",
      "Strict chill-chain logistics",
      "B2B commercial wholesale",
      "Dubai trade dispatch"
    ]
  },
  {
    id: "frozen-seafood",
    name: "Frozen Seafood",
    shortDescription: "Premium flash-frozen seafood items preserved for long-term commercial trade.",
    fullDescription: "High-grade frozen seafood preserved at sub-zero temperatures, providing consistent shelf-life and volume availability for international supply.",
    image: "/images/products/frozen_seafood.jpg",
    highlights: [
      "Flash-frozen preservation",
      "Sub-zero storage integrity",
      "Commercial export grade",
      "Container load supply"
    ]
  },
  {
    id: "frozen-food-products",
    name: "Frozen Food Products",
    shortDescription: "Commercial frozen food items tailored for enterprise food supply contracts.",
    fullDescription: "Comprehensive frozen food product lines managed for wholesale commercial distribution and international B2B trade partnerships.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Wholesale frozen supply",
      "Commercial distribution",
      "Temperature-controlled handling",
      "Bulk trade options"
    ]
  },
  {
    id: "marine-products",
    name: "Marine Products",
    shortDescription: "Specialized ocean marine harvest and specialized commercial sea products.",
    fullDescription: "Specialty marine harvest products managed for regional and international trading networks, adhering to strict trade standards.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Specialty ocean harvest",
      "Commercial marine supply",
      "Graded trade quality",
      "International trade routing"
    ]
  },
  {
    id: "bulk-trading",
    name: "Bulk Trading",
    shortDescription: "Wholesale container-load trade management, reefer shipping, and import/export.",
    fullDescription: "Full container load (FCL) and bulk reefer trade operations connecting international suppliers with commercial buyers via Dubai.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "FCL Reefer container trade",
      "Import & Export facilitation",
      "Port-to-port logistics",
      "B2B trade contracts"
    ]
  }
];

export const TRADING_SERVICES: ServiceItem[] = [
  {
    id: "import",
    title: "IMPORT",
    subtitle: "Dubai Trade Gateway Inflow",
    description: "Professional management of ocean and air import shipments entering Dubai's major commercial logistics ports.",
    iconName: "Ship",
    highlights: ["Customs clearance management", "Port handling in Dubai", "Cold chain receipt"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "export",
    title: "EXPORT",
    subtitle: "International Outflow Routing",
    description: "Export operations facilitating the distribution of seafood and frozen commodities from Dubai to global markets.",
    iconName: "Globe",
    highlights: ["Export trade documentation", "Reefer container logistics", "Global shipment routing"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "seafood-trading",
    title: "SEAFOOD TRADING",
    subtitle: "B2B Market Facilitation",
    description: "Commercial seafood trading bridging producers, wholesalers, and international business buyers.",
    iconName: "Anchor",
    highlights: ["Direct B2B procurement", "Commercial volume pricing", "Reliable delivery schedules"],
    image: "/images/products/fresh_seafood.jpg"
  },
  {
    id: "frozen-products",
    title: "FROZEN PRODUCTS",
    subtitle: "Sub-Zero Temperature Logistics",
    description: "Trade solutions focused on frozen food commodities maintaining strict thermal chain continuity.",
    iconName: "Snowflake",
    highlights: ["Sub-zero temperature control", "Frozen inventory management", "Commercial storage handling"],
    image: "/images/products/frozen_seafood.jpg"
  },
  {
    id: "global-sourcing",
    title: "GLOBAL SOURCING",
    subtitle: "Strategic Supply Networks",
    description: "Sourcing capabilities connecting vetted international fisheries and frozen product suppliers.",
    iconName: "Compass",
    highlights: ["Vetted supplier networks", "Market supply stability", "Diverse product availability"],
    image: "/images/hero/dubai_ocean.jpg"
  },
  {
    id: "b2b-supply",
    title: "B2B SUPPLY",
    subtitle: "Commercial Contract Fulfillment",
    description: "Tailored supply agreements designed for enterprise buyers, distributors, and commercial trade partners.",
    iconName: "Building2",
    highlights: ["Enterprise supply contracts", "Wholesale order execution", "Dedicated account support"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  }
];

export const WHY_BLUE_BAHAR: WhyUsItem[] = [
  {
    id: "sourcing",
    title: "Quality-Focused Sourcing",
    description: "We prioritize product integrity through structured sourcing procedures across our supplier network.",
    iconName: "ShieldCheck"
  },
  {
    id: "partnerships",
    title: "Reliable Partnerships",
    description: "Building long-term transparent relationships focused on contract fulfillment and professional service.",
    iconName: "Handshake"
  },
  {
    id: "trading",
    title: "International Trading",
    description: "Commercial expertise in import, export, international documentation, and maritime reefer logistics.",
    iconName: "TrendingUp"
  },
  {
    id: "service",
    title: "Professional Service",
    description: "Dedicated trade support committed to clear communication and responsive enquiry turnaround.",
    iconName: "UserCheck"
  },
  {
    id: "b2b",
    title: "B2B Focus",
    description: "Structured specifically to serve commercial buyers, wholesalers, and institutional trading entities.",
    iconName: "Briefcase"
  },
  {
    id: "dubai",
    title: "Dubai-Based Operations",
    description: "Strategically headquartered in Al Garhoud, Dubai, tapping into premier global logistics corridors.",
    iconName: "MapPin"
  }
];

export const BUSINESS_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "SOURCE",
    subtitle: "Strategic Sourcing",
    description: "Identifying and connecting quality seafood and frozen product supply lines."
  },
  {
    number: "02",
    title: "QUALITY",
    subtitle: "Standard Verification",
    description: "Ensuring cold chain integrity and product standards prior to trade routing."
  },
  {
    number: "03",
    title: "TRADE",
    subtitle: "Import & Export",
    description: "Executing international logistics, customs, and port clearance operations in Dubai."
  },
  {
    number: "04",
    title: "PARTNER",
    subtitle: "Long-Term B2B Supply",
    description: "Delivering reliable, scheduled commercial fulfillment to business buyers worldwide."
  }
];
