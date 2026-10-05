import { site } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const nav = [
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#angebote", label: "Angebote" },
  { href: "/#preise", label: "Preise" },
  { href: "/#team", label: "Team" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand" aria-label="Gecko Swimschool – zur Startseite">
          <img src="/gecko-mark.png" alt="" width={64} height={42} />
          <span>Gecko</span>
        </a>

        <nav aria-label="Hauptnavigation" className="main-nav">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div role="group" aria-label="Sprache" className="lang-switch">
            <button type="button" aria-pressed="true" className="is-active">
              DE
            </button>
            <button type="button" disabled title="Bald verfügbar">
              EN
            </button>
            <button type="button" disabled title="Bald verfügbar">
              ES
            </button>
          </div>
          <a href={site.whatsappHref} className="btn btn-dark btn-sm" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
