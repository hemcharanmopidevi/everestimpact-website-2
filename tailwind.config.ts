import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          foreground: "hsl(var(--ink-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        night: {
          DEFAULT: "hsl(var(--night))",
          foreground: "hsl(var(--night-foreground))",
          muted: "hsl(var(--night-muted))",
          contour: "hsl(var(--night-contour))",
        },
        contour: "hsl(var(--contour))",
        highlight: "hsl(var(--highlight))",
        online: "hsl(var(--online))",
        lobe: {
          1: "hsl(var(--lobe-1))",
          2: "hsl(var(--lobe-2))",
          3: "hsl(var(--lobe-3))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Classic typographic scale: 12 14 16 18 21 24 36 48 60 72
        "display-sm": ["2.25rem", { lineHeight: "1.02" }],
        "display-md": ["3.25rem", { lineHeight: "0.98" }],
        "display-lg": ["3.75rem", { lineHeight: "1.04" }],
        "display-xl": ["4.5rem", { lineHeight: "1.02" }],
      },
      maxWidth: {
        prose: "34em",
      },
    },
  },
  plugins: [],
};
export default config;
