import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

const [lead, ...notes] = testimonials;

export function Testimonials() {
  return (
    <section id="reviews" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16">
        <SectionHeading
          title="What students say"
          lede="From students using the Everest Impact app. Every review on this page gave five stars."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-5">
            <blockquote className="font-display text-[2.5rem] leading-[1.02] text-foreground md:text-display-md">
              &ldquo;{lead.text}&rdquo;
            </blockquote>
            <figcaption className="mt-5 font-semibold text-muted-foreground">{lead.name}</figcaption>
          </figure>

          <ul className="columns-1 gap-8 sm:columns-2 lg:col-span-7">
            {notes.map((t) => (
              <li key={t.name} className="mb-6 break-inside-avoid border-l-2 border-highlight pl-4">
                <figure>
                  <blockquote className="text-xl leading-snug text-foreground">{t.text}</blockquote>
                  <figcaption className="mt-1.5 text-sm text-muted-foreground">{t.name}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
