import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ciconia | Airborne Collision Avoidance for Safer Skies",
  description:
    "Ciconia pioneers advanced collision avoidance systems — revolutionizing aerial safety with unique algorithms designed to prevent accidents while enabling multi-user airspace.",
  keywords: "collision avoidance, airspace safety, UAS, drone safety, aerial mobility, anti-collision",
  openGraph: {
    title: "Ciconia | Airborne Collision Avoidance for Safer Skies",
    description:
      "Pioneering airborne collision avoidance. Rigorously tested and field-proven worldwide.",
    url: "https://www.ciconia.flights",
    siteName: "Ciconia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
