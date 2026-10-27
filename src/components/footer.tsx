import Link from "next/link";
import { brand } from "@/data/site";
import { AppQr } from "@/components/app-qr";

const columns = [
  {
    title: "Courses",
    links: [
      { label: "Live courses", href: "/courses?category=Live%20Courses" },
      { label: "Recorded courses", href: "/courses?category=Recorded%20Courses" },
      { label: "Test series", href: "/courses?category=Test%20Series" },
      { label: "Free test series", href: "/test-series" },
      { label: "RRB & SI PC", href: "/courses?category=RRB" },
    ],
  },
  {
    title: "Study tools",
    links: [
      { label: "AI doubt solver", href: "/ai-doubt" },
      { label: "Study planner", href: "/planner" },
      { label: "Result dashboard", href: "/dashboard" },
      { label: "Saved courses", href: "/wishlist" },
      { label: "YouTube playlist", href: "/videos" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms & conditions", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Refunds & cancellation", href: "/legal/refunds" },
      { label: "All links", href: "/links" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-auto bg-night text-night-foreground">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
        className="absolute bottom-full left-0 h-10 w-full text-night md:h-14"
      >
        <path
          d="M0 60 L0 44 L120 30 L210 40 L330 18 L420 32 L520 22 L610 36 L700 12 L760 4 L820 16 L900 10 L980 30 L1080 20 L1180 38 L1290 26 L1440 40 L1440 60 Z"
          fill="currentColor"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-10 pt-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-display text-[2rem] leading-none">{brand.name}</p>
          <p className="mt-3 max-w-sm leading-relaxed text-night-muted">
            SSC coaching in {brand.city}: live classes, recorded courses and mock tests.
          </p>
          <div className="mt-8">
            <AppQr />
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="lg:col-span-2 lg:first-of-type:col-start-7">
            <h2 className="font-semibold">{col.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-night-muted transition hover:text-night-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-night-contour">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-5 text-sm text-night-muted">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p>Made for SSC aspirants in {brand.city}.</p>
        </div>
      </div>
    </footer>
  );
}
