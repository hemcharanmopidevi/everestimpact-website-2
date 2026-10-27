import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  lede,
  night = false,
  as: Tag = "h2",
  className,
}: {
  title: ReactNode;
  lede?: ReactNode;
  night?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Tag
        className={cn(
          "text-balance font-display text-display-sm md:text-display-md",
          night ? "text-night-foreground" : "text-primary"
        )}
      >
        {title}
      </Tag>
      {lede && (
        <p
          className={cn(
            "mt-4 max-w-prose text-lg leading-relaxed",
            night ? "text-night-muted" : "text-muted-foreground"
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
