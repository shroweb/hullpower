import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CtaStrip } from "@/components/CtaStrip";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({ component: Blog });

const POSTS = [
  {
    title: "EICR Explained: What Hull Landlords Need to Know in 2026",
    excerpt: "A plain-English guide to Electrical Installation Condition Reports — what they cost, who needs one, and how long they last.",
    date: "May 2026",
    tag: "Testing",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Choosing the Right EV Charger for Your Home",
    excerpt: "7kW vs 22kW, tethered vs untethered, OZEV grants — everything you need to know before you book your install.",
    date: "April 2026",
    tag: "EV Charging",
    img: "https://images.unsplash.com/photo-1633307014450-bc8e4dc88f70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Five Smart-Home Upgrades That Are Actually Worth It",
    excerpt: "A Nest Pro installer's honest take on which smart products earn their keep — and which ones gather dust.",
    date: "March 2026",
    tag: "Smart Home",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  },
];

function Blog() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">Blog</span>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Tips from the <span className="text-[#F5C518]">tools.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Plain-English advice on rewires, EV chargers, smart home and everything in between.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {POSTS.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#F5C518]/40">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-[#F5C518]/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-[#F5C518]">{p.tag}</span>
                    <span className="text-white/55">{p.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-white/65">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#F5C518]">
                    Read article <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaStrip />
    </Layout>
  );
}
