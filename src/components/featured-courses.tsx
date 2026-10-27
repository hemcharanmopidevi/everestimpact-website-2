import Link from "next/link";
import { courses } from "@/data/site";
import { CourseCard } from "@/components/course-card";
import { ScrollRow } from "@/components/scroll-row";
import { SectionHeading } from "@/components/section-heading";

export function FeaturedCourses() {
  return (
    <section id="open-batches" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16">
        <ScrollRow
          label="courses"
          heading={
            <div>
              <SectionHeading
                title="Courses open for enrolment"
                lede={
                  <>
                    Live batches, recorded courses and test series. Validity is how long you
                    can access the course after you buy it.{" "}
                    <Link
                      href="/courses"
                      className="font-semibold text-foreground underline decoration-highlight decoration-2 underline-offset-4"
                    >
                      See all {courses.length} courses
                    </Link>
                  </>
                }
              />
            </div>
          }
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} className="w-[78%] shrink-0 sm:w-[300px]" />
          ))}
        </ScrollRow>
      </div>
    </section>
  );
}
