import { Link } from "@tanstack/react-router";
import { PHONE, PHONE_TEL, EMAIL, BOOK_URL, SERVICES } from "@/lib/site";
import logo from "@/assets/logo.avif";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#14141e] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <img
            src={logo}
            alt="Hull Power Ltd"
            className="h-12 w-auto"
            style={{ filter: "brightness(1.65) contrast(1.08)" }}
          />
          <p className="mt-3 text-sm">
            Hull's trusted electricians. NAPIT approved, Trustmark certified,
            Google Nest Pro installers. Covering Hull & East Yorkshire.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-[#F5C518]">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/work" className="hover:text-[#F5C518]">Recent Work</Link></li>
            <li><Link to="/testimonials" className="hover:text-[#F5C518]">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-[#F5C518]">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-[#F5C518]">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={PHONE_TEL} className="hover:text-[#F5C518]">{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-[#F5C518]">{EMAIL}</a></li>
            <li>Hull, East Yorkshire</li>
            <li>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="mt-2 inline-block rounded-md bg-[#F5C518] px-3 py-2 text-sm font-bold text-[#0E0E12]">
                Book Online
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Hull Power Ltd · NAPIT Approved · Trustmark Certified · Google Nest Pro
      </div>
    </footer>
  );
}
