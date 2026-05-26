import gardenLighting from "@/assets/garden-lighting.jpg";
import commercialFitout from "@/assets/commercial-fitout.webp";
import nestProducts from "@/assets/nest-products.webp";
import ledDownlights from "@/assets/led-downlights.webp";
import nestVan from "@/assets/nest-van.webp";

export const PHONE = "01482 784935";
export const PHONE_TEL = "tel:+441482784935";
export const EMAIL = "info@hullpower.co.uk";
export const BOOK_URL =
  "https://book.servicem8.com/request_booking?uuid=b609b56b-559b-46de-88a0-1c3881fbe3db";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  hero: string;
  badges?: ("napit" | "trustmark" | "nest" | "ozev")[];
};

export const SERVICES: Service[] = [
  {
    slug: "domestic-electrical",
    title: "Domestic Electrical",
    short: "Full home electrical services from a single socket to complete rewires.",
    description:
      "Whether you're upgrading a tired consumer unit, rewiring a Victorian terrace, or just need an extra socket in the right place, our domestic team works clean, on time, and to the latest 18th Edition standards.",
    bullets: [
      "Full and partial rewires",
      "Sockets, switches & lighting",
      "Kitchen wiring & appliance circuits",
      "Consumer unit / fuse board upgrades",
      "Fault finding & emergency callouts",
      "Indoor & security lighting",
      "EV charging point installation",
    ],
    hero: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "trustmark"],
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical",
    short: "Reliable commercial installs and maintenance across Hull & East Yorkshire.",
    description:
      "From shop fits and office refurbishments to ongoing maintenance contracts, we keep your business powered and compliant with minimal disruption.",
    bullets: [
      "Commercial installations & refits",
      "PAT testing",
      "Planned maintenance contracts",
      "Shop fits & retail lighting",
      "Office & workspace power",
      "Emergency lighting compliance",
    ],
    hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "trustmark"],
  },
  {
    slug: "testing-and-inspecting",
    title: "Testing & Inspecting",
    short: "EICR reports, PAT testing and certification you can rely on.",
    description:
      "Independent, thorough inspections by qualified engineers. We issue certificates on completion and explain every recommendation in plain English.",
    bullets: [
      "EICR / Periodic Inspection Reports",
      "PAT testing for any size of estate",
      "Landlord electrical safety certificates",
      "Certificates issued on completion",
      "Detailed remedial reporting",
    ],
    hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "trustmark"],
  },
  {
    slug: "outdoor-and-garden-lighting",
    title: "Outdoor & Garden Lighting",
    short: "Transform your outdoor space with bespoke garden lighting design.",
    description:
      "Highlight the features that matter, light the paths you use, and add weatherproof power where you need it — designed and installed to last through every East Yorkshire winter.",
    bullets: [
      "Garden & landscape lighting design",
      "Outdoor weatherproof sockets",
      "PIR security floodlights",
      "Festoon & feature lighting",
      "Pond, patio & decking lighting",
    ],
    hero: "https://images.unsplash.com/photo-1558618048-fbd3e4c8df3b?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit"],
  },
  {
    slug: "smart-home",
    title: "Smart Home (Nest & Hive)",
    short: "Google Nest Pro installers — smart homes done properly.",
    description:
      "As certified Google Nest Pro installers we supply, configure and fully integrate Nest and Hive products, so the tech actually works the way it should from day one.",
    bullets: [
      "Nest Learning Thermostat",
      "Nest Hello video doorbell",
      "Nest indoor & outdoor cameras",
      "Nest Protect smoke & CO detectors",
      "Hive heating & smart lighting",
      "Multi-zone heating control",
    ],
    hero: nestVan,
    badges: ["nest", "napit"],
  },
  {
    slug: "ev-charging-points",
    title: "EV Charging Points",
    short: "OZEV-approved home & workplace EV charger installations.",
    description:
      "From 7kW home wallboxes to multi-bay workplace installations, we'll specify the right charger, install it safely and register it for any grants you're entitled to.",
    bullets: [
      "Home EV charger installations",
      "Workplace & fleet charging",
      "OZEV approved installer",
      "Load balancing & smart tariffs",
      "DNO notifications handled",
    ],
    hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "ozev"],
  },
];

export const WORK = [
  { img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80", type: "Consumer Unit Upgrade" },
  { img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80", type: "EV Charger Install" },
  { img: gardenLighting, type: "Garden Lighting" },
  { img: nestProducts, type: "Nest Smart Home" },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80", type: "EICR Inspection" },
  { img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1000&q=80", type: "Full Rewire" },
  { img: ledDownlights, type: "LED Lighting" },
  { img: commercialFitout, type: "Office Fit-Out" },
  { img: nestVan, type: "Nest Pro Install" },
];

export const TESTIMONIALS = [
  {
    name: "Amy Bray",
    area: "Hull",
    text: "Scott came to set up our Nest doorbell. We were really impressed with the service — prompt communication from Chantelle via email, and Scott was really helpful and kindly took the time to explain all the functions of the Nest app too. We will definitely use Hull Power Ltd again.",
    service: "Nest Doorbell",
  },
  {
    name: "Alex Wilson",
    area: "Hull",
    text: "Scott carried out an EICR inspection on our property. He was very polite and professional. Scott explained what he was doing throughout the process and he carried out a very thorough inspection. Chantelle provided excellent communication throughout.",
    service: "EICR",
  },
  {
    name: "Karl Alliban",
    area: "Hull",
    text: "An excellent service from Scott from Hull Power. I'm typically not very trusting of tradesmen as I watched too many episodes of Rogue Traders in the noughties. However, I'm pleased to report that Scott is a normal, hard-working and thoroughly decent bloke.",
    service: "General Electrical",
  },
  {
    name: "Jonathan Townend",
    area: "Hull",
    text: "Contacted Hull Power regarding replacement of a bathroom extractor fan. Their communication was excellent and they advised the best course of action throughout the whole process.",
    service: "Electrical",
  },
  {
    name: "John Cooke",
    area: "Hull",
    text: "We had some LED lights fitted to the side of our stairway to create a softer lighting for this area. This was the first time Scott had done this and he did a fantastic job. Chantelle is always a phone call or a message away.",
    service: "LED Lighting",
  },
];
