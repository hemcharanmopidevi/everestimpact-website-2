"use client";

import Link from "next/link";
import { Headphones, Sparkles, X } from "lucide-react";
import { useState } from "react";

export function SupportFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div id="help-menu" className="w-64 overflow-hidden rounded-lg border border-border bg-card shadow-[0_16px_40px_-16px_hsl(var(--foreground)/0.45)]">
          <p className="border-b border-border px-4 py-3 font-semibold text-card-foreground">
            Need help?
          </p>
          <div className="flex flex-col p-1.5">
            <Link
              href="/ai-doubt"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-card-foreground hover:bg-muted"
            >
              <Sparkles className="size-4 text-primary" aria-hidden />
              Ask the AI doubt solver
            </Link>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-card-foreground hover:bg-muted"
            >
              <Headphones className="size-4 text-primary" aria-hidden />
              Message support
            </Link>
          </div>
        </div>
      )}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="help-menu"
        aria-label={open ? "Close help menu" : "Get help"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-highlight shadow-[0_10px_24px_-8px_hsl(var(--primary)/0.7)] transition hover:brightness-110"
      >
        {open ? <X className="size-6" /> : <Headphones className="size-6" />}
      </button>
    </div>
  );
}
