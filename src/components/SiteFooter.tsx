import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { NAV, SCHOOL } from "@/lib/school";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="pointer-events-none absolute -left-20 -top-24 size-72 rounded-full bg-gold/15 blur-3xl animate-blob" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">{SCHOOL.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            A joyful, disciplined pre-primary campus in Mira Road East nurturing children from
            playgroup to senior KG.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold">Explore</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-cream/75 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold">Reach us</p>
          <ul className="mt-4 space-y-3 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{SCHOOL.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-gold" />
              <a href={SCHOOL.phoneHref} className="hover:text-gold">
                {SCHOOL.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${SCHOOL.email}`} className="hover:text-gold">
                {SCHOOL.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-cream/10 px-5 py-5 text-center text-[11px] uppercase tracking-[0.18em] text-cream/45">
        © {new Date().getFullYear()} {SCHOOL.name} · Mira Bhayandar
      </div>
    </footer>
  );
}
