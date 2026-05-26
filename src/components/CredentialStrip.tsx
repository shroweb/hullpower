import { Check } from "lucide-react";

type Variant = "napit" | "trustmark" | "nest" | "ozev" | "insured";

const LABEL: Record<Variant, string> = {
  napit: "NAPIT Approved",
  trustmark: "TrustMark",
  nest: "Nest Pro Installer",
  ozev: "OZEV Approved",
  insured: "£5m Insured",
};

export function CredentialStrip({ items }: { items: Variant[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((k) => (
        <li key={k}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80">
            <Check className="h-3 w-3 text-[#F5C518]" />
            {LABEL[k]}
          </span>
        </li>
      ))}
    </ul>
  );
}
