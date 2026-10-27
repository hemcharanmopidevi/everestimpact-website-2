import type { ReactNode } from "react";
import { PageIntro } from "@/components/page-intro";

export function LegalPage({ title, lede, children }: { title: string; lede: string; children: ReactNode }) {
  return (
    <>
      <PageIntro narrow title={title} lede={lede} />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-lg leading-relaxed text-foreground [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </article>
    </>
  );
}
