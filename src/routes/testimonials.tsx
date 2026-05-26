import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CtaStrip } from "@/components/CtaStrip";
import { TESTIMONIALS } from "@/lib/site";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({ component: Testimonials });

function Testimonials() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">Reviews</span>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Real reviews from <span className="text-[#F5C518]">real Hull homes.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              We're proud of our reputation. Here's what our customers across Hull & East Yorkshire have to say.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex gap-1 text-[#F5C518]">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 flex-1 text-white/80">"{t.text}"</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="font-display font-bold text-white">{t.name}</div>
                    <div className="text-xs text-white/55">{t.area}</div>
                  </div>
                  <span className="rounded-full bg-[#F5C518]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#F5C518]">
                    {t.service}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaStrip />
    </Layout>
  );
}
