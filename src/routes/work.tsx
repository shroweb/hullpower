import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CtaStrip } from "@/components/CtaStrip";
import { WORK } from "@/lib/site";

export const Route = createFileRoute("/work")({ component: Work });

function Work() {
  const [filter, setFilter] = useState<string>("All");
  const types = useMemo(() => ["All", ...Array.from(new Set(WORK.map((w) => w.type)))], []);
  const items = filter === "All" ? WORK : WORK.filter((w) => w.type === filter);

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">Portfolio</span>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Recent <span className="text-[#F5C518]">work.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              A sample of recent jobs across Hull & East Yorkshire. Filter by type.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  filter === t
                    ? "border-[#F5C518] bg-[#F5C518] text-[#0E0E12]"
                    : "border-white/15 text-white/75 hover:border-white/40 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((w, i) => (
              <Reveal key={`${w.type}-${i}`} delay={i * 40}>
                <div className="group relative overflow-hidden rounded-xl border border-white/10">
                  <img src={w.img} alt={w.type} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md bg-[#F5C518] px-2.5 py-1 text-xs font-bold text-[#0E0E12]">
                    {w.type}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaStrip />
    </Layout>
  );
}
