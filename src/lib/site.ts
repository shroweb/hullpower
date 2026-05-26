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
    hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "ozev"],
  },
];

export const WORK = [
  { img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80", type: "Consumer Unit Upgrade" },
  { img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1000&q=80", type: "EV Charger Install" },
  { img: "https://images.unsplash.com/photo-1558618048-fbd3e4c8df3b?auto=format&fit=crop&w=1000&q=80", type: "Garden Lighting" },
  { img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80", type: "Nest Thermostat" },
  { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80", type: "EICR Inspection" },
  { img: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1000&q=80", type: "Full Rewire" },
  { img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80", type: "Security Lighting" },
  { img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80", type: "Office Fit-Out" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80", type: "Smart Doorbell" },
];

export const TESTIMONIALS = [
  {
    name: "Janet M.",
    area: "Cottingham",
    text: "Had them rewire our 1930s semi last spring — bit of a big job but they were done in three days, worked around us being in the house the whole time and left everywhere clean. Certificate came through same evening. Wouldn't hesitate.",
    service: "Full Rewire",
  },
  {
    name: "Steve H.",
    area: "Hessle",
    text: "Got a Zappi charger put in for the Tesla. Craig came out same week, sorted it in a few hours and walked me through the app and off-peak tariffs before he left. Dead easy from start to finish.",
    service: "EV Charger",
  },
  {
    name: "Louise B.",
    area: "Beverley",
    text: "They fitted a Nest doorbell, two outdoor cameras and a Protect in the kitchen. All linked up properly and they showed us how to use everything on the phone before they left. Very neat cable runs too — not a mess in sight.",
    service: "Smart Home",
  },
  {
    name: "Tony R.",
    area: "Anlaby",
    text: "Trip kept going on our board late on a Tuesday night. Rang up, back to me in 20 minutes and round first thing Wednesday. Loose neutral in the garage socket — found it, fixed it, good as new. Reasonable price for an emergency job.",
    service: "Fault Finding",
  },
  {
    name: "Karen S.",
    area: "Willerby",
    text: "Needed an EICR for the rental on Beverley Road before new tenants moved in. Booked Monday, done Wednesday, cert through Thursday. No fuss, fair price.",
    service: "EICR",
  },
  {
    name: "Phil D.",
    area: "Kirk Ella",
    text: "The garden lighting looks brilliant — they ran cables under the lawn for the pathway lights and mounted spots along the back fence. Did exactly what we discussed, no mess, and they were back within the week to finish off.",
    service: "Garden Lighting",
  },
];
