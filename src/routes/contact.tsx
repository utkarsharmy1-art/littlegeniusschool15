import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Little Genius International School, Mira Road East" },
      {
        name: "description",
        content:
          "Find Little Genius International School at Satsang 1 Building, Poonam Sagar Complex, Mira Road East, Mira Bhayandar 401107 — phone, email, office hours and map.",
      },
      { property: "og:title", content: "Contact Little Genius International School" },
      {
        property: "og:description",
        content: "Address, phone, email, office hours and Google Map directions.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Find us on Mira Road East">
        We are on the ground floor of Satsang 1 Building in Poonam Sagar Complex — a short walk from
        the main road.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <MapPin className="size-5 text-gold" />
              <h2 className="mt-3 text-lg">Address</h2>
              <address className="mt-2 text-sm not-italic leading-relaxed text-muted-foreground">
                {SCHOOL.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={SCHOOL.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-accent px-5 py-2.5 text-xs font-bold text-accent-foreground"
              >
                Get directions
              </a>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Phone className="size-5 text-gold" />
              <h2 className="mt-3 text-lg">Phone &amp; email</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                <a href={SCHOOL.phoneHref} className="hover:text-foreground">
                  {SCHOOL.phone}
                </a>
              </p>
              <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-foreground">
                  {SCHOOL.email}
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Clock className="size-5 text-gold" />
              <h2 className="mt-3 text-lg">Office hours</h2>
              <p className="mt-2 text-sm text-muted-foreground">{SCHOOL.hours}</p>
              <p className="mt-1 text-sm text-muted-foreground">Sundays &amp; holidays closed</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-border shadow-lift">
              <iframe
                title={`Map showing ${SCHOOL.name}`}
                src={SCHOOL.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full md:h-full md:min-h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
