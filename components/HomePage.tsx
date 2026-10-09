import { Fragment } from "react";
import { site } from "@/lib/site";
import type { Texts } from "@/lib/texts";
import {
  ArrowDownIcon,
  CheckIcon,
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

// Gleiche Reihenfolge wie trust.values in lib/texts.
const valueIcons = [
  <ShieldIcon key="shield" />,
  <WavesIcon key="waves" />,
  <LockIcon key="lock" />,
  <ClockIcon key="clock" />,
];

// Die Startseite – die Texte kommen je nach Sprache aus lib/texts/de.ts oder en.ts.
export default function HomePage({ t }: { t: Texts }) {
  return (
    <>
      {/* Hero */}
      <section id="top" className="hero">
        <div className="hero-text">
          <h1>
            {t.hero.title.map((part) => (
              <Fragment key={part}>
                <span>{part}</span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <a href="#ueber-uns" className="btn btn-dark btn-lg hero-cta">
            {t.hero.cta}
            <ArrowDownIcon />
          </a>
          <ul className="hero-facts">
            {t.hero.facts.map((fact) => (
              <li key={fact}>
                <CheckIcon />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-logo">
          <img
            src="/gecko-logo.png"
            alt={t.hero.logoAlt}
            width={686}
            height={765}
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="container section split">
        <h2 className="h2">{t.about.title}</h2>
        <div className="stack prose">
          <p className="lead">{t.about.lead}</p>
          <p>{t.about.text}</p>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="deep" aria-labelledby="vertrauen-titel">
        <svg
          className="wave wave-top"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 48 C 120 16, 240 16, 360 48 S 600 80, 720 48 S 960 16, 1080 48 S 1320 80, 1440 48 L1440 80 L0 80 Z" />
        </svg>
        <div className="container deep-inner">
          <div className="split split-end">
            <h2 id="vertrauen-titel" className="h2 h2-xl accent">
              {t.trust.title}
            </h2>
            <p className="deep-lead">{t.trust.lead}</p>
          </div>
          <div className="values">
            {t.trust.values.map((v, i) => (
              <div key={v.title} className="value">
                <span className="accent">{valueIcons[i]}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
        <svg
          className="wave wave-bottom"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 32 C 120 64, 240 64, 360 32 S 600 0, 720 32 S 960 64, 1080 32 S 1320 0, 1440 32 L1440 0 L0 0 Z" />
        </svg>
      </section>

      {/* Angebote */}
      <section
        id="angebote"
        className="container section section-after-deep stack-lg"
      >
        <div className="section-head">
          <h2 className="h2">{t.offers.title}</h2>
          <p className="muted">{t.offers.lead}</p>
        </div>
        <div className="grid-3">
          <div className="place place-active">
            <span className="accent">
              <HomeIcon />
            </span>
            <h3>{t.offers.home.title}</h3>
            <p>{t.offers.home.text}</p>
            <span className="tag tag-accent">{t.offers.available}</span>
          </div>
          <div className="place">
            <span className="muted">
              <PoolIcon />
            </span>
            <h3>{t.offers.pool.title}</h3>
            <p className="muted">{t.offers.pool.text}</p>
            <span className="tag tag-outline">{t.offers.soon}</span>
          </div>
          <div className="place">
            <span className="muted">
              <SeaIcon />
            </span>
            <h3>{t.offers.sea.title}</h3>
            <p className="muted">{t.offers.sea.text}</p>
            <span className="tag tag-outline">{t.offers.soon}</span>
          </div>
        </div>
      </section>

      {/* Kurse */}
      <section
        className="container section-tight stack-lg"
        aria-labelledby="kurse-titel"
      >
        <div className="section-head">
          <h2 id="kurse-titel" className="h2">
            {t.courses.title}
          </h2>
          <p className="muted">{t.courses.lead}</p>
        </div>
        <ol className="steps">
          {t.courses.steps.map((s, i) => (
            <li key={s.title}>
              <span className="step-no">{i + 1}</span>
              <h3>{s.title}</h3>
              <p className="muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="extra">
          <div className="stack-sm">
            <h3>{t.courses.mermaidTitle}</h3>
            <p className="muted">{t.courses.mermaidText}</p>
          </div>
          <a href="#kontakt" className="btn btn-outline">
            {t.courses.more}
          </a>
        </div>
      </section>

      {/* Abzeichen */}
      <section
        className="container section-bottom"
        aria-labelledby="abzeichen-titel"
      >
        <div className="badges">
          <div className="stack">
            <h2 id="abzeichen-titel" className="h2 h2-sm">
              {t.badges.title}
            </h2>
            <p>{t.badges.text}</p>
            <p className="fee">{t.badges.fee}</p>
          </div>
          <div>
            <div className="badge-group badge-group-first">
              <h3>{t.badges.germanTitle}</h3>
              <ul className="pills">
                {t.badges.germanList.map((badge) => (
                  <li key={badge}>{badge}</li>
                ))}
              </ul>
              <p className="small">{t.badges.germanBy}</p>
            </div>
            <div className="badge-group">
              <h3>{t.badges.swissTitle}</h3>
              <p>{t.badges.swissText}</p>
              <p className="small">{t.badges.swissBy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="container section-bottom stack-lg">
        <div className="section-head section-head-row">
          <div className="stack-sm">
            <h2 className="h2">{t.prices.title}</h2>
            <p className="muted">{t.prices.lead}</p>
          </div>
          <p className="label">{t.prices.valid}</p>
        </div>
        <div className="price-grid">
          {t.prices.cards.map((c) => (
            <div key={c.name} className="price-card">
              <h3>{c.name}</h3>
              <p className="price">{c.price}</p>
              <p className="muted">{c.perLesson}</p>
              <p className="saving">{c.saving}</p>
              <a
                href={site.whatsappHref}
                className="btn btn-outline btn-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="split">
          <dl className="extras">
            <div>
              <dt>{t.prices.extraChild}</dt>
              <dd>{t.prices.extraChildPrice}</dd>
            </div>
            <div>
              <dt>{t.prices.badge}</dt>
              <dd>{t.prices.badgePrice}</dd>
            </div>
            <div>
              <dt>
                {t.prices.travel}
                <br />
                <span className="small muted">{t.prices.travelNote}</span>
              </dt>
              <dd>{t.prices.travelPrice}</dd>
            </div>
          </dl>
          <div className="notice">
            <InfoIcon />
            <p>{t.prices.notice}</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="container section-bottom stack-lg">
        <h2 className="h2">{t.team.title}</h2>
        <div className="team">
          <article className="person">
            <img
              src="/richy.jpg"
              alt={t.team.richy.photoAlt}
              width={1126}
              height={2000}
              loading="lazy"
              className="person-photo"
            />
            <div className="stack-sm">
              <h3>Richy</h3>
              <p className="role">{t.team.richy.role}</p>
              <p>{t.team.richy.text}</p>
              <p className="small muted">{t.team.richy.badges}</p>
            </div>
          </article>
          <article className="person">
            <div
              role="img"
              aria-label={t.team.jelena.photoAlt}
              className="photo-placeholder"
            >
              {t.team.jelena.photoSoon}
            </div>
            <div className="stack-sm">
              <h3>Jelena</h3>
              <p className="role">{t.team.jelena.role}</p>
              <p>{t.team.jelena.text}</p>
              <p className="small muted">{t.team.jelena.badges}</p>
            </div>
          </article>
        </div>
      </section>

      {/* Bewertungen */}
      <section
        id="bewertungen"
        className="container section-bottom stack-lg"
        aria-labelledby="bewertungen-titel"
      >
        <div className="section-head">
          <h2 id="bewertungen-titel" className="h2">
            {t.reviews.title}
          </h2>
          <p className="muted">{t.reviews.lead}</p>
        </div>
        <div className="reviews">
          {t.reviews.items.map((r, i) => (
            <figure key={i} className="review">
              <Stars count={5} />
              <blockquote>
                {t.reviews.quoteOpen}
                {r.text}
                {t.reviews.quoteClose}
              </blockquote>
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
            <h2 className="h2 accent">{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <a
              href={site.whatsappHref}
              className="btn btn-accent btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              {t.contact.whatsapp}
            </a>
            <dl className="contact-list">
              <div>
                <dt>{t.contact.phone}</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>{t.contact.base}</dt>
                <dd>{t.contact.baseText}</dd>
              </div>
            </dl>
          </div>
          <div className="mail-card">
            <MailIcon size={36} />
            <h3>{t.contact.mailTitle}</h3>
            <p>{t.contact.mailText}</p>
            <a href={`mailto:${site.email}`} className="mail-link">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
