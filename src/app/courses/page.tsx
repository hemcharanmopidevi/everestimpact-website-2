import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { PageIntro } from "@/components/page-intro";
import { courses } from "@/data/site";
import { textLink } from "@/lib/styles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Courses" };

type Props = {
  searchParams: { category?: string; free?: string; q?: string };
};

const tabs = [
  { label: "All courses", category: undefined, href: "/courses" },
  { label: "Live", category: "Live Courses", href: "/courses?category=Live%20Courses" },
  { label: "Recorded", category: "Recorded Courses", href: "/courses?category=Recorded%20Courses" },
  { label: "Test series", category: "Test Series", href: "/courses?category=Test%20Series" },
];

const headings: Record<string, string> = {
  "Live Courses": "Live courses",
  "Recorded Courses": "Recorded courses",
  "Test Series": "Test series",
  RRB: "RRB & SI PC",
};

export default function CoursesPage({ searchParams }: Props) {
  const category = searchParams.category;
  const free = searchParams.free === "1";
  const q = (searchParams.q || "").trim();
  const needle = q.toLowerCase();

  let filtered = courses;
  if (category) filtered = filtered.filter((c) => c.exam === category);
  if (free) filtered = filtered.filter((c) => c.price === 0);
  if (needle) {
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(needle) ||
        c.exam.toLowerCase().includes(needle) ||
        c.description.toLowerCase().includes(needle)
    );
  }

  const title = q
    ? `Courses matching “${q}”`
    : category
      ? headings[category] ?? category
      : free
        ? "Free courses"
        : "All courses";

  return (
    <>
      <PageIntro
        title={title}
        lede={`${filtered.length} ${filtered.length === 1 ? "course" : "courses"} open for enrolment. Validity starts on the day you buy.`}
      >
        <nav aria-label="Course types" className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const active = !free && !q && tab.category === category;
            return (
              <Link
                key={tab.label}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-dashed border-primary/40 bg-card text-foreground hover:border-solid hover:border-primary"
                )}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </PageIntro>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {filtered.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-2xl border-2 border-dashed border-primary/30 p-10 text-center">
            <p className="font-display text-2xl text-foreground">No courses here yet</p>
            <p className="mt-2 text-muted-foreground">
              {free || category === "RRB"
                ? "New batches are announced on the home page first."
                : "Try a shorter search, such as “CGL” or “maths”."}
            </p>
            <Link href="/courses" className={cn(textLink, "mt-5 inline-block")}>
              See all courses
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
