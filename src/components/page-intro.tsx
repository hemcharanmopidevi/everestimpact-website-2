import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageIntro({
  title,
  lede,
  narrow = false,
  children,
}: {
  title: ReactNode;
  lede?: ReactNode;
  narrow?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className={cn("relative mx-auto px-4 py-12 md:py-16", narrow ? "max-w-3xl" : "max-w-7xl")}>
        <h1 className="text-balance font-display text-display-sm text-primary md:text-display-md">
          {title}
        </h1>
        {lede && <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted-foreground">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
