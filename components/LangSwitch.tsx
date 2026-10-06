"use client";

import { usePathname } from "next/navigation";
import { routes, type Lang } from "@/lib/routes";

// Spanisch ist vorerst ausgeblendet. Zum Einschalten hier "es" ergänzen
// (und die spanischen Seiten und Texte anlegen, siehe lib/routes.ts).
const languages: Lang[] = ["de", "en"];

const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

export default function LangSwitch({
  lang,
  label,
}: {
  lang: Lang;
  label: string;
}) {
  const pathname = withSlash(usePathname());
  // Dieselbe Seite in der anderen Sprache – sonst die Startseite.
  const page =
    Object.values(routes).find((r) => r[lang] === pathname) ?? routes.home;

  return (
    <div role="group" aria-label={label} className="lang-switch">
      {languages.map((l) => (
        <a
          key={l}
          href={page[l]}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? "true" : undefined}
          className={l === lang ? "is-active" : undefined}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
