import {
  Factory,
  Wheat,
  FlaskConical,
  Flame,
  Droplets,
  Building2,
  UtensilsCrossed,
  Atom,
  Zap,
  Sprout,
  Package,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Globe2,
  Clock,
  Handshake,
  Smile,
  type LucideIcon,
} from "lucide-react";

export type PageId =
  | "home"
  | "about"
  | "products"
  | "industries"
  | "network"
  | "why-us"
  | "contact";

export const NAV_ITEMS: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "network", label: "Global Network" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "contact", label: "Contact" },
];

/* ---------------- Images ---------------- */
export const IMAGES = {
  hero: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6bfff5ed1d71.jpg",
  heroAlt: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9a619910231e.jpg",
  cargo: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/86945ba1b987.jpg",
  cargoAlt: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8654ac017bef.jpg",
  about: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/736341eaf44d.jpeg",
  aboutAlt: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5debb91d28e4.jpg",
};

/* ---------------- Products ---------------- */
export interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  icon: LucideIcon;
  description: string;
  applications: string[];
  industries: string[];
  quality: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "petrochemical",
    name: "Petrochemical Products",
    tagline: "Feedstock & intermediates for industrial scale",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6c1369dd9112.jpg",
    icon: FlaskConical,
    description:
      "A comprehensive portfolio of petrochemical feedstocks, solvents and intermediates sourced from certified refineries and delivered to manufacturers worldwide with full compliance documentation.",
    applications: [
      "Polymer & plastics production",
      "Solvent formulation",
      "Synthetic fibre manufacturing",
      "Paints, resins & adhesives",
    ],
    industries: ["Chemical Industry", "Manufacturing", "Energy"],
    quality:
      "ISO certified sourcing with full certificate of analysis, REACH compliance and batch traceability on every shipment.",
  },
  {
    id: "sugar",
    name: "Refined Sugar",
    tagline: "ICUMSA-45 & raw grades for global food trade",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/415ec31f076a.jpeg",
    icon: Droplets,
    description:
      "Premium refined white sugar (ICUMSA-45), raw brown sugar and specialty grades packed for wholesale, food processing and retail distribution across regulated international markets.",
    applications: [
      "Food & beverage manufacturing",
      "Pharmaceutical syrups",
      "Bakery & confectionery",
      "Bulk wholesale supply",
    ],
    industries: ["Food Processing", "Agriculture", "Manufacturing"],
    quality:
      "HACCP, HALAL and FDA-aligned standards with moisture and polarisation tests verified pre-shipment.",
  },
  {
    id: "rice",
    name: "Cream in Rice",
    tagline: "Premium milled rice for discerning markets",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d69f65811859.jpg",
    icon: Wheat,
    description:
      "Carefully selected cream-grade milled rice with consistent grain length, low breakage and superior cooking characteristics — supplied in bulk, retail and custom packaging.",
    applications: [
      "Retail & supermarket distribution",
      "Hospitality & HORECA",
      "Food service supply",
      "Institutional procurement",
    ],
    industries: ["Food Processing", "Agriculture", "Industrial Supply"],
    quality:
      "Sortex-cleaned, lab-tested for purity and moisture, with full phytosanitary certification on export.",
  },
  {
    id: "oils",
    name: "Edible Oils",
    tagline: "Refined cooking oils for food & industry",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d8975109ba54.jpg",
    icon: Droplets,
    description:
      "Refined sunflower, soybean and palm oils processed to international food-grade standards, available in flexitanks, drums and PET packaging for food manufacturers and distributors.",
    applications: [
      "Food manufacturing & frying",
      "Bakery & snack production",
      "Biodiesel feedstock",
      "Retail bottling",
    ],
    industries: ["Food Processing", "Manufacturing", "Agriculture"],
    quality:
      "Refined, bleached and deodorised (RBD) grades with peroxide and FFA testing on every consignment.",
  },
  {
    id: "gas",
    name: "Gas Products",
    tagline: "Industrial & energy gas supply chain",
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/17d46b186df9.jpg",
    icon: Flame,
    description:
      "LPG, LNG and industrial gas products supplied with full logistics support — from bulk storage and ISO-tank transport to last-mile delivery for energy and manufacturing clients.",
    applications: [
      "Industrial heating & energy",
      "Petrochemical feedstock",
      "Commercial fuel supply",
      "Manufacturing processes",
    ],
    industries: ["Energy", "Chemical Industry", "Manufacturing"],
    quality:
      "ADR / IMO-compliant handling with certified cylinders, ISO tanks and continuous purity monitoring.",
  },
];

/* ---------------- Industries ---------------- */
export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  servedProducts: string[];
}

export const INDUSTRIES: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description:
      "Reliable raw-material supply that keeps production lines running — from petrochemical feedstocks to industrial oils and gases.",
    servedProducts: ["Petrochemicals", "Gas Products", "Edible Oils"],
  },
  {
    id: "food",
    name: "Food Processing",
    icon: UtensilsCrossed,
    description:
      "Food-grade ingredients delivered with full traceability for manufacturers of beverages, bakery, confectionery and packaged foods.",
    servedProducts: ["Refined Sugar", "Cream Rice", "Edible Oils"],
  },
  {
    id: "chemical",
    name: "Chemical Industry",
    icon: Atom,
    description:
      "Certified solvents, intermediates and gas products that meet stringent purity and compliance requirements for chemical processors.",
    servedProducts: ["Petrochemicals", "Gas Products"],
  },
  {
    id: "energy",
    name: "Energy",
    icon: Zap,
    description:
      "Bulk gas and fuel-grade products supporting energy generation, distribution and the transition to cleaner fuel sources.",
    servedProducts: ["Gas Products", "Petrochemicals"],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: Sprout,
    description:
      "Commodity trading of rice, sugar and edible oils that connects growers and processors to global demand centres.",
    servedProducts: ["Cream Rice", "Refined Sugar", "Edible Oils"],
  },
  {
    id: "supply",
    name: "Industrial Supply",
    icon: Package,
    description:
      "Wholesale and institutional procurement of essential commodities with flexible packaging and dependable lead times.",
    servedProducts: ["All product categories"],
  },
];

/* ---------------- Stats / Counters ---------------- */
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 45, suffix: "+", label: "Countries Served" },
  { value: 1200, suffix: "+", label: "B2B Clients Worldwide" },
  { value: 18, suffix: " yrs", label: "Global Trading Experience" },
  { value: 99, suffix: "%", label: "On-Time Delivery Rate" },
];

/* ---------------- Why Choose Us ---------------- */
export interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const REASONS: Reason[] = [
  {
    title: "Premium Quality",
    description:
      "Every consignment is lab-verified and certified to international standards before it leaves the source.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Supply Chain",
    description:
      "An integrated logistics network across sea, rail and road keeps your deliveries on schedule.",
    icon: Truck,
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct sourcing relationships and volume contracts translate into transparent, market-leading pricing.",
    icon: BadgeDollarSign,
  },
  {
    title: "International Standards",
    description:
      "ISO, HACCP, HALAL and REACH-aligned processes underpin every product and shipment we handle.",
    icon: Globe2,
  },
  {
    title: "Fast Delivery",
    description:
      "Strategic warehousing and trusted carriers shorten lead times even for cross-continental orders.",
    icon: Clock,
  },
  {
    title: "Trusted Partnerships",
    description:
      "Long-standing relationships with refineries, mills and shipping lines give you priority access.",
    icon: Handshake,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Dedicated account managers and responsive support keep your business moving without friction.",
    icon: Smile,
  },
  {
    title: "Global Reach",
    description:
      "From origin to destination, our presence spans six continents with local expertise on the ground.",
    icon: Globe2,
  },
];

/* ---------------- Core Values ---------------- */
export const CORE_VALUES: Reason[] = [
  {
    title: "Integrity",
    description:
      "We honour every commitment and operate with complete transparency across our trading relationships.",
    icon: ShieldCheck,
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in sourcing, quality assurance and customer service.",
    icon: BadgeDollarSign,
  },
  {
    title: "Partnership",
    description:
      "We grow when our clients grow — building long-term value, not one-off transactions.",
    icon: Handshake,
  },
  {
    title: "Global Mindset",
    description:
      "We think across borders, cultures and time zones to connect markets seamlessly.",
    icon: Globe2,
  },
];

/* ---------------- Milestones ---------------- */
export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: "2007",
    title: "Founded",
    description:
      "Safeglobal established as a regional trading house focused on edible commodities.",
  },
  {
    year: "2011",
    title: "Petrochemical Division",
    description:
      "Expanded into petrochemical trading with dedicated sourcing partners in the Gulf.",
  },
  {
    year: "2015",
    title: "Global Network",
    description:
      "Crossed 25 export destinations and opened representative offices on three continents.",
  },
  {
    year: "2019",
    title: "Energy & Gas",
    description:
      "Launched the gas products division to serve energy and industrial clients at scale.",
  },
  {
    year: "2022",
    title: "Digital Supply Chain",
    description:
      "Deployed an integrated logistics and compliance platform across all trade lanes.",
  },
  {
    year: "2025",
    title: "Sustainable Sourcing",
    description:
      "Committed to verified sustainable sourcing and carbon-tracked shipments globally.",
  },
];

/* ---------------- Leadership ---------------- */
export interface Leader {
  name: string;
  role: string;
  initials: string;
  bio: string;
}

export const LEADERS: Leader[] = [
  {
    name: "Adrian Mercer",
    role: "Chief Executive Officer",
    initials: "AM",
    bio: "Two decades of international trading leadership across energy, agriculture and chemicals.",
  },
  {
    name: "Lena Fischer",
    role: "Chief Operating Officer",
    initials: "LF",
    bio: "Architect of our global logistics platform and integrated supply chain operations.",
  },
  {
    name: "Ravi Nair",
    role: "Head of Petrochemicals",
    initials: "RN",
    bio: "Specialist in refining, feedstocks and compliance for industrial chemical markets.",
  },
  {
    name: "Sofia Romano",
    role: "Head of Agri-Commodities",
    initials: "SR",
    bio: "Leads our sugar, rice and edible oils desks with deep origin-market expertise.",
  },
];

/* ---------------- Global Network offices ---------------- */
export interface Office {
  city: string;
  country: string;
  type: "Headquarters" | "Regional Hub" | "Logistics Hub";
  x: number; // percentage on world map
  y: number; // percentage on world map
}

export const OFFICES: Office[] = [
  { city: "Dubai", country: "UAE", type: "Headquarters", x: 62, y: 47 },
  { city: "Rotterdam", country: "Netherlands", type: "Regional Hub", x: 49, y: 33 },
  { city: "Singapore", country: "Singapore", type: "Regional Hub", x: 77, y: 58 },
  { city: "Houston", country: "USA", type: "Regional Hub", x: 22, y: 42 },
  { city: "São Paulo", country: "Brazil", type: "Logistics Hub", x: 33, y: 70 },
  { city: "Mumbai", country: "India", type: "Logistics Hub", x: 68, y: 50 },
  { city: "Shanghai", country: "China", type: "Logistics Hub", x: 80, y: 44 },
  { city: "Lagos", country: "Nigeria", type: "Logistics Hub", x: 49, y: 56 },
];

/* ---------------- Supply chain steps ---------------- */
export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const WORKFLOW: WorkflowStep[] = [
  {
    step: "01",
    title: "Sourcing & Compliance",
    description:
      "We vet suppliers, verify certifications and negotiate volume contracts at origin.",
    icon: Handshake,
  },
  {
    step: "02",
    title: "Quality Assurance",
    description:
      "Pre-shipment inspection, lab testing and documentation ensure specification compliance.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Logistics & Shipping",
    description:
      "Freight booking, ISO-tank and container handling with end-to-end tracking.",
    icon: Truck,
  },
  {
    step: "04",
    title: "Customs & Clearance",
    description:
      "In-house customs expertise manages duties, paperwork and regulatory clearance.",
    icon: Package,
  },
  {
    step: "05",
    title: "Warehousing",
    description:
      "Strategic bonded warehouses provide buffer stock and just-in-time availability.",
    icon: Building2,
  },
  {
    step: "06",
    title: "Last-Mile Delivery",
    description:
      "Distributed delivery to manufacturing sites, ports and retail distribution centres.",
    icon: Globe2,
  },
];

/* ---------------- Contact info ---------------- */
export const CONTACT = {
  address: "Level 24, Trade Centre Tower, Sheikh Zayed Road, Dubai, UAE",
  phone: "+971 4 555 0199",
  email: "trade@safeglobal.com",
  hours: "Sunday – Thursday · 9:00 AM – 6:00 PM (GST)",
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};
