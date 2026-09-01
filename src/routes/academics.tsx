import { createFileRoute, Link } from "@tanstack/react-router";

import scienceLab from "@/assets/science-lab.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & Classes | Little Genius International School" },
      {
        name: "description",
        content:
          "Pre-primary to senior school at Little Genius, Mira Road East — curriculum stages, subjects, activities and assessment approach.",
      },
      { property: "og:title", content: "Academics at Little Genius International School" },
      {
        property: "og:description",
        content: "Our stage-by-stage curriculum from playgroup to senior school.",
      },
    ],
  }),
  component: Academics,
});

const stages = [
  {
    stage: "Pre-Primary",
    classes: "Playgroup · Nursery · Jr. & Sr. KG",
    text: "Phonics, numbers, rhymes and free play. Toilet-trained routines, nap corners and lots of storytelling.",
    highlights: ["Phonics & pre-writing", "Show & tell", "Rhythm and rhymes"],
  },
  {
    stage: "Primary",
    classes: "Std I – V",
    text: "English, Hindi, Marathi, Maths, EVS and computers with worksheet-based practice and weekly activity periods.",
    highlights: ["Reading fluency", "Mental maths drills", "Art & craft period"],
  },
  {
    stage: "Middle School",
    classes: "Std VI – VIII",
    text: "Science splits into physics, chemistry and biology basics; history, geography and civics build context.",
    highlights: ["Lab experiments", "Project work", "Olympiad coaching"],
  },
  {
    stage: "Senior School",
    classes: "Std IX – X",
    text: "Board-focused preparation with regular unit tests, doubt-clearing sessions and career guidance talks.",
    highlights: ["Board practice papers", "Extra doubt sessions", "Career counselling"],
  },
];

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="One continuous journey, four careful stages">
        Every stage is designed to hand the next one a confident reader, a clear thinker and a
        curious child.
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
              src={scienceLab}
              alt="Students conducting an experiment in the Little Genius science lab"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={110}>
            <p className="eyebrow text-gold">Beyond the syllabus</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">
              Labs, stages and grounds are part of the timetable
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Science practicals, computer periods, sports slots, elocution, drawing competitions and
              annual day rehearsals are scheduled — not squeezed in. Inter-house activities run
              through the year so every child finds something they are good at.
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
