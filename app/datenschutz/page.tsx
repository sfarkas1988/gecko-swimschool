import type { Metadata } from "next";
import { legal, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: true, follow: true },
};

// Rosa hinterlegte Angaben sind Platzhalter – vor dem Livegang ausfüllen.
const T = ({ children }: { children: React.ReactNode }) => <span className="todo">{children}</span>;

export default function Datenschutz() {
  return (
    <article className="container legal">
      <h1>Datenschutzerklärung</h1>
      <p className="muted">
        Informationen nach Art. 13 der Datenschutz-Grundverordnung (DSGVO) und dem spanischen Datenschutzgesetz
        (LOPDGDD)
      </p>

      <h2>1. Verantwortlicher</h2>
      <address>
        {site.name}
        <br />
        {legal.owner.startsWith("[") ? <T>{legal.owner}</T> : legal.owner}
        <br />
        {legal.street.startsWith("[") ? <T>{legal.street}</T> : legal.street}
        <br />
        {legal.zipCity}, {legal.country}
        <br />
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Telefon: <a href={site.phoneHref}>{site.phoneDisplay}</a>
      </address>

      <h2>2. Das Wichtigste in Kürze</h2>
      <ul>
        <li>Wir setzen keine Cookies, keine Analyse- und keine Tracking-Tools ein.</li>
        <li>Schriftarten werden von unserem eigenen Server geladen – es besteht keine Verbindung zu Google.</li>
        <li>
          Personenbezogene Daten verarbeiten wir nur, wenn Sie uns von sich aus kontaktieren (E-Mail, Telefon,
          WhatsApp).
        </li>
        <li>Fotos oder Namen Ihrer Kinder veröffentlichen wir nie ohne Ihre ausdrückliche, schriftliche Zustimmung.</li>
      </ul>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei <T>[HOSTING-ANBIETER, Firmenname und Anschrift, z. B. Vercel Inc., USA]</T> betrieben.
        Beim Aufruf der Website verarbeitet der Hosting-Anbieter automatisch technische Daten, die Ihr Browser übermittelt
        (sogenannte Server-Logfiles):
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite und übertragene Datenmenge</li>
        <li>Browsertyp, Betriebssystem und Referrer-URL</li>
      </ul>
      <p>
        Die Verarbeitung ist erforderlich, um die Website sicher und stabil auszuliefern. Rechtsgrundlage ist unser
        berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Mit dem Hosting-Anbieter besteht ein Vertrag zur
        Auftragsverarbeitung nach Art. 28 DSGVO. <T>[Falls Anbieter außerhalb der EU: Hinweis auf Datenübermittlung,
        z. B. EU-US Data Privacy Framework bzw. Standardvertragsklauseln]</T>. Die Logfiles werden nach{" "}
        <T>[X Tagen]</T> gelöscht.
      </p>

      <h2>4. Kontaktaufnahme per E-Mail und Telefon</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, Kontaktdaten, Ort,
        Alter Ihres Kindes, Wunschangebot), um Ihre Anfrage zu beantworten und den Unterricht zu planen. Rechtsgrundlage
        ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung bzw. Durchführung eines Vertrags) sowie Art. 6 Abs. 1 lit. f DSGVO
        (Beantwortung allgemeiner Anfragen).
      </p>
      <p>
        Ihre Daten löschen wir, sobald sie für diesen Zweck nicht mehr erforderlich sind. Für Rechnungs- und
        Buchhaltungsunterlagen gelten gesetzliche Aufbewahrungsfristen.
      </p>

      <h2>5. Kontaktaufnahme per WhatsApp</h2>
      <p>
        Auf unserer Website verlinken wir auf WhatsApp. Erst wenn Sie einen WhatsApp-Button anklicken, wird WhatsApp
        geöffnet. Anbieter in der EU ist die WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Eine
        Übermittlung von Daten an die Muttergesellschaft Meta Platforms Inc. in den USA kann dabei nicht ausgeschlossen
        werden.
      </p>
      <p>
        Wenn Sie uns über WhatsApp schreiben, verarbeiten wir Ihre Telefonnummer, Ihren Profilnamen und den Inhalt Ihrer
        Nachrichten, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bzw. Ihre
        Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie durch die Kontaktaufnahme erteilen. Wer WhatsApp nicht nutzen
        möchte, erreicht uns jederzeit per E-Mail oder Telefon. Weitere Informationen finden Sie in der{" "}
        <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
          Datenschutzrichtlinie von WhatsApp
        </a>
        .
      </p>

      <h2>6. Schriftarten</h2>
      <p>
        Die auf dieser Website verwendeten Schriftarten (Montserrat, Literata) sind lokal auf unserem Server eingebunden.
        Beim Aufruf der Seite wird keine Verbindung zu Servern von Google oder anderen Drittanbietern hergestellt.
      </p>

      <h2>7. Cookies und Analyse</h2>
      <p>
        Diese Website verwendet keine Cookies und keine Werkzeuge zur Reichweitenmessung oder Werbung. Sollte sich das
        ändern, passen wir diese Erklärung an und holen – wo erforderlich – vorher Ihre Einwilligung ein.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21 DSGVO)</li>
        <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Eine formlose Nachricht an <a href={`mailto:${site.email}`}>{site.email}</a> genügt.
      </p>

      <h2>9. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist die Agencia Española de
        Protección de Datos (AEPD), C/ Jorge Juan 6, 28001 Madrid,{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        . Sie können sich auch an die Aufsichtsbehörde Ihres Wohnorts wenden.
      </p>

      <h2>10. Datensicherheit</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
        erkennen Sie an „https://“ in der Adresszeile Ihres Browsers.
      </p>

      <p className="muted small">Stand: {legal.lastUpdated}</p>
    </article>
  );
}
