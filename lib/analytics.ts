// Besucherstatistik mit Plausible (ohne Cookies, auf eigenem Server).
// Hier stehen alle Ereignisse, die gezählt werden. Neue Ereignisse nur hier ergänzen
// und denselben Namen in Plausible als „Goal“ anlegen – sonst tauchen sie dort nicht auf.
// Namen nie umbenennen: Plausible sieht sonst ein neues Ereignis und die alte Statistik reißt ab.

export const analytics = {
  script: "https://analytics.mallorca-plus.de/js/pa-IYYHWzLx03pYDc4B71c0w.js",
  // Nur auf diesen Adressen wird gezählt – nicht lokal und nicht in Vorschau-Versionen.
  hosts: ["gecko-swimschool-mallorca.com", "www.gecko-swimschool-mallorca.com"],
};

export type PackageId = "3" | "5" | "10" | "15";

// Ereignis-Name → erlaubte Zusatzangaben. Nur feste Werte, nie Namen, Telefonnummern o. Ä.
type Events = {
  "Click WhatsApp": {
    position: "header" | "price_card" | "contact";
    package?: PackageId;
  };
  "Click Phone": { position: "contact" };
  "Click Email": { position: "contact" };
  "Click Section Link": {
    target: "about" | "offers" | "prices" | "team" | "reviews" | "contact";
    position: "header" | "hero" | "courses";
  };
  "Switch Language": { to: "de" | "en" };
  "View Prices": undefined;
  "View Contact": undefined;
  "404": { path: string };
};

export type EventName = keyof Events;

type Args<N extends EventName> = Events[N] extends undefined
  ? []
  : [props: Events[N]];

type Plausible = (name: string, options?: { props?: object }) => void;

// Ereignis aus dem Code heraus senden. Ist das Script blockiert (z. B. Adblocker), passiert einfach nichts.
export function trackEvent<N extends EventName>(name: N, ...[props]: Args<N>) {
  const plausible = (window as { plausible?: Plausible }).plausible;
  if (typeof plausible !== "function") return;
  try {
    plausible(name, props ? { props } : undefined);
  } catch {
    // Statistik darf die Seite nie stören.
  }
}

// Für einfache Klicks: CSS-Klassen, die Plausible selbst erkennt – so braucht der Button kein JavaScript.
export function eventClass<N extends EventName>(name: N, ...[props]: Args<N>) {
  const encode = (value: string) => value.replace(/ /g, "+");
  const classes = [`plausible-event-name=${encode(name)}`];
  for (const [key, value] of Object.entries(props ?? {})) {
    if (value !== undefined) {
      classes.push(`plausible-event-${key}=${encode(String(value))}`);
    }
  }
  return classes.join(" ");
}

// Wird ganz oben in jede Seite geschrieben. Legt eine Warteschlange an, damit Ereignisse
// nicht verloren gehen, bevor das Script geladen ist, und startet die Zählung nur auf der echten Seite.
export const plausibleInit = `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};if(${JSON.stringify(analytics.hosts)}.indexOf(location.hostname)>-1)plausible.init()`;
