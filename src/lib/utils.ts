import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom display sizes so they aren't mistaken for text colours.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display-sm", "display-md", "display-lg", "display-xl"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function discountPercent(price: number, mrp: number) {
  if (!mrp || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 2 || !part.endsWith("."))
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}
