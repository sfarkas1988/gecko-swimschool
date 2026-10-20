# Gecko Swimschool Mallorca – Website (v0.1)

Next.js 15 (App Router) als **statischer Export** – keine Server-Funktionen nötig.

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # erzeugt den Ordner "out" mit der fertigen Website
```

## Automatische Prüfungen

Nach einmaligem `npm install` läuft alles von selbst – auch in GitHub Desktop:

- **Beim Commit** werden die geänderten Dateien automatisch einheitlich formatiert (Prettier).
- **Beim Push** wird geprüft, ob sich die Website bauen lässt. Das dauert etwa eine Minute. Schlägt die Prüfung fehl, wird nichts hochgeladen – dann Claude bitten: „Der Build schlägt fehl, bitte beheben.“
- **Auf GitHub** läuft dieselbe Prüfung noch einmal als Sicherheitsnetz (Reiter _Actions_).

## Online stellen

**Vercel (empfohlen):** Projekt auf GitHub hochladen → auf vercel.com „Add New Project“ → Repository wählen → Deploy.
Danach unter _Settings → Domains_ `www.gecko-swimschool-mallorca.com` hinzufügen und die angezeigten DNS-Einträge bei deinem Domain-Anbieter eintragen.

**Netlify / Cloudflare Pages:** Build-Befehl `npm run build`, Ausgabeordner `out`.

**Klassischer Webspace (IONOS, Strato …):** `npm run build` ausführen und den Inhalt von `out/` per FTP hochladen.

> Die E-Mail-Adresse info@gecko-swimschool.com läuft über die Domain gecko-swimschool.com (Google-Postfach), nicht über die Website-Domain. Deren E-Mail-Einträge (MX-Records) nicht löschen.

## Vor dem Livegang ausfüllen

- `lib/site.ts` → Block `legal`: Name, Rechtsform, Anschrift, NIF/NIE, ggf. USt-IdNr. und Registereintrag
- `app/datenschutz/page.tsx` → Hosting-Anbieter und Speicherdauer der Logfiles
- `app/page.tsx` → Fahrtkosten-Pauschale, echte Bewertungen, Teamfotos
- Rechtstexte von Gestor / Anwalt prüfen lassen

Rosa hinterlegter Text auf Impressum und Datenschutz = noch offener Platzhalter.

## Wo was liegt

| Datei                                          | Inhalt                                             |
| ---------------------------------------------- | -------------------------------------------------- |
| `lib/site.ts`                                  | Telefon, E-Mail, WhatsApp, Pflichtangaben          |
| `lib/texts/de.ts`, `lib/texts/en.ts`           | Alle Texte der Startseite, Menü, Fußzeile (DE, EN) |
| `components/HomePage.tsx`                      | Aufbau der Startseite (alle Abschnitte)            |
| `app/globals.css`                              | Farben (`:root`), Layout, Mobil-Ansicht            |
| `app/(de)/impressum/`, `app/(de)/datenschutz/` | Rechtstexte (deutsch)                              |
| `app/(en)/en/imprint/`, `app/(en)/en/privacy/` | Rechtstexte (englisch)                             |
| `lib/routes.ts`, `components/LangSwitch.tsx`   | Sprachen und Adressen der Seiten                   |
| `public/`                                      | Logo-Dateien                                       |

## Besucherstatistik (Plausible)

Die Seite zählt Besucher mit Plausible auf [analytics.mallorca-plus.de](https://analytics.mallorca-plus.de) – ohne Cookies, daher ohne Cookie-Banner. Gezählt wird nur auf der echten Website, nicht lokal und nicht in Vorschau-Versionen.

Alle Ereignisse (z. B. „Click WhatsApp“) stehen in `lib/analytics.ts`. Regeln:

- Namen englisch, Wörter groß, Verb + Gegenstand (`Click Phone`, `View Prices`). Einmal vergebene Namen nie ändern, sonst reißt die Statistik ab.
- Zusatzangaben nur aus festen Werten (z. B. `position: header`), nie Namen, Telefonnummern oder Freitext.
- Neues Ereignis: in `lib/analytics.ts` eintragen, am Button `eventClass(...)` setzen (oder `trackEvent(...)` aufrufen) und den Namen in Plausible unter _Site Settings → Goals_ als **Custom Event** anlegen. Ohne Goal kommt das Ereignis an, erscheint aber nicht in der Übersicht.
- Wird etwas Neues erfasst, die Datenschutzerklärung (Abschnitt 7, beide Sprachen) anpassen.

## Sprachen

Die Website gibt es auf Deutsch (`/`) und Englisch (`/en/`). Wer einen Text ändert, ändert ihn bitte **in beiden Sprachen** – auf der Startseite in `lib/texts/de.ts` und `lib/texts/en.ts`, bei den Rechtstexten in beiden Seiten-Dateien. Spanisch ist vorerst ausgeblendet.

## Später geplant

Buchungssystem mit Zahlung, Kontaktformular (Resend), Spanisch, Instagram.
