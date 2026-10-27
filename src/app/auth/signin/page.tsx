"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AuthShell } from "@/components/auth-shell";
import { buttonPrimary, inputClass, textLink } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <AuthShell
      title="Welcome back"
      lede="Sign in to continue your classes, mocks and study plan."
      aside={{
        title: "Pick up where you stopped",
        points: [
          "Your live class timetable and recordings",
          "Every mock score, with the questions you missed",
          "Today's targets from your study planner",
        ],
      }}
    >
      {done ? (
        <div role="status" className="rounded-xl border-2 border-dashed border-primary/30 bg-lobe-2 p-6">
          <p className="font-semibold text-foreground">Signed in</p>
          <p className="mt-1 text-muted-foreground">
            This is a demo. Connect an auth provider to keep students signed in.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-1.5 block font-medium text-foreground">Phone number or email</span>
            <input required autoComplete="username" className={inputClass} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-medium text-foreground">Password</span>
            <input required type="password" autoComplete="current-password" className={inputClass} />
          </label>
          <button type="submit" className={cn(buttonPrimary, "w-full")}>
            Sign in
          </button>
        </form>
      )}
      <p className="mt-6 text-muted-foreground">
        New to Everest Impact?{" "}
        <Link href="/auth/signup" className={textLink}>
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}
