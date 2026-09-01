import { createFileRoute, Link } from "@tanstack/react-router";

import classroom from "@/assets/classroom.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & Classes | Little Genius International School" },
      {
        name: "description",
        content:
          "Pre-primary classes at Little Genius, Mira Road East — playgroup, nursery, junior and senior KG with activity-based learning.",
      },
      { property: "og:title", content: "Academics at Little Genius International School" },
      {
        property: "og:description",
        content: "Our early-years curriculum from playgroup to senior KG.",
      },
    ],
  }),
  component: Academics,
});

const stages = [
  {
    stage: "Playgroup",
    classes: "2.5 – 3 years",
    text: "A gentle introduction to school through songs, stories, free play and sensory activities.",
    highlights: ["Rhymes & music", "Indoor play", "Motor-skill toys"],
  },
  {
    stage: "Nursery",
    classes: "3 – 4 years",
    text: "Children explore letters, numbers, colours and shapes through play-based, age-appropriate activities.",
    highlights: ["Phonics readiness", "Pre-writing strokes", "Story time"],
  },
  {
    stage: "Junior KG",
    classes: "4 – 5 years",
    text: "A structured yet joyful day with phonics, counting, conversation practice and creative expression.",
    highlights: ["Letter & sound blending", "Number concepts", "Art & craft"],
  },
  {
    stage: "Senior KG",
    classes: "5 – 6 years",
    text: "Building reading fluency, writing confidence and social skills to make the move to primary school easy.",
    highlights: ["Reading fluency", "Simple sentences", "Show & tell"],
  },
];

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Four playful years that build school readiness">
        Every stage is designed to hand primary school a confident speaker, a curious learner and a
        happy child.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <ol className="relative space-y-6 border-l border-border pl-6 md:pl-10">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.stage} delay={i * 80}>
              <span className="absolute -left-[9px] mt-6 grid size-4 place-items-center rounded-full bg-accent ring-4 ring-background" />
              <article className="card-lift rounded-2xl border border-border bg-card p-6 md:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="text-2xl md:text-3xl">{s.stage}</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {s.classes}
                  </p>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <Reveal>
            <img
              src={classroom}
              alt="Children learning through activities in a Little Genius classroom"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={110}>
            <p className="eyebrow text-gold">Beyond the classroom</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Play, music and movement are part of the timetable
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Music, dance, outdoor play, art and annual day rehearsals are scheduled — not squeezed
              in. Celebration days and theme weeks run through the year so every child finds something
              they love.
            </p>
            <Link
              to="/admissions"
              className="mt-7 inline-flex rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Admission details
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
