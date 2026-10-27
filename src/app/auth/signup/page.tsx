"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AuthShell } from "@/components/auth-shell";
import { buttonPrimary, inputClass, textLink } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function SignUpPage() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <AuthShell
      title="Create your free account"
      lede="Create a free account to join live batches, take mocks and save courses."
      aside={{
        title: "What a free account gets you",
        points: [
          "The Super Saturday mock, free every week",
          "Free lessons before you buy a course",
          "The AI doubt solver and study planner",
        ],
      }}
    >
      {done ? (
        <div role="status" className="rounded-xl border-2 border-dashed border-primary/30 bg-lobe-2 p-6">
          <p className="font-semibold text-foreground">Account created</p>
          <p className="mt-1 text-muted-foreground">
            This is a demo. Connect this form to a backend to create real accounts.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block font-medium text-foreground">Full name</span>
            <input required autoComplete="name" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-medium text-foreground">Phone number</span>
            <input required type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit mobile" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-medium text-foreground">Email</span>
            <input required type="email" autoComplete="email" className={inputClass} />
          </label>
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block font-medium text-foreground">Password</span>
            <input required type="password" autoComplete="new-password" minLength={8} className={inputClass} />
            <span className="mt-1.5 block text-sm text-muted-foreground">At least 8 characters.</span>
          </label>
          <button type="submit" className={cn(buttonPrimary, "w-full sm:col-span-2")}>
            Create account
          </button>
        </form>
      )}
      <p className="mt-6 text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/signin" className={textLink}>
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
