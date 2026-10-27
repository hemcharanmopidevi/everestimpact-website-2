import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { courses, steps } from "@/data/site";
import { formatINR } from "@/lib/utils";

export const metadata: Metadata = { title: "Result dashboard" };

// Demo numbers until accounts are connected.
const enrolled = courses.slice(0, 3).map((course, i) => ({ course, progress: [62, 41, 88][i] }));
const stats = [
  { label: "Courses enrolled", value: "3" },
  { label: "Mocks attempted", value: "12" },
  { label: "Average accuracy", value: "78%" },
];

export default function DashboardPage() {
  const overall = enrolled.reduce((sum, e) => sum + e.progress, 0) / enrolled.length / 100;
  // Six steps in the plan: show the step this progress falls in.
  const stepIndex = Math.min(steps.length - 1, Math.floor(overall * steps.length));
  const current = steps[stepIndex];

  return (
    <>
      <PageIntro
        title="Your progress"
        lede="A demo of how your course progress and mock scores will look once you sign in."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-lobe-2 to-lobe-1 p-6 md:p-8">
            <p className="text-sm font-medium text-muted-foreground">Overall course progress</p>
            <p className="mt-2 font-display text-[3.5rem] leading-none tabular-nums text-primary md:text-display-lg">
              {Math.round(overall * 100)}%
            </p>
            <p className="mt-3 text-lg text-foreground">
              You are on step {stepIndex + 1} of {steps.length}: {current.title.toLowerCase()}.
            </p>
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-card">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-highlight"
                style={{ width: `${overall * 100}%` }}
              />
            </div>
            <p className="mt-2 flex justify-between text-sm tabular-nums text-muted-foreground">
              <span>First class</span>
              <span>Exam ready</span>
            </p>
          </div>

          <dl className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4">
                <dt className="text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-3xl tabular-nums text-card-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <h2 className="mt-12 font-display text-2xl text-foreground">My courses</h2>
        <ul className="mt-4 space-y-3">
          {enrolled.map(({ course, progress }) => (
            <li key={course.id} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <Link href={`/courses/${course.slug}`} className="font-semibold text-card-foreground hover:text-primary">
                    {course.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">Bought for {formatINR(course.price)}</p>
                </div>
                <span className="font-semibold tabular-nums text-primary">{progress}% done</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-highlight" style={{ width: `${progress}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
