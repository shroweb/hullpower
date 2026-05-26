import trustmarkLogo from "@/assets/logos/trustmark.png";
import napitLogo from "@/assets/logos/napit.png";
import nestProLogo from "@/assets/logos/nest-pro.png";

type Variant = "napit" | "trustmark" | "nest" | "ozev" | "insured";

const LOGOS: Partial<Record<Variant, { src: string; alt: string; className: string }>> = {
  napit:     { src: napitLogo,     alt: "NAPIT Registered Installer",      className: "h-8 w-auto" },
  trustmark: { src: trustmarkLogo, alt: "TrustMark Government Endorsed",   className: "h-7 w-auto" },
  nest:      { src: nestProLogo,   alt: "Google Nest Certified Professional", className: "h-8 w-auto" },
};

const TEXT_FALLBACK: Partial<Record<Variant, string>> = {
  ozev:    "OZEV Approved",
  insured: "£5m Insured",
};

export function CredentialStrip({ items }: { items: Variant[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-6">
      {items.map((k, i) => {
        const logo = LOGOS[k];
        const text = TEXT_FALLBACK[k];
        return (
          <li key={k} className={`flex items-center ${i > 0 ? "border-l border-white/15 pl-6" : ""}`}>
            {logo ? (
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.className} opacity-80 brightness-0 invert`}
              />
            ) : (
              <span className="text-xs font-semibold text-white/70">{text}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
