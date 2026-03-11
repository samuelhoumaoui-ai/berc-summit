import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "BERC Energy Summit 2026 | Welcome to the Electrocene",
  description: "Join us April 20 & 22, 2026 for the BERC Energy Summit: Powering the Future of Energy Now! Explore decarbonization, AI & energy, and the human element of the energy transition.",
  keywords: "BERC, Energy Summit, Berkeley, Electrocene, clean energy, decarbonization, AI, climate",
  openGraph: {
    title: "BERC Energy Summit 2026 | Welcome to the Electrocene",
    description: "Powering the Future of Energy Now! April 20 & 22, 2026 at UC Berkeley",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@300;400;500;600;700;800&family=Zilla+Slab:wght@400;500;600;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
