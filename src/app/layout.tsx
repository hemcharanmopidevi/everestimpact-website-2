import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Header } from "@/components/header";
import { ParticleField } from "@/components/particle-field";
import { Footer } from "@/components/footer";
import { SupportFab } from "@/components/support-fab";
import { ThemeProvider } from "@/components/theme-provider";
import { brand } from "@/data/site";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${brand.name}: SSC coaching in Hyderabad`,
    template: `%s | ${brand.name}`,
  },
  description:
    "SSC CGL, CHSL, GD, RRB and SI coaching in Hyderabad. Live batches, recorded courses and mock tests.",
  icons: {
    icon: brand.logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ParticleField />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <div className="relative" style={{ zIndex: 20 }}>
              <Footer />
            </div>
            <SupportFab />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
