// Welche Seite es unter welcher Adresse in welcher Sprache gibt.
// Spanisch später hier ergänzen (z. B. es: "/es/") und in components/LangSwitch.tsx einschalten.
export type Lang = "de" | "en";

export const routes = {
  home: { de: "/", en: "/en/" },
  imprint: { de: "/impressum/", en: "/en/imprint/" },
  privacy: { de: "/datenschutz/", en: "/en/privacy/" },
};

export type Page = keyof typeof routes;

// Sagt Suchmaschinen, dass es dieselbe Seite auch in der anderen Sprache gibt.
export function alternates(page: Page, lang: Lang) {
  return {
    canonical: routes[page][lang],
    languages: {
      de: routes[page].de,
      en: routes[page].en,
      "x-default": routes[page].de,
    },
  };
}
