import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CredentialStrip } from "@/components/CredentialStrip";
import { CtaStrip } from "@/components/CtaStrip";
import { SERVICES, TESTIMONIALS, WORK, PHONE, PHONE_TEL, BOOK_URL } from "@/lib/site";
import van from "@/assets/van.avif";
import nestLogo from "@/assets/nest-pro-logo.avif";
import {
  Home, Building2, ClipboardCheck, Lightbulb, Cpu, Zap,
  Star, Phone as PhoneIcon,
} from "lucide-react";

const ICONS: Record<string, any> = {
  "domestic-electrical": Home,
  "commercial-electrical": Building2,
  "testing-and-inspecting": ClipboardCheck,
  "outdoor-and-garden-lighting": Lightbulb,
  "smart-home": Cpu,
  "ev-charging-points": Zap,
};

const SERVICE_CTA: Record<string, string> = {
  "domestic-electrical": "See what's covered",
  "commercial-electrical": "Talk to the team",
  "testing-and-inspecting": "Book an inspection",
  "outdoor-and-garden-lighting": "View lighting work",
  "smart-home": "Read the Nest spec",
  "ev-charging-points": "Get a charger quote",
};

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1, 5);

  return (
    <Layout>
      {/* HERO — asymmetric */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 circuit-bg" />
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[680px] rounded-full bg-[#F5C518]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                <span className="h-px w-8 bg-[#F5C518]" />
                Hull · Beverley · Cottingham · Hessle
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.5rem]">
                Hull's trusted electricians.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">
                A small Hull-based team of qualified sparks. Domestic rewires,
                commercial fit-outs, EV chargers and proper Google Nest installs —
                booked in, done right, certified on completion.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#F5C518] px-6 py-3.5 font-display text-base font-bold text-[#0E0E12] transition hover:bg-[#ffd23b]"
                >
                  Get a free quote
                </a>
                <a
                  href={PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3.5 font-display text-base font-semibold text-white transition hover:border-[#F5C518] hover:text-[#F5C518]"
                >
                  <PhoneIcon className="h-4 w-4" /> {PHONE}
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-6 text-sm text-white/55">
                No call-out fee · Free quotes · Same-day response on most jobs
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 border-t border-white/10 pt-7">
                <CredentialStrip items={["napit", "trustmark", "nest", "insured"]} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={van} alt="Hull Power Ltd Google Nest Pro Installer van" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#1c1c28] p-4 shadow-xl sm:block">
                <div className="flex items-center gap-1 text-[#F5C518]">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <div className="mt-1 font-display text-sm font-bold text-white">5.0 average</div>
                <div className="text-[11px] uppercase tracking-wider text-white/50">From local Google reviews</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  <span className="h-px w-8 bg-[#F5C518]" /> What we do
                </div>
                <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  What we do.
                </h2>
              </div>
              <Link to="/services" className="hidden text-sm font-semibold text-white/65 underline-offset-4 hover:text-[#F5C518] hover:underline md:inline">
                All services
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.slug] ?? Zap;
              return (
                <Reveal key={s.slug} delay={i * 40}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex h-full flex-col bg-[#1c1c28] p-7 transition hover:bg-[#252535]"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-[#F5C518]" />
                      <span className="font-mono text-xs text-white/35">0{i + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{s.short}</p>
                    <span className="mt-6 text-sm font-semibold text-[#F5C518] underline-offset-4 group-hover:underline">
                      {SERVICE_CTA[s.slug]} →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-white/10 bg-white/[0.02] py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { k: "Established", v: "2014", sub: "Hull-based, family-run" },
            { k: "Engineers", v: "5", sub: "All NAPIT-registered" },
            { k: "Avg. response", v: "< 24h", sub: "Same day on emergencies" },
            { k: "Google reviews", v: "5.0★", sub: "Across 80+ verified jobs" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">{s.k}</div>
                <div className="mt-2 font-display text-4xl font-extrabold text-white">{s.v}</div>
                <div className="mt-1 text-sm text-white/55">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — featured + list */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
              <span className="h-px w-8 bg-[#F5C518]" /> What customers say
            </div>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <figure className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <div className="font-display text-5xl text-[#F5C518]">"</div>
                <blockquote className="mt-2 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
                  {featured.text}
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <div className="font-display font-bold text-white">{featured.name}</div>
                    <div className="text-sm text-white/55">{featured.area} · {featured.service}</div>
                  </div>
                  <div className="flex gap-1 text-[#F5C518]">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-5" delay={120}>
              <ul className="divide-y divide-white/10 rounded-2xl border border-white/10">
                {rest.map((t, i) => (
                  <li key={i} className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="font-display font-bold text-white">{t.name}</div>
                      <div className="flex gap-0.5 text-[#F5C518]">
                        {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3 w-3 fill-current" />)}
                      </div>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-white/65">"{t.text}"</p>
                    <div className="mt-2 text-[11px] uppercase tracking-wider text-white/40">
                      {t.area} · {t.service}
                    </div>
                  </li>
                ))}
                <li className="p-5">
                  <Link to="/testimonials" className="text-sm font-semibold text-[#F5C518] underline-offset-4 hover:underline">
                    Read all reviews →
                  </Link>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                  <span className="h-px w-8 bg-[#F5C518]" /> Recent jobs
                </div>
                <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  Recent jobs.
                </h2>
              </div>
              <Link to="/work" className="hidden text-sm font-semibold text-white/65 underline-offset-4 hover:text-[#F5C518] hover:underline md:inline">
                Full gallery
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.slice(0, 6).map((w, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="group relative overflow-hidden rounded-xl border border-white/10">
                  <img src={w.img} alt={w.type} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
                    <span className="font-display text-base font-bold text-white">{w.type}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/55">HU{i + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SMART HOME */}
      <section className="relative overflow-hidden border-y border-white/10 py-20 sm:py-24">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <Reveal className="lg:col-span-7">
            <img src={nestLogo} alt="Google Nest Pro Installer Hull" className="h-11 w-auto" style={{ filter: "brightness(1.4)" }} />
            <h2 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              One of Hull's only Google Nest Pros.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              We're certified, factory-trained installers for the full Nest range —
              Learning Thermostats, Hello doorbells, indoor and outdoor cameras and
              Protect smoke detectors. Supplied, fitted and properly integrated.
            </p>
            <Link
              to="/services/$slug"
              params={{ slug: "smart-home" }}
              className="mt-7 inline-flex items-center rounded-md bg-[#F5C518] px-5 py-3 font-display font-bold text-[#0E0E12] hover:bg-[#ffd23b]"
            >
              See smart home services
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaStrip />
    </Layout>
  );
}
