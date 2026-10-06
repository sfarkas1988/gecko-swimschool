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
Danach unter _Settings → Domains_ `gecko-swimschool.com` hinzufügen und die angezeigten DNS-Einträge bei deinem Domain-Anbieter eintragen.

**Netlify / Cloudflare Pages:** Build-Befehl `npm run build`, Ausgabeordner `out`.

**Klassischer Webspace (IONOS, Strato …):** `npm run build` ausführen und den Inhalt von `out/` per FTP hochladen.

> Achtung beim Domain-Umzug: E-Mail-Einträge (MX-Records) für info@gecko-swimschool.com nicht löschen.

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

## Sprachen

Die Website gibt es auf Deutsch (`/`) und Englisch (`/en/`). Wer einen Text ändert, ändert ihn bitte **in beiden Sprachen** – auf der Startseite in `lib/texts/de.ts` und `lib/texts/en.ts`, bei den Rechtstexten in beiden Seiten-Dateien. Spanisch ist vorerst ausgeblendet.

## Später geplant

Buchungssystem mit Zahlung, Kontaktformular (Resend), Spanisch, Instagram.
