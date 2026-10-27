import Image from "next/image";
import { expertTeam } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

const founder = expertTeam.find((m) => m.role === "Founder");
const faculty = expertTeam.filter((m) => m.image && m.role !== "Founder");
const foundingTeam = expertTeam.filter((m) => !m.image);

export function ExpertTeam() {
  return (
    <section id="faculty" className="px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 shadow-[0_25px_60px_-15px_rgba(15,12,40,0.18)] ring-1 ring-border/60 sm:p-10 md:py-16">
        <SectionHeading
          title="Our faculty"
          lede="Experienced teachers for Maths, English, Reasoning and General Studies, led by our founder."
        />

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {founder?.image && (
            <figure className="col-span-2 sm:col-span-3 lg:col-span-2 lg:row-span-2 lg:flex lg:flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted lg:aspect-auto lg:flex-1">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(min-width: 1024px) 520px, 100vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-[1.75rem] leading-none text-card-foreground">
                  {founder.name}
                </p>
                <p className="mt-1.5 text-muted-foreground">
                  {founder.role}, {founder.detail}
                </p>
              </figcaption>
            </figure>
          )}

          {faculty.map((member) => (
            <figure key={member.id}>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={member.image!}
                  alt={member.name}
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
                />
              </div>
              <figcaption className="mt-3">
                <p className="font-display text-2xl leading-none text-card-foreground">
                  {member.name}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {member.role}
                  {member.detail && member.detail !== "Senior Faculty" ? `, ${member.detail}` : ""}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <h3 className="text-base font-semibold text-card-foreground">The founding team</h3>
          <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foundingTeam.map((member) => (
              <li key={member.id}>
                <p className="font-semibold text-card-foreground">{member.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {member.role}
                  {member.detail ? `. ${member.detail}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
