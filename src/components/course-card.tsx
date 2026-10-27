"use client";

import Link from "next/link";
import { CalendarClock, ClipboardList, Heart, Languages, PlayCircle, Radio, type LucideIcon } from "lucide-react";
import { categoryLabel, type Course } from "@/data/site";
import { cn, discountPercent, formatINR } from "@/lib/utils";
import { useWishlist } from "@/hooks/use-wishlist";

// Each course type gets its own icon and accent, so cards read at a glance without posters.
const kinds: Record<string, { icon: LucideIcon; tint: string; chip: string; bar: string }> = {
  "Live Courses": {
    icon: Radio,
    tint: "from-[#EDEBFF] to-card dark:from-[#26214A]",
    chip: "bg-primary text-primary-foreground",
    bar: "from-primary to-[#6B3FA0]",
  },
  "Recorded Courses": {
    icon: PlayCircle,
    tint: "from-[#F4E9FB] to-card dark:from-[#2F2142]",
    chip: "bg-[#6B3FA0] text-white",
    bar: "from-[#6B3FA0] to-[#B15CC7]",
  },
  "Test Series": {
    icon: ClipboardList,
    tint: "from-[#FFEBDD] to-card dark:from-[#3A2620]",
    chip: "bg-highlight text-white",
    bar: "from-highlight to-[#F5A35C]",
  },
};

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  const { has, toggle } = useWishlist();
  const off = discountPercent(course.price, course.mrp);
  const saved = has(course.id);
  const months = Number(course.validity);
  const kind = kinds[course.exam] ?? kinds["Live Courses"];
  const Icon = kind.icon;

  return (
    <article
      className={cn(
        "group relative flex snap-start flex-col overflow-hidden rounded-3xl bg-gradient-to-b ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_hsl(var(--primary)/0.6)] hover:ring-primary/25",
        kind.tint,
        className
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-full bg-gradient-to-r", kind.bar)} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <span className={cn("inline-flex size-12 items-center justify-center rounded-2xl shadow-sm", kind.chip)}>
            <Icon className="size-5" aria-hidden />
          </span>
          <button
            type="button"
            aria-label={saved ? `Remove ${course.title} from saved courses` : `Save ${course.title}`}
            aria-pressed={saved}
            onClick={() => toggle(course.id)}
            className="relative z-10 inline-flex size-10 items-center justify-center rounded-full bg-card text-muted-foreground ring-1 ring-border transition hover:text-highlight"
          >
            <Heart className={saved ? "size-[18px] fill-highlight text-highlight" : "size-[18px]"} />
          </button>
        </div>

        <p className="mt-5 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-foreground">{categoryLabel[course.exam] ?? course.exam}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-card px-2.5 py-0.5 text-muted-foreground ring-1 ring-border">
            <CalendarClock className="size-3.5" aria-hidden />
            {months} {months === 1 ? "month" : "months"}
          </span>
        </p>

        <h3 className="mt-3 line-clamp-2 font-display text-[1.3rem] leading-snug text-card-foreground">
          <Link
            href={`/courses/${course.slug}`}
            className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:-outline-offset-4 focus-visible:after:outline-ring"
          >
            {course.title}
          </Link>
        </h3>

        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Languages className="size-4" aria-hidden />
            {course.language}
          </li>
          <li className="flex items-center gap-2">
            <PlayCircle className="size-4" aria-hidden />
            {course.videos > 0 ? `${course.videos} video lessons` : "Live classes with faculty"}
          </li>
        </ul>

        <div className="mt-auto pt-6">
          <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
            <span className="font-display text-[1.7rem] leading-none tabular-nums text-card-foreground">
              {formatINR(course.price)}
            </span>
            {off > 0 && (
              <>
                <span className="text-sm tabular-nums text-muted-foreground line-through">{formatINR(course.mrp)}</span>
                <span className="whitespace-nowrap rounded-full bg-highlight/15 px-2 py-0.5 text-sm font-semibold text-highlight">
                  {off}% off
                </span>
              </>
            )}
          </p>
          <span className="mt-4 flex items-center justify-center rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition group-hover:brightness-110">
            View course
          </span>
        </div>
      </div>
    </article>
  );
}
