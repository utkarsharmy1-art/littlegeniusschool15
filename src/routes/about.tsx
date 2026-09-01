import { createFileRoute } from "@tanstack/react-router";
import { Heart, Lightbulb, Users } from "lucide-react";

import library from "@/assets/library.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SCHOOL } from "@/lib/school";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Little Genius International School, Mira Road" },
      {
        name: "description",
        content:
          "Our story, vision and values — how Little Genius International School & English High School teaches children in Mira Road East, Mira Bhayandar.",
      },
      { property: "og:title", content: "About Little Genius International School" },
      {
        property: "og:description",
        content: "Vision, values and the people behind our Mira Road East campus.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: Heart,
    title: "Kindness first",
    text: "Children learn best when they feel safe, seen and encouraged every single day.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity over cramming",
    text: "Activity-based lessons, projects and questions carry more weight than rote learning.",
  },
  {
    icon: Users,
    title: "Families as partners",
    text: "Regular meets, open diaries and honest feedback keep parents in the loop.",
  },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="A school built on patience, play and pride">
        {SCHOOL.name} and {SCHOOL.altName} share one campus in Poonam Sagar Complex — and one
        belief: every child deserves a teacher who notices them.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="eyebrow text-gold">Our story</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              From a few classrooms to a neighbourhood institution
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Little Genius began with a small group of pre-primary classrooms serving families in
              Mira Road East. As those first students grew, so did the school — adding primary,
              middle and senior sections, an English high school wing, science labs and a library.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today siblings, cousins and even the children of former students sit in our classrooms.
              That continuity is the thing we are proudest of.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={library}
              alt="Students studying in the Little Genius school library"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="eyebrow text-gold">What we stand for</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">Three values, every day</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <article className="card-lift h-full rounded-2xl border border-border bg-card p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/25 text-navy">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <Reveal>
          <blockquote className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <p className="font-display text-2xl leading-snug md:text-3xl">
              “We would rather a child leave us asking better questions than reciting better
              answers.”
            </p>
            <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              The Principal · {SCHOOL.short}
            </footer>
          </blockquote>
        </Reveal>
      </section>
    </>
  );
}
