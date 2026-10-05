import { site } from "@/lib/site";
import {
  ClockIcon,
  HomeIcon,
  InfoIcon,
  LockIcon,
  MailIcon,
  PoolIcon,
  SeaIcon,
  ShieldIcon,
  Stars,
  WavesIcon,
  WhatsAppIcon,
} from "@/components/Icons";

const values = [
  {
    icon: <ShieldIcon />,
    title: "Sicherheit zuerst",
    text: "Jede Stunde beginnt mit einem Blick auf Wasser, Umgebung und Tagesform Ihres Kindes. Erst dann geht es los.",
  },
  {
    icon: <WavesIcon />,
    title: "Ruhe, die ansteckt",
    text: "Kinder lernen nicht unter Druck. Wir geben ihnen Zeit, Halt und Zutrauen – Schritt für Schritt.",
  },
  {
    icon: <LockIcon />,
    title: "Diskretion",
    text: "Wir arbeiten in Ihrem privaten Umfeld. Keine Fotos, keine Namen, keine Weitergabe – ohne Ihre ausdrückliche Zustimmung.",
  },
  {
    icon: <ClockIcon />,
    title: "Verlässlichkeit",
    text: "Pünktlich, vorbereitet, mit klarer Absprache. Sie wissen immer, wer kommt und was geplant ist.",
  },
];

const steps = [
  { title: "Babyschwimmen", text: "Gemeinsam mit Mama oder Papa das Wasser entdecken – mit Nähe und viel Spiel." },
  { title: "Wassergewöhnung", text: "Gesicht ins Wasser, tauchen, gleiten, springen: Vertrauen statt Angst." },
  { title: "Seepferdchen", text: "Gezielte Vorbereitung auf das erste Abzeichen – Prüfung direkt bei Ihnen am Pool." },
  { title: "Freischwimmer", text: "Bronze, Silber und Gold: Ausdauer, Technik und Sicherheit in tiefem Wasser." },
];

const cards = [
  { name: "3er-Karte", price: "270 €", perLesson: "90 € pro Lektion", saving: "" },
  { name: "5er-Karte", price: "420 €", perLesson: "84 € pro Lektion", saving: "Sie sparen 30 €" },
  { name: "10er-Karte", price: "790 €", perLesson: "79 € pro Lektion", saving: "Sie sparen 110 €" },
  { name: "15er-Karte", price: "1.110 €", perLesson: "74 € pro Lektion", saving: "Sie sparen 240 €" },
];

// Platzhalter – bitte nur durch echte Bewertungen (mit Einverständnis der Familien) ersetzen.
const reviews = [1, 2, 3, 4].map((n) => ({
  text: `[Bewertungstext ${n} – hier steht die echte Bewertung einer Familie.]`,
  name: "[Familie M.]",
  place: "[Ort auf Mallorca]",
}));

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="top" className="hero">
        <div className="hero-text">
          <h1>Wo Vertrauen wächst, lernen Kinder schwimmen.</h1>
          <div className="btn-row">
            <a href={site.whatsappHref} className="btn btn-dark btn-lg" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Per WhatsApp anfragen
            </a>
            <a href="#preise" className="btn btn-outline btn-lg">
              Preise ansehen
            </a>
          </div>
          <p className="hero-note">Deutsche und Schweizer Schwimmabzeichen.</p>
        </div>
        <div className="hero-logo">
          <img
            src="/gecko-logo.png"
            alt="Gecko Swimschool Mallorca – Logo mit schwimmendem Gecko"
            width={686}
            height={765}
          />
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="container section split">
        <h2 className="h2">Wer wir sind</h2>
        <div className="stack prose">
          <p className="lead">
            Gecko ist eine mobile Schwimmschule für Kinder auf Mallorca. Wir kommen zu Ihnen an den eigenen Pool – mit
            allem, was Ihr Kind zum Lernen braucht.
          </p>
          <p>
            Hinter Gecko stehen Richy und Jelena, ein deutsch-schweizer Team mit Sitz in Portocolom. Wir unterrichten in
            Ruhe, in Ihrem vertrauten Umfeld und im Tempo Ihres Kindes. Am Ende steht, wenn Sie möchten, das passende
            Abzeichen – nach deutschem oder Schweizer Standard.
          </p>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="deep" aria-labelledby="vertrauen-titel">
        <svg className="wave wave-top" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 48 C 120 16, 240 16, 360 48 S 600 80, 720 48 S 960 16, 1080 48 S 1320 80, 1440 48 L1440 80 L0 80 Z" />
        </svg>
        <div className="container deep-inner">
          <div className="split split-end">
            <h2 id="vertrauen-titel" className="h2 h2-xl accent">
              Ruhe ist die beste Schwimmhilfe.
            </h2>
            <p className="deep-lead">
              Richy war zwölf Jahre Soldat in einer Spezialeinheit der Bundeswehr. Dort lernt man, in jeder Lage ruhig zu
              bleiben, Risiken früh zu erkennen und Verantwortung ernst zu nehmen. Genau das spüren Kinder im Wasser – und
              Eltern am Beckenrand.
            </p>
          </div>
          <div className="values">
            {values.map((v) => (
              <div key={v.title} className="value">
                <span className="accent">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
        <svg className="wave wave-bottom" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 32 C 120 64, 240 64, 360 32 S 600 0, 720 32 S 960 64, 1080 32 S 1320 0, 1440 32 L1440 0 L0 0 Z" />
        </svg>
      </section>

      {/* Angebote */}
      <section id="angebote" className="container section section-after-deep stack-lg">
        <div className="section-head">
          <h2 className="h2">Wo wir unterrichten</h2>
          <p className="muted">Heute kommen wir zu Ihnen nach Hause. Gruppenkurse und Unterricht im Meer folgen.</p>
        </div>
        <div className="grid-3">
          <div className="place place-active">
            <span className="accent">
              <HomeIcon />
            </span>
            <h3>Bei Ihnen zu Hause</h3>
            <p>Privater Einzelunterricht an Ihrem eigenen Pool – auf der ganzen Insel. Geschwister können mitmachen.</p>
            <span className="tag tag-accent">Jetzt buchbar</span>
          </div>
          <div className="place">
            <span className="muted">
              <PoolIcon />
            </span>
            <h3>Im Schwimmbad</h3>
            <p className="muted">Gruppenkurse in ausgewählten Schwimmbädern auf Mallorca.</p>
            <span className="tag tag-outline">Demnächst</span>
          </div>
          <div className="place">
            <span className="muted">
              <SeaIcon />
            </span>
            <h3>Im Meer</h3>
            <p className="muted">Open-Water-Unterricht direkt am Strand – für Kinder, die schon sicher im Pool schwimmen.</p>
            <span className="tag tag-outline">Demnächst</span>
          </div>
        </div>
      </section>

      {/* Kurse */}
      <section className="container section-tight stack-lg" aria-labelledby="kurse-titel">
        <div className="section-head">
          <h2 id="kurse-titel" className="h2">
            Vom ersten Planschen bis Gold
          </h2>
          <p className="muted">
            Jedes Kind steigt dort ein, wo es gerade steht. Wir begleiten es bis zum nächsten Abzeichen – und darüber
            hinaus.
          </p>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no">{i + 1}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="extra">
          <div className="stack-sm">
            <h3>Meerjungfrauenschwimmen</h3>
            <p className="muted">Mit Flosse durchs Wasser gleiten – spielerisch Kraft, Atmung und Körpergefühl aufbauen.</p>
          </div>
          <a href="#kontakt" className="btn btn-outline">
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Abzeichen */}
      <section className="container section-bottom" aria-labelledby="abzeichen-titel">
        <div className="badges">
          <div className="stack">
            <h2 id="abzeichen-titel" className="h2 h2-sm">
              Alle deutschen und Schweizer Schwimmabzeichen
            </h2>
            <p>
              Die Prüfung findet dort statt, wo Ihr Kind gelernt hat: bei Ihnen am Pool. Ganz ohne fremdes Becken und
              Prüfungsstress.
            </p>
            <p className="fee">Prüfungsgebühr: 15 € pro Abzeichen</p>
          </div>
          <div>
            <div className="badge-group badge-group-first">
              <h3>Deutsche Abzeichen</h3>
              <ul className="pills">
                <li>Seepferdchen</li>
                <li>Freischwimmer Bronze</li>
                <li>Freischwimmer Silber</li>
                <li>Freischwimmer Gold</li>
              </ul>
              <p className="small">Abgenommen von Richy</p>
            </div>
            <div className="badge-group">
              <h3>Schweizer Abzeichen</h3>
              <p>Alle Schweizer Schwimmabzeichen</p>
              <p className="small">Abgenommen von Jelena</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="container section-bottom stack-lg">
        <div className="section-head section-head-row">
          <div className="stack-sm">
            <h2 className="h2">Preise</h2>
            <p className="muted">Privater Einzelunterricht. Eine Lektion dauert 45 Minuten, inklusive Vor- und Nachbereitung.</p>
          </div>
          <p className="label">Gültig 2025/2026</p>
        </div>
        <div className="price-grid">
          {cards.map((c) => (
            <div key={c.name} className="price-card">
              <h3>{c.name}</h3>
              <p className="price">{c.price}</p>
              <p className="muted">{c.perLesson}</p>
              <p className="saving">{c.saving}</p>
              <a href={site.whatsappHref} className="btn btn-outline btn-block" target="_blank" rel="noopener noreferrer">
                {c.name} anfragen
              </a>
            </div>
          ))}
        </div>
        <div className="split">
          <dl className="extras">
            <div>
              <dt>Jedes weitere Kind</dt>
              <dd>+ 25 € pro Lektion</dd>
            </div>
            <div>
              <dt>Schwimmabzeichen</dt>
              <dd>15 € pro Prüfung</dd>
            </div>
            <div>
              <dt>
                An- und Abfahrt
                <br />
                <span className="small muted">ab Portocolom, nach Entfernung</span>
              </dt>
              <dd>[PAUSCHALE je nach Region]</dd>
            </div>
          </dl>
          <div className="notice">
            <InfoIcon />
            <p>
              Gebuchte Termine sind erst nach vollständigem Zahlungseingang verbindlich reserviert. Bis zur
              Buchungsbestätigung sind Termine freibleibend – die Verfügbarkeit kann sich jederzeit ändern.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container section-bottom stack-lg">
        <h2 className="h2">Ihre Schwimmlehrer</h2>
        <div className="team">
          <article className="person">
            <div role="img" aria-label="Foto von Richy folgt" className="photo-placeholder">
              Foto folgt
            </div>
            <div className="stack-sm">
              <h3>Richy</h3>
              <p className="role">Schwimmlehrer</p>
              <p>
                Zwölf Jahre Soldat in einer Spezialeinheit der Bundeswehr. Heute bringt er Kindern bei, sich im Wasser
                sicher zu fühlen – mit derselben Ruhe und Sorgfalt.
              </p>
              <p className="small muted">Nimmt alle deutschen Abzeichen ab: Seepferdchen, Freischwimmer Bronze, Silber und Gold.</p>
            </div>
          </article>
          <article className="person">
            <div role="img" aria-label="Foto von Jelena folgt" className="photo-placeholder">
              Foto folgt
            </div>
            <div className="stack-sm">
              <h3>Jelena</h3>
              <p className="role">Schwimmlehrerin</p>
              <p>
                Gebürtige Schweizerin mit einem großen Herz für Kinder. Am meisten freut sie sich, wenn sie sieht, wie
                Kinder im Wasser über sich hinauswachsen.
              </p>
              <p className="small muted">Nimmt alle Schweizer Schwimmabzeichen ab.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Bewertungen */}
      <section id="bewertungen" className="container section-bottom stack-lg" aria-labelledby="bewertungen-titel">
        <div className="section-head">
          <h2 id="bewertungen-titel" className="h2">
            Was Eltern sagen
          </h2>
          <p className="muted">Stimmen von Familien, die wir begleiten durften.</p>
        </div>
        <div className="reviews">
          {reviews.map((r, i) => (
            <figure key={i} className="review">
              <Stars count={5} />
              <blockquote>„{r.text}“</blockquote>
              <figcaption>
                <strong>{r.name}</strong>
                <span className="muted">{r.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="contact">
        <div className="container contact-inner">
          <div className="stack">
            <h2 className="h2 accent">Lassen Sie uns sprechen</h2>
            <p>
              Schreiben Sie uns, wo Sie auf Mallorca sind und wie alt Ihr Kind ist. Wir melden uns schnell mit freien
              Terminen.
            </p>
            <a href={site.whatsappHref} className="btn btn-accent btn-lg" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Per WhatsApp schreiben
            </a>
            <dl className="contact-list">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Sitz</dt>
                <dd>Portocolom, Mallorca – Unterricht auf der ganzen Insel</dd>
              </div>
            </dl>
          </div>
          <div className="mail-card">
            <MailIcon size={36} />
            <h3>Lieber per E-Mail?</h3>
            <p>Schicken Sie uns Ihre Anfrage mit Ort, Alter Ihres Kindes und Wunschangebot.</p>
            <a href={`mailto:${site.email}`} className="mail-link">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
