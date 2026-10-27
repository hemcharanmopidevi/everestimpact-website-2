"use client";

import Link from "next/link";
import { Radio } from "lucide-react";
import { FormEvent, useState } from "react";
import { brand } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";
import { buttonPrimary, inputClass } from "@/lib/styles";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            title="Contact us"
            lede="Questions about a batch, your account or a payment? Send a message and the support team will call you back."
          />
          <div className="mt-10 border-t border-border pt-6">
            <h3 className="text-base font-semibold text-card-foreground">About {brand.name}</h3>
            <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">{brand.about}</p>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div role="status" className="flex gap-4 rounded-lg border border-border bg-background p-6">
              <Radio className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold text-foreground">Message sent</p>
                <p className="mt-1 text-muted-foreground">
                  The support team will call you on the number you gave, usually within one
                  working day.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block font-medium text-card-foreground">Name</span>
                <input required name="name" autoComplete="name" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-medium text-card-foreground">Phone number</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="10-digit mobile"
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-medium text-card-foreground">Email</span>
                <input required name="email" type="email" autoComplete="email" className={inputClass} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block font-medium text-card-foreground">How can we help?</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="For example: which batch suits a CGL 2027 beginner?"
                  className={`${inputClass} h-auto py-3`}
                />
              </label>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:col-span-2">
                <button type="submit" className={buttonPrimary}>
                  Send message
                </button>
                <p className="text-sm text-muted-foreground">
                  By sending, you agree to our{" "}
                  <Link href="/legal/terms" className="underline underline-offset-2">
                    terms
                  </Link>{" "}
                  and{" "}
                  <Link href="/legal/privacy" className="underline underline-offset-2">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
