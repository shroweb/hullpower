import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CtaStrip } from "@/components/CtaStrip";
import { SERVICES } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services/")({ component: ServicesIndex });

function ServicesIndex() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">Services</span>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Everything <span className="text-[#F5C518]">electrical.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:mt-5 sm:text-lg">
              From a single socket to a full commercial fit-out — one local team across Hull & East Yorkshire.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:-translate-y-1 hover:border-[#F5C518]/50"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.hero} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#F5C518]">
                    Learn more <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaStrip />
    </Layout>
  );
}
