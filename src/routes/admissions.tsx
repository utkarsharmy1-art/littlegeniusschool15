import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, PhoneCall, School, UserCheck } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 | Little Genius International School" },
      {
        name: "description",
        content:
          "Admission process, documents and age criteria for Little Genius International School pre-primary classes, Mira Road East, Mira Bhayandar.",
      },
      { property: "og:title", content: "Admissions at Little Genius International School" },
      {
        property: "og:description",
        content: "Four simple steps, required documents and age criteria for 2026–27.",
      },
    ],
  }),
  component: Admissions,
});

const steps = [
  {
    icon: PhoneCall,
    title: "Enquire",
    text: "Call the school office or walk in during working hours to check seat availability.",
  },
  {
    icon: School,
    title: "Visit the campus",
    text: "Meet the coordinator, see the classrooms and ask everything you want to ask.",
  },
  {
    icon: UserCheck,
    title: "Interaction",
    text: "A friendly, age-appropriate interaction with the child and a short parent meeting.",
  },
  {
    icon: FileText,
    title: "Confirm the seat",
    text: "Submit documents, complete the fee formalities and collect the uniform list.",
  },
];

const documents = [
  "Birth certificate (original + copy)",
  "Aadhaar card of the child and parents",
  "4 passport-size photographs",
  "Residence proof",
];

const ages = [
  { cls: "Playgroup", age: "2.5 – 3 years" },
  { cls: "Nursery", age: "3 – 4 years" },
  { cls: "Jr. KG", age: "4 – 5 years" },
  { cls: "Sr. KG", age: "5 – 6 years" },
];

function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions 2026–27" title="Four simple steps to your child's desk">
        Seats fill quickly in the pre-primary sections — an early enquiry helps. The office is open{" "}
        {SCHOOL.hours}.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card-lift h-full rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-sm font-bold text-gold">
                  0{i + 1}
                </span>
                <span className="mt-4 grid size-11 place-items-center rounded-xl bg-navy/5 text-navy">
                  <s.icon className="size-5" />
                </span>
                <h2 className="mt-4 text-xl">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-gold">Documents</p>
            <h2 className="mt-3 text-3xl leading-tight">What to bring along</h2>
            <ul className="mt-6 space-y-3">
              {documents.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-gold">Age criteria</p>
            <h2 className="mt-3 text-3xl leading-tight">Class-wise entry age</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
              {ages.map((a) => (
                <div
                  key={a.cls}
                  className="flex items-center justify-between border-b border-border px-5 py-4 text-sm last:border-b-0"
                >
                  <span className="font-semibold">{a.cls}</span>
                  <span className="text-muted-foreground">{a.age}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Age is calculated as on 1st June of the academic year. Final decisions rest with the
              school office.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-deep py-16 text-cream md:py-20">
        <div className="pointer-events-none absolute -left-16 -top-20 size-72 rounded-full bg-gold/20 blur-3xl animate-blob" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl leading-tight md:text-4xl">Ready to enquire?</h2>
            <p className="mt-4 text-cream/75">
              Speak to the admission desk at {SCHOOL.phone} or write to {SCHOOL.email}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={SCHOOL.phoneHref}
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Call the office
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-cream/30 bg-cream/10 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/20"
              >
                Find directions
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
