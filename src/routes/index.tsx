import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Bus,
  FlaskConical,
  Music,
  Palette,
  ShieldCheck,
  Trophy,
  Sparkles,
} from "lucide-react";

import classroom from "@/assets/classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";
import { Counter, Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Little Genius International School, Mira Road East | Admissions Open",
      },
      {
        name: "description",
        content:
          "Little Genius International School & English High School in Poonam Sagar Complex, Mira Road East — pre-primary to senior school with labs, library, sports and caring teachers.",
      },
      {
        property: "og:title",
        content: "Little Genius International School, Mira Road East",
      },
      {
        property: "og:description",
        content:
          "A joyful K-12 campus in Mira Bhayandar. Explore academics, facilities, campus life and admissions.",
      },
    ],
  }),
  component: Home,
});

const marquee = [
  "Pre-Primary",
  "Primary",
  "Middle School",
  "Senior School",
  "Science Labs",
  "Library",
  "Sports",
  "Music & Dance",
  "Art Studio",
  "Smart Classrooms",
];

const facilities = [
  {
    icon: FlaskConical,
    title: "Science & Computer Labs",
    text: "Hands-on experiments and coding basics from middle school onward.",
  },
  {
    icon: BookOpen,
    title: "Reading Library",
    text: "Story hours, reference sections and a quiet reading corner.",
  },
  {
    icon: Trophy,
    title: "Sports & Games",
    text: "Cricket, football, kho-kho, chess and inter-house tournaments.",
  },
  {
    icon: Music,
    title: "Music & Dance",
    text: "Annual day, choir practice and classical dance training.",
  },
  { icon: Palette, title: "Art & Craft", text: "Drawing, clay work and craft exhibitions." },
  { icon: Bus, title: "Safe Transport", text: "Escorted school buses across Mira Bhayandar." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <img
          src={heroCampus}
          alt="Students walking into the Little Genius International School campus on a sunny morning"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full scale-105 object-cover opacity-70"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-gold/25 blur-3xl animate-blob" />

        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
          <p
            className="eyebrow animate-rise inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/10 px-3.5 py-1.5 text-gold backdrop-blur-sm"
            style={{ animationDelay: "60ms" }}
          >
            <Sparkles className="size-3.5" /> Admissions open · 2026–27
          </p>

          <h1
            className="animate-rise mt-6 max-w-3xl text-[2.6rem] leading-[1.02] text-cream md:text-7xl"
            style={{ animationDelay: "140ms" }}
          >
            Where curiosity <span className="text-sheen italic">comes</span> to class.
          </h1>

          <p
            className="animate-rise mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
            style={{ animationDelay: "230ms" }}
          >
            {SCHOOL.name} &amp; {SCHOOL.altName} in Poonam Sagar Complex, Mira Road East — a warm,
            English-medium campus guiding children from playgroup to senior school.
          </p>

          <div
            className="animate-rise mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Start admission
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-6 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            >
              Explore academics
            </Link>
          </div>

          <dl className="animate-rise mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-cream/15 pt-7">
            {[
              { value: 1200, suffix: "+", label: "Happy students" },
              { value: 60, suffix: "+", label: "Teachers & staff" },
              { value: 20, suffix: " yrs", label: "In the neighbourhood" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-gold md:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-cream/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-secondary py-3">
        <div className="marquee-track flex w-max whitespace-nowrap font-display text-sm text-navy/70">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={`${m}-${i}`} className="px-6">
              {m} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gold">Our school</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              A neighbourhood school with big-hearted teaching
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              For two decades, families across Mira Road East have trusted Little Genius with their
              children's first classrooms, first friendships and first stage performances. Small
              class groups, patient teachers and a values-first culture keep learning joyful.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "English medium with strong Hindi & Marathi foundations",
                "Activity-based learning and regular parent-teacher meets",
                "CCTV-monitored, fully safe ground-floor campus",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-leaf" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-navy"
            >
              More about us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="relative">
            <img
              src={classroom}
              alt="Students raising their hands in a Little Genius classroom"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
            <div className="animate-float absolute -bottom-6 -left-2 rounded-2xl border border-border bg-card p-4 shadow-soft md:-left-8">
              <p className="font-display text-2xl font-semibold text-navy">1 : 20</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Teacher ratio
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow text-gold">Facilities</p>
            <h2 className="mt-3 max-w-xl text-3xl leading-tight md:text-4xl">
              Everything a growing mind needs, under one roof
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <article className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-navy/5 text-navy">
                    <f.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PEEK */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="eyebrow text-gold">Campus life</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">A day at Little Genius</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { src: scienceLab, alt: "Senior students working with a microscope in the science lab" },
            { src: library, alt: "Children reading books in the school library" },
            { src: sports, alt: "Students running on the school sports ground" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 90}>
              <div className="group overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <Link
            to="/gallery"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-navy"
          >
            See the full gallery
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-deep py-16 text-cream md:py-20">
        <div className="pointer-events-none absolute -right-20 -top-16 size-72 rounded-full bg-gold/20 blur-3xl animate-blob" />
        <div className="relative mx-auto max-w-6xl px-5">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-gold">Visit us</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Come see the classrooms for yourself
            </h2>
            <p className="mt-4 text-cream/75">{SCHOOL.addressOneLine}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Plan a campus visit
              </Link>
              <a
                href={SCHOOL.mapsLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cream/30 bg-cream/10 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/20"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
