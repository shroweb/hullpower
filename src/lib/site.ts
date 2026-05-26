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
    hero: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1600&q=80",
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
    hero: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
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
    hero: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80",
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
    hero: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
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
    hero: "https://images.unsplash.com/photo-1633307014450-bc8e4dc88f70?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "ozev"],
  },
];

export const WORK = [
  { img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80", type: "Kitchen Rewire" },
  { img: "https://images.unsplash.com/photo-1633307014450-bc8e4dc88f70?auto=format&fit=crop&w=1000&q=80", type: "EV Charger Install" },
  { img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80", type: "Garden Lighting" },
  { img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80", type: "Nest Thermostat" },
  { img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80", type: "EICR Testing" },
  { img: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&w=1000&q=80", type: "Consumer Unit" },
  { img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80", type: "Security Lighting" },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80", type: "Office Fit-Out" },
  { img: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1000&q=80", type: "Smart Doorbell" },
];

export const TESTIMONIALS = [
  { name: "Sarah W.", area: "Cottingham", text: "Booked a full kitchen rewire — turned up when they said, left the place spotless. Couldn't recommend Hull Power more.", service: "Kitchen Rewire" },
  { name: "James P.", area: "Hessle", text: "Had our EV charger fitted in a morning. Friendly, tidy work and explained the app properly. Brilliant service.", service: "EV Charger" },
  { name: "Emma L.", area: "Beverley", text: "Got a Nest doorbell and two cameras installed. Works flawlessly, looks like it came from the factory that way.", service: "Smart Home" },
  { name: "Mark T.", area: "Anlaby", text: "Needed an emergency callout after a fuse board failure. With us within the hour and sorted same day. Top blokes.", service: "Fault Finding" },
  { name: "Rachael B.", area: "Willerby", text: "Used Hull Power for the EICR on our rental — fast, fair priced and the certificate came through next day.", service: "EICR" },
  { name: "David K.", area: "Kirk Ella", text: "Garden lighting install made the back garden look 10x better. They actually designed it, didn't just stick lights in.", service: "Garden Lighting" },
];
