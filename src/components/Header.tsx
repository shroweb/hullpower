import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { PHONE, PHONE_TEL, BOOK_URL } from "@/lib/site";
import logo from "@/assets/logo.avif";
import { Menu, X, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Recent Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E0E12]/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Hull Power Ltd home">
          <img
            src={logo}
            alt="Hull Power Ltd"
            className="h-11 w-auto brightness-125 contrast-110"
            style={{ filter: "brightness(1.55) contrast(1.05)" }}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-[#F5C518]" }}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={PHONE_TEL} className="flex items-center gap-2 text-sm font-semibold text-white hover:text-[#F5C518]">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#F5C518] px-4 py-2 text-sm font-bold text-[#0E0E12] transition hover:bg-[#ffd23b]"
          >
            Get a Quote
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0E0E12] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-white/85 hover:bg-white/5 hover:text-[#F5C518]"
              >
                {n.label}
              </Link>
            ))}
            <a href={PHONE_TEL} className="mt-2 rounded-md border border-white/15 px-3 py-2 text-center text-sm font-semibold text-white">
              Call {PHONE}
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-[#F5C518] px-3 py-2 text-center text-sm font-bold text-[#0E0E12]"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
