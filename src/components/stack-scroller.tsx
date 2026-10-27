"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";

/**
 * Smooth Swipe-Up Transition Scroller:
 * - Sections flow naturally without sticky overlap or premature clipping.
 * - Each section smoothly glides and swipes up into view as the user scrolls.
 * - Hardware-accelerated with Apple smooth cubic-bezier easing.
 * - Respects prefers-reduced-motion.
 */
export function StackScroller({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>(":scope > .stack-card")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    // Always make the hero (first card) instantly visible
    if (cards.length > 0) {
      cards[0].classList.add("is-visible");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observe subsequent sections
    cards.slice(1).forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="stack-root flex flex-col gap-10 md:gap-14 pb-16">
      {Children.toArray(children).map((child, i) => (
        <div
          key={i}
          className="stack-card swipe-up-section"
          style={{ transitionDelay: i === 0 ? "0ms" : "40ms" }}
        >
          <div className="stack-card-inner">{child}</div>
        </div>
      ))}
    </div>
  );
}

