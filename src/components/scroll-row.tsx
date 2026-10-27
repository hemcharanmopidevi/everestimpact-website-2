"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";

export function ScrollRow({
  heading,
  label,
  step = 300,
  children,
}: {
  heading: ReactNode;
  label: string;
  step?: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    ref.current?.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        {heading}
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={`Scroll ${label} left`}
            onClick={() => scroll(-1)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label={`Scroll ${label} right`}
            onClick={() => scroll(1)}
            className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-card text-foreground transition hover:border-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 scrollbar-hide"
      >
        {children}
      </div>
    </>
  );
}
