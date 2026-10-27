import Link from "next/link";
import { BookOpen, ClipboardCheck, ClipboardList, Gift, Link2, Radio, Train, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type Stop = { title: string; note: string; href: string; icon: LucideIcon; tone: string };

// In the order a new student would usually try them: free first, then a paid format.
const stops: Stop[] = [
  { title: "Free course", note: "Start here", href: "/courses?free=1", icon: Gift, tone: "bg-[#2A2257] text-[#FFC48F]" },
  { title: "Free test series", note: "Check your level", href: "/test-series", icon: ClipboardCheck, tone: "bg-[#F2753C] text-white" },
  { title: "Recorded courses", note: "Learn at your pace", href: "/courses?category=Recorded%20Courses", icon: BookOpen, tone: "bg-[#2A2257] text-[#FFC48F]" },
  { title: "Live courses", note: "Daily with faculty", href: "/courses?category=Live%20Courses", icon: Radio, tone: "bg-[#F2753C] text-white" },
  { title: "Test series", note: "Exam-pattern mocks", href: "/courses?category=Test%20Series", icon: ClipboardList, tone: "bg-[#2A2257] text-[#FFC48F]" },
  { title: "RRB & SI PC", note: "Beyond SSC", href: "/courses?category=RRB", icon: Train, tone: "bg-[#F2753C] text-white" },
  { title: "Useful links", note: "Notices and resources", href: "/links", icon: Link2, tone: "bg-[#2A2257] text-[#FFC48F]" },
];

// Wave geometry on a 1400 x 300 canvas: stops alternate between a high and a low row.
const W = 1400;
const H = 250;
const HIGH = 70;
const LOW = 170;
const pts = stops.map((_, i) => ({ x: 100 + i * 200, y: i % 2 === 0 ? HIGH : LOW }));
const wave =
  `M0 ${HIGH + 25} C50 ${HIGH + 25} 50 ${HIGH} ${pts[0].x} ${HIGH}` +
  pts
    .slice(1)
    .map((p, i) => ` C${pts[i].x + 100} ${pts[i].y} ${p.x - 100} ${p.y} ${p.x} ${p.y}`)
    .join("") +
  ` C${W - 50} ${pts[pts.length - 1].y} ${W - 50} ${HIGH + 25} ${W} ${HIGH + 25}`;

function Node({ stop }: { stop: Stop }) {
  const Icon = stop.icon;
  return (
    <>
      <span
        className={`inline-flex size-14 items-center justify-center rounded-full ring-4 ring-card shadow-[0_10px_24px_-8px_hsl(var(--primary)/0.6)] transition group-hover:scale-105 ${stop.tone}`}
      >
        <Icon className="size-6" aria-hidden />
      </span>
      <span className="mt-3 block font-semibold text-foreground group-hover:text-primary">{stop.title}</span>
      <span className="mt-0.5 block text-sm text-muted-foreground">{stop.note}</span>
    </>
  );
}

export function CategoryPath() {
  return (
    <section id="categories" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16">
        <SectionHeading
          className="mx-auto text-center [&_p]:mx-auto"
          title="Browse categories"
          lede="Follow the path: start free, then pick the format that fits how you study."
        />

        {/* Wide screens: stops along a dashed wave */}
        <div className="relative mt-12 hidden lg:block" style={{ height: H }}>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 size-full"
            aria-hidden
            fill="none"
          >
            <path d={wave} stroke="hsl(var(--highlight))" strokeOpacity={0.35} strokeWidth={12} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
            <path
              id="category-rope"
              d={wave}
              stroke="hsl(var(--primary))"
              strokeOpacity={0.7}
              strokeWidth={2.5}
              strokeDasharray="8 8"
              vectorEffect="non-scaling-stroke"
              className="rope-march"
            />
            {/* little climbers travelling along the rope */}
            {[0, 7, 14].map((begin) => (
              <circle key={begin} r={6} fill="hsl(var(--highlight))" stroke="white" strokeWidth={2} className="loop-runner">
                <animateMotion dur="21s" begin={`-${begin}s`} repeatCount="indefinite">
                  <mpath href="#category-rope" />
                </animateMotion>
              </circle>
            ))}
          </svg>
          <ul>
            {stops.map((stop, i) => (
              <li
                key={stop.title}
                className="absolute w-44 -translate-x-1/2 -translate-y-7 text-center"
                style={{ left: `${(pts[i].x / W) * 100}%`, top: pts[i].y }}
              >
                <Link href={stop.href} className="group flex flex-col items-center rounded-lg focus-visible:outline-offset-4">
                  <Node stop={stop} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Narrow screens: the same stops down a dashed line */}
        <ol className="relative mx-auto mt-10 max-w-md lg:hidden">
          <span aria-hidden className="absolute bottom-7 left-7 top-7 border-l-2 border-dashed border-primary/50" />
          {stops.map((stop) => (
            <li key={stop.title} className="relative">
              <Link href={stop.href} className="group flex items-center gap-4 py-2.5">
                <span
                  className={`relative inline-flex size-14 shrink-0 items-center justify-center rounded-full ring-4 ring-card ${stop.tone}`}
                >
                  <stop.icon className="size-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-foreground group-hover:text-primary">{stop.title}</span>
                  <span className="block text-sm text-muted-foreground">{stop.note}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
