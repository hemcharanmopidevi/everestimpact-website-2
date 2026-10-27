import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "All links" };

const groups = [
  {
    title: "Courses",
    links: [
      { title: "All courses", href: "/courses" },
      { title: "Live courses", href: "/courses?category=Live%20Courses" },
      { title: "Recorded courses", href: "/courses?category=Recorded%20Courses" },
      { title: "Test series", href: "/test-series" },
    ],
  },
  {
    title: "Study tools",
    links: [
      { title: "AI doubt solver", href: "/ai-doubt" },
      { title: "Study planner", href: "/planner" },
      { title: "Saved courses", href: "/wishlist" },
      { title: "Result dashboard", href: "/dashboard" },
      { title: "YouTube playlist", href: "/videos" },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <PageIntro narrow title="All links" lede="Every page on the site, in one place." />
      <div className="mx-auto grid max-w-3xl gap-10 px-4 py-12 sm:grid-cols-2">
        {groups.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2 className="font-semibold text-foreground">{group.title}</h2>
            <ul className="mt-3 divide-y divide-dashed divide-border rounded-xl border border-border bg-card">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center justify-between px-4 py-3.5 text-card-foreground transition hover:text-primary"
                  >
                    {link.title}
                    <ChevronRight className="size-4 text-muted-foreground" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </>
  );
}
