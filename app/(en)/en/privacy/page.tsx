import type { Metadata } from "next";
import { alternates, routes } from "@/lib/routes";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: true, follow: true },
  alternates: alternates("privacy", "en"),
};

// Englische Fassung von app/(de)/datenschutz/page.tsx – Änderungen bitte in beiden Dateien.
// Rosa hinterlegte Angaben sind Platzhalter – vor dem Livegang ausfüllen.
const T = ({ children }: { children: React.ReactNode }) => (
  <span className="todo">{children}</span>
);

export default function Privacy() {
  return (
    <article className="container legal">
      <h1>Privacy policy</h1>
      <p className="muted">
        Information pursuant to Art. 13 of the General Data Protection
        Regulation (GDPR) and the Spanish data protection act (LOPDGDD)
      </p>
      <p className="muted small">
        This English version is a translation provided for your convenience. In
        case of doubt, the{" "}
        <a href={routes.privacy.de} hrefLang="de">
          German version
        </a>{" "}
        applies.
      </p>

      <h2>1. Controller</h2>
      <address>
        {site.name}
        <br />
        {legal.owner.startsWith("[") ? <T>{legal.owner}</T> : legal.owner}
        <br />
        {legal.street.startsWith("[") ? <T>{legal.street}</T> : legal.street}
        <br />
        {legal.zipCity}, Spain
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Phone: <a href={site.phoneHref}>{site.phoneDisplay}</a>
      </address>

      <h2>2. The key points in brief</h2>
      <ul>
        <li>We do not use cookies, analytics or tracking tools.</li>
        <li>
          Fonts are loaded from our own server – there is no connection to
          Google.
        </li>
        <li>
          We only process personal data if you contact us of your own accord
          (email, phone, WhatsApp).
        </li>
        <li>
          We never publish photos or names of your children without your express
          written consent.
        </li>
      </ul>

      <h2>3. Hosting and server log files</h2>
      <p>
        This website is hosted by{" "}
        <T>
          [HOSTING PROVIDER, company name and address, e.g. Vercel Inc., USA]
        </T>
        . When you visit the website, the hosting provider automatically
        processes technical data transmitted by your browser (so-called server
        log files):
      </p>
      <ul>
        <li>IP address</li>
        <li>date and time of access</li>
        <li>page visited and amount of data transferred</li>
        <li>browser type, operating system and referrer URL</li>
      </ul>
      <p>
        This processing is necessary to deliver the website securely and
        reliably. The legal basis is our legitimate interest under Art. 6(1)(f)
        GDPR. We have concluded a data processing agreement with the hosting
        provider in accordance with Art. 28 GDPR.{" "}
        <T>
          [If the provider is outside the EU: note on data transfers, e.g. EU-US
          Data Privacy Framework or standard contractual clauses]
        </T>
        . The log files are deleted after <T>[X days]</T>.
      </p>

      <h2>4. Contact by email and phone</h2>
      <p>
        If you contact us by email or phone, we process the details you provide
        (for example name, contact details, location, your child’s age, the
        lessons you are interested in) in order to answer your enquiry and plan
        the lessons. The legal basis is Art. 6(1)(b) GDPR (steps prior to
        entering into a contract or performance of a contract) and Art. 6(1)(f)
        GDPR (answering general enquiries).
      </p>
      <p>
        We delete your data as soon as it is no longer needed for this purpose.
        Statutory retention periods apply to invoices and accounting records.
      </p>

      <h2>5. Contact via WhatsApp</h2>
      <p>
        Our website links to WhatsApp. WhatsApp is only opened once you click a
        WhatsApp button. The provider in the EU is WhatsApp Ireland Limited,
        Merrion Road, Dublin 4, D04 X2K5, Ireland. A transfer of data to the
        parent company Meta Platforms Inc. in the USA cannot be ruled out.
      </p>
      <p>
        If you write to us via WhatsApp, we process your phone number, your
        profile name and the content of your messages in order to answer your
        enquiry. The legal basis is Art. 6(1)(b) GDPR or your consent under Art.
        6(1)(a) GDPR, which you give by contacting us. If you prefer not to use
        WhatsApp, you can reach us by email or phone at any time. You can find
        further information in the{" "}
        <a
          href="https://www.whatsapp.com/legal/privacy-policy-eea"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp privacy policy
        </a>
        .
      </p>

      <h2>6. Fonts</h2>
      <p>
        The fonts used on this website (Montserrat, Literata) are hosted locally
        on our server. When you visit the site, no connection is made to servers
        of Google or other third parties.
      </p>

      <h2>7. Cookies and analytics</h2>
      <p>
        This website does not use cookies or any tools for audience measurement
        or advertising. Should this change, we will update this policy and –
        where required – obtain your consent beforehand.
      </p>

      <h2>8. Your rights</h2>
      <p>You have the right at any time to:</p>
      <ul>
        <li>access the data we hold about you (Art. 15 GDPR)</li>
        <li>have inaccurate data corrected (Art. 16 GDPR)</li>
        <li>have your data erased (Art. 17 GDPR)</li>
        <li>have processing restricted (Art. 18 GDPR)</li>
        <li>data portability (Art. 20 GDPR)</li>
        <li>
          object to processing based on legitimate interests (Art. 21 GDPR)
        </li>
        <li>
          withdraw consent you have given, with effect for the future (Art. 7(3)
          GDPR)
        </li>
      </ul>
      <p>
        An informal message to <a href={`mailto:${site.email}`}>{site.email}</a>{" "}
        is all it takes.
      </p>

      <h2>9. Right to lodge a complaint with a supervisory authority</h2>
      <p>
        You can lodge a complaint with a data protection supervisory authority.
        The authority responsible for us is the Agencia Española de Protección
        de Datos (AEPD), C/ Jorge Juan 6, 28001 Madrid,{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        . You can also contact the supervisory authority where you live.
      </p>

      <h2>10. Data security</h2>
      <p>
        For security reasons, this website uses SSL/TLS encryption. You can
        recognise an encrypted connection by “https://” in your browser’s
        address bar.
      </p>

      <p className="muted small">Last updated: {legal.lastUpdatedEn}</p>
    </article>
  );
}
