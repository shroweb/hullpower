export function TrustBadge({ kind, className = "" }: { kind: "napit" | "trustmark" | "nest" | "insured" | "ozev"; className?: string }) {
  const map: Record<string, { label: string; sub: string }> = {
    napit: { label: "NAPIT", sub: "Approved" },
    trustmark: { label: "Trustmark", sub: "Certified" },
    nest: { label: "Google Nest", sub: "Pro Installer" },
    insured: { label: "Fully", sub: "Insured" },
    ozev: { label: "OZEV", sub: "Approved" },
  };
  const v = map[kind];
  return (
    <div className={`inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 ${className}`}>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5C518] font-display text-xs font-black text-[#0E0E12]">
        {v.label[0]}
      </span>
      <div className="text-left leading-tight">
        <div className="font-display text-sm font-bold text-white">{v.label}</div>
        <div className="text-[10px] uppercase tracking-wider text-white/60">{v.sub}</div>
      </div>
    </div>
  );
}
