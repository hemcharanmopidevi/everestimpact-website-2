"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { brand } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Courses", href: "/courses" },
  { label: "Test series", href: "/test-series" },
  { label: "Results", href: "/#results" },
  { label: "Faculty", href: "/#faculty" },
];

const toolLinks = [
  { label: "AI doubt solver", note: "Ask a question, get a study plan", href: "/ai-doubt" },
  { label: "Study planner", note: "Daily targets, ticked off", href: "/planner" },
  { label: "Result dashboard", note: "Your courses and mock scores", href: "/dashboard" },
  { label: "Saved courses", note: "Courses you marked with a heart", href: "/wishlist" },
  { label: "YouTube playlist", note: "Free lessons and marathons", href: "/videos" },
];

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${brand.name} home`}>
      <span className="relative size-10 overflow-hidden rounded-full bg-white ring-1 ring-border">
        <Image
          src={brand.logo}
          alt=""
          fill
          sizes="40px"
          priority
          className="scale-[1.3] object-cover"
          style={{ transformOrigin: "46% 55%" }}
        />
      </span>
      <span className="whitespace-nowrap font-display text-[1.3rem] leading-none text-foreground sm:text-[1.6rem]">
        {brand.name}
      </span>
    </Link>
  );
}

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setToolsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!toolsOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!toolsRef.current?.contains(e.target as Node)) setToolsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setToolsOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [toolsOpen]);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
    setOpen(false);
  };

  const searchField = (id: string, className?: string) => (
    <form onSubmit={onSearch} role="search" className={cn("relative", className)}>
      <label htmlFor={id} className="sr-only">
        Search courses
      </label>
      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <input
        id={id}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search courses"
        className="h-10 w-full rounded-md border border-border bg-card pl-9 pr-3 text-sm text-card-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none"
      />
    </form>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 lg:h-[72px] lg:gap-8">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="-ml-2 inline-flex size-10 shrink-0 items-center justify-center rounded-md text-foreground hover:bg-muted lg:hidden"
          >
            <Menu className="size-5" />
          </button>

          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 font-medium transition hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div ref={toolsRef} className="relative">
              <button
                type="button"
                aria-expanded={toolsOpen}
                aria-controls="tools-menu"
                onClick={() => setToolsOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-md px-3 py-2 font-medium transition hover:text-primary",
                  toolsOpen ? "text-primary" : "text-foreground"
                )}
              >
                Study tools
                <ChevronDown className={cn("size-4 transition", toolsOpen && "rotate-180")} />
              </button>
              {toolsOpen && (
                <div
                  id="tools-menu"
                  className="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border border-border bg-card p-1.5 shadow-[0_12px_32px_-12px_hsl(var(--foreground)/0.35)]"
                >
                  {toolLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setToolsOpen(false)}
                      className="block rounded-md px-3 py-2.5 transition hover:bg-muted"
                    >
                      <span className="block font-medium text-card-foreground">{link.label}</span>
                      <span className="block text-sm text-muted-foreground">{link.note}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {searchField("search-desktop", "hidden w-44 md:block xl:w-56")}
            <ThemeToggle className="hidden sm:inline-flex" />
            <Link
              href="/auth/signin"
              className="inline-flex items-center whitespace-nowrap rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 sm:px-4"
            >
              Sign in
            </Link>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-night/50 transition lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        aria-label="Menu"
        className={cn(
          "fixed left-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-card shadow-xl transition-[transform,visibility] duration-300 lg:hidden",
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 items-center justify-center rounded-md hover:bg-muted"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          {searchField("search-mobile", "mb-6")}

          <nav aria-label="Main" className="mb-6 flex flex-col">
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 font-display text-2xl leading-none text-card-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mb-6 flex items-center justify-between rounded-md border border-border px-3 py-1">
            <span className="font-medium text-card-foreground">Dark mode</span>
            <ThemeToggle />
          </div>

          <h2 className="mb-2 text-sm font-semibold text-muted-foreground">Study tools</h2>
          <nav aria-label="Study tools" className="flex flex-col gap-1">
            {toolLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 hover:bg-muted"
              >
                <span className="block font-medium text-card-foreground">{link.label}</span>
                <span className="block text-sm text-muted-foreground">{link.note}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
