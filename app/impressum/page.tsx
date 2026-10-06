import type { Metadata } from "next";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: true, follow: true },
};

// Rosa hinterlegte Angaben sind Platzhalter aus lib/site.ts – vor dem Livegang ausfüllen.
const T = ({ children }: { children: React.ReactNode }) => {
  const text = String(children);
  return text.startsWith("[") ? (
    <span className="todo">{text}</span>
  ) : (
    <>{text}</>
  );
};

export default function Impressum() {
  return (
    <article className="container legal">
      <h1>Impressum</h1>
      <p className="muted">
        Angaben gemäß Art. 10 des spanischen Gesetzes 34/2002 (LSSI-CE) und § 5
        DDG
      </p>

      <h2>Anbieter</h2>
      <address>
        {site.name}
        <br />
        Inhaber: <T>{legal.owner}</T>
        <br />
        <T>{legal.legalForm}</T>
        <br />
        <T>{legal.street}</T>
        <br />
        <T>{legal.zipCity}</T>
        <br />
        {legal.country}
      </address>

      <h2>Kontakt</h2>
      <p>
        Telefon / WhatsApp: <a href={site.phoneHref}>{site.phoneDisplay}</a>
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Steuerliche Angaben</h2>
      <p>
        NIF / NIE: <T>{legal.taxId}</T>
        <br />
        Umsatzsteuer-Identifikationsnummer: <T>{legal.vatId}</T>
      </p>

      <h2>Registereintrag</h2>
      <p>
        <T>{legal.register}</T>
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        <T>{legal.owner}</T>, Anschrift wie oben.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an
        Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir
        jedoch keine Gewähr. Preise und Verfügbarkeiten sind freibleibend;
        maßgeblich ist die jeweilige Buchungsbestätigung.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website enthält Links zu externen Angeboten Dritter (z. B.
        WhatsApp). Auf deren Inhalte haben wir keinen Einfluss; für sie ist
        stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von
        Rechtsverletzungen entfernen wir entsprechende Links umgehend.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Texte, Logo und Gestaltung dieser Website sind urheberrechtlich
        geschützt. Eine Verwendung außerhalb dieser Website bedarf unserer
        vorherigen schriftlichen Zustimmung.
      </p>

      <p className="muted small">Stand: {legal.lastUpdated}</p>
    </article>
  );
}
