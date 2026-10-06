import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/gecko-mark.png" alt="" width={56} height={37} />
          <span>{site.name}</span>
        </div>
        <nav aria-label="Rechtliches" className="footer-nav">
          <a href="/impressum/">Impressum</a>
          <a href="/datenschutz/">Datenschutz</a>
        </nav>
        <p className="muted">
          © {new Date().getFullYear()} Gecko Swimschool – {site.location}
        </p>
      </div>
    </footer>
  );
}
