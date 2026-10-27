import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { youtubeVideos } from "@/data/site";

export function FreeLessons() {
  return (
    <section aria-labelledby="free-lessons" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-14 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4">
          <h2 id="free-lessons" className="font-display text-[1.75rem] leading-none">
            Free lessons
          </h2>
          <p className="mt-3 text-muted-foreground">
            Try a lesson before you buy a course. A free live mock test runs every{" "}
            <Link href="/test-series" className="font-semibold text-foreground underline decoration-highlight decoration-2 underline-offset-4">
              Super Saturday
            </Link>
            .
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-3 lg:col-span-8">
          {youtubeVideos.map((video) => (
            <li key={video.id}>
              <a
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full items-start gap-3 rounded-md border border-border bg-card p-4 transition hover:border-foreground/40"
              >
                <PlayCircle className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>
                  <span className="block font-semibold leading-snug text-card-foreground">
                    {video.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {video.length} on YouTube
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
