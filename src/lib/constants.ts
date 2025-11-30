import { Phone, MapPin, Mail, Clock, ShieldCheck, Award, Wind, CheckCircle, Factory, Flame, Fan, ThermometerSun, GraduationCap, Zap, FileSearch, ThumbsUp, Wrench, Hammer, Lightbulb, Microscope, Thermometer, Snowflake, Droplets } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Top Rated Air Duct Cleaning",
  phone: "770-741-0615",
  phoneLink: "tel:7707410615",
  email: "info@topratedairduct.com",
  address: "1880 West Oak Parkway, Unit 104, Office 104, Marietta GA 30062",
  serviceArea: "Atlanta, Marietta, and surrounding 60-mile radius",
};

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/', type: 'internal' },
  { name: 'Services', href: '/services', type: 'internal' },
  { name: 'Why Us', href: '/why-us', type: 'internal' },
  { name: 'Service Area', href: '/service-area', type: 'internal' },
  { name: 'Contact', href: '/contact', type: 'internal' },
];

export const SERVICES_LIST = [
  {
    title: "Residential Air Duct Cleaning",
    description: "Remove dust, allergens, and pet dander to improve your family's respiratory health.",
    icon: Wind,
  },
  {
    title: "Commercial Duct Cleaning",
    description: "OSHA-compliant HVAC cleaning for offices, warehouses, and retail spaces.",
    icon: Award,
  },
  {
    title: "Dryer Vent Cleaning",
    description: "Prevent fire hazards and improve dryer efficiency with professional lint removal.",
    icon: CheckCircle,
  },
  {
    title: "HVAC System Cleaning",
    description: "Complete cleaning of coils, blowers, and plenums to extend system life.",
    icon: ShieldCheck,
  },
];

export const DETAILED_SERVICES = [
  {
    id: "residential",
    title: "Residential Air Duct Cleaning",
    focus: "Health Benefits & Air Quality",
    detail: "Our comprehensive residential service focuses on allergen reduction and better air quality for your home. We thoroughly clean the entire system, including all supply and return vents as well as the main trunk lines, ensuring a safe environment for your family.",
    icon: Wind,
    link: "/air-duct-cleaning"
  },
  {
    id: "commercial",
    title: "Commercial Air Duct Cleaning",
    focus: "Compliance & Efficiency",
    detail: "Tailored services for offices, clinics, and retail spaces. We help businesses maintain compliance, reduce sick days by improving indoor air quality, and boost the energy efficiency of large-scale HVAC systems.",
    icon: Factory,
    link: "/commercial-services"
  },
  {
    id: "dryer-vent",
    title: "Dryer Vent Cleaning",
    focus: "Fire Prevention & Energy Savings",
    detail: "A crucial safety service designed to prevent fire hazards and save energy. We expertly remove lint build-up from the entire vent run—from the dryer to the exterior termination—restoring proper airflow and safety.",
    icon: Flame,
    link: "/dryer-vent-cleaning"
  },
  {
    id: "hvac-install",
    title: "New HVAC System Installation",
    focus: "Efficiency & Comfort Upgrade",
    detail: "Time for a replacement? We install high-performance AC and furnace systems tailored to your home's specific needs. Upgrade to a modern, energy-efficient unit and lower your monthly utility bills immediately.",
    icon: Snowflake,
    link: "/hvac-installation"
  },
  {
    id: "duct-repair",
    title: "Air Duct Installation & Repair",
    focus: "Efficiency & Airflow Restoration",
    detail: "Damaged or leaky ducts can cost you hundreds in wasted energy. We offer expert repair, sealing, and complete ductwork installation services to ensure your HVAC system delivers air exactly where it's needed.",
    icon: Wrench,
    link: "/duct-installation-repair"
  },
  {
    id: "dryer-vent-install",
    title: "Dryer Vent Installation & Repair",
    focus: "Code Compliance & Safety",
    detail: "Improperly installed dryer vents are a major fire hazard. We install rigid, code-compliant venting systems, repair damaged lines, and re-route vents for maximum efficiency and safety in your home.",
    icon: Hammer,
    link: "/dryer-vent-installation"
  },
  {
    id: "waterproofing",
    title: "Basement & Crawlspace Waterproofing",
    focus: "Moisture Control & Air Quality",
    detail: "40% of the air you breathe comes from your crawlspace. We provide comprehensive encapsulation and waterproofing solutions to stop moisture, mold, and humidity from ruining your home's air quality.",
    icon: Droplets,
    link: "/crawlspace-waterproofing"
  },
  {
    id: "uv-light",
    title: "HVAC UV Light Installation",
    focus: "Germ & Mold Elimination",
    detail: "Stop mold and bacteria at the source. We install hospital-grade UV-C light systems directly in your HVAC unit to continuously sterilize cooling coils and purify the air circulating through your home.",
    icon: Lightbulb,
    link: "/uv-light-installation"
  },
  {
    id: "insulation",
    title: "Blown-In Attic Insulation",
    focus: "Energy Efficiency & Comfort",
    detail: "Stop energy loss through your roof. We install premium blown-in insulation to increase your home's R-value, keeping you cooler in summer and warmer in winter while lowering utility bills.",
    icon: Thermometer,
    link: "/blown-in-insulation"
  },
  {
    id: "mold-testing",
    title: "Professional Mold Testing",
    focus: "Identification & Lab Analysis",
    detail: "Concerned about indoor air quality? We provide professional air and surface sampling to identify spore counts and mold types. Get the hard data you need to make informed decisions about remediation.",
    icon: Microscope,
    link: "/mold-testing"
  },
];

export const WHY_US_FEATURES = [
  {
    id: "experts",
    title: "Certified Experts",
    description: "Our technicians undergo rigorous training and background checks. We are NADCA certified, ensuring we adhere to the highest industry standards for HVAC system cleaning.",
    icon: GraduationCap,
  },
  {
    id: "tech",
    title: "Superior Technology",
    description: "We utilize industrial-grade HEPA filtration vacuum systems. This negative pressure technology ensures that dust and debris are completely removed from your home, not just recirculated into the air.",
    icon: Zap,
  },
  {
    id: "pricing",
    title: "Transparent Pricing",
    description: "Honesty is our policy. We provide guaranteed free, no-obligation estimates upfront. You'll never encounter hidden fees, trip charges, or bait-and-switch tactics.",
    icon: FileSearch,
  },
  {
    id: "guarantee",
    title: "Our Guarantee",
    description: "We stand behind our work with a 100% Satisfaction Guarantee. If you aren't happy with the service, we will return to make it right, no questions asked.",
    icon: ThumbsUp,
  },
];

export const SERVICE_CITIES = [
  "Atlanta", "Marietta", "Alpharetta", "Roswell",
  "Sandy Springs", "Dunwoody", "Smyrna", "Kennesaw",
  "Woodstock", "Acworth", "Lawrenceville", "Duluth",
  "Johns Creek", "Norcross", "Decatur", "Peachtree City",
  "Fayetteville", "Douglasville", "Stone Mountain", "Suwanee",
  "Buford", "Cumming", "Canton", "Milton"
];
