type Variant = "napit" | "trustmark" | "nest" | "ozev" | "insured";

const COPY: Record<Variant, { line1: string; line2: string }> = {
  napit: { line1: "NAPIT", line2: "Registered Installer · 18th Ed." },
  trustmark: { line1: "TrustMark", line2: "Government Endorsed Quality" },
  nest: { line1: "Google Nest Pro", line2: "Certified Installer" },
  ozev: { line1: "OZEV", line2: "Approved EV Installer" },
  insured: { line1: "£5m Public Liability", line2: "Fully Insured" },
};

export function CredentialStrip({ items }: { items: Variant[] }) {
  return (
    <ul className="flex flex-wrap items-stretch gap-x-8 gap-y-4">
      {items.map((k, i) => (
        <li
          key={k}
          className={`flex flex-col leading-tight ${i > 0 ? "border-l border-white/10 pl-8" : ""}`}
        >
          <span className="font-display text-base font-bold text-white">{COPY[k].line1}</span>
          <span className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-white/55">
            {COPY[k].line2}
          </span>
        </li>
      ))}
    </ul>
  );
}
