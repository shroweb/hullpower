import { BOOK_URL, PHONE, PHONE_TEL } from "@/lib/site";

export function CtaStrip() {
  return (
    <section className="bg-[#F5C518] py-14 text-[#0E0E12]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to Book?
          </h2>
          <p className="mt-2 max-w-2xl text-lg font-medium">
            Get your free, no-obligation quote today. Local sparkies, no call-out fee.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-[#0E0E12] px-6 py-3.5 text-center font-display text-base font-bold text-white transition hover:bg-black"
          >
            Book Online
          </a>
          <a
            href={PHONE_TEL}
            className="rounded-md border-2 border-[#0E0E12] px-6 py-3.5 text-center font-display text-base font-bold transition hover:bg-[#0E0E12] hover:text-white"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
