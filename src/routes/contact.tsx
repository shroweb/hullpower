import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SERVICES, PHONE, PHONE_TEL, EMAIL, BOOK_URL } from "@/lib/site";
import { Phone, Mail, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 circuit-bg opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F5C518]">Get in touch</span>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              Let's <span className="text-[#F5C518]">talk.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">
              Free, no-obligation quotes across Hull & East Yorkshire. We typically respond same day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <Reveal className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-white">Send us an enquiry</h2>
              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl border border-[#F5C518]/30 bg-[#F5C518]/10 p-8 text-center">
                  <Check className="h-10 w-10 text-[#F5C518]" />
                  <div>
                    <div className="font-display text-xl font-bold text-white">Thanks — message received.</div>
                    <p className="mt-2 text-white/75">We'll be in touch shortly. For urgent work please call {PHONE}.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-white/80">Service</label>
                    <select required defaultValue="" className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#F5C518]">
                      <option value="" disabled>Select a service…</option>
                      {SERVICES.map((s) => <option key={s.slug} value={s.slug} className="bg-[#1c1c28]">{s.title}</option>)}
                      <option value="other" className="bg-[#1c1c28]">Something else</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-white/80">Message</label>
                    <textarea required rows={5} className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#F5C518]" placeholder="Tell us a bit about the job…" />
                  </div>
                  <button type="submit" className="sm:col-span-2 rounded-md bg-[#F5C518] px-6 py-3.5 font-display font-bold text-[#0E0E12] hover:bg-[#ffd23b]">
                    Send Enquiry
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={120}>
            <div className="space-y-3">
              <InfoCard Icon={Phone} title="Call us" value={PHONE} href={PHONE_TEL} />
              <InfoCard Icon={Mail} title="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <InfoCard Icon={MapPin} title="Area covered" value="Hull & East Yorkshire" />
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="block rounded-2xl border-2 border-[#F5C518] bg-[#F5C518] px-5 py-4 text-center font-display font-bold text-[#0E0E12] hover:bg-[#ffd23b]">
                Book Online Instantly
              </a>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Hull Power Ltd location"
                  src="https://maps.google.com/maps?q=Hull+Power+Ltd,+75+Lamorna+Ave,+Hull+HU8+8HT&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="h-72 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-semibold text-white/80">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#F5C518]"
      />
    </div>
  );
}

function InfoCard({ Icon, title, value, href }: { Icon: any; title: string; value: string; href?: string }) {
  const Inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#F5C518]/40">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F5C518]/15 text-[#F5C518]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-white/55">{title}</div>
        <div className="font-display text-lg font-bold text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{Inner}</a> : Inner;
}
