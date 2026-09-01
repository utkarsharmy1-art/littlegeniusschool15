import { createFileRoute } from "@tanstack/react-router";

import classroom from "@/assets/classroom.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import library from "@/assets/library.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery | Little Genius International School, Mira Road" },
      {
        name: "description",
        content:
          "Campus photos from Little Genius International School, Mira Road East — classrooms, science lab, library, sports ground and school mornings.",
      },
      { property: "og:title", content: "Campus Gallery | Little Genius International School" },
      {
        property: "og:description",
        content: "A look inside our classrooms, labs, library and playground.",
      },
    ],
  }),
  component: Gallery,
});


const photos = [
  { src: heroCampus, alt: "Students arriving at the school gate in the morning", span: true },
  { src: classroom, alt: "Children raising hands in a lively classroom" },
  { src: scienceLab, alt: "Senior students using a microscope in the science lab" },
  { src: library, alt: "Students reading at long wooden tables in the library" },
  { src: sports, alt: "Children running on the sports ground", span: true },
];

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Ordinary mornings that make a school">
        Photographs from around the campus — assembly lines, lab benches, library corners and the
        playground.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <Reveal
              key={p.alt}
              delay={i * 80}
              className={p.span ? "sm:col-span-2 lg:col-span-2" : undefined}
            >
              <figure className="group h-full overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
