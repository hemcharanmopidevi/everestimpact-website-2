import Image from "next/image";
import Link from "next/link";
import { BarChart3, CalendarDays, FileText, PlaySquare, Send, type LucideIcon } from "lucide-react";
import { expertTeam } from "@/data/site";

// 1400 x 560 canvas: three circles, and one dashed path that weaves through them
// like a chain of infinity loops, crossing itself between the circles.
const W = 1400;
const H = 560;
const CY = 280;
const centers = [250, 700, 1150];

const chain = [
  "M475 280",
  "C430 160 340 65 250 65",
  "C130 65 35 170 35 280",
  "C35 390 130 495 250 495",
  "C340 495 430 400 475 280",
  "C520 160 610 65 700 65",
  "C790 65 880 160 925 280",
  "C970 400 1060 495 1150 495",
  "C1270 495 1365 390 1365 280",
  "C1365 170 1270 65 1150 65",
  "C1060 65 970 160 925 280",
  "C880 400 790 495 700 495",
  "C610 495 520 400 475 280 Z",
].join(" ");

const pillars = [
  {
    title: "Live courses",
    text: "Daily interactive classes with faculty, and doubts cleared in class.",
    href: "/courses?category=Live%20Courses",
    fill: "hsl(var(--lobe-1))",
  },
  {
    title: "Recorded",
    text: "Full-syllabus lessons you can replay at your own pace.",
    href: "/courses?category=Recorded%20Courses",
    fill: "hsl(var(--lobe-2))",
  },
  {
    title: "Test series",
    text: "Exam-pattern mocks with analysis that shows where to improve.",
    href: "/courses?category=Test%20Series",
    fill: "hsl(var(--lobe-3))",
  },
];

const at = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

const faces = expertTeam.filter((m) => m.image && m.role !== "Founder");
const facePoints: [number, number][] = [
  [182, 77],
  [700, 65],
  [1218, 77],
  [182, 483],
  [700, 495],
  [1218, 483],
];
const icons: { icon: LucideIcon; x: number; y: number }[] = [
  { icon: FileText, x: 35, y: 280 },
  { icon: PlaySquare, x: 595, y: 106 },
  { icon: BarChart3, x: 852, y: 408 },
  { icon: CalendarDays, x: 1365, y: 280 },
];
const notes = [
  { text: "Joined today's live class", x: 330, y: 52 },
  { text: "Notes downloaded", x: 120, y: 540 },
  { text: "Mock result is ready", x: 1080, y: 540, icon: Send },
];

export function PlatformLoop() {
  return (
    <section id="platform" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="bg-gradient-to-r from-primary via-[#6B3FA0] to-highlight bg-clip-text font-display text-display-sm text-transparent md:text-display-md">
            One platform, every way to prepare
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Learn live, revise on demand and test yourself. It all connects, so your progress
            carries across.
          </p>
        </div>

        {/* Wide screens: the loop */}
        <div className="relative mt-10 hidden aspect-[1400/560] lg:block">
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 size-full" fill="none" aria-hidden>
            {centers.map((cx, i) => (
              <g key={cx}>
                <circle cx={cx} cy={CY} r={168} fill={pillars[i].fill} />
                <circle
                  cx={cx}
                  cy={CY}
                  r={190}
                  stroke="hsl(var(--primary))"
                  strokeOpacity={0.18}
                  strokeWidth={1.5}
                  strokeDasharray="3 9"
                  className="loop-ring"
                  style={{ animationDirection: i === 1 ? "reverse" : "normal" }}
                />
              </g>
            ))}
            <path
              id="loop-chain"
              d={chain}
              stroke="hsl(var(--primary))"
              strokeOpacity={0.75}
              strokeWidth={2}
              strokeDasharray="7 9"
              strokeLinecap="round"
              className="loop-dash"
            />
            {[0, 6].map((begin) => (
              <circle key={begin} r={5} fill="hsl(var(--highlight))" className="loop-runner">
                <animateMotion dur="12s" begin={`-${begin}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href="#loop-chain" />
                </animateMotion>
              </circle>
            ))}
          </svg>

          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="absolute top-1/2 w-[20%] -translate-x-1/2 -translate-y-1/2 text-center"
              style={{ left: `${(centers[i] / W) * 100}%` }}
            >
              <h3 className="font-display text-[2rem] leading-tight text-foreground">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              <Link
                href={p.href}
                className="mt-5 inline-flex rounded-lg bg-primary px-5 py-2.5 text-[15px] font-semibold text-primary-foreground transition hover:-translate-y-0.5"
              >
                Learn more
              </Link>
            </div>
          ))}

          {faces.slice(0, facePoints.length).map((m, i) => (
            <span key={m.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={at(...facePoints[i])}>
              <span className="relative block size-12 overflow-hidden rounded-full ring-4 ring-card shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.5)]">
                <Image src={m.image!} alt={m.name} fill sizes="48px" className="object-cover object-[center_18%]" />
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 size-3.5 rounded-full bg-online ring-2 ring-card" aria-hidden />
            </span>
          ))}

          {icons.map(({ icon: Icon, x, y }, i) => (
            <span
              key={i}
              aria-hidden
              className="absolute inline-flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md"
              style={at(x, y)}
            >
              <Icon className="size-4" />
            </span>
          ))}

          {notes.map((n) => (
            <span
              key={n.text}
              className="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg bg-card px-3 py-2 text-[13px] italic text-muted-foreground shadow-[0_8px_24px_-12px_hsl(var(--foreground)/0.35)] ring-1 ring-border"
              style={at(n.x, n.y)}
            >
              {n.text}
              {n.icon && <n.icon className="size-3.5 not-italic text-primary" aria-hidden />}
            </span>
          ))}
        </div>

        {/* Narrow screens: the same three, stacked */}
        <ul className="mt-10 grid gap-5 lg:hidden">
          {pillars.map((p) => (
            <li
              key={p.title}
              className="rounded-[2.5rem] border-2 border-dashed border-primary/40 px-6 py-8 text-center"
              style={{ background: p.fill }}
            >
              <h3 className="font-display text-3xl text-foreground">{p.title}</h3>
              <p className="mx-auto mt-2 max-w-sm text-muted-foreground">{p.text}</p>
              <Link
                href={p.href}
                className="mt-5 inline-flex rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
              >
                Learn more
              </Link>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <h3 className="font-display text-[2rem] leading-tight text-foreground md:text-[2.4rem]">
            Mentorship
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Personal guidance ties it all together: what to study, and when.
          </p>
          <Link
            href="/ai-doubt"
            className="mt-5 inline-flex font-semibold text-foreground underline decoration-highlight decoration-2 underline-offset-4 hover:decoration-4"
          >
            Ask a doubt
          </Link>
        </div>
      </div>
    </section>
  );
}
