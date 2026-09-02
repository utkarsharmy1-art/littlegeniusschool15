import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "School Blog | Little Genius International School" },
      {
        name: "description",
        content:
          "Stories from Little Genius International School, Mira Road East — school events, teacher spotlights and practical child development tips for parents.",
      },
      { property: "og:title", content: "Little Genius School Blog" },
      {
        property: "og:description",
        content: "Events, teacher spotlights and child development tips from our pre-primary campus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Stories from our little campus">
        Events, teacher spotlights and child development tips written by the people who spend the
        day with your children.
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 70} as="article">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1"
              >
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-bold text-navy">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-xl leading-snug">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {formatDate(post.date)} · {post.readTime}
                  </span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-navy">
                    Read story
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
