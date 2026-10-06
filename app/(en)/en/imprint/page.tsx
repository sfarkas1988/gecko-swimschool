import type { Metadata } from "next";
import { alternates, routes } from "@/lib/routes";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal notice",
  robots: { index: true, follow: true },
  alternates: alternates("imprint", "en"),
};

// Englische Fassung von app/(de)/impressum/page.tsx – Änderungen bitte in beiden Dateien.
// Rosa hinterlegte Angaben sind Platzhalter aus lib/site.ts – vor dem Livegang ausfüllen.
const T = ({ children }: { children: React.ReactNode }) => {
  const text = String(children);
  return text.startsWith("[") ? (
    <span className="todo">{text}</span>
  ) : (
    <>{text}</>
  );
};

export default function Imprint() {
  return (
    <article className="container legal">
      <h1>Legal notice</h1>
      <p className="muted">
        Information pursuant to Art. 10 of Spanish Act 34/2002 (LSSI-CE) and § 5
        of the German Digital Services Act (DDG)
      </p>
      <p className="muted small">
        This English version is a translation provided for your convenience. In
        case of doubt, the{" "}
        <a href={routes.imprint.de} hrefLang="de">
          German version
        </a>{" "}
        applies.
      </p>

      <h2>Provider</h2>
      <address>
        {site.name}
        <br />
        Owner: <T>{legal.owner}</T>
        <br />
        <T>{legal.legalForm}</T>
        <br />
        <T>{legal.street}</T>
        <br />
        <T>{legal.zipCity}</T>
        <br />
        Spain
      </address>

      <h2>Contact</h2>
      <p>
        Phone / WhatsApp: <a href={site.phoneHref}>{site.phoneDisplay}</a>
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>Tax details</h2>
      <p>
        NIF / NIE: <T>{legal.taxId}</T>
        <br />
        VAT identification number: <T>{legal.vatId}</T>
      </p>

      <h2>Register entry</h2>
      <p>
        <T>{legal.register}</T>
      </p>

      <h2>Responsible for content</h2>
      <p>
        <T>{legal.owner}</T>, address as above.
      </p>

      <h2>Consumer dispute resolution</h2>
      <p>
        We are neither willing nor obliged to take part in dispute resolution
        proceedings before a consumer arbitration board.
      </p>

      <h2>Liability for content</h2>
      <p>
        The content of this website has been prepared with the greatest care.
        However, we cannot guarantee that it is accurate, complete or up to
        date. Prices and availability are subject to change; the respective
        booking confirmation is decisive.
      </p>

      <h2>Liability for links</h2>
      <p>
        This website contains links to external third-party services (for
        example WhatsApp). We have no influence over their content; the
        respective provider is always responsible for it. If we become aware of
        any infringement, we will remove the links concerned without delay.
      </p>

      <h2>Copyright</h2>
      <p>
        The texts, logo and design of this website are protected by copyright.
        Any use outside this website requires our prior written consent.
      </p>

      <p className="muted small">Last updated: {legal.lastUpdatedEn}</p>
    </article>
  );
}
