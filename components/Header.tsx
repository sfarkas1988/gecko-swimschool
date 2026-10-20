import { eventClass } from "@/lib/analytics";
import { site } from "@/lib/site";
import { routes, type Lang } from "@/lib/routes";
import { texts } from "@/lib/texts";
import { WhatsAppIcon } from "./Icons";
import LangSwitch from "./LangSwitch";

export default function Header({ lang }: { lang: Lang }) {
  const t = texts[lang].header;
  const home = routes.home[lang];
  const nav = [
    { href: `${home}#ueber-uns`, label: t.nav.about, target: "about" },
    { href: `${home}#angebote`, label: t.nav.offers, target: "offers" },
    { href: `${home}#preise`, label: t.nav.prices, target: "prices" },
    { href: `${home}#team`, label: t.nav.team, target: "team" },
    { href: `${home}#bewertungen`, label: t.nav.reviews, target: "reviews" },
    { href: `${home}#kontakt`, label: t.nav.contact, target: "contact" },
  ] as const;

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={home} className="brand" aria-label={t.homeLabel}>
          <img src="/gecko-mark.png" alt="" width={64} height={42} />
        </a>

        <nav aria-label={t.navLabel} className="main-nav">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={eventClass("Click Section Link", {
                target: item.target,
                position: "header",
              })}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LangSwitch lang={lang} label={t.langLabel} />
          <a
            href={site.whatsappHref}
            className={`btn btn-dark btn-sm ${eventClass("Click WhatsApp", { position: "header" })}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
