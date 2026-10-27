import Link from "next/link";
import { buttonPrimary, textLink } from "@/lib/styles";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-[2] mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
        <p className="font-display text-[5rem] leading-none text-primary">404</p>
        <h1 className="mt-4 font-display text-display-sm text-foreground">Page not found</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          This page doesn&apos;t exist, or it has moved. Go back to the home page or browse
          our courses.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <Link href="/" className={buttonPrimary}>
            Go to the home page
          </Link>
          <Link href="/courses" className={textLink}>
            Browse courses
          </Link>
        </div>
      </div>
    </section>
  );
}
