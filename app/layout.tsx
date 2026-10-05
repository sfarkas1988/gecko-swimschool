import type { Metadata, Viewport } from "next";
import { Montserrat, Literata } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

// next/font lädt die Schriften beim Build herunter und liefert sie von der eigenen Domain aus.
// Es werden also keine Daten an Google übertragen (wichtig für DSGVO).
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gecko Swimschool Mallorca – Mobile Kinderschwimmschule",
    template: "%s | Gecko Swimschool Mallorca",
  },
  description:
    "Privater Schwimmunterricht für Kinder auf ganz Mallorca – sicher, ruhig und diskret bei Ihnen am Pool. Deutsche und Schweizer Schwimmabzeichen.",
  openGraph: {
    title: "Gecko Swimschool Mallorca",
    description: "Mobile Kinderschwimmschule auf Mallorca – wir kommen zu Ihrem Pool.",
    url: site.url,
    siteName: site.name,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/gecko-logo.png", width: 686, height: 765, alt: "Gecko Swimschool Mallorca" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#9DFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${montserrat.variable} ${literata.variable}`}>
      <body>
        <a href="#inhalt" className="skip-link">
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
