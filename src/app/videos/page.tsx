import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { youtubeVideos } from "@/data/site";

export const metadata: Metadata = { title: "YouTube playlist" };

export default function VideosPage() {
  return (
    <>
      <PageIntro
        title="Free lessons on YouTube"
        lede="Concept videos, marathon sessions and topper interviews. Watch any of them before you choose a course."
      />
      <ul className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {youtubeVideos.map((video) => (
          <li key={video.id}>
            <a
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-primary/50"
            >
              <span className="flex aspect-video items-center justify-center bg-gradient-to-br from-lobe-1 via-lobe-2 to-lobe-3">
                <PlayCircle className="size-14 text-primary transition group-hover:scale-105" strokeWidth={1.5} aria-hidden />
              </span>
              <span className="p-5">
                <span className="block text-lg font-semibold leading-snug text-card-foreground">
                  {video.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">
                  {video.length}, opens on YouTube
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
