import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { analytics, plausibleInit } from "@/lib/analytics";
import { montserrat, literata } from "@/lib/fonts";
import type { Lang } from "@/lib/routes";
import { site } from "@/lib/site";
import { texts } from "@/lib/texts";

// Titel und Beschreibung für Suchmaschinen und Link-Vorschauen, je Sprache.
export function siteMetadata(lang: Lang): Metadata {
  const t = texts[lang].meta;
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t.title,
      template: "%s | Gecko Swimschool Mallorca",
    },
    description: t.description,
    openGraph: {
      title: "Gecko Swimschool Mallorca",
      description: t.ogDescription,
      siteName: site.name,
      locale: t.ogLocale,
      type: "website",
      images: [
        {
          url: "/gecko-logo.png",
          width: 686,
          height: 765,
          alt: "Gecko Swimschool Mallorca",
        },
      ],
    },
  };
}

// Gemeinsamer Rahmen aller Seiten: Kopfzeile, Inhalt, Fußzeile.
export default function SiteLayout({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  return (
    <html lang={lang} className={`${montserrat.variable} ${literata.variable}`}>
      {/* Besucherstatistik nur im fertigen Build, nicht bei „npm run dev“. */}
      {process.env.NODE_ENV === "production" && (
        <head>
          <script
            id="plausible-init"
            dangerouslySetInnerHTML={{ __html: plausibleInit }}
          />
        </head>
      )}
      <body>
        <a href="#inhalt" className="skip-link">
          {texts[lang].header.skipLink}
        </a>
        <Header lang={lang} />
        <main id="inhalt">{children}</main>
        <Footer lang={lang} />
        {process.env.NODE_ENV === "production" && (
          <Script src={analytics.script} strategy="afterInteractive" />
        )}
      </body>
    </html>
  );
}
