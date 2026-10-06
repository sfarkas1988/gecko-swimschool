import { site } from "@/lib/site";
import { routes, type Lang } from "@/lib/routes";
import { texts } from "@/lib/texts";

export default function Footer({ lang }: { lang: Lang }) {
  const t = texts[lang].footer;

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/gecko-mark.png" alt="" width={56} height={37} />
          <span>{site.name}</span>
        </div>
        <nav aria-label={t.navLabel} className="footer-nav">
          <a href={routes.imprint[lang]}>{t.imprint}</a>
          <a href={routes.privacy[lang]}>{t.privacy}</a>
        </nav>
        <p className="muted">
          © {new Date().getFullYear()} Gecko Swimschool – {site.location}
        </p>
      </div>
    </footer>
  );
}
