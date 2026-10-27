import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, Languages, PlayCircle } from "lucide-react";
import { categoryLabel, getCourseBySlug } from "@/data/site";
import { buttonPrimary, buttonQuiet } from "@/lib/styles";
import { cn, discountPercent, formatINR } from "@/lib/utils";

type Props = { params: { slug: string } };

export function generateMetadata({ params }: Props): Metadata {
  const course = getCourseBySlug(params.slug);
  return { title: course?.title ?? "Course" };
}

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const off = discountPercent(course.price, course.mrp);
  const months = Number(course.validity);
  const facts = [
    { icon: Languages, label: "Language", value: course.language },
    { icon: CalendarClock, label: "Validity", value: `${months} ${months === 1 ? "month" : "months"}` },
    {
      icon: PlayCircle,
      label: "Lessons",
      value: course.videos ? `${course.videos} videos` : "Live classes",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-lobe-2/70 to-background to-40%">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 md:py-14 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Link href="/courses" className="text-sm font-medium text-muted-foreground hover:text-primary">
            All courses
          </Link>
          <p className="mt-6 font-semibold text-ink">{categoryLabel[course.exam] ?? course.exam}</p>
          <h1 className="mt-2 text-balance font-display text-display-sm text-foreground md:text-display-md">
            {course.title}
          </h1>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted-foreground">
            {course.description}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl bg-muted ring-1 ring-border">
            <Image src={course.image} alt="" fill className="object-cover" priority sizes="(min-width: 1024px) 720px, 100vw" />
          </div>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-xl border border-dashed border-primary/35 bg-card p-4">
                <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="size-4 text-primary" aria-hidden />
                  {label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-card-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="h-fit overflow-hidden rounded-3xl border border-border bg-card lg:sticky lg:top-24 [--stub:5.5rem]">
          <div className="p-6">
            <p className="text-sm font-medium text-muted-foreground">Course fee</p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-[2.75rem] leading-none tabular-nums text-card-foreground">
                {formatINR(course.price)}
              </span>
              {off > 0 && (
                <>
                  <span className="tabular-nums text-muted-foreground line-through">
                    {formatINR(course.mrp)}
                  </span>
                  <span className="rounded-full bg-highlight px-2.5 py-0.5 text-sm font-semibold text-[#1F1B3B]">
                    {off}% off
                  </span>
                </>
              )}
            </p>
            <button type="button" className={cn(buttonPrimary, "mt-6 w-full")}>
              Buy now
            </button>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Link href="/ai-doubt" className={buttonQuiet}>
                Ask about this course
              </Link>
              <Link href="/planner" className={buttonQuiet}>
                Add to study planner
              </Link>
            </div>
          </div>
          <div className="mx-4 border-t-2 border-dashed border-border" aria-hidden />
          <p className="flex h-[var(--stub)] items-center px-6 text-sm leading-snug text-muted-foreground">
            Access starts the moment payment goes through and lasts {months}{" "}
            {months === 1 ? "month" : "months"}.
          </p>
        </aside>
      </div>
    </div>
  );
}
