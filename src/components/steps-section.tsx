import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { expertTeam, steps } from "@/data/site";

const faces = expertTeam.filter((m) => m.image).slice(0, 5);

/* ── Custom Infographic Illustrations (matching Image 2's vector aesthetic) ── */

// Step 01: Foundations & Arithmetic (geometric blocks, drafting ruler, math symbols)
function BasicsIllustration() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FEF3C7] via-[#FDE68A] to-[#FCD34D]/60 p-3 shadow-inner dark:from-[#3D2E14] dark:to-[#221A0C]">
      <svg viewBox="0 0 160 120" className="size-full max-h-[110px]" fill="none" aria-hidden>
        {/* Layered color foundation blocks */}
        <rect x="25" y="65" width="42" height="32" rx="6" fill="#F59E0B" className="shadow-sm" />
        <rect x="62" y="52" width="42" height="45" rx="6" fill="#EF4444" />
        <rect x="99" y="40" width="38" height="57" rx="6" fill="#3B82F6" />
        
        {/* Foundation block details */}
        <rect x="30" y="70" width="16" height="4" rx="2" fill="white" fillOpacity="0.7" />
        <rect x="67" y="58" width="16" height="4" rx="2" fill="white" fillOpacity="0.7" />
        <rect x="104" y="46" width="16" height="4" rx="2" fill="white" fillOpacity="0.7" />

        {/* Triangle ruler */}
        <polygon points="18,48 48,15 48,48" fill="#10B981" fillOpacity="0.85" />
        <polygon points="26,44 42,26 42,44" fill="#FEF3C7" />

        {/* Floating math glyphs */}
        <text x="122" y="28" fill="#1F1B3B" fontSize="14" fontWeight="bold" fontFamily="sans-serif">π</text>
        <text x="82" y="32" fill="#F59E0B" fontSize="15" fontWeight="bold" fontFamily="sans-serif">√x</text>
        <circle cx="138" cy="75" r="4" fill="#EF4444" />
        <circle cx="18" cy="85" r="3" fill="#3B82F6" />
      </svg>
    </div>
  );
}

// Step 02: Finish Tier-I syllabus (browser window with wireframe layout & play button)
function Tier1Illustration() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FEE2E2] via-[#FCE7F3] to-[#FBCFE8]/60 p-3 shadow-inner dark:from-[#3D1424] dark:to-[#220C14]">
      <svg viewBox="0 0 160 120" className="size-full max-h-[110px]" fill="none" aria-hidden>
        {/* Browser window body */}
        <rect x="20" y="15" width="120" height="90" rx="10" fill="#FF4F81" />
        <rect x="22" y="29" width="116" height="74" rx="8" className="fill-[#FFF9FA] dark:fill-[#24141E]" />
        
        {/* Top bar dots */}
        <circle cx="32" cy="22" r="3" fill="#FFE4E6" />
        <circle cx="42" cy="22" r="3" fill="#FFE4E6" />
        <circle cx="52" cy="22" r="3" fill="#FFE4E6" />

        {/* Lesson progress wireframe bars */}
        <rect x="32" y="38" width="56" height="6" rx="3" fill="#FF4F81" />
        <rect x="94" y="38" width="34" height="6" rx="3" fill="#10B981" />
        <rect x="32" y="50" width="76" height="6" rx="3" fill="#10B981" />
        <rect x="32" y="62" width="45" height="6" rx="3" fill="#FF4F81" />
        <rect x="83" y="62" width="45" height="6" rx="3" fill="#F59E0B" />
        <rect x="32" y="74" width="62" height="6" rx="3" fill="#3B82F6" />
        <rect x="100" y="74" width="28" height="6" rx="3" fill="#10B981" />

        {/* Floating play / check badge */}
        <circle cx="120" cy="88" r="14" fill="#10B981" />
        <polygon points="117,82 126,88 117,94" fill="white" />
      </svg>
    </div>
  );
}

// Step 03: Go deeper for Tier-II (layered cards, Sudarshanchakra target & bright bulb)
function Tier2Illustration() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FEF3C7] via-[#FFEDD5] to-[#FED7AA]/60 p-3 shadow-inner dark:from-[#3D2510] dark:to-[#22140A]">
      <svg viewBox="0 0 160 120" className="size-full max-h-[110px]" fill="none" aria-hidden>
        {/* Layered tilted note card */}
        <rect x="25" y="28" width="80" height="72" rx="8" fill="#F97316" transform="rotate(-6 65 64)" />
        <rect x="35" y="24" width="80" height="72" rx="8" fill="#FBBF24" />

        {/* Target concentric circles (Sudarshanchakra) */}
        <circle cx="75" cy="56" r="22" fill="#FFFBEB" stroke="#F97316" strokeWidth="2.5" />
        <circle cx="75" cy="56" r="14" fill="#FED7AA" stroke="#EF4444" strokeWidth="2" />
        <circle cx="75" cy="56" r="6" fill="#EF4444" />

        {/* Alert / idea badge */}
        <rect x="96" y="55" width="44" height="44" rx="10" fill="#10B981" />
        <path d="M110 77 L116 83 L128 71" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Live radio waves */}
        <path d="M40 38 A 12 12 0 0 1 52 50" stroke="#F97316" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

// Step 04: Practise with mock tests (lightbulb, pencil & examination board)
function MocksIllustration() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#ECFDF5] via-[#D1FAE5] to-[#A7F3D0]/60 p-3 shadow-inner dark:from-[#0E3324] dark:to-[#081F16]">
      <svg viewBox="0 0 160 120" className="size-full max-h-[110px]" fill="none" aria-hidden>
        {/* Soft backdrop blob */}
        <path d="M30 65 Q45 20 90 30 Q145 40 135 85 Q115 115 65 105 Z" fill="#34D399" fillOpacity="0.4" />

        {/* Lightbulb */}
        <path
          d="M75 35 C65 35 57 43 57 53 C57 60 62 66 65 70 L65 76 C65 78 67 80 69 80 L81 80 C83 80 85 78 85 76 L85 70 C88 66 93 60 93 53 C93 43 85 35 75 35 Z"
          fill="#FBBF24"
          stroke="#D97706"
          strokeWidth="2.5"
        />
        {/* Bulb base */}
        <rect x="69" y="80" width="12" height="4" rx="1" fill="#78716C" />
        <rect x="71" y="84" width="8" height="3" rx="1" fill="#A8A29E" />
        {/* Filament */}
        <path d="M72 58 L75 52 L78 58" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* Tilted pencil */}
        <g transform="rotate(35 115 65)">
          <rect x="105" y="25" width="14" height="65" rx="3" fill="#EF4444" />
          <polygon points="105,90 112,105 119,90" fill="#FDE68A" />
          <polygon points="110,100 112,105 114,100" fill="#1F1B3B" />
          <rect x="105" y="25" width="14" height="10" fill="#FDA4AF" />
        </g>

        {/* Sparkle lines */}
        <line x1="75" y1="24" x2="75" y2="18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="50" y1="36" x2="44" y2="32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="100" y1="36" x2="106" y2="32" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Step 05: Revise weak topics (planner calendar, score growth chart & bookmarks)
function ReviseIllustration() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#EEF2FF] via-[#E0E7FF] to-[#C7D2FE]/60 p-3 shadow-inner dark:from-[#1E1E45] dark:to-[#12122E]">
      <svg viewBox="0 0 160 120" className="size-full max-h-[110px]" fill="none" aria-hidden>
        {/* Calendar sheet */}
        <rect x="25" y="20" width="70" height="75" rx="8" fill="white" className="shadow-md" />
        <rect x="25" y="20" width="70" height="18" rx="6" fill="#6366F1" />
        <circle cx="36" cy="29" r="2.5" fill="white" />
        <circle cx="48" cy="29" r="2.5" fill="white" />
        
        {/* Calendar grid checks */}
        <rect x="33" y="46" width="12" height="10" rx="2" fill="#E0E7FF" />
        <rect x="52" y="46" width="12" height="10" rx="2" fill="#10B981" />
        <rect x="71" y="46" width="12" height="10" rx="2" fill="#E0E7FF" />
        <rect x="33" y="62" width="12" height="10" rx="2" fill="#10B981" />
        <rect x="52" y="62" width="12" height="10" rx="2" fill="#6366F1" />
        <rect x="71" y="62" width="12" height="10" rx="2" fill="#10B981" />

        {/* Score growth bar chart card */}
        <rect x="88" y="38" width="50" height="62" rx="8" fill="#1F1B3B" />
        <rect x="96" y="74" width="8" height="16" rx="2" fill="#F59E0B" />
        <rect x="108" y="60" width="8" height="30" rx="2" fill="#EC4899" />
        <rect x="120" y="48" width="8" height="42" rx="2" fill="#10B981" />

        {/* Growth line */}
        <path d="M100 72 L112 56 L124 44" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

// Step 06: Get selected (golden AIR 1 trophy cup & celebratory laurels)
function SelectedIllustration() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFF7ED] via-[#FFEDD5] to-[#FED7AA]/60 p-3 shadow-inner dark:from-[#3D2510] dark:to-[#22140A]">
      <svg viewBox="0 0 160 120" className="size-full max-h-[110px]" fill="none" aria-hidden>
        {/* Golden trophy base */}
        <path d="M60 92 L100 92 L94 80 L66 80 Z" fill="#D97706" />
        <rect x="55" y="92" width="50" height="8" rx="2" fill="#92400E" />

        {/* Trophy stem */}
        <rect x="75" y="70" width="10" height="14" rx="2" fill="#F59E0B" />

        {/* Trophy cup */}
        <path d="M52 30 L108 30 C108 55 92 70 80 70 C68 70 52 55 52 30 Z" fill="#FBBF24" />
        {/* Handles */}
        <path d="M52 38 C40 38 40 52 54 55" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M108 38 C120 38 120 52 106 55" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" fill="none" />

        {/* AIR 1 star badge */}
        <circle cx="80" cy="46" r="10" fill="#EF4444" />
        <text x="80" y="50" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">#1</text>

        {/* Sparkling stars */}
        <path d="M36 24 L38 30 L44 32 L38 34 L36 40 L34 34 L28 32 L34 30 Z" fill="#F59E0B" />
        <path d="M125 22 L127 27 L132 28 L127 30 L125 35 L123 30 L118 28 L123 27 Z" fill="#F59E0B" />
        <circle cx="120" cy="75" r="3.5" fill="#10B981" />
        <circle cx="40" cy="78" r="3" fill="#EC4899" />
      </svg>
    </div>
  );
}

const stepVisuals = [
  {
    num: "01",
    color: "#F59E0B",
    illustration: BasicsIllustration,
    btnClass: "bg-amber-100 text-amber-950 hover:bg-amber-500 hover:text-white dark:bg-amber-950/70 dark:text-amber-200",
  },
  {
    num: "02",
    color: "#10B981",
    illustration: Tier1Illustration,
    btnClass: "bg-emerald-100 text-emerald-950 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950/70 dark:text-emerald-200",
  },
  {
    num: "03",
    color: "#EF4444",
    illustration: Tier2Illustration,
    btnClass: "bg-rose-100 text-rose-950 hover:bg-rose-600 hover:text-white dark:bg-rose-950/70 dark:text-rose-200",
  },
  {
    num: "04",
    color: "#EC4899",
    illustration: MocksIllustration,
    btnClass: "bg-pink-100 text-pink-950 hover:bg-pink-600 hover:text-white dark:bg-pink-950/70 dark:text-pink-200",
  },
  {
    num: "05",
    color: "#6366F1",
    illustration: ReviseIllustration,
    btnClass: "bg-indigo-100 text-indigo-950 hover:bg-indigo-600 hover:text-white dark:bg-indigo-950/70 dark:text-indigo-200",
  },
  {
    num: "06",
    color: "#F97316",
    illustration: SelectedIllustration,
    btnClass: "bg-orange-100 text-orange-950 hover:bg-orange-500 hover:text-white dark:bg-orange-950/70 dark:text-orange-200",
  },
];

export function StepsSection() {
  return (
    <section id="steps" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/80 bg-[#FFFDF9] p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16 dark:bg-[#1A162B]">
        {/* Soft decorative background shapes matching Image 2 */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Top-left star */}
          <svg className="absolute -left-6 -top-6 size-36 text-amber-200/50 dark:text-amber-500/10" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C50 30 70 50 100 50 C70 50 50 70 50 100 C50 70 30 50 0 50 C30 50 50 30 50 0 Z" />
          </svg>
          {/* Top-right soft peach blob */}
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-rose-200/30 blur-3xl dark:bg-rose-900/15" />
          {/* Bottom-left soft mint blob */}
          <div className="absolute -bottom-16 -left-16 size-64 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/15" />
          {/* Bottom-right soft amber blob */}
          <div className="absolute -bottom-16 -right-16 size-64 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-900/15" />
        </div>

        {/* Centered Header Section matching Image 2 */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="font-extrabold uppercase tracking-[0.25em] text-[#FF4F81] dark:text-[#FF7096] text-xs sm:text-sm">
            SIX-STEP PREPARATION PROCESS
          </p>
          <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-[#1F1B3B] sm:text-4xl lg:text-5xl dark:text-white">
            YOUR PATH TO A GOVERNMENT JOB
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Six steps from your first class to your final result. Guided by Hyderabad&apos;s best faculty with a clear roadmap so you always know what to study next.
          </p>

          {/* Faculty avatar strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="flex -space-x-2.5">
              {faces.map((m) => (
                <span key={m.id} className="relative size-9 overflow-hidden rounded-full ring-2 ring-white dark:ring-[#1A162B]">
                  <Image src={m.image!} alt={m.name} fill sizes="36px" className="object-cover object-[center_18%]" />
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Guided by {expertTeam.length} faculty.{" "}
              <Link href="/#faculty" className="font-semibold text-foreground underline decoration-[#FF4F81] decoration-2 underline-offset-4 hover:text-[#FF4F81]">
                Meet them
              </Link>
            </p>
          </div>
        </div>

        {/* ── Wide Screens (lg+): Alternating Pipeline Infographic ── */}
        <div className="relative z-10 mt-16 hidden lg:block">
          {/* Continuous central horizontal line connecting through the graphics */}
          <div className="absolute left-6 right-6 top-[220px] h-1 -translate-y-1/2 rounded-full bg-[#1F1B3B]/15 dark:bg-white/15" />

          <div className="grid grid-cols-6 gap-5">
            {steps.map((step, i) => {
              const visual = stepVisuals[i];
              const Illustration = visual.illustration;
              const isOdd = i % 2 === 0; // Steps 1, 3, 5: Content Top, Illustration Bottom

              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  {isOdd ? (
                    <>
                      {/* Top content block */}
                      <div className="flex h-[200px] w-full flex-col justify-end text-left">
                        <span className="font-display text-4xl font-black leading-none" style={{ color: visual.color }}>
                          {visual.num}
                        </span>
                        <h3 className="mt-2 font-display text-[1.1rem] font-bold leading-tight text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                        <Link
                          href={step.href}
                          className={`mt-2.5 inline-flex items-center gap-1 self-start rounded-full px-3 py-1 text-[11px] font-bold transition ${visual.btnClass}`}
                        >
                          <span>{step.cta}</span>
                          <ChevronRight className="size-3" />
                        </Link>
                      </div>

                      {/* Dashed connector line down to center track */}
                      <div className="my-1.5 flex h-10 w-full flex-col items-center justify-center">
                        <div
                          className="h-full w-0.5 border-l-2 border-dashed"
                          style={{ borderColor: visual.color }}
                        />
                      </div>

                      {/* Central node dot sitting on the horizontal track */}
                      <div
                        className="relative z-20 size-4 -translate-y-2 rounded-full border-2 border-white shadow-sm dark:border-[#1A162B]"
                        style={{ backgroundColor: visual.color, boxShadow: `0 0 0 2px ${visual.color}` }}
                      />

                      {/* Bottom illustration card */}
                      <div className="mt-2 h-[135px] w-full max-w-[170px] transition duration-300 hover:-translate-y-1">
                        <Illustration />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Top illustration card */}
                      <div className="mb-2 h-[135px] w-full max-w-[170px] transition duration-300 hover:-translate-y-1">
                        <Illustration />
                      </div>

                      {/* Central node dot sitting on the horizontal track */}
                      <div
                        className="relative z-20 size-4 translate-y-2 rounded-full border-2 border-white shadow-sm dark:border-[#1A162B]"
                        style={{ backgroundColor: visual.color, boxShadow: `0 0 0 2px ${visual.color}` }}
                      />

                      {/* Dashed connector line down to bottom text block */}
                      <div className="my-1.5 flex h-10 w-full flex-col items-center justify-center">
                        <div
                          className="h-full w-0.5 border-l-2 border-dashed"
                          style={{ borderColor: visual.color }}
                        />
                      </div>

                      {/* Bottom content block */}
                      <div className="flex h-[200px] w-full flex-col justify-start text-left">
                        <span className="font-display text-4xl font-black leading-none" style={{ color: visual.color }}>
                          {visual.num}
                        </span>
                        <h3 className="mt-2 font-display text-[1.1rem] font-bold leading-tight text-foreground">
                          {step.title}
                        </h3>
                        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                          {step.text}
                        </p>
                        <Link
                          href={step.href}
                          className={`mt-2.5 inline-flex items-center gap-1 self-start rounded-full px-3 py-1 text-[11px] font-bold transition ${visual.btnClass}`}
                        >
                          <span>{step.cta}</span>
                          <ChevronRight className="size-3" />
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Medium & Small Screens (< lg): Alternating Vertical Roadmap ── */}
        <div className="relative z-10 mt-12 lg:hidden">
          {/* Central vertical line */}
          <div className="absolute bottom-6 left-1/2 top-6 hidden w-1 -translate-x-1/2 rounded-full bg-[#1F1B3B]/15 sm:block dark:bg-white/15" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => {
              const visual = stepVisuals[i];
              const Illustration = visual.illustration;
              const isEven = i % 2 === 1;

              return (
                <div key={step.id} className="relative sm:grid sm:grid-cols-2 sm:items-center sm:gap-8">
                  {/* Central node on line */}
                  <div
                    className="absolute left-1/2 top-1/2 z-20 hidden size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow sm:flex dark:border-[#1A162B]"
                    style={{ backgroundColor: visual.color, boxShadow: `0 0 0 2px ${visual.color}` }}
                  >
                    {i + 1}
                  </div>

                  {/* Left Column */}
                  <div className={isEven ? "sm:order-2 sm:pl-6" : "sm:order-1 sm:pr-6 sm:text-right"}>
                    <div className={isEven ? "text-left" : "sm:text-right text-left"}>
                      <span className="font-display text-4xl font-black leading-none" style={{ color: visual.color }}>
                        {visual.num}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.text}
                      </p>
                      <Link
                        href={step.href}
                        className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold transition ${visual.btnClass}`}
                      >
                        <span>{step.cta}</span>
                        <ChevronRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column (Illustration) */}
                  <div className={isEven ? "mt-4 sm:order-1 sm:mt-0 sm:pr-6" : "mt-4 sm:order-2 sm:mt-0 sm:pl-6"}>
                    <div className="mx-auto h-[140px] w-full max-w-[260px]">
                      <Illustration />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom banner action button */}
        <div className="relative z-10 mt-14 flex justify-center">
          <Link
            href={steps[0].href}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-[0_12px_28px_-10px_hsl(var(--primary)/0.7)] transition hover:-translate-y-0.5"
          >
            <span>Start with step 1</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
