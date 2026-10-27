"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { PageIntro } from "@/components/page-intro";
import { courses } from "@/data/site";
import { useWishlist } from "@/hooks/use-wishlist";
import { buttonPrimary } from "@/lib/styles";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const saved = courses.filter((c) => ids.includes(c.id));

  return (
    <>
      <PageIntro
        title="Saved courses"
        lede="Courses you marked with the heart. They stay saved in this browser until you remove them."
      />
      <div className="mx-auto max-w-7xl px-4 py-12">
        {saved.length === 0 ? (
          <div className="mx-auto max-w-lg rounded-2xl border-2 border-dashed border-primary/30 p-10 text-center">
            <Heart className="mx-auto size-8 text-highlight" aria-hidden />
            <p className="mt-4 font-display text-2xl text-foreground">Nothing saved yet</p>
            <p className="mt-2 text-muted-foreground">
              Tap the heart on any course to keep it here while you decide.
            </p>
            <Link href="/courses" className={`${buttonPrimary} mt-6`}>
              Browse courses
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {saved.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
