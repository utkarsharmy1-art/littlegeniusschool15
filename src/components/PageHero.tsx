import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gold/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-sky/20 blur-3xl animate-blob" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-20 md:pt-20">
        <p className="eyebrow animate-rise text-gold">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl animate-rise text-4xl leading-[1.05] md:text-6xl">{title}</h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-base leading-relaxed text-cream/75">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
