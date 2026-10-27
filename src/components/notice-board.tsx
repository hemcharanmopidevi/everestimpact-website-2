"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { sliders } from "@/data/site";
import { cn } from "@/lib/utils";

export function NoticeBoard() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const card = el.firstElementChild as HTMLElement | null;
      if (!card) return;
      const step = card.offsetWidth + 20;
      setActive(Math.min(sliders.length - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section aria-labelledby="notice-board" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-14">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#6B3FA0] text-primary-foreground shadow-[0_10px_24px_-12px_hsl(var(--primary))]">
              <Megaphone className="size-5" aria-hidden />
            </span>
            <div>
              <h2 id="notice-board" className="font-display text-[1.9rem] leading-tight text-foreground">
                Latest announcements
              </h2>
              <p className="text-muted-foreground">Free mocks, new batches and offers from the institute.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous announcement"
              onClick={() => goTo(Math.max(0, active - 1))}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition hover:border-foreground disabled:opacity-40"
              disabled={active === 0}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next announcement"
              onClick={() => goTo(Math.min(sliders.length - 1, active + 1))}
              className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition hover:-translate-y-0.5 disabled:opacity-40"
              disabled={active === sliders.length - 1}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-3 scrollbar-hide"
        >
          {sliders.map((slide, i) => (
            <Link
              key={slide.id}
              href={slide.link}
              className="group flex w-[86%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-card p-3 shadow-[0_18px_40px_-28px_hsl(var(--primary)/0.6)] ring-1 ring-border transition hover:-translate-y-1 hover:ring-primary/30 sm:w-[520px]"
            >
              <span className="relative block aspect-[21/9] overflow-hidden rounded-2xl bg-gradient-to-br from-lobe-1 via-lobe-2 to-lobe-3">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 640px) 520px, 86vw"
                  priority={i === 0}
                />
              </span>
              <span className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
                <span className="line-clamp-1 font-semibold text-card-foreground">{slide.alt}</span>
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                  View details
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Announcements">
          {sliders.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show announcement ${i + 1}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === active ? "w-7 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
