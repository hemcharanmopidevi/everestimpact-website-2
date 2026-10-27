import Link from "next/link";
import { recordResults, successStories } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

const alsoSigned = successStories.filter(
  (story) => !recordResults.some((result) => result.name === story.name)
);

export function Results() {
  return (
    <section id="results" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            title="Our results"
            lede="Students who prepared with us and got selected, with the all-India rank (AIR) each one earned."
          />
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="text-sm font-semibold text-foreground">More selections</h3>
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {alsoSigned.map((story) => (
                <li key={story.id}>
                  <span className="font-medium text-foreground">{story.name}</span>,{" "}
                  {story.achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ol className="overflow-hidden rounded-lg border border-border bg-card">
            {recordResults.map((result) => (
              <li
                key={result.id}
                className="grid grid-cols-[3.5rem_1fr] items-center gap-x-5 border-b border-border px-5 py-4 last:border-b-0 sm:grid-cols-[4.5rem_1fr_auto] sm:px-7"
              >
                <p className="font-display leading-none text-primary">
                  <span className="block text-sm font-semibold">
                    AIR
                  </span>
                  <span className="text-[3.5rem] tabular-nums sm:text-[4rem]">{result.rank}</span>
                </p>
                <div>
                  <p className="font-display text-[1.75rem] leading-none text-card-foreground">
                    {result.name}
                  </p>
                  <p className="mt-1.5 text-muted-foreground">
                    {result.exam}, {result.year}
                  </p>
                </div>
                {result.interview && (
                  <Link
                    href={result.interview}
                    className="col-start-2 mt-3 text-sm font-semibold text-foreground underline decoration-highlight decoration-2 underline-offset-4 sm:col-start-auto sm:mt-0"
                  >
                    Watch the interview
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
