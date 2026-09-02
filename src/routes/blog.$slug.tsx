import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS, formatDate, getPost } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story not found | Little Genius International School" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Little Genius International School` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: BlogPostPage,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-3xl">We couldn't find that story</h1>
      <Link to="/blog" className="mt-6 inline-block text-sm font-bold text-navy">
        Back to the blog
      </Link>
    </div>
  );
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const more = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-deep text-cream">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gold/20 blur-3xl animate-blob" />
        <div className="relative mx-auto max-w-3xl px-5 pb-14 pt-14 md:pb-16 md:pt-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream">
            <ArrowLeft className="size-4" /> All stories
          </Link>
          <p className="eyebrow mt-6 animate-rise text-gold">{post.category}</p>
          <h1 className="mt-3 animate-rise text-3xl leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 flex items-center gap-2 text-sm text-cream/70">
            <CalendarDays className="size-4" />
            {formatDate(post.date)} · {post.readTime}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Reveal>
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={900}
            className="aspect-16/9 w-full rounded-3xl object-cover shadow-soft"
          />
        </Reveal>
        <div className="mt-8 space-y-5">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-base leading-relaxed text-muted-foreground">{para}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="bg-secondary/60 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-2xl leading-tight md:text-3xl">More from the blog</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-1"
                >
                  <span className="text-xs font-bold text-gold">{p.category}</span>
                  <h3 className="mt-2 text-lg leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
