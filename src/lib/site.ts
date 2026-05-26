import gardenLighting from "@/assets/garden-lighting.jpg";
import commercialFitout from "@/assets/commercial-fitout.webp";
import nestProducts from "@/assets/nest-products.webp";
import ledDownlights from "@/assets/led-downlights.webp";
import nestVan from "@/assets/nest-van.webp";
import nestThermostatCopper from "@/assets/nest-thermostat-copper.avif";
import electricianInstall from "@/assets/electrician-install.avif";
import nestDoorbell from "@/assets/nest-doorbell.avif";
import nestThermostatSilver from "@/assets/nest-thermostat-silver.avif";
import hiveThermostat from "@/assets/hive-thermostat.avif";
import commercialLedInstall from "@/assets/commercial-led-install.avif";
import outdoorEntranceLighting from "@/assets/outdoor-entrance-lighting.avif";
import nestCamFloodlight from "@/assets/nest-cam-floodlight.avif";

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
  faq?: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "domestic-electrical",
    title: "Domestic Electrical",
    short: "Full home electrical services from a single socket to complete rewires.",
    description:
      "Whether you're upgrading a tired consumer unit, rewiring a Victorian terrace, or just need extra sockets in the right places, our domestic team works cleanly, on time, and to the latest 18th Edition wiring standards. All work is NAPIT certified — you'll get your certificate on completion, not a week later.",
    bullets: [
      "Full and partial rewires",
      "Sockets, switches & lighting",
      "Kitchen wiring & appliance circuits",
      "Consumer unit / fuse board upgrades",
      "Fault finding & emergency callouts",
      "LED downlights & feature lighting",
      "Loft, garage & outbuilding circuits",
      "EV charging point installation",
    ],
    hero: ledDownlights,
    badges: ["napit", "trustmark"],
    faq: [
      {
        q: "How long does a full rewire take?",
        a: "A typical 3-bed house takes 3–5 days. We work cleanly, protect your floors and furniture, and restore everything before we leave.",
      },
      {
        q: "Do I need to move out during a rewire?",
        a: "Not usually. We work room by room and keep disruption to a minimum. For a full rewire we'd discuss the best approach at the quote stage.",
      },
      {
        q: "What certificate do I get at the end?",
        a: "All notifiable work gets an NAPIT Electrical Installation Certificate, issued directly to you on completion. This is what mortgage lenders, insurers and buyers ask to see.",
      },
      {
        q: "Do you cover emergency callouts?",
        a: "Yes. If you've lost power, tripped a breaker you can't reset, or have a suspected fault, call us on 01482 784935 and we'll get someone out as soon as possible.",
      },
    ],
  },
  {
    slug: "commercial-electrical",
    title: "Commercial Electrical",
    short: "Reliable commercial installs and maintenance across Hull & East Yorkshire.",
    description:
      "From shop fits and office refurbishments to ongoing maintenance contracts, we keep your business powered and compliant. We understand downtime costs money — so we plan carefully, work efficiently, and offer out-of-hours slots when you need them.",
    bullets: [
      "Commercial installations & fit-outs",
      "Three-phase power & distribution",
      "Shop fits & retail lighting",
      "Office & workspace power",
      "Emergency lighting compliance",
      "Planned maintenance contracts",
      "PAT testing",
      "Fire alarm & security circuits",
    ],
    hero: commercialFitout,
    badges: ["napit", "trustmark"],
    faq: [
      {
        q: "Can you work outside business hours?",
        a: "Yes. We regularly work evenings and weekends to minimise disruption to your staff and customers. Just let us know what works for you.",
      },
      {
        q: "Do you offer maintenance contracts?",
        a: "Yes. A planned maintenance contract means we inspect and test your installation on a schedule, keeping you compliant and avoiding emergency call-out costs.",
      },
      {
        q: "Are you able to handle large commercial projects?",
        a: "We handle everything from a single office to multi-floor fit-outs. Get in touch and we'll put together a detailed, fixed-price quote.",
      },
    ],
  },
  {
    slug: "testing-and-inspecting",
    title: "Testing & Inspecting",
    short: "EICR reports, PAT testing and certification you can rely on.",
    description:
      "Independent, thorough inspections by qualified engineers. We test to BS 7671 and issue your certificate on the day — not days later. Every recommendation is explained in plain English, not just a list of codes. If remedial work is needed, we can carry it out too.",
    bullets: [
      "EICR / Periodic Inspection Reports",
      "Landlord electrical safety certificates",
      "PAT testing for any size of estate",
      "Pre-purchase / pre-let inspections",
      "Certificates issued same day",
      "Detailed remedial reporting",
      "Commercial & industrial testing",
      "Remedial works carried out",
    ],
    hero: electricianInstall,
    badges: ["napit", "trustmark"],
    faq: [
      {
        q: "How often does a rental property need an EICR?",
        a: "Every 5 years, or at each change of tenancy — whichever comes first. It's a legal requirement for all private landlords in England.",
      },
      {
        q: "What do the EICR codes mean?",
        a: "C1 means danger present — the circuit must be made safe immediately. C2 means potentially dangerous and should be rectified urgently. C3 is an improvement recommended but not immediately required. We explain each one and advise on the best remedy.",
      },
      {
        q: "Can you carry out the remedial work too?",
        a: "Yes. Once we've issued the report, we can quote for any C1 or C2 items and carry out the work, issuing a new certificate on completion.",
      },
      {
        q: "How long does an EICR take?",
        a: "A standard 3-bed house typically takes 3–4 hours. Commercial premises vary depending on size and number of circuits.",
      },
    ],
  },
  {
    slug: "outdoor-and-garden-lighting",
    title: "Outdoor & Garden Lighting",
    short: "Transform your outdoor space with bespoke garden lighting design.",
    description:
      "Good garden lighting changes how you use your outdoor space — evenings on the patio, paths you can actually see, plants and features that look great after dark. We design and install to last through every East Yorkshire winter, with proper weatherproof fittings and armoured cabling.",
    bullets: [
      "Garden & landscape lighting design",
      "LED spotlights, uplights & path lights",
      "Outdoor weatherproof sockets",
      "PIR security floodlights",
      "Festoon & bistro string lighting",
      "Pond, patio & decking lighting",
      "Armoured cable installation",
      "Smart outdoor lighting control",
    ],
    hero: gardenLighting,
    badges: ["napit"],
    faq: [
      {
        q: "How do you power garden lighting?",
        a: "We run an armoured cable from your consumer unit or install a dedicated outdoor circuit with an RCD-protected spur. Everything is rated for outdoor use and buried safely.",
      },
      {
        q: "Can I control my garden lights remotely?",
        a: "Yes. We can integrate your outdoor lighting with smart switches and timers, or connect it to your Nest or Hive system if you have one.",
      },
      {
        q: "What IP rating do outdoor fittings need?",
        a: "For most garden situations we use IP65 rated fittings as a minimum. For anything near ponds or water features we use IP68. We'll spec the right rating for the location.",
      },
    ],
  },
  {
    slug: "smart-home",
    title: "Smart Home (Nest & Hive)",
    short: "Google Nest Pro installers — smart homes done properly.",
    description:
      "We're one of a small number of certified Google Nest Pro installers in the Hull area. That means we don't just fit the hardware and leave — we configure everything, connect it to your Wi-Fi, set up the app, and walk you through how it all works. Same for Hive. Properly done, from the start.",
    bullets: [
      "Nest Learning Thermostat",
      "Nest Hello video doorbell",
      "Nest indoor & outdoor cameras",
      "Nest Protect smoke & CO detectors",
      "Hive heating & smart lighting",
      "Multi-zone heating control",
      "App setup & full walkthrough",
      "Integration with existing systems",
    ],
    hero: nestVan,
    badges: ["nest", "napit"],
    faq: [
      {
        q: "What's included in a Nest installation?",
        a: "Supply of the hardware, full installation, wiring, configuration, Wi-Fi pairing and a complete app walkthrough. We don't leave until you know how to use it.",
      },
      {
        q: "Will Nest work with my existing boiler?",
        a: "In most cases yes. We check compatibility during the quote. If your boiler needs a Heat Link or different wiring, we'll advise and include it in the price.",
      },
      {
        q: "Can you install just the doorbell without other Nest products?",
        a: "Absolutely. You can start with a single product and add more later. Each Nest device works standalone or as part of a connected system.",
      },
      {
        q: "Do you supply the hardware or do I buy it?",
        a: "We can supply everything — often at trade prices — or we can install hardware you've already purchased. Either way works.",
      },
    ],
  },
  {
    slug: "ev-charging-points",
    title: "EV Charging Points",
    short: "OZEV-approved home & workplace EV charger installations.",
    description:
      "We're OZEV-approved installers for home and commercial EV charging. Whether you need a single 7kW wallbox at home or a multi-bay setup for a fleet or car park, we'll specify the right charger, handle the DNO notification, and register any grant entitlement on your behalf.",
    bullets: [
      "Home 7kW wallbox installation",
      "Workplace & fleet charging",
      "Multi-bay car park systems",
      "Smart chargers with app control",
      "Load balancing & solar integration",
      "DNO notifications handled",
      "OZEV grant registration",
      "Tethered & untethered options",
    ],
    hero: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1600&q=80",
    badges: ["napit", "ozev"],
    faq: [
      {
        q: "Is there a government grant for home charging?",
        a: "The EV chargepoint grant currently covers residents of flats, rented properties and those with existing chargepoints. We'll check your eligibility and handle the paperwork — you won't need to deal with it.",
      },
      {
        q: "What's the difference between a 3.6kW and 7kW charger?",
        a: "A 7kW charger is roughly twice as fast — most EVs will charge overnight from near-empty. For most homes we recommend 7kW. We'll match the spec to your car, consumer unit and usage.",
      },
      {
        q: "Do I need planning permission?",
        a: "In most cases, no. Domestic EV charger installations usually fall within permitted development rights. We'll flag anything unusual when we survey.",
      },
      {
        q: "Can I charge two cars from one charger?",
        a: "With a load-balancing setup, yes. We can install systems that share available capacity between multiple charge points without overloading your supply.",
      },
    ],
  },
];

export const WORK = [
  { img: nestThermostatCopper, type: "Nest Thermostat" },
  { img: electricianInstall, type: "Doorbell Installation" },
  { img: nestDoorbell, type: "Nest Doorbell" },
  { img: nestThermostatSilver, type: "Smart Home Setup" },
  { img: hiveThermostat, type: "Hive Smart Heating" },
  { img: commercialLedInstall, type: "Commercial Lighting" },
  { img: outdoorEntranceLighting, type: "Outdoor Lighting" },
  { img: nestCamFloodlight, type: "Security Camera" },
  { img: gardenLighting, type: "Garden Lighting" },
  { img: nestProducts, type: "Nest Products" },
  { img: ledDownlights, type: "LED Downlights" },
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
