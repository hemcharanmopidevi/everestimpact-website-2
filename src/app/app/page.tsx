import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Download the app",
  description: "Get the Everest Impact app for iPhone or Android.",
};

const options = [
  { id: "android", name: "Android", store: "Google Play" },
  { id: "ios", name: "iPhone", store: "App Store" },
] as const;

export default function DownloadAppPage({ searchParams }: { searchParams: { platform?: string } }) {
  const platform = searchParams.platform === "ios" ? "ios" : "android";

  return (
    <>
      <PageIntro
        narrow
        title="Get the Everest Impact app"
        lede="Live classes, mocks and recorded courses on your phone. Choose your phone type."
      />
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {options.map((o) => (
            <Link
              key={o.id}
              href={`/app?platform=${o.id}`}
              aria-current={platform === o.id ? "page" : undefined}
              className={cn(
                "rounded-2xl border-2 px-6 py-5 transition",
                platform === o.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-dashed border-primary/35 bg-card text-card-foreground hover:border-solid hover:border-primary"
              )}
            >
              <span className="block text-sm opacity-80">{o.name}</span>
              <span className="mt-1 block font-display text-2xl">{o.store}</span>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">
          The {platform === "ios" ? "App Store" : "Google Play"} listing opens here when the app is
          published.
        </p>
      </div>
    </>
  );
}
