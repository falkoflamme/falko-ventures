import type { Metadata } from "next";
import { Cormorant_Garamond, Sora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Falko Flamme — Venture Builder | 6 AI-Powered Ventures | Frankfurt",
  description:
    "Serial Founder · 15+ Jahre Luxury Hospitality · 6 live Ventures · Gebaut mit AI · ~€50/Monat Burn Rate. Portfolio, Pitch Decks und Vision.",
  openGraph: {
    title: "Falko Flamme — Venture Builder | 6 AI-Powered Ventures",
    description:
      "Serial Founder · 15+ Jahre Luxury Hospitality · 6 live Ventures · Gebaut mit AI · ~€50/Monat Burn Rate.",
    type: "website",
    images: ["/images/Falko_Flamme_Visionary.JPG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
