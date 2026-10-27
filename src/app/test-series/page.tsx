import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Timer } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { PageIntro } from "@/components/page-intro";
import { courses } from "@/data/site";

export const metadata: Metadata = { title: "Test series" };

export default function TestSeriesPage() {
  const tests = courses.filter((c) => c.exam === "Test Series");

  return (
    <>
      <PageIntro
        title="Mock tests"
        lede="Mock tests in the real SSC pattern. Take one free every Saturday, or buy a full series for daily practice."
      />
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col rounded-2xl border-2 border-dashed border-highlight/50 bg-lobe-1 p-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-card px-3 py-1 text-sm font-semibold text-foreground">
            <span className="size-2 rounded-full bg-online" aria-hidden />
            Free every Saturday
          </p>
          <h2 className="mt-4 font-display text-[1.75rem] leading-tight text-foreground">
            Super Saturday mock
          </h2>
          <p className="mt-2 text-muted-foreground">
            A live SSC CGL Tier-I mock with a full GS explanation from Shankar Sir afterwards.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-foreground">
            <li className="flex items-center gap-2">
              <ClipboardCheck className="size-4 text-primary" aria-hidden />
              Instant scorecard when you submit
            </li>
            <li className="flex items-center gap-2">
              <Timer className="size-4 text-primary" aria-hidden />
              Timed like the real Tier-I paper
            </li>
          </ul>
          <div className="mt-auto pt-6">
            <Link
              href="/auth/signup"
              className="inline-flex rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Sign up to take it
            </Link>
          </div>
        </article>
        {tests.map((test) => (
          <CourseCard key={test.id} course={test} />
        ))}
      </div>
    </>
  );
}
