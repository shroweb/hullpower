import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CtaStrip } from "@/components/CtaStrip";
import { CredentialStrip } from "@/components/CredentialStrip";
import { SERVICES, BOOK_URL, PHONE, PHONE_TEL } from "@/lib/site";
import { Check, ArrowRight, Phone as PhoneIcon } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img src={service.hero} alt={service.title} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-[#0E0E12]/85 to-[#0E0E12]/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <Link to="/services" className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">
              ← All services
            </Link>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{service.short}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F5C518] px-6 py-3.5 font-display font-bold text-[#0E0E12] hover:bg-[#ffd23b]">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/25 px-6 py-3.5 font-display font-bold text-white hover:border-[#F5C518] hover:text-[#F5C518]">
                <PhoneIcon className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-3xl font-bold text-white">About this service</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{service.description}</p>

            <h3 className="mt-12 font-display text-2xl font-bold text-white">What's included</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b: string) => (
                <li key={b} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#F5C518]" />
                  <span className="text-white/85">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="sticky top-24 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="font-display text-xl font-bold text-white">Accredited & insured</h3>
              <div className="mt-5">
                <CredentialStrip items={[...(service.badges ?? ["napit", "trustmark"]), "insured"] as any} />
              </div>
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-white/70">Free, no-obligation quotes across Hull & East Yorkshire.</p>
                <a href={BOOK_URL} target="_blank" rel="noreferrer" className="mt-4 block rounded-md bg-[#F5C518] px-4 py-3 text-center font-display font-bold text-[#0E0E12] hover:bg-[#ffd23b]">
                  Book Online
                </a>
                <a href={PHONE_TEL} className="mt-2 block rounded-md border border-white/15 px-4 py-3 text-center font-semibold text-white hover:border-[#F5C518]">
                  Call {PHONE}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaStrip />
    </Layout>
  );
}
