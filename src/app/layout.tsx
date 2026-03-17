import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const SITE_URL = "https://bercsummit2026.com";

export const metadata: Metadata = {
  title: "BERC Energy Summit 2026 | Welcome to the Electrocene",
  description:
    "Join us April 20 & 22, 2026 for the BERC Energy Summit 2026: Powering the Future of Energy Now! The largest student-run energy conference on the West Coast. Explore decarbonization, AI & energy, and the human element of the energy transition at UC Berkeley.",
  keywords:
    "BERC Energy Summit 2026, BERC, Berkeley Energy Summit, Electrocene, UC Berkeley energy conference, clean energy, decarbonization, AI energy, climate, student energy conference, West Coast energy",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/EnergySummitLogo-transp-300x156-2-1.png",
    apple: "/images/EnergySummitLogo-transp-300x156-2-1.png",
  },
  openGraph: {
    title: "BERC Energy Summit 2026 | Welcome to the Electrocene",
    description:
      "The largest student-run energy conference on the West Coast. April 20 & 22, 2026 at UC Berkeley Haas School of Business.",
    type: "website",
    url: SITE_URL,
    siteName: "BERC Energy Summit 2026",
    images: [
      {
        url: "/images/EnergySummitLogo-transp-300x156-2-1.png",
        width: 300,
        height: 156,
        alt: "BERC Energy Summit 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BERC Energy Summit 2026 | Welcome to the Electrocene",
    description:
      "The largest student-run energy conference on the West Coast. April 20 & 22, 2026 at UC Berkeley.",
    images: ["/images/EnergySummitLogo-transp-300x156-2-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "BERC Energy Summit 2026: Welcome to the Electrocene",
  description:
    "The largest student-run energy conference on the West Coast. Join us for two days of panels, workshops, and networking focused on decarbonization, AI & energy, and the human element of the energy transition.",
  startDate: "2026-04-20",
  endDate: "2026-04-22",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Haas School of Business, UC Berkeley",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2220 Piedmont Ave",
      addressLocality: "Berkeley",
      addressRegion: "CA",
      postalCode: "94720",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Berkeley Energy and Resources Collaborative (BERC)",
    url: "https://berc.berkeley.edu/",
  },
  url: SITE_URL,
  image: `${SITE_URL}/images/EnergySummitLogo-transp-300x156-2-1.png`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
