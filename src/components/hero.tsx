import Image from "next/image";
import Link from "next/link";
import { courses, expertTeam, recordResults } from "@/data/site";
import { initials } from "@/lib/utils";

const nextBatch = courses.find((c) => c.id === "592");
const founder = expertTeam.find((m) => m.role === "Founder");
const liveFaculty = expertTeam.filter((m) => m.image && m.role !== "Founder").slice(0, 6);
const toppers = recordResults.filter((r) => r.interview && r.rank === 1).slice(0, 2);
const airOnes = recordResults.filter((r) => r.rank === 1).length;

function ProgressRing() {
  const r = 46;
  const circumference = 2 * Math.PI * r;
  const share = airOnes / recordResults.length;
  return (
    <div className="flex size-36 items-center justify-center rounded-full bg-card/90 shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.5)] ring-8 ring-card/50 backdrop-blur">
      <svg viewBox="0 0 120 120" className="absolute size-32 -rotate-90" aria-hidden>
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--primary))" />
            <stop offset="1" stopColor="hsl(var(--highlight))" />
          </linearGradient>
        </defs>
        <circle cx={60} cy={60} r={r} fill="none" stroke="hsl(var(--border))" strokeWidth={4} />
        <circle
          cx={60}
          cy={60}
          r={r}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeDasharray={`${circumference * share} ${circumference}`}
        />
      </svg>
      <p className="relative text-center leading-tight">
        <span className="block font-display text-2xl text-primary">
          {airOnes}/{recordResults.length}
        </span>
        <span className="mt-0.5 block text-[11px] text-muted-foreground">
          toppers ranked
          <br />
          AIR 1 in 2023
        </span>
      </p>
    </div>
  );
}

function ToppersCard() {
  return (
    <div className="w-64 rounded-2xl bg-[#1F1B3B]/70 p-4 text-white shadow-xl backdrop-blur-md">
      <p className="font-display text-lg leading-tight">Our toppers</p>
      <p className="text-xs text-highlight">Selected in 2023</p>
      <ul className="mt-3 space-y-3">
        {toppers.map((t) => (
          <li key={t.id} className="flex items-center gap-3">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white/90 text-xs font-bold text-[#1F1B3B]">
              {initials(t.name)}
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-semibold">{t.name}</span>
              <span className="block text-xs text-white/75">
                {t.exam}, AIR {t.rank}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LiveGrid({ compact = false }: { compact?: boolean }) {
  const others = expertTeam.length - liveFaculty.length;
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="rounded bg-[#E5484D] px-1.5 py-0.5 text-[11px] font-bold text-white">LIVE</span>
        Today&apos;s classes
      </p>
      <ul className={compact ? "mt-3 grid grid-cols-3 gap-3" : "mt-3 grid grid-cols-2 gap-3"}>
        {liveFaculty.map((m, i) => (
          <li key={m.id} className="relative">
            <span
              className={
                i === 0
                  ? "relative block aspect-square w-full overflow-hidden rounded-xl ring-2 ring-highlight ring-offset-2 ring-offset-card"
                  : "relative block aspect-square w-full overflow-hidden rounded-xl"
              }
            >
              <Image src={m.image!} alt={`${m.name}, ${m.role}`} fill sizes="110px" className="object-cover object-[center_18%]" />
            </span>
            <span className="absolute -bottom-1 left-1/2 size-3 -translate-x-1/2 rounded-full bg-online ring-2 ring-card" aria-hidden />
          </li>
        ))}
      </ul>
      <Link href="/#faculty" className="group mt-4 flex items-center gap-2">
        <span className="text-sm font-semibold text-highlight group-hover:underline">
          + {others} more faculty
        </span>
      </Link>
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FAD4D8] via-[#EBD9F3] to-[#FBF8FF] shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 grid-cols-1 lg:min-h-[600px] lg:grid-cols-[1.05fr_1fr] dark:from-[#3A2348] dark:via-[#2A2450] dark:to-[#1C1838]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-10 lg:py-16 lg:pl-16">
          <h1 className="max-w-[11em] bg-gradient-to-r from-primary via-[#6B3FA0] to-highlight bg-clip-text font-display text-[2.7rem] leading-[1.04] text-transparent sm:text-[3.4rem] lg:text-[4rem]">
            Clear your SSC exam with Hyderabad&apos;s best teachers
          </h1>
          <p className="mt-6 max-w-[33rem] text-lg leading-relaxed text-foreground/85">
            Live batches, recorded courses and mock tests for SSC CGL, CHSL, GD, RRB and SI, with
            faculty who answer your doubts and a clear plan from your first class to your result.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/auth/signup"
              className="inline-flex rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[0_12px_30px_-12px_hsl(var(--primary)/0.8)] transition hover:-translate-y-0.5"
            >
              Join a free class
            </Link>
            <Link
              href="/courses"
              className="text-base font-bold text-foreground underline decoration-highlight decoration-2 underline-offset-[6px] hover:decoration-4"
            >
              Browse courses
            </Link>
          </div>
          {nextBatch && (
            <Link
              href={`/courses/${nextBatch.slug}`}
              className="group mt-8 inline-flex max-w-full items-center gap-2.5 self-start text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="size-2.5 shrink-0 rounded-full bg-online" aria-hidden />
              <span className="truncate">
                <span className="font-semibold text-foreground">New batch: </span>
                {nextBatch.title}
              </span>
            </Link>
          )}
        </div>

        {/* Wide screens: founder portrait with floating cards and today's live faculty */}
        <div className="relative hidden lg:block">
          {founder?.image && (
            <div className="absolute bottom-0 left-[10%] h-[88%] w-[56%] [mask-image:radial-gradient(ellipse_50%_47%_at_50%_46%,black_58%,transparent_100%)]">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.role}`}
                fill
                priority
                sizes="320px"
                className="object-cover object-[center_15%]"
              />
            </div>
          )}
          <div className="absolute left-[2%] top-[30%]">
            <ProgressRing />
          </div>
          <div className="absolute bottom-[12%] left-[4%]">
            <ToppersCard />
          </div>
          <div className="absolute right-8 top-1/2 w-[34%] max-w-[230px] -translate-y-1/2">
            <LiveGrid />
          </div>
        </div>

        {/* Narrow screens: today's live faculty under the text */}
        <div className="relative px-6 pb-10 sm:px-10 lg:hidden">
          <div className="rounded-2xl bg-card/80 p-5 backdrop-blur">
            <LiveGrid compact />
          </div>
        </div>
      </div>
    </section>
  );
}
