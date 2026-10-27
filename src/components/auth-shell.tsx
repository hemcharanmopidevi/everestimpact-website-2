import type { ReactNode } from "react";

export function AuthShell({
  title,
  lede,
  aside,
  children,
}: {
  title: string;
  lede: string;
  aside: { title: string; points: string[] };
  children: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:py-16 lg:grid-cols-2">
      <div className="relative hidden overflow-hidden rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-[#FAD4D8] via-[#EBD9F3] to-[#FBF8FF] p-10 lg:flex dark:from-[#3A2348] dark:via-[#2A2450] dark:to-[#1C1838] lg:flex-col lg:justify-end">
        <div className="relative z-[2]">
          <p className="font-display text-[2.25rem] leading-tight text-foreground">{aside.title}</p>
          <ul className="mt-6 space-y-3">
            {aside.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-highlight" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center lg:px-10">
        <h1 className="font-display text-display-sm text-primary">{title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{lede}</p>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
